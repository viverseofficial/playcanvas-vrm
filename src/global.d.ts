import * as VrmAnimation from './scripts/vrm-animation';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './helpers/GLTFLoader/GLTFLoader';
import * as VrmMapList from './extensions/vrm-map-list';
export * as VrmMtoon from './scripts/vrm-mtoon';

declare global {
  interface Window {
    VRMLoader: {
      VrmAnimation: typeof VrmAnimation;
      VrmExpression: typeof VrmExpression;
      VrmSpringBone: typeof VrmSpringBone;
      VrmMapList: typeof VrmMapList;
      VrmMtoon: typeof VrmMtoon;
      createFormattedVRMHumanoid: (
        pcRef: typeof pc,
        vrmAsset: pc.Asset,
        renderEntity: pc.Entity,
      ) => VRMHumanoid | null;
      addIndexToNodeTags: (asset: pc.Asset) => void;
      getVersion: (asset: pc.Asset) => 'v1' | 'v0' | null;
    };
    GLTFLoader: typeof GLTFLoader;
  }
}
