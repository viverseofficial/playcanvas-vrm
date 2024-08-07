import * as pc from 'playcanvas';
import { VRMHumanoid } from '../../extensions/vrm-humanoid/VRMHumanoid';
import { createVRMA } from './createVRMA';
import { createVRMAnimTrack } from './createVRMAnimTrack';
import type { VRMAnimation } from './VRMAnimation';

interface IAnimationSetting {
  speed?: number;
  loop?: boolean;
  layerName?: string;
}

interface IAnimationAsset {
  stateName: string;
  asset: pc.Asset;
  removeY?: boolean;
  removeUpperY?: boolean;
  removeZ?: boolean;
  setting?: IAnimationSetting;
}

interface IVRMAResource {
  stateName: string;
  animTrack: pc.AnimTrack;
  setting?: IAnimationSetting;
}

export function createVRMAResources(
  pcRef: typeof pc,
  vrmAsset: pc.Asset,
  vrmaAssets: IAnimationAsset[],
  humanoid: VRMHumanoid,
): IVRMAResource[] {
  // Check vrm (model) version
  const isV1Used = vrmAsset.resource.data.gltf.extensions?.VRMC_vrm;
  const isV0Used = vrmAsset.resource.data.gltf.extensions?.VRM;
  const version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

  const rescources: IVRMAResource[] = [];

  vrmaAssets.forEach((vrmaAsset) => {
    const vrmAnimations: VRMAnimation[] | undefined = createVRMA(pcRef, vrmaAsset.asset);

    if (vrmAnimations) {
      const animTrack: pc.AnimTrack = createVRMAnimTrack(
        pcRef,
        vrmaAsset.stateName,
        vrmAnimations[0],
        humanoid,
        version,
      );
      rescources.push({ stateName: vrmaAsset.stateName, animTrack: animTrack });
    }
  });
  return rescources;
}

export const assignAnimation = (entity: pc.Entity, resource: IVRMAResource) => {
  if (entity.anim) {
    /*       entity.anim.addAnimationState(
        resource.stateName,
        resource.animTrack,
        resource.setting && resource.setting.speed !== undefined ? resource.setting.speed : 1,
        resource.setting && resource.setting.loop !== undefined ? resource.setting.loop : true,
        resource.setting && resource.setting.layerName !== undefined ? resource.setting.layerName : undefined,
      ); */
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
    console.error('assignAnimation: Please set the anim component on the entity.');
  }
};
