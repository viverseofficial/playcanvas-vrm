import { VRMAnimation } from './VRMAnimation';
import { VRMExpressionPresetName } from '../vrm-map-list';
import { IAnimatedMorphConfig } from '../vrm-expression/vrm-expression';

export class VRMAExpression {
  public preset: Map<VRMExpressionPresetName, IAnimatedMorphConfig>;
  private custom: Map<VRMExpressionPresetName, IAnimatedMorphConfig>;

  constructor(vrmAnimation: VRMAnimation) {
    this.preset = vrmAnimation.expressionTracks.preset;
    this.custom = vrmAnimation.expressionTracks.custom;
  }

  createCustomExpression() {
    console.log(this.custom);
  }
}
