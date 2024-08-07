import * as VrmAnimation from './scripts/add-vrm-animations';
import * as VrmAnimation2 from './scripts/vrm-animation'; //temp

import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './gltf-loader/GLTFLoader';
import * as VrmMapList from './extensions/vrm-map-list';
export * as VrmcMaterialsMtoon from './extensions/vrmc-materials-mtoon';

declare global {
  interface Window {
    VRMLoader: {
      VrmAnimation: typeof VrmAnimation;
      VrmAnimation2: typeof VrmAnimation2;
      VrmExpression: typeof VrmExpression;
      VrmSpringBone: typeof VrmSpringBone;
      VrmMapList: typeof VrmMapList;
      VrmcMaterialsMtoon: typeof VrmcMaterialsMtoon;
      createFormattedVRMHumanoid: (
        pcRef: typeof pc,
        vrmAsset: pc.Asset,
        renderEntity: pc.Entity,
      ) => VRMHumanoid | null;
    };
    GLTFLoader: typeof GLTFLoader;
  }
}
