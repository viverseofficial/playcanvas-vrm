import type { ExpressionPresetName } from './ExpressionPresetName';
import type { HumanoidHumanBoneName } from './HumanoidBoneName';

interface Expression {
  node: number;
  extensions?: { [name: string]: any };
  extras?: any;
}

interface Expressions {
  preset?: {
    [preset in ExpressionPresetName]?: Expression;
  };

  custom?: {
    [key: string]: Expression;
  };
}

interface HumanoidHumanBone {
  node: number;
  extensions?: { [name: string]: any };
  extras?: any;
}

type HumanoidHumanBones = {
  [key in HumanoidHumanBoneName]?: HumanoidHumanBone;
};

interface Humanoid {
  humanBones: HumanoidHumanBones;
}

interface LookAt {
  node: number;
  extensions?: { [name: string]: any };
  extras?: any;
}

/**
 * glTF extension that defines humanoid animations.
 */
export interface VRMCVRMAnimation {
  /**
   * Specification version of VRMC_vrm_animation
   */
  specVersion: '1.0' | '1.0-draft';

  humanoid?: Humanoid;
  expressions?: Expressions;
  lookAt?: LookAt;

  extensions?: { [name: string]: any };
  extras?: any;
}
