import * as pc from 'playcanvas';
import { VRMHumanoid } from '../extensions/vrm-humanoid/VRMHumanoid';
import { VRMAnimationLoader } from '../extensions/vrm-animation/VRMAnimationLoader';
import { VRMAnimationTrack } from '../extensions/vrm-animation/VRMAnimationTrack';
import { VRMViverseAnimationTrack } from '../extensions/vrm-animation/VRMViverseAnimationTrack';
import type { VRMAnimation } from '../extensions/vrm-animation/VRMAnimation';
import {
  IAnimationAsset,
  IAnimationResource,
  IAnimExtraSettings,
} from '../extensions/vrm-animation/vrm-animation-interfaces';

export function createVRMAnimResources(
  pcRef: typeof pc,
  vrmAsset: pc.Asset,
  animationAssets: IAnimationAsset[],
  humanoid: VRMHumanoid,
  extraSettings: IAnimExtraSettings = {},
): IAnimationResource[] | undefined {
  // Validate inputs
  if (!vrmAsset) {
    console.error('CreateVRMAnimResources: Please provide "vrm asset".');
    return;
  }

  if (!animationAssets) {
    console.error('CreateVRMAnimResources: Please provide "animation assets".');
    return;
  }

  if (!humanoid) {
    console.error('CreateVRMAnimResources: Please provide "humanoid" or "asset and entity".');
    return;
  }

  // Check vrm (model) version
  const isV1Used = vrmAsset.resource.data.gltf.extensions?.VRMC_vrm;
  const isV0Used = vrmAsset.resource.data.gltf.extensions?.VRM;
  const version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

  const resources: IAnimationResource[] = [];

  animationAssets.forEach((animationAsset) => {
    const assetResource = animationAsset.asset.resource;
    const assetType = animationAsset.asset.type;

    let resource: IAnimationResource | undefined;
    if (!assetResource) {
      resource = undefined;
      console.warn(
        `createVRMAnimResources: loadAnimation can't find available resource from ${animationAsset.stateName} asset.`,
      );
    } else {
      const checkAnimType = () => {
        if (assetType == 'animation') {
          return false;
        } else if (assetType == 'container') {
          const extensionsUsed = assetResource.data.gltf.extensionsUsed;
          if (
            extensionsUsed &&
            extensionsUsed.includes('VRMC_vrm_animation') &&
            extensionsUsed.indexOf('VRMC_vrm_animation') !== -1
          ) {
            return true;
          } else {
            return false;
          }
        }
        return false;
      };
      const isVRMA: boolean = checkAnimType();
      if (isVRMA) {
        // Load VRMA
        resource = createVRMAResource(pcRef, animationAsset, humanoid, version);
      } else {
        // Load Viverse Animation
        resource = createViverseAnimResource(
          pcRef,
          animationAsset,
          humanoid,
          version,
          extraSettings,
        );
      }
    }
    if (resource) {
      resources.push(resource);
    }
  });
  return resources;
}

export const assignAnimation = (entity: pc.Entity, resource: IAnimationResource) => {
  if (entity.anim) {
    entity.anim.assignAnimation(
      resource.stateName,
      resource.animTrack,
      resource.setting && resource.setting.layerName !== undefined
        ? resource.setting.layerName
        : undefined,
      resource.setting && resource.setting.speed !== undefined ? resource.setting.speed : 1,
      resource.setting && resource.setting.loop !== undefined ? resource.setting.loop : true,
    );
  } else {
    console.error('AssignAnimation: Please set the anim component on the entity.');
  }
};

// Methods to create single animation resource (vrma & viverse animation)
function createVRMAResource(
  pcRef: typeof pc,
  animationAsset: IAnimationAsset,
  humanoid: VRMHumanoid,
  version: 'v0' | 'v1' | null,
): IAnimationResource | undefined {
  const vrmaLoader = new VRMAnimationLoader(pcRef);
  const vrmAnimations: VRMAnimation[] | undefined = vrmaLoader.loadVRMA(animationAsset.asset);
  let name: string | undefined =
    animationAsset.asset.resource.animations?.[0]?.resources?.[0]?.name;
  if (!name) name = '';

  if (vrmAnimations) {
    const animTrack: pc.AnimTrack = new VRMAnimationTrack(
      pcRef,
      name,
      vrmAnimations[0],
      humanoid,
      version,
    ).result;
    return { stateName: animationAsset.stateName, animTrack: animTrack };
  }
  return;
}

const createViverseAnimResource = (
  pcRef: typeof pc,
  animationAsset: IAnimationAsset,
  humanoid: VRMHumanoid,
  version: 'v0' | 'v1' | null,
  extraSettings: IAnimExtraSettings,
) => {
  const origAnimTrack =
    animationAsset.asset.type === 'container'
      ? animationAsset.asset.resource.animations?.[0]?.resource
      : animationAsset.asset.resource;

  if (origAnimTrack) {
    const animTrack = new VRMViverseAnimationTrack(
      pcRef,
      animationAsset,
      humanoid,
      version,
      extraSettings,
      origAnimTrack,
    ).result;
    const parsedAnimAsset = {
      stateName: animationAsset.stateName,
      animTrack: animTrack,
      ...(animationAsset.setting && {
        setting: animationAsset.setting,
      }),
    };
    return parsedAnimAsset;
  } else {
    console.error(
      `CreateViverseAnimResource: loadAnimation can't find valid resource from ${animationAsset.stateName} asset.`,
    );
    return;
  }
};
