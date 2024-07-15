import * as VrmAnimation from './scripts/add-vrm-animations';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import * as VrmMapList from './extensions/vrm-map-list';
import * as VrmcMaterialsMtoon from './extensions/vrmc-materials-mtoon'
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './gltf-loader/GLTFLoader';

export * as VrmAnimation from './scripts/add-vrm-animations';
export * as VrmExpression from './scripts/vrm-expression';
export * as VrmSpringBone from './scripts/vrm-spring-bone';
export * as VrmMapList from './extensions/vrm-map-list';
export * as VrmcMaterialsMtoon from './extensions/vrmc-materials-mtoon'
export { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
export { GLTFLoader } from './gltf-loader/GLTFLoader';

window.VRMLoader = {
  VrmAnimation,
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  VrmcMaterialsMtoon,
  createFormattedVRMHumanoid,
};

window.GLTFLoader = GLTFLoader;
