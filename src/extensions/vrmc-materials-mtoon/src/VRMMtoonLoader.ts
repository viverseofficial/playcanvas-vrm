import * as pc from 'playcanvas';
import { GLTF as GLTFSchema } from '../../../types/gltf';
import { createVRMCOutlineMaterial } from './vrmc-outline-material';
import { createVRMCMtoonMaterial } from './vrmc-mtoon-material';

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

    return outlineShaderMaterials;
  }

  private _applyVRMCMtoonShader(entity: pc.Entity, gltf: GLTFSchema.IGLTF) {
    const VRMCMtoonMaterial = createVRMCMtoonMaterial(this._pcRef);
    const shaderMaterials = new Map<pc.StandardMaterial, any>();

    const renders = entity.findComponents('render');
    renders.forEach((renderComponent) => {
      const render = renderComponent as pc.RenderComponent;
      const meshInstances = render.meshInstances;

      meshInstances.forEach((meshInstance) => {
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

        if (!shaderMaterial) {
          shaderMaterial = new VRMCMtoonMaterial(this.asset);
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
