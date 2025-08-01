import * as pc from 'playcanvas';
import VRMMaterialsV0CompatPlugin from '../extensions/vrmc-materials-mtoon/src/plugins/VRMMaterialsV0CompatPlugin';
import { RenderStates } from '../helpers/RenderStates';
import { VRMMtoonLoader } from '../extensions/vrmc-materials-mtoon';

export const convertVRMMtoonMaterials = (pcRef: typeof pc, asset: pc.Asset) => {
  const v0CompatPlugin = new VRMMaterialsV0CompatPlugin(pcRef, asset);
  v0CompatPlugin.parseMaterials();

  asset.resource?.data?.materials?.forEach((material: pc.StandardMaterial, index: number) => {
    material.userId = `material_${index}`;
  });
};

export const importScript = (pcRef: typeof pc) => {
  const renderStates = new RenderStates(pcRef);

  class VrmMtoon extends pcRef.ScriptType {
    asset!: pc.Asset;
    shaderMaterials!: Array<any>;

    renderStates!: RenderStates;

    initialize() {
      renderStates.setApp(this.app);
      this.renderStates = renderStates;

      const mtoonLoader = new VRMMtoonLoader(pcRef, this.asset);
      this.shaderMaterials = mtoonLoader.instantiated(this.entity) || [];

      this.on('destroy', () => {
        this.shaderMaterials.forEach((material) => {
          material.destroy();
        });

        this.shaderMaterials = [];
      });
    }

    update() {
      const lightStateInfo = this.renderStates.lightStateInfo;
      if (!lightStateInfo) return;

      this.shaderMaterials.forEach((material) => {
        if (material.updateLightUniforms) {
          material.updateLightUniforms(lightStateInfo);
          material.update();
        }
      });
    }
  }

  pcRef.registerScript(VrmMtoon, 'vrmMtoon');

  VrmMtoon.attributes.add('asset', {
    type: 'asset',
    description: 'Set the container asset loaded from vrm avatar.',
  });
};
