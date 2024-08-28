import * as VrmAnimation from './scripts/vrm-animation';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import * as VrmMapList from './extensions/vrm-map-list';
import * as VrmcMaterialsMtoon from './extensions/vrmc-materials-mtoon';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './helpers/GLTFLoader/GLTFLoader';
import { RenderStates } from './helpers/RenderStates/RenderStates';
import { addIndexToNodeTags, getVersion } from './helpers/GLTFLoader/utils/asset-utils';

export * as VrmAnimation from './scripts/vrm-animation';
export * as VrmExpression from './scripts/vrm-expression';
export * as VrmSpringBone from './scripts/vrm-spring-bone';
export * as VrmMapList from './extensions/vrm-map-list';
export * as VrmcMaterialsMtoon from './extensions/vrmc-materials-mtoon';
export { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
export { GLTFLoader } from './helpers/GLTFLoader/GLTFLoader';
export { RenderStates } from './helpers/RenderStates/RenderStates';
export { addIndexToNodeTags, getVersion } from './helpers/GLTFLoader/utils/asset-utils';

window.VRMLoader = {
  VrmAnimation,
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  VrmcMaterialsMtoon,
  RenderStates,
  createFormattedVRMHumanoid,
  addIndexToNodeTags,
  getVersion,
};

window.GLTFLoader = GLTFLoader;
