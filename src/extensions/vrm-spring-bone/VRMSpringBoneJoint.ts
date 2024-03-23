import * as pc from 'playcanvas';
import {
  localToWorld,
  Matrix4InverseCache,
  setFromUnitVectors,
  mat4InvertCompat,
} from '../../math-utils';
import { VRMSpringBoneJointSettings, VRMSpringBoneColliderGroup } from './vrm-spring-bone';

export class VRMSpringBoneJoint {
  private _pcRef: typeof pc;
  private _v3A: pc.Vec3;
  private _v3B: pc.Vec3;
  private _nextTail: pc.Vec3;
  private _quatA: pc.Quat;
  private _matA: pc.Mat4;
  private _matB: pc.Mat4;
  private _identityMat4: pc.Mat4;
  private _worldSpacePosition: pc.Vec3;
  private _centerSpacePosition: pc.Vec3;
  private _matrixWorldToCenterTranslation: pc.Vec3;

  public bone: pc.GraphNode;
  public child: pc.GraphNode | null;

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
    this._matA = new this._pcRef.Mat4();
    this._matB = new this._pcRef.Mat4();
    this._identityMat4 = new this._pcRef.Mat4();
    this._worldSpacePosition = new this._pcRef.Vec3();
    this._centerSpacePosition = new this._pcRef.Vec3();
    this._matrixWorldToCenterTranslation = new this._pcRef.Vec3();
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

    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    this._prevTail.copy(this._currentTail);

    this._boneAxis.copy(this._initialLocalChildPosition).normalize();

    const matrixWorldTranslated = this.bone
      .getWorldTransform()
      .transformPoint(new this._pcRef.Vec3());

    this._worldSpaceBoneLength = this._v3A
      .copy(this._initialLocalChildPosition)
      .copy(this.bone.getWorldTransform().transformPoint(this._v3A))
      .sub(matrixWorldTranslated)
      .length();
  }

  reset() {
    this.bone.setLocalRotation(this._initialLocalRotation);

    const transform = new this._pcRef.Mat4();
    transform.mul2(this._parentMatrixWorld, this.bone.getLocalTransform());
    const position = transform.transformPoint(new this._pcRef.Vec3());
    this.bone.setPosition(position.x, position.y, position.z);

    // Apply updated position to tail states
    const matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    this._currentTail.copy(matrixWorldToCenter.transformPoint(this._currentTail));

    this._prevTail.copy(this._currentTail);
  }

  update(dt: number, strength: number) {
    if (dt <= 0) return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3()),
    );
    let matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0);
    matrixWorldToCenter.getTranslation(this._matrixWorldToCenterTranslation);

    this._centerSpacePosition
      .copy(this._worldSpacePosition)
      .add(this._matrixWorldToCenterTranslation);
    const quatWorldToCenter = this._quatA.setFromMat4(matrixWorldToCenter);

    // Get parent matrix in center space
    const centerSpaceParentMatrix = this._matB
      .copy(matrixWorldToCenter)
      .mul(this._parentMatrixWorld);

    // Get boneAxis in center space
    const centerSpaceBoneAxis = this._v3B
      .copy(this._boneAxis)
      .copy(this._initialLocalMatrix.transformPoint(this._v3B))
      .copy(centerSpaceParentMatrix.transformPoint(this._v3B))
      .sub(this._centerSpacePosition)
      .normalize();

    // gravity in center space
    const centerSpaceGravity = this._v3A
      .copy(this.settings.gravityDir)
      .copy(quatWorldToCenter.transformVector(this._v3A))
      .normalize();

    const matrixCenterToWorld = this._getMatrixCenterToWorld(this._matA);

    this._nextTail
      .copy(this._currentTail)
      .add(
        this._v3A
          .copy(this._currentTail)
          .sub(this._prevTail)
          .mulScalar(1 - this.settings.dragForce),
      ) // Continue the decrease from previous frame
      .add(this._v3A.copy(centerSpaceBoneAxis).mulScalar(this.settings.stiffness * dt)) // Parent bone roate affect child bone rotate
      .add(this._v3A.copy(centerSpaceGravity).mulScalar(this.settings.gravityPower * dt)) // Power from external force
      .copy(matrixCenterToWorld.transformPoint(this._nextTail)); // Let tail back to world space

    // Normalize bone length
    this._nextTail
      .sub(this._worldSpacePosition)
      .normalize()
      .mulScalar(this._worldSpaceBoneLength)
      .add(this._worldSpacePosition);

    // Make tail Y move slowly
    const compareTransform = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, compareTransform.y, 0));

    // Collision move
    this._collision(this._nextTail);
    matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);

    this._prevTail.copy(this._currentTail);
    this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(matrixWorldToCenter.transformPoint(this._v3A)),
    );

    const worldSpaceInitialMatrixInv = mat4InvertCompat(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix),
    );

    const applyRotation = setFromUnitVectors(
      this._quatA,
      this._boneAxis,
      this._v3A
        .copy(this._nextTail)
        .copy(worldSpaceInitialMatrixInv.transformPoint(this._v3A))
        .normalize(),
    );

    const angles = applyRotation.getEulerAngles();
    applyRotation.setFromEulerAngles(angles.x * strength, angles.y * strength, angles.z * strength);

    const rotation = this._initialLocalRotation.clone().mul(applyRotation);
    this.bone.setLocalRotation(rotation);
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
    this.colliderGroups?.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        const dist = collider.shape.calculateCollision(
          collider.getWorldTransform(),
          tail,
          this.settings.hitRadius,
          this._v3A,
        );

        if (dist < 0.0) {
          // hit
          tail.add(this._v3A.mulScalar(-dist));

          // normalize bone length
          tail
            .sub(this._worldSpacePosition)
            .normalize()
            .mulScalar(this._worldSpaceBoneLength)
            .add(this._worldSpacePosition);
        }
      });
    });
  }
}
