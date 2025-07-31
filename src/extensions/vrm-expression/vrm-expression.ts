/**
 * Adjust the blending during expression morph transitions.
 * The times you specify will correspond to the weight values you set in the values array.
 * The length of times must same as The length of values!
 *
 * ex. times: [0, 0.5, 1], values: [[0, 0.5, 1, 0]
 */
export interface IAnimatedMorphConfig {
  times: Array<number> | Float32Array;
  values: Array<number> | Float32Array;
  loop?: boolean;
}

export interface VRMExpressionBind {
  /**
   * Apply a weight to this bind.
   * Applied weights will be accumulated until {@link clearAppliedWeight} is called.
   */
  applyWeight(weight: number): void;

  /**
   * Clear previously applied weights.
   */
  clearAppliedWeight(): void;
}

export const VRMExpressionOverrideType = {
  None: 'none',
  Block: 'block',
  Blend: 'blend',
} as const;

export type VRMExpressionOverrideType =
  (typeof VRMExpressionOverrideType)[keyof typeof VRMExpressionOverrideType];

export const VRMMouthExpressionName = {
  Aa: 'aa',
  Ih: 'ih',
  Ou: 'ou',
  Ee: 'ee',
  Oh: 'oh',
} as const;

export type VRMMouthExpressionNameType =
  (typeof VRMMouthExpressionName)[keyof typeof VRMMouthExpressionName];

export const VRMBlinkExpressionName = {
  Blink: 'blink',
  BlinkLeft: 'blinkLeft',
  BlinkRight: 'blinkRight',
} as const;

export type VRMBlinkExpressionNameType =
  (typeof VRMBlinkExpressionName)[keyof typeof VRMBlinkExpressionName];

export const VRMLookAtExpressionName = {
  LookUp: 'lookUp',
  LookDown: 'lookDown',
  LookLeft: 'lookLeft',
  LookRight: 'lookRight',
} as const;

export type VRMLookAtExpressionNameType =
  (typeof VRMLookAtExpressionName)[keyof typeof VRMLookAtExpressionName];

export const VRMEmotionExpressionName = {
  Neutral: 'neutral',
  Happy: 'happy',
  Angry: 'angry',
  Sad: 'sad',
  Relaxed: 'relaxed',
  Surprised: 'surprised',
} as const;

export type VRMEmotionExpressionNameType =
  (typeof VRMEmotionExpressionName)[keyof typeof VRMEmotionExpressionName];

export type VRMExpressionNameType =
  | VRMMouthExpressionNameType
  | VRMBlinkExpressionNameType
  | VRMLookAtExpressionNameType
  | VRMLookAtExpressionNameType
  | VRMEmotionExpressionNameType;

export interface IGltfNode {
  name: string;
  mesh?: number;
  skin?: number;
  matrix?: number[];
  children?: number[];
}
