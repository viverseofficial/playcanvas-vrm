import { saturate } from '../../math-utils';
import { ExtensionType } from '../extensions';
import {
  IAnimatedMorphConfig,
  VRMExpressionBind,
  VRMExpressionOverrideType,
} from './vrm-expression';
import { VRMExpressionNameType } from './vrm-expression';

export class VRMExpression {
  public name: string;
  public expressionName: VRMExpressionNameType;
  public type: ExtensionType;
  public isBinary: boolean;

  /**
   * The current weight of the expression.
   */
  public weight: number;

  private _animatedMorph: IAnimatedMorphConfig | null;
  public time: number;
  public currentValue: number;
  public currentTimeIndex: number | null;
  public isPausing: boolean;

  private _binds: VRMExpressionBind[] = [];

  /**
   * Specify how the expression overrides blink expressions.
   */
  public overrideBlink: VRMExpressionOverrideType;

  /**
   * Specify how the expression overrides lookAt expressions.
   */
  public overrideLookAt: VRMExpressionOverrideType = 'none';

  /**
   * Specify how the expression overrides mouth expressions.
   */
  public overrideMouth: VRMExpressionOverrideType = 'none';

  constructor(expressionName: VRMExpressionNameType) {
    this.name = `VRMExpression_${expressionName}`;
    this.expressionName = expressionName;
    this.type = 'VRMExpression';
    this.isBinary = false;
    this.weight = 0.0;

    // For blending transition
    this._animatedMorph = null;
    this.time = 0;
    this.currentValue = 0;
    this.currentTimeIndex = null;
    this.isPausing = false;

    this._binds = [];

    this.overrideBlink = 'none';
    this.overrideLookAt = 'none';
    this.overrideMouth = 'none';
  }

  get animatedMorph() {
    return this._animatedMorph;
  }

  set animatedMorph(input) {
    this.resetAnimatedMorph();
    this._animatedMorph = input;
  }

  addBind(bind: VRMExpressionBind) {
    this._binds.push(bind);
  }

  applyWeight({ multiplier }: { multiplier?: number }) {
    let actualWeight = this.isBinary ? (this.weight <= 0.5 ? 0.0 : 1.0) : this.weight;
    actualWeight *= multiplier ?? 1.0;

    this._binds.forEach((bind) => bind.applyWeight(actualWeight));
  }

  /**
   * Clear previously assigned blend shapes.
   */
  clearAppliedWeight(isAllToZero?: boolean) {
    if (isAllToZero) this.weight = 0;
    this._binds.forEach((bind) => bind.clearAppliedWeight());
  }

  /**
   * A value represents how much it should override blink expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideBlinkAmount() {
    if (this.overrideBlink === 'block') {
      return 0.0 < this.weight ? 1.0 : 0.0;
    } else if (this.overrideBlink === 'blend') {
      return this.weight;
    } else {
      return 0.0;
    }
  }

  /**
   * A value represents how much it should override lookAt expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideLookAtAmount() {
    if (this.overrideLookAt === 'block') {
      return 0.0 < this.weight ? 1.0 : 0.0;
    } else if (this.overrideLookAt === 'blend') {
      return this.weight;
    } else {
      return 0.0;
    }
  }

  /**
   * A value represents how much it should override mouth expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideMouthAmount() {
    if (this.overrideMouth === 'block') {
      return 0.0 < this.weight ? 1.0 : 0.0;
    } else if (this.overrideMouth === 'blend') {
      return this.weight;
    } else {
      return 0.0;
    }
  }

  setValue(weight: number) {
    this.currentValue = weight;
    this.weight = saturate(weight);
  }

  resetAnimatedMorph() {
    this.time = 0;
    this._animatedMorph = null;
    this.currentTimeIndex = null;
  }

  stop() {
    this.resetAnimatedMorph();
  }

  pause() {
    this.isPausing = true;
  }

  play() {
    this.isPausing = false;
  }

  _findTimeIndex(time: number, times: number[] | Float32Array) {
    if (time < times[1]) return 0;

    for (let i = 1; i < times.length - 1; i++) {
      if (times[i - 1] < time && times[i + 1] > time) {
        return i;
      }
    }

    return -1;
  }

  updateBlendShape(dt: number) {
    if (!this._animatedMorph || this.isPausing) return;

    const { times, values } = this._animatedMorph;

    if (this.time === 0 && this.currentTimeIndex === null) {
      // First time trigger
      const initialValue = values[0];
      this.setValue(initialValue);
    }

    // At the end of the time
    if (this.time >= times[times.length - 1]) {
      this.resetAnimatedMorph();

      const lastValue = values[values.length - 1];
      this.setValue(lastValue);

      return;
    }

    this.time += dt;
    const timeIndex = this._findTimeIndex(this.time, times);

    if (timeIndex !== -1) {
      if (this.currentTimeIndex !== timeIndex) {
        // If is at the new keyframe point, reset the currentValue to the the setting's value on this point.
        // Because it will have the chance currentValue is not enough
        this.currentValue = values[timeIndex];
      }

      this.currentTimeIndex = timeIndex;
      const targetValue = values[this.currentTimeIndex + 1];
      const duration = times[this.currentTimeIndex] - times[this.currentTimeIndex + 1];
      const valueRange = values[this.currentTimeIndex] - values[this.currentTimeIndex + 1];

      const eachSecondValue = valueRange / duration;
      const newValue = this.currentValue + eachSecondValue * dt;

      if (
        (eachSecondValue > 0 && newValue >= targetValue) ||
        (eachSecondValue < 0 && targetValue >= newValue)
      ) {
        // Because it will have the chance that the newValue is over the targetValue
        this.setValue(targetValue);
      } else {
        this.setValue(newValue);
      }
    }
  }
}
