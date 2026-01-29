import { VRMAnimation } from './VRMAnimation';
import { VRMExpressionPresetName } from '../vrm-map-list';
import { IAnimatedMorphConfig } from '../vrm-expression/vrm-expression';

export class VRMAExpression {
  public preset: Map<VRMExpressionPresetName, IAnimatedMorphConfig>;
  public custom: Map<string, IAnimatedMorphConfig>;

  constructor(vrmAnimation: VRMAnimation) {
    this.preset = vrmAnimation.expressionTracks.preset;
    this.custom = vrmAnimation.expressionTracks.custom;
  }

  createCustomExpression() {
    // TODO: Custom expression is not implemented yet
    console.log(this.custom);
  }
}
