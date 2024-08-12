import * as pc from 'playcanvas';
import { preloadAssets } from '../assets';

export const createDefaultAnimations = (
  animatedEntity: pc.Entity,
  asset: pc.Asset,
  humanoid: any,
  VRMLoader: any,
) => {
  const animationAssets = [
    {
      stateName: 'Idle',
      asset: preloadAssets.AnimationIdle,
    },
    {
      stateName: 'Run',
      asset: preloadAssets.AnimationRun,
    },
  ];

  const loadedResources = VRMLoader.VrmAnimation.createVRMAnimResources(
    pc,
    asset,
    animationAssets,
    humanoid,
    {
      negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
    },
  );

  if (loadedResources) {
    loadedResources.forEach((resource: any) => {
      VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
    });
  }

  const mocapAnimationAssets = [
    {
      stateName: 'MocapA',
      asset: preloadAssets.AnimationMocapV1,
    },
    {
      stateName: 'MocapB',
      asset: preloadAssets.AnimationMocapV2,
    },
  ];

  const mocapLoadedResources = VRMLoader.VrmAnimation.createVRMAnimResources(
    pc,
    asset,
    mocapAnimationAssets,
    humanoid,
    {
      negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
    },
  );

  if (mocapLoadedResources) {
    mocapLoadedResources.forEach((resource: any) => {
      VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
    });
  }
};

export const createWindowTestAnimation = (
  animatedEntity: pc.Entity,
  asset: pc.Asset,
  humanoid: any,
  VRMLoader: any,
) => {
  window.createAnim = (type: 'A' | 'B' | 'C' | 'D' | 'E' | 'V' | 'R' | 'M' | 'T') => {
    let animAssets = [];
    switch (type) {
      case 'A':
        animAssets.push({
          stateName: 'A',
          asset: preloadAssets.AnimationA,
        });
        break;
      case 'B':
        animAssets.push({
          stateName: 'B',
          asset: preloadAssets.AnimationB,
        });
        break;
      case 'C':
        animAssets.push({
          stateName: 'C',
          asset: preloadAssets.AnimationC,
        });
        break;
      case 'D':
        animAssets.push({
          stateName: 'D',
          asset: preloadAssets.AnimationD,
        });
        break;
      case 'E':
        animAssets.push({
          stateName: 'E',
          asset: preloadAssets.AnimationE,
        });
        break;
      case 'V':
        animAssets.push({
          stateName: 'V',
          asset: preloadAssets.AnimationVrmaA,
        });
        break;
      case 'R':
        animAssets.push({
          stateName: 'R',
          asset: preloadAssets.AnimationVrmaB,
        });
        break;
      case 'M':
        animAssets.push({
          stateName: 'M',
          asset: preloadAssets.AnimationVrmaC,
        });
        break;
      case 'T':
        animAssets.push({
          stateName: 'T',
          asset: preloadAssets.AnimationVrmaTest,
        });
        break;
    }
    const resources = VRMLoader.VrmAnimation.createVRMAnimResources(
      pc,
      asset,
      animAssets,
      humanoid,
      {
        negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
      },
    );

    if (resources) {
      resources.forEach((resource: any) => {
        VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
      });
    }
    if (animatedEntity.anim) {
      animatedEntity.anim.baseLayer.transition(type);
    }
  };
};
