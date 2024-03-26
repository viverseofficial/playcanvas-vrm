import * as pc from 'playcanvas';

// TODO: Wait for npm package version to get the type.
declare global {
  interface Window {
    VRMLoader: {
      VrmAnimation: any;
      VrmExpression: any;
      VrmSpringBone: typeof VrmSpringBone;
      createFormattedVRMHumanoid: (
        pcRef: typeof pc,
        vrmAsset: pc.Asset,
        renderEntity: pc.Entity,
      ) => VRMHumanoid | null;
    };
    GLTFLoader: any;
  }
}
