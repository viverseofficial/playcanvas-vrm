import * as VrmAnimation from './scripts/add-vrm-animations';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './gltf-loader/GLTFLoader';
import * as VrmMapList from './extensions/vrm-map-list';

declare global {
  interface Window {
    VRMLoader: {
      VrmAnimation: typeof VrmAnimation;
      VrmExpression: typeof VrmExpression;
      VrmSpringBone: typeof VrmSpringBone;
      VrmMapList: typeof VrmMapList;
      createFormattedVRMHumanoid: (
        pcRef: typeof pc,
        vrmAsset: pc.Asset,
        renderEntity: pc.Entity,
      ) => VRMHumanoid | null;
    };
    GLTFLoader: typeof GLTFLoader;
  }
}
