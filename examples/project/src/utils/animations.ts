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
      asset: preloadAssets.AnimationVrmaIdle,
    },
  ];

  const loadedResources = VRMLoader.VrmAnimation.createVRMAnimResources(
    pc,
    animationAssets,
    asset,
    humanoid,
  );

  if (loadedResources) {
    loadedResources.forEach((resource: any) => {
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
  window.createAnim = (type: 'Y' | 'V' | 'X') => {
    let animAssets = [];
    const stateMap = {
      Y: 'Yawning',
      V: 'IdleDeprecated',
      X: 'PointingDeprecated',
    };

    const stateName = stateMap[type];
    if (!stateName) {
      console.error('Invalid animation type', type);
      return;
    }

    switch (type) {
      case 'Y':
        animAssets.push({
          stateName,
          asset: preloadAssets.AnimationVrmaYawning,
        });
        break;
      case 'V':
        animAssets.push({
          stateName,
          asset: preloadAssets.AnimationIdle,
        });
        break;
      case 'X':
        animAssets.push({
          stateName,
          asset: preloadAssets.AnimationPointing,
        });
        break;
    }
    const resources = VRMLoader.VrmAnimation.createVRMAnimResources(
      pc,
      animAssets,
      asset,
      humanoid,
    );

    if (resources) {
      resources.forEach((resource: any) => {
        VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
        VRMLoader.VrmAnimation.bindVRMAExpression(rootEntity, resource, animatedEntity);
      });
    }
    if (animatedEntity.anim && animatedEntity.anim.baseLayer) {
      animatedEntity.anim.baseLayer.transition(stateName);
    }
  };
};
