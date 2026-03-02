import * as pc from 'playcanvas';
import { VRMSpringBoneLoaderPlugin } from '../extensions/vrm-spring-bone/VRMSpringBoneLoaderPlugin';
import { VRMSpringBoneManager } from '../extensions/vrm-spring-bone/VRMSpringBoneManager';

export const importScript = (pcRef: typeof pc) => {
  class VrmSpringBone extends pcRef.ScriptType {
    asset!: pc.Asset;
    springBoneManager!: VRMSpringBoneManager | null;
    activeSpringBone: boolean = true;
    isLimitedStrength: boolean = false;
    updateInterval: number = 1 / 90;
    timeSinceLastUpdate: number = 0;

    initialize() {
      const springBoneLoader = new VRMSpringBoneLoaderPlugin(pcRef, this.asset, this.entity);
      this.springBoneManager = springBoneLoader.import();
      this.isLimitedStrength = false;

      this.entity.on('vrm-spring-bone:set-enabled ', this.setEnabled, this);
      this.entity.on('toggle-spring-bone', this.setEnabled, this); // deprecated
      this.entity.on('vrm-spring-bone:set-strength-limit', this.setStrengthLimit, this);

      this.on('destroy', () => {
        this.entity.on('vrm-spring-bone:set-enabled ', this.setEnabled, this);
        this.entity.off('toggle-spring-bone', this.setEnabled, this); // deprecated
        this.entity.off('vrm-spring-bone:set-strength-limit', this.setStrengthLimit, this);
      });
    }

    setEnabled(enabled: boolean) {
      this.activeSpringBone = enabled;
    }

    setStrengthLimit(limited: boolean) {
      this.isLimitedStrength = limited;
    }

    update(dt: number) {
      if (!this.springBoneManager || !this.activeSpringBone) return;
      this.timeSinceLastUpdate += dt;
      if (this.timeSinceLastUpdate < this.updateInterval) return;

      this.springBoneManager.update(dt, this.isLimitedStrength);
      this.timeSinceLastUpdate = 0;
    }
  }

  pcRef.registerScript(VrmSpringBone, 'vrmSpringBone');

  VrmSpringBone.attributes.add('activeSpringBone', {
    type: 'boolean',
    default: true,
  });

  VrmSpringBone.attributes.add('asset', {
    type: 'asset',
    description: 'Set the container asset loaded from vrm avatar.',
  });

  VrmSpringBone.attributes.add('updateInterval', {
    type: 'number',
    default: 1 / 90, // 90 FPS
  });
};
