import * as pc from 'playcanvas';
import { Timer } from '../timer-extension';
import { getRandom } from '../math-utils';
import { VRMExpressionManager } from '../extensions/vrm-expression/VRMExpressionManager';
import { VRMExpressionLoaderPlugin } from '../extensions/vrm-expression/VRMExpressionLoaderPlugin';
import { collectMeshInstances } from '../utils/entity';
import { IAnimatedMorphConfig } from '../extensions/vrm-expression/vrm-expression';
import { VRMExpressionPresetName } from '../extensions/vrm-map-list';

// Note: If you are using vrm-mtoon script, please add vrm-expression script after vrm-mtoon script.
export const importScript = (pcRef: typeof pc) => {
  class VrmExpression extends pcRef.ScriptType {
    asset!: pc.Asset;
    expressionManager!: VRMExpressionManager | null;
    blinkTimer!: Timer;
    talkTimer!: Timer;
    previousTalkName: string = '';
    vrmaEmotionWasPlaying = false;

    initialize() {
      const meshInstances = collectMeshInstances(this.entity);
      const loaderPlugin = new VRMExpressionLoaderPlugin(this.asset, meshInstances);
      this.expressionManager = loaderPlugin.import();

      this.blinkTimer = new Timer('blink');
      this.talkTimer = new Timer('talk');
      this.startBlink();

      this.entity.on('vrm-expression:start-emotion', this.startEmotion, this);
      this.entity.on('vrm-expression:vrma-start', this._startVRMAExpression, this);

      this.entity.on('vrm-expression:talking-state-changed', this.onTalkingStateChanged, this);
      this.entity.on('audio:is-talking-change', this.onTalkingStateChanged, this); // deprecated

      this.on('destroy', () => {
        this.entity.off('vrm-expression:start-emotion', this.startEmotion, this);
        this.entity.off('vrm-expression:vrma-start', this._startVRMAExpression, this);
        this.entity.off('vrm-expression:vrma-reset', this._resetVRMAExpression, this);
        this.entity.off('vrm-expression:talking-state-changed', this.onTalkingStateChanged, this);
        this.entity.off('audio:is-talking-change', this.onTalkingStateChanged, this); // deprecated
      });
    }

    // Specific Automatic Start Expressions
    startBlink(config?: IAnimatedMorphConfig) {
      if (!this.expressionManager) return;
      this.expressionManager.startBlink(1, config);
      const randomValue = getRandom(1, 5);
      this.blinkTimer.add(randomValue, this.startBlink, this);
    }

    stopBlink() {
      if (!this.expressionManager) return;
      this.blinkTimer.pause();
      this.expressionManager.stopBlink();
    }

    startEmotion(name: string, config?: IAnimatedMorphConfig) {
      this.expressionManager?.startEmotion(name, config);
    }

    startTalking(speed = 0.25) {
      if (!this.expressionManager) return;

      const time1 = Math.random() * 0.5;
      const time2 = Math.random() * 0.5 + 0.5;
      const valueMiddle = getRandom(0.5, 1);
      const value1 = getRandom(0.4, 0.6) * valueMiddle;
      const value2 = getRandom(0.4, 0.6) * valueMiddle;

      // The higher the speed number, the slower the animation will be
      const times = [0, time1, 0.5, time2, 1].map((time) => time * speed);
      const values = [0, value1, valueMiddle, value2, 0];

      const timerRandomValue = getRandom(0.5, 1);
      this.expressionManager.startTalking(times, values);
      this.talkTimer.add(timerRandomValue, this.startTalking, this);
    }

    stopTalking(restartSecond?: number) {
      this.talkTimer.pause();

      if (restartSecond) {
        this.talkTimer.add(restartSecond, this.startTalking, this);
      }
    }

    onTalkingStateChanged(state: boolean) {
      const timerAvailable = this.talkTimer.isPausing || !this.talkTimer.handle;
      if (state && timerAvailable) {
        this.startTalking();
      } else {
        this.stopTalking();
      }
    }

    update(dt: number) {
      if (!this.expressionManager) return;

      this.expressionManager.update(dt);
      this.blinkTimer.update(dt);
      this.talkTimer.update(dt);
    }

    private _startVRMAExpression(vrmaExpression: {
      preset: Map<VRMExpressionPresetName, IAnimatedMorphConfig>;
      custom: Map<string, IAnimatedMorphConfig>;
    }) {
      if (!this.expressionManager) return;

      this.stopBlink();
      this.expressionManager.stopAllEmotions();

      for (const [name, config] of vrmaExpression.preset.entries()) {
        this.startEmotion(name, config);
      }

      if (!this.entity.hasEvent('vrm-expression:vrma-reset')) {
        this.entity.once('vrm-expression:vrma-reset', this._resetVRMAExpression, this);
      }

      this.vrmaEmotionWasPlaying = true;
    }

    private _resetVRMAExpression() {
      // Is not playing VRMA expression, do nothing
      if (!this.vrmaEmotionWasPlaying) return;

      this.expressionManager?.stopAllEmotions();
      this.startBlink();
      this.vrmaEmotionWasPlaying = false;
    }
  }

  pcRef.registerScript(VrmExpression, 'vrmExpression');

  VrmExpression.attributes.add('asset', {
    type: 'asset',
    description: 'Set the container asset loaded from vrm avatar.',
  });
};
