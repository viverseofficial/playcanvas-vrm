import * as pc from 'playcanvas';
import { VRMSpringBoneLoaderPlugin } from '../extensions/vrm-spring-bone/VRMSpringBoneLoaderPlugin';
import { VRMSpringBoneManager } from '../extensions/vrm-spring-bone/VRMSpringBoneManager';

export const importScript = (pcRef: typeof pc) => {
  class VrmSpringBone extends pcRef.ScriptType {
    asset!: pc.Asset;
    springBoneManager!: VRMSpringBoneManager | null;
    activeSpringBone: boolean = true;
    isWalking: boolean = false;

    initialize() {
      const springBoneLoader = new VRMSpringBoneLoaderPlugin(pcRef, this.asset, this.entity);
      this.springBoneManager = springBoneLoader.import();
      this.isWalking = false;

      this.entity.on('toggle-spring-bone', this.toggleSpringBone, this);
      this.entity.on('toggle-is-walking', this.toggleIsWalking, this);

      this.on('destroy', () => {
        this.entity.off('toggle-spring-bone', this.toggleSpringBone, this);
        this.entity.on('toggle-is-walking', this.toggleIsWalking, this);
      });
    }

    toggleSpringBone(isActive: boolean) {
      this.activeSpringBone = isActive;
    }

    toggleIsWalking(isWalking: boolean) {
      this.isWalking = isWalking;
    }

    update(dt: number) {
      if (!this.springBoneManager || !this.activeSpringBone) return;

      this.springBoneManager.update(dt, this.isWalking);
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
};
