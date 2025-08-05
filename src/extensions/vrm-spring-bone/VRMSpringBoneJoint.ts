import * as pc from 'playcanvas';
import {
  localToWorld,
  Matrix4InverseCache,
  setFromUnitVectors,
  transformDirection,
} from '../../math-utils';
import { VRMSpringBoneJointSettings, VRMSpringBoneColliderGroup } from './vrm-spring-bone';
import { applyMatrix4 } from '../../math-utils';

export class VRMSpringBoneJoint {
  private _pcRef: typeof pc;
  private _v3A: pc.Vec3;
  private _v3B: pc.Vec3;
  private _nextTail: pc.Vec3;
  private _quatA: pc.Quat;
  private _quatB: pc.Quat;
  private _quatC: pc.Quat;
  private _quatD: pc.Quat;
  private _matA: pc.Mat4;
  private _matB: pc.Mat4;
  private _identityMat4: pc.Mat4;
  private _worldSpacePosition: pc.Vec3;

  public bone: pc.GraphNode;
  public child: pc.GraphNode | null;

  public id = crypto.randomUUID();

  /**
   * Settings of the bone.
   */
  public settings: VRMSpringBoneJointSettings;

  /**
   * Collider groups attached to this bone.
   */
  public colliderGroups: VRMSpringBoneColliderGroup[];

  private _initialLocalMatrix: pc.Mat4;
  private _initialLocalRotation: pc.Quat;
  private _initialLocalChildPosition: pc.Vec3;
  private _currentTail: pc.Vec3;
  private _prevTail: pc.Vec3;
  private _boneAxis: pc.Vec3;
  private _center: (pc.GraphNode & { userData: any }) | null = null;
  private _worldSpaceBoneLength = 0.0;

  constructor(
    pcRef: typeof pc,
    bone: pc.GraphNode,
    child: pc.GraphNode | null,
    settings: Partial<VRMSpringBoneJointSettings> = {},
    colliderGroups: VRMSpringBoneColliderGroup[] = [],
  ) {
    this._pcRef = pcRef;
    this._v3A = new this._pcRef.Vec3();
    this._v3B = new this._pcRef.Vec3();
    this._nextTail = new this._pcRef.Vec3();
    this._quatA = new this._pcRef.Quat();
    this._quatB = new this._pcRef.Quat();
    this._quatC = new this._pcRef.Quat();
    this._quatD = new this._pcRef.Quat();
    this._matA = new this._pcRef.Mat4();
    this._matB = new this._pcRef.Mat4();
    this._identityMat4 = new this._pcRef.Mat4();
    this._worldSpacePosition = new this._pcRef.Vec3();
    this._worldSpaceBoneLength = 0.0;

    this.bone = bone;
    this.child = child;

    this.settings = {
      hitRadius: settings.hitRadius ?? 0.0,
      stiffness: settings.stiffness ?? 1.0,
      gravityPower: settings.gravityPower ?? 0.0,
      gravityDir: settings.gravityDir?.clone() ?? new this._pcRef.Vec3(0.0, -1.0, 0.0),
      dragForce: settings.dragForce ?? 0.4,
    };

    this.colliderGroups = colliderGroups;

    this._initialLocalMatrix = new this._pcRef.Mat4();
    this._initialLocalRotation = new this._pcRef.Quat();
    this._initialLocalChildPosition = new this._pcRef.Vec3();
    this._currentTail = new this._pcRef.Vec3();
    this._prevTail = new this._pcRef.Vec3();

    this._boneAxis = new this._pcRef.Vec3();
    this._center = null;
  }

  get center() {
    return this._center;
  }

  set center(center) {
    // uninstall inverse cache
    if (this._center?.userData.inverseCacheProxy) {
      this._center.userData.inverseCacheProxy.revert();
      delete this._center.userData.inverseCacheProxy;
    }

    // change the center
    this._center = center;

    // install inverse cache
    if (this._center) {
      if (!this._center.userData) {
        this._center.userData = {};
      }

      if (!this._center.userData.inverseCacheProxy) {
        this._center.userData.inverseCacheProxy = new Matrix4InverseCache(
          this._pcRef,
          this._center.getWorldTransform(),
        );
      }
    }
  }

  get _parentMatrixWorld() {
    return this.bone.parent ? this.bone.parent.getWorldTransform() : this._identityMat4;
  }

  /**
   * Set of dependencies that need to be updated before this joint.
   */
  public get dependencies(): Set<pc.GraphNode> {
    const set = new Set<pc.GraphNode>();

    const parent = this.bone.parent;
    if (parent) {
      set.add(parent);
    }

    for (let cg = 0; cg < this.colliderGroups.length; cg++) {
      for (let c = 0; c < this.colliderGroups[cg].colliders.length; c++) {
        set.add(this.colliderGroups[cg].colliders[c]);
      }
    }

    return set;
  }

  private _calcWorldSpaceBoneLength(): void {
    const matrixWorld = this.bone.getWorldTransform();
    matrixWorld.getTranslation(this._v3A); // get world position of this.bone

    if (this.child) {
      const childMatrixWorld = this.child.getWorldTransform();
      childMatrixWorld.getTranslation(this._v3B); // get world position of this.child
    } else {
      this._v3B.copy(this._initialLocalChildPosition);
      applyMatrix4(this._v3B, matrixWorld);
    }

    this._worldSpaceBoneLength = this._v3A.sub(this._v3B).length();
  }

  setInitState() {
    // remember initial position of itself
    this._initialLocalMatrix.copy(this.bone.getLocalTransform());
    this._initialLocalRotation.copy(this.bone.getLocalRotation());

    // see initial position of its local child
    if (this.child) {
      this._initialLocalChildPosition.copy(this.child.getLocalPosition());
    } else {
      // vrm0 requires a 7cm fixed bone length for the final node in a chain
      // See: https://github.com/vrm-c/vrm-specification/tree/master/specification/VRMC_springBone-1.0#about-spring-configuration
      this._initialLocalChildPosition
        .copy(this.bone.getLocalPosition())
        .normalize()
        .mulScalar(0.07);
    }

    const matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    applyMatrix4(this._currentTail, matrixWorldToCenter);
    this._prevTail.copy(this._currentTail);

    // set initial states that are related to local child position
    this._boneAxis.copy(this._initialLocalChildPosition).normalize();
  }

  reset() {
    this.bone.setLocalRotation(this._initialLocalRotation);

    const transform = new this._pcRef.Mat4();
    transform.mul2(this._parentMatrixWorld, this.bone.getLocalTransform());
    const position = transform.getTranslation();
    this.bone.setPosition(position.x, position.y, position.z);

    // Apply updated position to tail states
    const matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    applyMatrix4(this._currentTail, matrixWorldToCenter);
    this._prevTail.copy(this._currentTail);
  }

  update(dt: number, strength: number = 1.0) {
    if (dt <= 0) return;

    // Update the _worldSpaceBoneLength
    this._calcWorldSpaceBoneLength();

    const worldSpaceBoneAxis = this._v3A.copy(this._boneAxis);
    transformDirection(worldSpaceBoneAxis, this._initialLocalMatrix);
    transformDirection(worldSpaceBoneAxis, this._parentMatrixWorld);

    this._nextTail
      .copy(this._currentTail)
      .add(
        this._v3B.sub2(this._currentTail, this._prevTail).mulScalar(1 - this.settings.dragForce),
      ); // Continue the decrease from previous frame

    applyMatrix4(this._nextTail, this._getMatrixCenterToWorld(this._matA)); // Convert tail back to world space
    // Apply stiffness and gravity in world space
    // Child bone movement target caused by parent rotation
    this._nextTail.add(this._v3B.copy(worldSpaceBoneAxis).mulScalar(this.settings.stiffness * dt));
    // Movement displacement from external forces
    this._nextTail.add(
      this._v3B.copy(this.settings.gravityDir).mulScalar(this.settings.gravityPower * dt),
    );

    // normalize bone length
    const matrixWorld = this.bone.getWorldTransform();
    matrixWorld.getTranslation(this._worldSpacePosition);
    this._nextTail
      .sub(this._worldSpacePosition)
      .normalize()
      .mulScalar(this._worldSpaceBoneLength)
      .add(this._worldSpacePosition);

    this._collision(this._nextTail);

    // update prevTail and currentTail
    this._prevTail.copy(this._currentTail);
    this._currentTail.copy(this._nextTail);
    applyMatrix4(this._currentTail, this._getMatrixWorldToCenter(this._matB)); // Convert tail to center space

    // Apply rotation, convert vector3 thing into actual quaternion
    // Original UniVRM is doing center unit calculus at here but we're gonna do this on local unit
    const worldSpaceInitialMatrixInv = this._matA
      .copy(this._parentMatrixWorld)
      .mul(this._initialLocalMatrix)
      .invert();

    const to = this._v3A.copy(this._nextTail);
    applyMatrix4(to, worldSpaceInitialMatrixInv);
    to.normalize();

    const applyRotation = setFromUnitVectors(this._quatA, this._boneAxis, to);

    // Apply strength to rotation - interpolate between no rotation and full rotation
    if (strength !== 1.0) {
      const identityQuat = this._quatC.set(0, 0, 0, 1); // identity quaternion
      const tempQuat = this._quatD.copy(applyRotation);

      applyRotation.slerp(identityQuat, tempQuat, strength);
    }

    const rotation = this._quatB.copy(this._initialLocalRotation).mul(applyRotation);
    this.bone.setLocalRotation(rotation);

    strength;
  }

  _getMatrixCenterToWorld(target: pc.Mat4) {
    if (this._center) {
      const worldTransform = this._center.getWorldTransform();
      target.copy(worldTransform);
    } else {
      target.setIdentity();
    }

    return target;
  }

  // Create a matrix that converts world space into center space.
  _getMatrixWorldToCenter(target: pc.Mat4) {
    if (this._center) {
      target.copy(this._center.userData.inverseCacheProxy.inverse);
    } else {
      target.setIdentity();
    }

    return target;
  }

  _collision(tail: pc.Vec3) {
    if (!this.colliderGroups) return;
    for (let i = 0; i < this.colliderGroups.length; i++) {
      const colliderGroup = this.colliderGroups[i];
      const colliders = colliderGroup.colliders;

      for (let j = 0; j < colliders.length; j++) {
        const collider = colliders[j];
        const dist = collider.shape.calculateCollision(
          collider.colliderMatrix,
          tail,
          this.settings.hitRadius,
          this._v3A,
          this._v3B,
        );

        if (dist < 0.0) {
          // hit
          tail.add(this._v3A.mulScalar(-dist));

          // normalize bone length
          tail.sub(this._worldSpacePosition);
          const length = tail.length();
          tail.mulScalar(this._worldSpaceBoneLength / length).add(this._worldSpacePosition);
        }
      }
    }
  }
}
