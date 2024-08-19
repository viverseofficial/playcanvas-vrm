import * as pc from 'playcanvas';
import { Timer } from '../timer-extension';
import { getRandom } from '../math-utils';
import { VRMExpressionManager } from '../extensions/vrm-expression/VRMExpressionManager';
import { VRMExpressionLoaderPlugin } from '../extensions/vrm-expression/VRMExpressionLoaderPlugin';
import { collectMeshInstances } from '../entity-utils';
import { IAnimatedMorphConfig } from '../extensions/vrm-expression/vrm-expression';

export const importScript = (pcRef: typeof pc) => {
  class VrmExpression extends pcRef.ScriptType {
    asset!: pc.Asset;
    expressionManager!: VRMExpressionManager | null;
    blinkTimer!: Timer;
    talkTimer!: Timer;
    previousTalkName: string = '';

    initialize() {
      const meshInstances = collectMeshInstances(this.entity);
      const loaderPlugin = new VRMExpressionLoaderPlugin(this.asset, meshInstances);
      this.expressionManager = loaderPlugin.import();

      // expression
      this.blinkTimer = new Timer('blink');
      this.talkTimer = new Timer('talk');
      this.startBlink();

      this.entity.on('vrm-expression:start-emotion', this.startEmotion, this);
      this.entity.on('audio:is-talking-change', this.onIsTalkingChange, this);

      // vrma
      this.entity.on(`vrma: preset expression`, (vrmaExpression) => {
        for (const [name, config] of vrmaExpression.preset.entries()) {
          this.startEmotion(name, config);
        }
      });

      this.on('destroy', () => {
        this.entity.off('vrm-expression:start-emotion', this.startEmotion, this);
        this.entity.off('audio:is-talking-change', this.onIsTalkingChange, this);
      });
    }

    // Specific Expression Animation
    startBlink(config?: IAnimatedMorphConfig) {
      const randomValue = getRandom(1, 5);

      if (this.expressionManager) {
        this.expressionManager.startBlink(1, config);
        this.blinkTimer.add(randomValue, this.startBlink, this);
      }
    }

    stopBlink(restartSeconds: number) {
      if (!this.expressionManager) return;

      this.stopExpressionLoop('blink');
      this.expressionManager.stopBlink();

      if (restartSeconds) {
        this.blinkTimer.add(restartSeconds, this.startBlink, this);
      }
    }

    startEmotion(name: string, config?: IAnimatedMorphConfig) {
      if (!this.expressionManager) return;

      this.expressionManager.startEmotion(name, config);
      const time = config ? config.times[config.times.length - 1] : 3;
      this.stopBlink(time);
    }

    startTalking(speed = 0.25) {
      if (!this.expressionManager) return;

      const time1 = Math.random() * 0.5;
      const time2 = Math.random() * 0.5 + 0.5;
      const valueMiddle = getRandom(0.5, 1);
      const value1 = getRandom(0.4, 0.6) * valueMiddle;
      const value2 = getRandom(0.4, 0.6) * valueMiddle;

      // The higher the speed number, the slower the animation will be
      const times = [0, time1, 0.5, time2, 1].filter((time) => time * speed);
      const values = [0, value1, valueMiddle, value2, 0];

      const timerRandomValue = getRandom(0.5, 1);
      this.expressionManager.startTalking(times, values);
      this.talkTimer.add(timerRandomValue, this.startTalking, this);
    }

    stopTalking(restartSeconds?: number) {
      this.stopExpressionLoop('talk');

      if (restartSeconds) {
        this.talkTimer.add(restartSeconds, this.startTalking, this);
      }
    }

    onIsTalkingChange(state: boolean) {
      if (
        state &&
        ((this.talkTimer.isPausing && this.talkTimer.handle) || !this.talkTimer.handle)
      ) {
        this.startTalking();
      } else {
        this.stopTalking();
      }
    }

    stopExpressionLoop(timerName: string) {
      if (timerName === 'blink') {
        this.blinkTimer.pause();
      }

      if (timerName === 'talk') {
        this.talkTimer.pause();
      }
    }

    pauseAllExpression() {
      this.app.timeScale = 0;
    }

    restartAllExpression() {
      this.app.timeScale = 1;
    }

    update(dt: number) {
      if (!this.expressionManager) return;

      this.expressionManager.update(dt);
      this.blinkTimer.update(dt);
      this.talkTimer.update(dt);
    }
  }

  pcRef.registerScript(VrmExpression, 'vrmExpression');

  VrmExpression.attributes.add('asset', {
    type: 'asset',
    description: 'Set the container asset loaded from vrm avatar.',
  });
};
