import * as pc from 'playcanvas';

export const applyMaterialMtoon = (asset: pc.Asset, VRMLoader: any) => {
  const glbResource = asset.resource.data;
  const { gltf } = glbResource;
  return {
    instantiated: (entity: pc.Entity) => {
      const getLightDirection = (): pc.Vec3 => {
        const lightEntity = pc.Application.getApplication()?.root.findByName('light');

        if (!lightEntity) {
          throw new Error('Light entity not found');
        }

        return lightEntity.forward.clone();
      };

      const getLightColor = (): pc.Color => {
        const lightEntity = pc.Application.getApplication()?.root.findByName('light');

        if (!lightEntity) {
          throw new Error('Light entity not found');
        }

        return (lightEntity as any).light.color.clone();
      };

      const applyVRMCMtoonShader = (gltfMaterial: any, gltf: any, attrs: any) => {
        if (entity) {
          const renders = entity.findComponents('render');
          renders.forEach((renderComponent) => {
            const render = renderComponent as pc.RenderComponent;
            const meshInstances = render.meshInstances;
            for (let i = 0; i < meshInstances.length; i++) {
              const meshInstance = meshInstances[i];
              const material = meshInstance.material;
              if (material.name === gltfMaterial.name) {
                const VRMCMtoonMaterial = VRMLoader.VrmcMaterialsMtoon.createVRMCMtoonMaterial(pc);
                const shaderMaterial = new VRMCMtoonMaterial();
                shaderMaterial.copy(material as pc.StandardMaterial);

                shaderMaterial.parseGLTFAttrs(gltfMaterial, gltf, attrs);
                shaderMaterial.setLightDirection(getLightDirection());
                shaderMaterial.setLightColor(getLightColor());
                meshInstance.material = shaderMaterial;
                shaderMaterial.update();
              }
            }
          });
        }
      };

      const outlineShaderMeshInstancesByRender: Map<pc.RenderComponent, pc.MeshInstance[]> =
        new Map();

      const applyVRMCOutlineShader = (gltfMaterial: any) => {
        if (entity) {
          const renders = entity.findComponents('render');

          renders.forEach((renderComponent) => {
            const render = renderComponent as pc.RenderComponent;
            const meshInstances = render.meshInstances;

            const shaderMeshInstances: pc.MeshInstance[] = [];

            for (let i = 0; i < meshInstances.length; i++) {
              const meshInstance = meshInstances[i];
              const material = meshInstance.material;
              if (material.name === gltfMaterial.name) {
                const shaderBaseColorMap =
                  (material as any).diffuseMap || (material as any).emissiveMap;

                if (shaderBaseColorMap && meshInstance) {
                  const VRMCOutlineMaterial =
                    VRMLoader.VrmcMaterialsMtoon.createVRMCOutlineMaterial(pc);
                  const shaderMaterial = new VRMCOutlineMaterial();
                  shaderMaterial.copy(material as pc.StandardMaterial);
                  shaderMaterial.name = material.name + '_outline';
                  const shaderMeshInstance = new pc.MeshInstance(
                    meshInstance.mesh,
                    shaderMaterial,
                    render.entity,
                  );

                  shaderMaterial.parseGLTFAttrs(gltfMaterial);
                  shaderMeshInstance.material = shaderMaterial;
                  shaderMaterial.setBaseColorMap(shaderBaseColorMap);
                  shaderMaterial.update();
                  shaderMeshInstances.push(shaderMeshInstance);
                }
              }
            }

            const shaderMeshInstancesExist = outlineShaderMeshInstancesByRender.get(render);
            if (shaderMeshInstancesExist) {
              shaderMeshInstancesExist.push(...shaderMeshInstances);
              outlineShaderMeshInstancesByRender.set(render, shaderMeshInstancesExist);
            } else {
              outlineShaderMeshInstancesByRender.set(render, shaderMeshInstances);
            }
          });
        }
      };

      const finalizeOutlineShader = () => {
        if (entity) {
          const renders = entity.findComponents('render');
          renders.forEach((renderComponent) => {
            const render = renderComponent as pc.RenderComponent;
            const shaderMeshInstances = outlineShaderMeshInstancesByRender.get(render);
            if (shaderMeshInstances && shaderMeshInstances.length > 0) {
              render.meshInstances.push(...shaderMeshInstances);
            }
          });
        }
      };

      if (gltf.extensionsUsed) {
        const extensionVRMCName = VRMLoader.VrmcMaterialsMtoon.EXTENSION_VRMC_MATERIALS_MTOON;
        const extensionVRMName = VRMLoader.VrmcMaterialsMtoon.EXTENSION_VRM;

        if (gltf.extensionsUsed.includes(extensionVRMCName)) {
          gltf.materials.forEach((material: any) => {
            if (material.extensions.hasOwnProperty(extensionVRMCName)) {
              const extension = material.extensions[extensionVRMCName];
              if (extension.shadeMultiplyTexture != undefined) {
                const asset = glbResource.textures[extension.shadeMultiplyTexture];
                material.shadeMultiplyTexture = asset.resource;
              }
              applyVRMCMtoonShader(material, gltf, extension);
              applyVRMCOutlineShader(material);
            }
          });

          finalizeOutlineShader();
        } else if (gltf.extensionsUsed.includes(extensionVRMName)) {
          // convert VRM attributes from 0.0 to 1.0
          // base on https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/MToon_comparision.md

          const materialProperties = gltf.extensions[extensionVRMName].materialProperties;

          const materialNewMap = new Map();

          gltf.materials.forEach((material: any) => {
            materialProperties.forEach((materialProperty: any) => {
              if (materialProperty.name === material.name) {
                const materialNew = VRMLoader.VrmcMaterialsMtoon.parseV0MToonProperties(
                  pc,
                  materialProperty,
                  material,
                );
                materialNewMap.set(materialProperty.name, materialNew);
              }
            });
          });

          gltf.materials.forEach((material: any) => {
            const materialNew = materialNewMap.get(material.name);
            const extension = materialNew?.extensions[extensionVRMCName];
            if (materialNew && extension) {
              if (extension.shadeMultiplyTexture !== undefined) {
                const asset = glbResource.textures[extension.shadeMultiplyTexture.index];
                material.shadeMultiplyTexture = asset.resource;
                extension.shadeMultiplyTexture = asset.resource;
              }
              material.extensions[extensionVRMCName] = extension;
              applyVRMCMtoonShader(materialNew, gltf, extension);
              applyVRMCOutlineShader(material);
            }
          });

          finalizeOutlineShader();
        }
      }
    },
  };
};
