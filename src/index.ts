import * as VrmAnimation from './scripts/vrm-animation';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import * as VrmMapList from './extensions/vrm-map-list';
import * as VrmMtoon from './scripts/vrm-mtoon';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './helpers/GLTFLoader/GLTFLoader';
import { addIndexToNodeTags, getVersion } from './helpers/GLTFLoader/utils/asset-utils';

export * as VrmAnimation from './scripts/vrm-animation';
export * as VrmExpression from './scripts/vrm-expression';
export * as VrmSpringBone from './scripts/vrm-spring-bone';
export * as VrmMtoon from './scripts/vrm-mtoon';
export * as VrmMapList from './extensions/vrm-map-list';
export { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
export { GLTFLoader } from './helpers/GLTFLoader/GLTFLoader';
export { RenderStates } from './helpers/RenderStates/RenderStates';
export { addIndexToNodeTags, getVersion } from './helpers/GLTFLoader/utils/asset-utils';

export type {
  IAnimationAsset,
  IAnimationResource,
} from './extensions/vrm-animation/vrm-animation-interfaces';
export { VRMHumanoid } from './extensions/vrm-humanoid/VRMHumanoid';
export { VRMExpressionManager } from './extensions/vrm-expression/VRMExpressionManager';
export { VRMSpringBoneManager } from './extensions/vrm-spring-bone/VRMSpringBoneManager';

window.VRMLoader = {
  VrmAnimation,
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  VrmMtoon,
  createFormattedVRMHumanoid,
  addIndexToNodeTags,
  getVersion,
};

window.GLTFLoader = GLTFLoader;
