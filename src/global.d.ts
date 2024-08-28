import * as VrmAnimation from './scripts/vrm-animation';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './helpers/GLTFLoader/GLTFLoader';
import { RenderStates } from './helpers/RenderStates/RenderStates';
import * as VrmMapList from './extensions/vrm-map-list';
export * as VrmcMaterialsMtoon from './extensions/vrmc-materials-mtoon';

declare global {
  interface Window {
    VRMLoader: {
      VrmAnimation: typeof VrmAnimation;
      VrmExpression: typeof VrmExpression;
      VrmSpringBone: typeof VrmSpringBone;
      VrmMapList: typeof VrmMapList;
      VrmcMaterialsMtoon: typeof VrmcMaterialsMtoon;
      createFormattedVRMHumanoid: (
        pcRef: typeof pc,
        vrmAsset: pc.Asset,
        renderEntity: pc.Entity,
      ) => VRMHumanoid | null;
      addIndexToNodeTags: (asset: pc.Asset) => void;
      getVersion: (asset: pc.Asset) => 'v1' | 'v0' | null;
      RenderStates: typeof RenderStates;
    };
    GLTFLoader: typeof GLTFLoader;
  }
}
