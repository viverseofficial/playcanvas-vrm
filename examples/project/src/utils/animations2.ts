import * as pc from 'playcanvas';
import { preloadAssets } from '../assets';

export const createAnimationFromVRMA = (
  animatedEntity: pc.Entity,
  vrmAsset: pc.Asset,
  humanoid: any,
  VRMLoader: any,
) => {
  const vrmaAssets = [
    /*       {
        stateName: 'VrmaTest',
        asset: preloadAssets.AnimationVrmaTest,
      },
      {
        stateName: 'VrmaA',
        asset: preloadAssets.AnimationVrmaA,
      }, */
    {
      stateName: 'VrmaB',
      asset: preloadAssets.AnimationVrmaB,
    },
    {
      stateName: 'VrmaC',
      asset: preloadAssets.AnimationVrmaC,
    },
  ];

  // Create VRMA Resources
  const resources = VRMLoader.VrmAnimation2.createVRMAResources(pc, vrmAsset, vrmaAssets, humanoid);

  // Assign Aniamtion Resources to Entity
  if (resources) {
    resources.forEach((resource: any) => {
      VRMLoader.VrmAnimation2.assignAnimation(animatedEntity, resource);
    });
  }
};
