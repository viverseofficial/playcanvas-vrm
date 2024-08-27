import * as pc from 'playcanvas';
import { VRMRig } from './VRMRig';
import { VRMHumanBoneList, VRMHumanBoneParentMap } from '../vrm-map-list';
import { VRMHumanBoneName, VRMHumanBones } from './vrm-humanoid';

export class VRMHumanoidRig extends VRMRig {
  public root: pc.Entity;
  public original: VRMRig;
  public pcRef: typeof pc;
  protected readonly _parentWorldRotations: { [boneName in VRMHumanBoneName]?: pc.Quat };
  protected readonly _boneRotations: { [boneName in VRMHumanBoneName]?: pc.Quat };
  private _quatA: pc.Quat;
  private _quatB: pc.Quat;
  // private _vec3A: pc.Vec3;
  // private _mat4A: pc.Mat4;

  static _setupTransforms(pcRef: typeof pc, modelRig: VRMRig) {
    const root = new pcRef.Entity();
    root.name = 'VRMHumanoidRig';

    // store boneWorldPositions, boneWorldRotations, and parentWorldRotations
    const boneWorldPositions: { [key in VRMHumanBoneName]?: pc.Vec3 } = {};
    const boneWorldRotations: { [key in VRMHumanBoneName]?: pc.Quat } = {};
    const boneRotations: { [key in VRMHumanBoneName]?: pc.Quat } = {};
    const parentWorldRotations: { [boneName in VRMHumanBoneName]?: pc.Quat } = {};

    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = modelRig.getBoneNode(boneName);
      if (boneNode) {
        boneWorldPositions[boneName] = boneNode.getPosition().clone();
        boneWorldRotations[boneName] = boneNode.getRotation().clone();
        boneRotations[boneName] = boneNode.getLocalRotation().clone();

        const parentWorldRotation = new pcRef.Quat();
        if (boneNode.parent) {
          parentWorldRotation.copy(boneNode.parent.getRotation());
        }

        parentWorldRotations[boneName] = parentWorldRotation;
      }
    });

    // build rig hierarchy + store parentWorldRotations
    const rigBones: Partial<VRMHumanBones> = {};

    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = modelRig.getBoneNode(boneName);

      if (boneNode) {
        const boneWorldPosition = boneWorldPositions[boneName] as pc.Vec3;

        // see the nearest parent position
        let currentBoneName: VRMHumanBoneName | null = boneName;
        let parentBoneWorldPosition: pc.Vec3 | undefined;

        while (parentBoneWorldPosition == null) {
          currentBoneName = VRMHumanBoneParentMap[currentBoneName];
          if (currentBoneName == null) {
            break;
          }
          parentBoneWorldPosition = boneWorldPositions[currentBoneName];
        }

        // add to hierarchy
        const rigBoneNode = new pcRef.Entity();
        rigBoneNode.name = boneNode.name;

        const parentRigBoneNode = (
          currentBoneName ? rigBones[currentBoneName]?.node : root
        ) as pc.Entity;
        parentRigBoneNode.addChild(rigBoneNode);

        const localPosition = new pcRef.Vec3().copy(boneWorldPosition);
        if (parentBoneWorldPosition) {
          localPosition.sub(parentBoneWorldPosition);
        }

        rigBoneNode.setLocalPosition(localPosition);
        rigBones[boneName] = { node: rigBoneNode };
      }
    });

    return {
      rigBones,
      root,
      parentWorldRotations,
      boneRotations,
    };
  }

  constructor(pcRef: typeof pc, humanoid: VRMRig) {
    const { rigBones, root, parentWorldRotations, boneRotations } = VRMHumanoidRig._setupTransforms(
      pcRef,
      humanoid,
    );

    super(rigBones);

    this.pcRef = pcRef;
    this.original = humanoid;
    this.root = root;
    this._parentWorldRotations = parentWorldRotations;
    this._boneRotations = boneRotations;

    // For calculation
    this._quatA = new pcRef.Quat();
    this._quatB = new pcRef.Quat();
    // this._vec3A = new pcRef.Vec3();
    // this._mat4A = new pcRef.Mat4();

    const app = pcRef.Application.getApplication();
    if (app) app.root.addChild(root);
  }

  applyMatrix4(position: pc.Vec3, m: pc.Mat4) {
    // from three Vector3.js
    const x = position.x,
      y = position.y,
      z = position.z;
    const e = m.data;

    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);

    position.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    position.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    position.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;

    return position;
  }

  public update() {
    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = this.original.humanBones[boneName]?.entity;
      // Get normalized bone entity which is animating
      const rigBoneNode = this.getBoneNode(boneName);

      if (boneNode != null && rigBoneNode) {
        // Get the world rotation of the parent node
        const parentWorldRotation = this._parentWorldRotations[boneName]!;
        // Copy and compute the inverse quaternion of the parent's world rotation
        const invParentWorldRotation = this._quatB.copy(parentWorldRotation).invert();
        const boneRotation = this._boneRotations[boneName]!; // Get original model bone's localRotation

        this._quatA.copy(rigBoneNode.getLocalRotation());
        this._quatA.mul(parentWorldRotation);
        this._quatA.copy(invParentWorldRotation.mul(this._quatA));
        this._quatA.mul(boneRotation);

        // Get the actual local rotation for the real bone entity which local rotation is not normalized
        boneNode.setLocalRotation(this._quatA);

        // Move the mass center of the VRM
        if (boneName === 'hips') {
          const boneLocalPosition = rigBoneNode.getLocalPosition();
          boneNode.setLocalPosition(boneLocalPosition);

          // three-vrm calculation: normalizedBone root is at app root 0,0,0 will cause this model not transform correctly
          // const boneWorldPosition = this._vec3A.copy(rigBoneNode.getPosition());
          // const parentWorldMatrix = this._mat4A.copy(boneNode.parent!.getWorldTransform());
          // const localPosition = this.applyMatrix4(boneWorldPosition, parentWorldMatrix.invert());
          // boneNode.setLocalPosition(localPosition);
        }
      }
    });
  }
}
