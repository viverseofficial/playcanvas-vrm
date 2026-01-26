import * as pc from 'playcanvas';
import { VRMCMtoonMaterialType } from './vrmc-mtoon-material';
import { GLTF as GLTFSchema } from '../../../types/gltf';

export class MaterialPreprocessor {
  /**
   * Applies preprocessed material settings to the given PlayCanvas material.
   * Reference: playcanvas glb-parser.js implementation
   *
   * Note: Playcanvas dose not have beforeRoot timing to remove this extension like three.js,
   * only way is to restore here as a workaround.
   */
  static applyToMaterial(
    pcMaterial: VRMCMtoonMaterialType,
    gltfMaterial: GLTFSchema.IMaterial,
    gltf: GLTFSchema.IGLTF,
    pcRef: typeof pc,
  ): void {
    // Check if KHR_materials_unlit was applied by glb-parser
    // If so, restore the relevant properties to match glTF spec
    const hasUnlitExtension =
      gltfMaterial?.extensions?.KHR_materials_unlit !== undefined ||
      gltf.extensionsUsed?.includes('KHR_materials_unlit');

    if (hasUnlitExtension) {
      pcMaterial.diffuseMap = pcMaterial.emissiveMap;
      pcMaterial.diffuseMapUv = pcMaterial.emissiveMapUv;
      pcMaterial.diffuseMapTiling.copy(pcMaterial.emissiveMapTiling);
      pcMaterial.diffuseMapOffset.copy(pcMaterial.emissiveMapOffset);
      pcMaterial.diffuseMapRotation = pcMaterial.emissiveMapRotation;
      pcMaterial.diffuseMapChannel = pcMaterial.emissiveMapChannel;
      pcMaterial.diffuse.copy(pcMaterial.emissive);

      if (gltfMaterial.hasOwnProperty('pbrMetallicRoughness')) {
        const pbrData = gltfMaterial.pbrMetallicRoughness;

        if (pbrData && pbrData.hasOwnProperty('baseColorFactor')) {
          const [r, g, b, a] = pbrData.baseColorFactor!;
          pcMaterial.diffuse.set(r, g, b).gamma();
          pcMaterial.opacity = a;
        }
      }

      if (gltfMaterial.hasOwnProperty('emissiveFactor')) {
        // playcanvas will throw warning when emissive is black(0,0,0) and has emissive map
        // workaround: set very small value to warn nothing
        const [r, g, b] = gltfMaterial.emissiveFactor!.map((v: number) => Math.max(0.0001, v));
        pcMaterial.emissive.set(r, g, b).gamma();
      }
    }

    if (gltfMaterial.hasOwnProperty('alphaMode')) {
      switch (gltfMaterial.alphaMode) {
        case 'MASK':
          pcMaterial.blendType = pcRef.BLEND_NONE;
          if (gltfMaterial.hasOwnProperty('alphaCutoff')) {
            pcMaterial.alphaTest = gltfMaterial.alphaCutoff!;
          } else {
            pcMaterial.alphaTest = 0.5;
          }
          break;
        case 'BLEND':
          pcMaterial.blendType = pcRef.BLEND_NORMAL;
          // note: by default don't write depth on semitransparent materials
          pcMaterial.depthWrite = false;
          break;
        default:
        case 'OPAQUE':
          pcMaterial.blendType = pcRef.BLEND_NONE;
          break;
      }
    } else {
      pcMaterial.blendType = pcRef.BLEND_NONE;
    }

    // Handle doubleSided property
    if (gltfMaterial.hasOwnProperty('doubleSided') && gltfMaterial.doubleSided !== undefined) {
      pcMaterial.twoSidedLighting = gltfMaterial.doubleSided;
      pcMaterial.cull = gltfMaterial.doubleSided ? pcRef.CULLFACE_NONE : pcRef.CULLFACE_BACK;
    } else {
      pcMaterial.twoSidedLighting = false;
      pcMaterial.cull = pcRef.CULLFACE_BACK;
    }
  }
}
