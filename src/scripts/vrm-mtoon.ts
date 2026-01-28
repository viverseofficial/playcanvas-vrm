import * as pc from 'playcanvas';
import VRMMaterialsV0CompatPlugin from '../extensions/vrmc-materials-mtoon/src/plugins/VRMMaterialsV0CompatPlugin';
import { GltfAssetResource, VRMMtoonLoader } from '../extensions/vrmc-materials-mtoon';

export const importScript = (pcRef: typeof pc) => {
  class VrmMtoon extends pcRef.ScriptType {
    asset!: pc.Asset;
    shaderMaterials!: Array<any>;

    initialize() {
      this.convertVRMMtoonMaterials(pcRef, this.asset);
      const mtoonLoader = new VRMMtoonLoader(this.app, pcRef, this.asset);
      mtoonLoader.instantiated(this.entity);
    }

    convertVRMMtoonMaterials(pcRef: typeof pc, asset: pc.Asset) {
      const v0CompatPlugin = new VRMMaterialsV0CompatPlugin(pcRef, asset);
      v0CompatPlugin.parseMaterials();

      const resource = asset.resource as GltfAssetResource | undefined;
      resource?.data?.materials?.forEach((material: pc.StandardMaterial, index: number) => {
        material.userId = `material_${index}`;
      });
    }
  }

  pcRef.registerScript(VrmMtoon, 'vrmMtoon');

  VrmMtoon.attributes.add('asset', {
    type: 'asset',
    description: 'Set the container asset loaded from vrm avatar.',
  });
};
