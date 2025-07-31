import * as pc from 'playcanvas';
import { GLTF as GLTFSchema } from '../../../types/gltf';
import { createVRMCMtoonMaterial } from './vrmc-mtoon-material';
import { EXTENSION_VRMC_MATERIALS_MTOON, MToonMaterialOutlineWidthMode } from './constants';

const extensionVRMCName = EXTENSION_VRMC_MATERIALS_MTOON;

export class VRMMtoonLoader {
  private _pcRef: typeof pc;
  public asset: pc.Asset;

  constructor(pcRef: typeof pc, asset: pc.Asset) {
    this._pcRef = pcRef;
    this.asset = asset;
  }

  public instantiated(entity: pc.Entity) {
    if (!this.asset.resource?.data?.gltf) {
      console.error('applyMaterialMtoon: gltf is undefined');
      return;
    }

    const gltf: GLTFSchema.IGLTF = this.asset.resource.data.gltf;
    const outlineMaterials = this._applyVRMCOutlineShader(entity, gltf);
    const mtoonMaterials = this._applyVRMCMtoonShader(entity, gltf);

    return [...outlineMaterials.values(), ...mtoonMaterials.values()];
  }

  private _applyVRMCOutlineShader(entity: pc.Entity, gltf: GLTFSchema.IGLTF) {
    const renders = entity.findComponents('render');
    const outlineShaderMaterials = new Map<pc.StandardMaterial, any>();

    renders.forEach((renderComponent) => {
      const render = renderComponent as pc.RenderComponent;
      const meshInstances = render.meshInstances;
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

          const extension = gltfMaterial?.extensions?.[extensionVRMCName] as any;
          if (!extension) {
            return;
          }

          if (extension.outlineWidthMode === MToonMaterialOutlineWidthMode.None) {
            return;
          }

          shaderMaterial = createVRMCMtoonMaterial(this._pcRef, this.asset);
          shaderMaterial.isOutline = true;
          shaderMaterial.copy(material);
          shaderMaterial.name = material.name + '_outline';
          shaderMaterial.parse(gltfMaterial);
          shaderMaterial.update();
          outlineShaderMaterials.set(material, shaderMaterial);
        }

        const shaderMeshInstance = new this._pcRef.MeshInstance(
          meshInstance.mesh,
          shaderMaterial,
          render.entity,
        );

        if (meshInstance.morphInstance) {
          const morphInstance = meshInstance.morphInstance.clone();
          shaderMeshInstance.morphInstance = morphInstance;
        }

        meshInstances.push(shaderMeshInstance);
      });
    });

    return outlineShaderMaterials;
  }

  private _applyVRMCMtoonShader(entity: pc.Entity, gltf: GLTFSchema.IGLTF) {
    const shaderMaterials = new Map<pc.StandardMaterial, any>();

    const renders = entity.findComponents('render');
    renders.forEach((renderComponent) => {
      const render = renderComponent as pc.RenderComponent;
      const meshInstances = render.meshInstances;

      meshInstances.forEach((meshInstance) => {
        if ((meshInstance.material as any).isMtoonMaterial) {
          return;
        }

        const material = meshInstance.material as pc.StandardMaterial;
        let shaderMaterial = shaderMaterials.get(material);

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

        if (!shaderMaterial) {
          shaderMaterial = createVRMCMtoonMaterial(this._pcRef, this.asset);
          shaderMaterials.set(material, shaderMaterial);
        }

        shaderMaterial.copy(material);
        shaderMaterial.parse(gltfMaterial);
        meshInstance.material = shaderMaterial;
        shaderMaterial.update();
      });
    });

    return shaderMaterials;
  }
}
