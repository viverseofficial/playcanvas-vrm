import * as pc from 'playcanvas';
import VRMMaterialsV0CompatPlugin from '../extensions/vrmc-materials-mtoon/src/plugins/VRMMaterialsV0CompatPlugin';
import {
  GltfAssetResource,
  MtoonMaterialMapping,
  VRMMtoonLoader,
} from '../extensions/vrmc-materials-mtoon';

export const importScript = (pcRef: typeof pc) => {
  class VrmMtoon extends pcRef.ScriptType {
    asset!: pc.Asset;
    autoInitialize: boolean = true;
    materialMappings: MtoonMaterialMapping[] = [];

    initialize() {
      this._initializeMtoon();
      this._toggleEnabled(this.autoInitialize);
      this.entity.on('toggle-mtoon', this._toggleEnabled, this);

      this.on('destroy', () => {
        this.entity.off('toggle-mtoon', this._toggleEnabled, this);
      });
    }

    private _initializeMtoon() {
      this._convertVRMMtoonMaterials(pcRef, this.asset);
      const mtoonLoader = new VRMMtoonLoader(this.app, pcRef, this.asset);
      const materialMappings = mtoonLoader.instantiated(this.entity);
      this.materialMappings = materialMappings;
    }

    private _toggleEnabled(isActive: boolean) {
      if (isActive) {
        this._activateMtoon();
      } else {
        this._deactivateMtoon();
      }
    }

    private _activateMtoon() {
      this.materialMappings.forEach(({ meshInstance, shaderMaterial }) => {
        meshInstance.material = shaderMaterial;
        meshInstance.material.update();
        if (shaderMaterial.isOutline) meshInstance.visible = true;
      });
    }

    private _deactivateMtoon() {
      this.materialMappings.forEach(({ meshInstance, sourceMaterial, shaderMaterial }) => {
        meshInstance.material = sourceMaterial;
        meshInstance.material.update();
        if (shaderMaterial.isOutline) meshInstance.visible = false;
      });
    }

    private _convertVRMMtoonMaterials(pcRef: typeof pc, asset: pc.Asset) {
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

  VrmMtoon.attributes.add('autoInitialize', {
    type: 'boolean',
    description: 'Initialize MToon materials on script initialization.',
    default: true,
  });
};
