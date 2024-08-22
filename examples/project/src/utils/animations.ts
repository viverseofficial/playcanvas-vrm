import * as pc from 'playcanvas';
import { preloadAssets } from '../assets';

export const createDefaultAnimations = (
  rootEntity: pc.Entity,
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
    animationAssets,
    asset,
    humanoid,
    {
      negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
    },
  );

  if (loadedResources) {
    loadedResources.forEach((resource: any) => {
      VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
      VRMLoader.VrmAnimation.bindVRMAExpression(rootEntity, resource, animatedEntity);
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
    mocapAnimationAssets,
    asset,
    humanoid,
    {
      negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
    },
  );

  if (mocapLoadedResources) {
    mocapLoadedResources.forEach((resource: any) => {
      VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
      VRMLoader.VrmAnimation.bindVRMAExpression(rootEntity, resource, animatedEntity);
    });
  }
};

export const createWindowTestAnimation = (
  rootEntity: pc.Entity,
  animatedEntity: pc.Entity,
  asset: pc.Asset,
  humanoid: any,
  VRMLoader: any,
) => {
  window.createAnim = (type: 'A' | 'B' | 'C' | 'D' | 'E' | 'V' | 'R' | 'M' | 'T' | 'W' | 'X') => {
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
      case 'W':
        animAssets.push({
          stateName: 'W',
          asset: preloadAssets.AnimationWaveUpper,
        });
        break;
      case 'X':
        animAssets.push({
          stateName: 'X',
          asset: preloadAssets.AnimationVrmaDance,
        });
        break;
    }
    const resources = VRMLoader.VrmAnimation.createVRMAnimResources(
      pc,
      animAssets,
      asset,
      humanoid,
      {
        negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
      },
    );

    if (resources) {
      resources.forEach((resource: any) => {
        VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
        VRMLoader.VrmAnimation.bindVRMAExpression(rootEntity, resource, animatedEntity);
      });
    }
    if (animatedEntity.anim) {
      animatedEntity.anim.baseLayer.transition(type);
    }
  };
};
