import * as pc from "playcanvas";

import { shaderChunksOutline } from "./shaders/outline/vrmc/shader-chunk";
import { EXTENSION_VRMC_MATERIALS_MTOON } from "./constants";

export class VRMCOutlineMaterial extends pc.StandardMaterial {
  parseGLTFAttrs(gltfMaterial: any) {
    if (gltfMaterial.hasOwnProperty("alphaMode")) {
      switch (gltfMaterial.alphaMode) {
        case "MASK":
          this.blendType = pc.BLEND_NONE;
          if (gltfMaterial.hasOwnProperty("alphaCutoff")) {
            this.alphaTest = gltfMaterial.alphaCutoff;
          } else {
            this.alphaTest = 0.5;
          }
          break;
        case "BLEND":
          this.blendType = pc.BLEND_NORMAL;

          // note: by default don't write depth on semitransparent materials
          this.depthWrite = false;
          break;
        default:
        case "OPAQUE":
          this.blendType = pc.BLEND_NONE;
          break;
      }
    } else {
      this.blendType = pc.BLEND_NONE;
    }

    if (gltfMaterial?.extensions?.[EXTENSION_VRMC_MATERIALS_MTOON]) {
      const extension =
        gltfMaterial?.extensions?.[EXTENSION_VRMC_MATERIALS_MTOON];

      const {
        outlineColorFactor,
        outlineWidthFactor,
        outlineLightingMixFactor,
        // outlineWidthMultiplyTexture,
      } = extension;

      if (outlineColorFactor) {
        this.setOutlineColorFactor(
          new pc.Color(
            Math.pow(outlineColorFactor[0], 1 / 2.2),
            Math.pow(outlineColorFactor[1], 1 / 2.2),
            Math.pow(outlineColorFactor[2], 1 / 2.2)
          )
        );
      }

      if (outlineWidthFactor) {
        this.setOutlineWidthFactor(outlineWidthFactor);
      }

      if (outlineLightingMixFactor) {
        this.setOutlineLightingMixFactor(outlineLightingMixFactor);
      }
    }

    this.cull = pc.CULLFACE_FRONT;
    this.setShaderChunks();
  }

  setShaderChunks() {
    this.chunks.APIVersion = pc.CHUNKAPI_1_70;
    const pcShaderChunks = pc.shaderChunks as any;

    this.chunks.baseVS = pcShaderChunks.baseVS;
    this.chunks.endVS = pcShaderChunks.endVS;
    this.chunks.basePS = pcShaderChunks.basePS;
    this.chunks.endPS = pcShaderChunks.endPS;

    this.chunks.baseVS += shaderChunksOutline.baseVS;
    this.chunks.endVS += shaderChunksOutline.endVS;
    this.chunks.basePS += shaderChunksOutline.basePS;
    this.chunks.endPS += shaderChunksOutline.endPS;
  }

  setOutlineWidthFactor(outlineWidthFactor: number) {
    this.setParameter("outlineWidthFactor", outlineWidthFactor);
  }

  setOutlineLightingMixFactor(outlineLightingMixFactor: number) {
    this.setParameter("outlineLightingMixFactor", outlineLightingMixFactor);
  }

  setOutlineColorFactor(outlineColorFactor: pc.Color) {
    this.setParameter("outlineColorFactor", [
      outlineColorFactor.r,
      outlineColorFactor.g,
      outlineColorFactor.b,
    ]);
  }

  setBaseColorMap(texture: pc.Texture) {
    if (!texture) return;
    this.setParameter("baseColorMap", texture);
  }
}
