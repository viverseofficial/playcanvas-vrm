import * as pc from 'playcanvas';

import { shaderChunksOutline } from './shaders/outline/vrmc/shader-chunk';
import { MToonMaterialOutlineWidthMode, MToonMaterialOutlineWidthModeType } from './constants';
import { EXTENSION_VRMC_MATERIALS_MTOON } from './constants';

export const createVRMCOutlineMaterial = (pcRef: typeof pc) => {
  return class VRMCOutlineMaterial extends pcRef.StandardMaterial {
    outlineWidthMode: MToonMaterialOutlineWidthModeType;
    outlineWidthMultiplyTexture: pc.Texture | null;
    baseColorMap: pc.Texture | null = null;

    private _asset: pc.Asset;

    constructor(asset: pc.Asset) {
      super();
      this.outlineWidthMode = MToonMaterialOutlineWidthMode.None;
      this.outlineWidthMultiplyTexture = null;

      this._asset = asset;
    }

    parseGLTFAttrs(gltfMaterial: any) {
      if (gltfMaterial.hasOwnProperty('alphaMode')) {
        switch (gltfMaterial.alphaMode) {
          case 'MASK':
            this.blendType = pcRef.BLEND_NONE;
            if (gltfMaterial.hasOwnProperty('alphaCutoff')) {
              this.alphaTest = gltfMaterial.alphaCutoff;
            } else {
              this.alphaTest = 0.5;
            }
            break;
          case 'BLEND':
            this.blendType = pcRef.BLEND_NORMAL;

            // note: by default don't write depth on semitransparent materials
            this.depthWrite = false;
            break;
          default:
          case 'OPAQUE':
            this.blendType = pcRef.BLEND_NONE;
            break;
        }
      } else {
        this.blendType = pcRef.BLEND_NONE;
      }

      const extension = gltfMaterial?.extensions?.[EXTENSION_VRMC_MATERIALS_MTOON];
      if (extension) {
        const {
          outlineColorFactor,
          outlineWidthFactor,
          outlineLightingMixFactor,
          outlineWidthMode,
          outlineWidthMultiplyTexture: outlineWidthMultiplyTextureInfo,
        } = extension;

        if (outlineWidthMode) {
          this.outlineWidthMode = outlineWidthMode as MToonMaterialOutlineWidthModeType;
        }

        if (outlineWidthMultiplyTextureInfo !== undefined) {
          const texture =
            this._asset.resource?.textures?.[outlineWidthMultiplyTextureInfo.index]?.resource;

          if (texture) {
            this.outlineWidthMultiplyTexture = texture;
            this.setOutlineWidthMultiplyTexture(texture);
          }
        }

        if (outlineColorFactor) {
          this.setOutlineColorFactor(
            new pcRef.Color(
              Math.pow(outlineColorFactor[0], 1 / 2.2),
              Math.pow(outlineColorFactor[1], 1 / 2.2),
              Math.pow(outlineColorFactor[2], 1 / 2.2),
            ),
          );
        }

        if (outlineWidthFactor) {
          this.setOutlineWidthFactor(outlineWidthFactor);
        }

        if (outlineLightingMixFactor) {
          this.setOutlineLightingMixFactor(outlineLightingMixFactor);
        }
      }

      this.cull = pcRef.CULLFACE_FRONT;
      this.setShaderChunks();

      this.baseColorMap = this.diffuseMap || this.opacityMap;
      if (this.baseColorMap) {
        this.setParameter('baseColorMap', this.baseColorMap);
      }
    }

    setShaderChunks() {
      this.chunks.APIVersion = pcRef.CHUNKAPI_1_70;
      let pcShaderChunks = pcRef.shaderChunks as any;

      this.chunks.baseVS = pcShaderChunks.baseVS;
      this.setShaderDefines();

      this.chunks.endVS = pcShaderChunks.endVS;
      this.chunks.basePS = pcShaderChunks.basePS;
      this.chunks.endPS = pcShaderChunks.endPS;

      this.chunks.baseVS += shaderChunksOutline.baseVS;
      this.chunks.endVS += shaderChunksOutline.endVS;
      this.chunks.basePS += shaderChunksOutline.basePS;
      this.chunks.endPS += shaderChunksOutline.endPS;
    }

    setShaderDefines() {
      let defines = ``;

      const USE_OUTLINEWIDTHMULTIPLYTEXTURE = this.outlineWidthMultiplyTexture !== null;
      if (USE_OUTLINEWIDTHMULTIPLYTEXTURE) {
        defines += '#define USE_OUTLINEWIDTHMULTIPLYTEXTURE\n';
      }

      const OUTLINE_WIDTH_WORLD =
        this.outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates;
      if (OUTLINE_WIDTH_WORLD) {
        defines += '#define OUTLINE_WIDTH_WORLD\n';
      }

      const OUTLINE_WIDTH_SCREEN =
        this.outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates;
      if (OUTLINE_WIDTH_SCREEN) {
        defines += '#define OUTLINE_WIDTH_SCREEN\n';
      }

      this.chunks.baseVS += defines;
    }

    setOutlineWidthFactor(outlineWidthFactor: number) {
      this.setParameter('outlineWidthFactor', outlineWidthFactor);
    }

    setOutlineLightingMixFactor(outlineLightingMixFactor: number) {
      this.setParameter('outlineLightingMixFactor', outlineLightingMixFactor);
    }

    setOutlineColorFactor(outlineColorFactor: pc.Color) {
      this.setParameter('outlineColorFactor', [
        outlineColorFactor.r,
        outlineColorFactor.g,
        outlineColorFactor.b,
      ]);
    }

    setOutlineWidthMultiplyTexture(texture: pc.Texture) {
      this.setParameter('outlineWidthMultiplyTexture', texture);

      const mat3 = new pcRef.Mat3();
      this.setParameter('outlineWidthMultiplyTextureUvTransform', mat3.data);
    }
  };
};
