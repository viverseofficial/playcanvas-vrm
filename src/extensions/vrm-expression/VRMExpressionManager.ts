import { saturate, getRandomInt } from '../../math-utils';
import { ExtensionManagerNameType } from '../extensions';
import { VRMExpression } from './VRMExpression';
import {
  IAnimatedMorphConfig,
  VRMMouthExpressionNameType,
  VRMBlinkExpressionNameType,
  VRMLookAtExpressionNameType,
  VRMEmotionExpressionNameType,
} from './vrm-expression';

export class VRMExpressionManager {
  public managerName: ExtensionManagerNameType;
  public blinkExpressionNames: Set<VRMBlinkExpressionNameType>;
  public lookAtExpressionNames: Set<VRMLookAtExpressionNameType>;
  public mouthExpressionNames: Set<VRMMouthExpressionNameType>;
  public emotionExpressionNames: Set<VRMEmotionExpressionNameType>;

  private _expressions: VRMExpression[];
  private _expressionMap: { [name: string]: VRMExpression };

  public talkExpressions: VRMExpression[];
  public previousTalkName: string;
  public isBackToBlink: boolean;

  constructor() {
    this.managerName = 'expression';
    this.blinkExpressionNames = new Set(['blink', 'blinkLeft', 'blinkRight']);
    this.lookAtExpressionNames = new Set(['lookLeft', 'lookRight', 'lookUp', 'lookDown']);
    this.mouthExpressionNames = new Set(['aa', 'ee', 'ih', 'oh', 'ou']);
    this.emotionExpressionNames = new Set([
      'neutral',
      'happy',
      'angry',
      'sad',
      'relaxed',
      'surprised',
    ]);

    this._expressions = [];
    this._expressionMap = {};

    this.talkExpressions = [];
    this.previousTalkName = '';
    this.isBackToBlink = false;
  }

  registerExpression(expression: VRMExpression) {
    this._expressions.push(expression);
    this._expressionMap[expression.expressionName] = expression;
  }

  getExpression(name: string) {
    return this._expressionMap[name] ?? null;
  }

  getTalkingExpression() {
    const aExpression = this.getExpression('aa');
    const eExpression = this.getExpression('ee');
    const iExpression = this.getExpression('ih');
    const oExpression = this.getExpression('oh');
    const uExpression = this.getExpression('ou');

    return [aExpression, eExpression, iExpression, oExpression, uExpression].filter(
      (expression) => expression,
    );
  }

  setValue(name: string, weight: number) {
    const expression = this.getExpression(name);

    if (expression) {
      expression.weight = saturate(weight);
    }
  }

  // Specific expression animations
  startBlink(blinkInterval: number, config?: IAnimatedMorphConfig) {
    const blinkConfig = config || {
      times: [0, blinkInterval - 0.2, blinkInterval - 0.1, blinkInterval],
      values: [0, 0, 1, 0],
    };
    const expression = this.getExpression('blink');
    if (!expression) return;

    expression.animatedMorph = blinkConfig;
    expression.isPausing = false;

    this.clearAllAppliedWeight(true);
  }

  stopBlink() {
    const expression = this.getExpression('blink');
    if (!expression) return;

    expression.stop();
  }

  startEmotion(name: string, config?: IAnimatedMorphConfig) {
    const emotionConfig = config || {
      times: [0, 1, 2.5, 3],
      values: [0, 1, 1, 0],
    };

    const expression = this.getExpression(name);
    if (!expression) return;

    expression.animatedMorph = emotionConfig;
    expression.isPausing = false;

    this.clearAllAppliedWeight(true);
  }

  stopEmotions(names: string[]) {
    names.forEach((name) => {
      const expression = this.getExpression(name);
      if (expression) expression.stop();
    });
  }

  stopAllEmotions() {
    this._expressions.forEach((expression) => {
      expression.stop();
    });
  }

  getNextTalking(): VRMExpression | null {
    if (this.talkExpressions.length === 0) return null;

    const expressionIndex = getRandomInt(0, this.talkExpressions.length - 1);
    // If you want to do the recursion, you must have more than 1 talkExpression
    if (
      this.talkExpressions[expressionIndex].name === this.previousTalkName &&
      this.talkExpressions.length > 1
    ) {
      return this.getNextTalking();
    }

    this.previousTalkName = this.talkExpressions[expressionIndex].expressionName;

    return this.talkExpressions[expressionIndex];
  }

  startTalking(times: number[], values: number[]) {
    if (this.talkExpressions.length === 0) {
      this.talkExpressions = this.getTalkingExpression();
    }

    const talkExpression = this.getNextTalking();
    if (!talkExpression) return;

    talkExpression.animatedMorph = {
      times,
      values,
    };
  }

  stopTalking() {
    this.talkExpressions.forEach((expression) => {
      if (expression) expression.stop();
    });
  }

  clearAllAppliedWeight(isAllToZero?: boolean) {
    for (const expression of this._expressions) {
      expression.clearAppliedWeight(isAllToZero);
    }
  }

  update(dt: number) {
    for (const expression of this._expressions) {
      expression.updateBlendShape(dt);
    }

    const weightMultipliers = this._calculateWeightMultipliers();
    // Reset expression binds first
    this.clearAllAppliedWeight();

    this.isBackToBlink = true;

    // Then apply binds
    for (const expression of this._expressions) {
      let multiplier = 1.0;
      const name = expression.expressionName;

      if (this.blinkExpressionNames.has(name as VRMBlinkExpressionNameType)) {
        multiplier *= weightMultipliers.blink;
      }

      if (this.lookAtExpressionNames.has(name as VRMLookAtExpressionNameType)) {
        multiplier *= weightMultipliers.lookAt;
      }

      if (this.mouthExpressionNames.has(name as VRMMouthExpressionNameType)) {
        multiplier *= weightMultipliers.mouth;
      }

      expression.applyWeight({ multiplier });

      if (expression.weight !== 0) {
        this.isBackToBlink = false;
      }
    }
  }

  /**
   * Calculate sum of override amounts to see how much we should multiply weights of certain expressions.
   */
  _calculateWeightMultipliers() {
    let blink = 1.0;
    let lookAt = 1.0;
    let mouth = 1.0;

    this._expressions.forEach((expression) => {
      blink -= expression.overrideBlinkAmount;
      lookAt -= expression.overrideLookAtAmount;
      mouth -= expression.overrideMouthAmount;
    });

    blink = Math.max(0.0, blink);
    lookAt = Math.max(0.0, lookAt);
    mouth = Math.max(0.0, mouth);

    return { blink, lookAt, mouth };
  }
}
