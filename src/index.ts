import * as VrmAnimation from './scripts/vrm-animation';
import * as VrmExpression from './scripts/vrm-expression';
import * as VrmSpringBone from './scripts/vrm-spring-bone';
import * as VrmMapList from './extensions/vrm-map-list';
import { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
import { addIndexToNodeTags, getVersion } from './utils/asset';

export * as VrmAnimation from './scripts/vrm-animation';
export * as VrmExpression from './scripts/vrm-expression';
export * as VrmSpringBone from './scripts/vrm-spring-bone';
export * as VrmMapList from './extensions/vrm-map-list';
export { createFormattedVRMHumanoid } from './extensions/vrm-humanoid/vrm-humanoid-utils';
export { RenderStates } from './helpers/RenderStates';
export { addIndexToNodeTags, getVersion } from './utils/asset';

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
  createFormattedVRMHumanoid,
  addIndexToNodeTags,
  getVersion,
};
