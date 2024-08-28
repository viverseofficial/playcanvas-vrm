import * as pc from 'playcanvas';
import VRMMaterialsV0CompatPlugin from './plugins/VRMMaterialsV0CompatPlugin';
import { GLTF as GLTFSchema } from '../../../types/gltf';
import { createVRMCOutlineMaterial } from './vrmc-outline-material';
import { createVRMCMtoonMaterial } from './vrmc-mtoon-material';
import { EXTENSION_VRMC_MATERIALS_MTOON } from './constants';
import { RenderStates } from '../../../helpers/RenderStates/RenderStates';

const extensionVRMCName = EXTENSION_VRMC_MATERIALS_MTOON;

export class VRMMtoonLoader {
  private _pcRef: typeof pc;
  private _renderStates: RenderStates;
  public asset: pc.Asset;

  constructor(pcRef: typeof pc, asset: pc.Asset, renderStates: RenderStates) {
    this._pcRef = pcRef;
    this._renderStates = renderStates;
    this.asset = asset;

    const v0CompatPlugin = new VRMMaterialsV0CompatPlugin(this._pcRef, this.asset);
    v0CompatPlugin.parseMaterials();
    this._addUserIdToMaterials();
  }

  public instantiated(entity: pc.Entity) {
    if (!this.asset.resource?.data?.gltf) {
      console.error('applyMaterialMtoon: gltf is undefined');
      return;
    }

    const gltf: GLTFSchema.IGLTF = this.asset.resource.data.gltf;
    this._applyVRMCOutlineShader(entity, gltf);
    this._applyVRMCMtoonShader(entity, gltf);
  }

  private _addUserIdToMaterials() {
    this.asset.resource?.data?.materials?.forEach(
      (material: pc.StandardMaterial, index: number) => {
        material.userId = `material_${index}`;
      },
    );
  }

  private _applyVRMCOutlineShader(entity: pc.Entity, gltf: GLTFSchema.IGLTF) {
    const renders = entity.findComponents('render');
    const outlineShaderMaterials = new Map<pc.StandardMaterial, any>();

    renders.forEach((renderComponent) => {
      const render = renderComponent as pc.RenderComponent;
      const meshInstances = render.meshInstances;
      const VRMCOutlineMaterial = createVRMCOutlineMaterial(this._pcRef);
      meshInstances.forEach((meshInstance) => {
        const material = meshInstance.material as pc.StandardMaterial;
        let shaderMaterial = outlineShaderMaterials.get(material);

        if (!shaderMaterial) {
          const index = material.userId.split('_')?.[1] ?? -1;
          const parsedIndex = parseInt(index);
          if (parsedIndex === -1) {
            // applyVRMCOutlineShader: index is undefined
            return;
          }

          const gltfMaterial = gltf.materials?.[parsedIndex];
          if (!gltfMaterial) {
            console.error('applyVRMCOutlineShader: gltfMaterial is undefined');
            return;
          }

          shaderMaterial = new VRMCOutlineMaterial(this.asset);
          shaderMaterial.copy(material);
          shaderMaterial.name = material.name + '_outline';
          shaderMaterial.parseGLTFAttrs(gltfMaterial);
          shaderMaterial.update();
          outlineShaderMaterials.set(material, shaderMaterial);
        }

        const shaderMeshInstance = new this._pcRef.MeshInstance(
          meshInstance.mesh,
          shaderMaterial,
          render.entity,
        );

        meshInstances.push(shaderMeshInstance);
      });
    });
  }

  private _applyVRMCMtoonShader(entity: pc.Entity, gltf: GLTFSchema.IGLTF) {
    const VRMCMtoonMaterial = createVRMCMtoonMaterial(this._pcRef);

    const renders = entity.findComponents('render');
    renders.forEach((renderComponent) => {
      const render = renderComponent as pc.RenderComponent;
      const meshInstances = render.meshInstances;

      meshInstances.forEach((meshInstance) => {
        const material = meshInstance.material as pc.StandardMaterial;

        const index = material.userId.split('_')?.[1] ?? -1;
        const parsedIndex = parseInt(index);
        if (parsedIndex === -1) {
          // applyVRMCMtoonShader: index is undefined
          return;
        }

        const gltfMaterial = gltf.materials?.[parsedIndex];
        if (!gltfMaterial) {
          console.error('applyVRMCMtoonShader: gltfMaterial is undefined');
          return;
        }

        const extension = gltfMaterial?.extensions?.[extensionVRMCName];

        if (!extension) {
          return;
        }

        const shaderMaterial = new VRMCMtoonMaterial(this.asset, this._renderStates);
        shaderMaterial.copy(material);
        shaderMaterial.parse(gltfMaterial);
        meshInstance.material = shaderMaterial;
        shaderMaterial.update();
      });
    });
  }
}
