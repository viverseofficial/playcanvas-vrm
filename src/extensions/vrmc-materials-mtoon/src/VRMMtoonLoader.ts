import * as pc from 'playcanvas';
import { GLTF as GLTFSchema } from '../../../types/gltf';
import { createVRMCMtoonMaterial, VRMCMtoonMaterialType } from './vrmc-mtoon-material';
import { EXTENSION_VRMC_MATERIALS_MTOON, MToonMaterialOutlineWidthMode } from './constants';

const extensionVRMCName = EXTENSION_VRMC_MATERIALS_MTOON;

type TextureAsset = pc.Asset & { resource: pc.Texture };

export type MtoonMaterialMapping = {
  meshInstance: pc.MeshInstance;
  sourceMaterial: pc.StandardMaterial;
  shaderMaterial: VRMCMtoonMaterialType;
};

export type GltfAssetResource = {
  data: {
    gltf: GLTFSchema.IGLTF;
    materials?: pc.StandardMaterial[];
  };
  textures?: TextureAsset[];
};

export class VRMMtoonLoader {
  private _pcRef: typeof pc;
  asset: pc.Asset;
  private _pcApp: pc.AppBase;

  constructor(app: pc.AppBase, pcRef: typeof pc, asset: pc.Asset) {
    this._pcApp = app;
    this._pcRef = pcRef;
    this.asset = asset;
  }

  public instantiated(entity: pc.Entity) {
    const resource = this.asset.resource as GltfAssetResource;
    if (!resource?.data?.gltf) {
      console.error('applyMaterialMtoon: gltf is undefined');
      return [];
    }

    const gltf: GLTFSchema.IGLTF = resource.data.gltf;
    const materialMappings: MtoonMaterialMapping[] = [];

    this._applyVRMCOutlineShader(entity, gltf, materialMappings);
    this._applyVRMCMtoonShader(entity, gltf, materialMappings);

    return materialMappings;
  }

  private _applyVRMCOutlineShader(
    entity: pc.Entity,
    gltf: GLTFSchema.IGLTF,
    materialMappings: MtoonMaterialMapping[],
  ) {
    const renders = entity.findComponents('render');
    const outlineShaderMaterials = new Map<pc.StandardMaterial, VRMCMtoonMaterialType>();

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

          shaderMaterial = createVRMCMtoonMaterial({
            pcApp: this._pcApp,
            pcRef: this._pcRef,
            asset: this.asset,
            isOutline: true,
            sourceMaterial: material,
            gltfMaterial,
            gltf,
          });
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

        materialMappings.push({
          meshInstance: shaderMeshInstance,
          sourceMaterial: material,
          shaderMaterial,
        });
      });
    });
  }

  private _applyVRMCMtoonShader(
    entity: pc.Entity,
    gltf: GLTFSchema.IGLTF,
    materialMappings: MtoonMaterialMapping[],
  ) {
    const shaderMaterials = new Map<pc.StandardMaterial, VRMCMtoonMaterialType>();

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
          shaderMaterial = createVRMCMtoonMaterial({
            pcApp: this._pcApp,
            pcRef: this._pcRef,
            asset: this.asset,
            sourceMaterial: material,
            gltfMaterial,
            gltf,
          });
          shaderMaterials.set(material, shaderMaterial);
        }

        materialMappings.push({
          meshInstance,
          sourceMaterial: material,
          shaderMaterial,
        });

        meshInstance.material = shaderMaterial;
      });
    });
  }
}
