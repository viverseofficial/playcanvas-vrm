import * as pc from 'playcanvas';
import { VRMRig } from './VRMRig';
import { VRMHumanBoneList, VRMHumanBoneParentMap } from '../vrm-map-list';
import { VRMHumanBoneName, VRMHumanBones } from './vrm-humanoid';

export class VRMHumanoidRig extends VRMRig {
  public root: pc.Entity;

  static _setupTransforms(pcRef: typeof pc, modelRig: VRMRig) {
    const rigBones: Partial<VRMHumanBones> = {};

    const boneWorldPositions: { [key in VRMHumanBoneName]?: pc.Vec3 } = {};
    const boneWorldRotations: { [key in VRMHumanBoneName]?: pc.Quat } = {};
    const boneRotations: { [key in VRMHumanBoneName]?: pc.Quat } = {};

    const root = new pcRef.Entity();
    root.name = 'VRMHumanoidRig';

    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = modelRig.getBoneNode(boneName);

      if (boneNode) {
        const boneWorldPosition = new pcRef.Vec3();
        const boneWorldRotation = new pcRef.Quat();

        const worldTransform = boneNode.getWorldTransform();
        worldTransform.getTranslation(boneWorldPosition);

        const eulers = worldTransform.getEulerAngles();
        boneWorldRotation.setFromEulerAngles(eulers);

        boneWorldPositions[boneName] = boneWorldPosition;
        boneWorldRotations[boneName] = boneWorldRotation;
        boneRotations[boneName] = boneNode.getLocalRotation().clone();
      }
    });

    // build rig hierarchy + store parentWorldRotations
    const parentWorldRotations: { [key in VRMHumanBoneName]?: pc.Quat } = {};

    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = modelRig.getBoneNode(boneName);

      const boneWorldPosition = boneWorldPositions[boneName];

      if (boneNode && boneWorldPosition) {
        // see the nearest parent position
        let currentBoneName: VRMHumanBoneName | null = boneName;
        let parentWorldPosition;
        let parentWorldRotation;

        while (parentWorldPosition == null) {
          currentBoneName = VRMHumanBoneParentMap[currentBoneName];

          if (currentBoneName == null) {
            break;
          }
          parentWorldPosition = boneWorldPositions[currentBoneName];
          parentWorldRotation = boneWorldRotations[currentBoneName];
        }

        // add to hierarchy
        const rigBoneNode = new pcRef.Entity();
        rigBoneNode.name = boneNode.name;

        const parentRigBoneNode = currentBoneName ? rigBones[currentBoneName]?.node : root;

        (parentRigBoneNode || root).addChild(rigBoneNode);

        rigBoneNode.setLocalPosition(boneWorldPosition);

        if (parentWorldPosition) {
          const localPosition = rigBoneNode.getLocalPosition().clone();
          localPosition.sub(parentWorldPosition);
          rigBoneNode.setLocalPosition(localPosition);
        }

        rigBones[boneName] = { node: rigBoneNode };

        // store parentWorldRotation
        parentWorldRotations[boneName] = parentWorldRotation ?? new pcRef.Quat();
      }
    });

    return {
      rigBones,
      root,
    };
  }

  constructor(pcRef: typeof pc, humanoid: VRMRig) {
    const { rigBones, root } = VRMHumanoidRig._setupTransforms(pcRef, humanoid);
    super(rigBones);

    this.root = root;
  }
}
