import * as VrmAnimation from './scripts/vrm-animation';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import * as VrmMtoon from './scripts/vrm-mtoon';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import * as VrmMapList from './extensions/vrm-map-list';

declare global {
  interface Window {
    VRMLoader: {
      VrmAnimation: typeof VrmAnimation;
      VrmExpression: typeof VrmExpression;
      VrmSpringBone: typeof VrmSpringBone;
      VrmMtoon: typeof VrmMtoon;
      VrmMapList: typeof VrmMapList;
      createFormattedVRMHumanoid: (
        pcRef: typeof pc,
        vrmAsset: pc.Asset,
        renderEntity: pc.Entity,
      ) => VRMHumanoid | null;
      addIndexToNodeTags: (asset: pc.Asset) => void;
      getVersion: (asset: pc.Asset) => 'v1' | 'v0' | null;
    };
  }
}
