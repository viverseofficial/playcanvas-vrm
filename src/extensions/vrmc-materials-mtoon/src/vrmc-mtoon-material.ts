import * as pc from 'playcanvas';

import { shaderChunksMtoon } from './shaders/mtoon/vrmc/shader-chunk';

export class VRMCMtoonMaterial extends pc.StandardMaterial {
  litFactor: pc.Color = new pc.Color(1.0, 1.0, 1.0, 1.0);
  alphaTest: number = 0;
  // opacity: number = 0;
  baseColorMap: pc.Texture | null = null;
  mapUvTransform: pc.Mat3 = new pc.Mat3();
  // normalMap: pc.Texture | null = null;
  normalMapUvTransform: pc.Mat3 = new pc.Mat3();
  normalScale: pc.Vec2 = new pc.Vec2(1, 1);
  // emissive: pc.Color = new pc.Color(0, 0, 0, 1.0);
  // emissiveIntensity: number = 1.0;
  // emissiveMap: pc.Texture | null = null;
  emissiveMapUvTransform: pc.Mat3 = new pc.Mat3();
  shadeColorFactor: pc.Color = new pc.Color(0, 0, 0, 1.0);
  shadeMultiplyTexture: pc.Texture | null = null;
  shadeMultiplyTextureUvTransform: pc.Mat3 = new pc.Mat3();
  shadingShiftFactor: number = 0.0;
  shadingShiftTexture: pc.Texture | null = null;
  shadingShiftTextureUvTransform: pc.Mat3 = new pc.Mat3();
  shadingShiftTextureScale: number = 1.0;
  shadingToonyFactor: number = 0.9;
  giEqualizationFactor: number = 0.0;
  matcapFactor: pc.Color = new pc.Color(1.0, 1.0, 1.0, 1.0);
  matcapTexture: pc.Texture | null = null;
  matcapTextureUvTransform: pc.Mat3 = new pc.Mat3();
  parametricRimColorFactor: pc.Color = new pc.Color(0, 0, 0, 1.0);
  rimMultiplyTexture: pc.Texture | null = null;
  rimMultiplyTextureUvTransform: pc.Mat3 = new pc.Mat3();
  rimLightingMixFactor: number = 0.0;
  parametricRimFresnelPowerFactor: number = 5.0;
  parametricRimLiftFactor: number = 0.0;
  outlineWidthMultiplyTexture: pc.Texture | null = null;
  outlineWidthMultiplyTextureUvTransform: pc.Mat3 = new pc.Mat3();
  outlineWidthFactor: number = 0.02;
  outlineColorFactor: pc.Color = new pc.Color(1.0, 0.5, 0.0, 1.0);
  outlineLightingMixFactor: number = 0.0;
  uvAnimationMaskTexture: pc.Texture | null = null;
  uvAnimationMaskTextureUvTransform: pc.Mat3 = new pc.Mat3();
  uvAnimationScrollXOffset: number = 0.0;
  uvAnimationScrollYOffset: number = 0.0;
  uvAnimationRotationPhase: number = 0.0;

  constructor() {
    super();
    this.useLighting = false;
    this.useSkybox = false;
  }

  parseGLTFAttrs(gltfMaterial: any, _: any, attrs: any) {
    if (gltfMaterial.hasOwnProperty('alphaMode')) {
      switch (gltfMaterial.alphaMode) {
        case 'MASK':
          this.blendType = pc.BLEND_NONE;
          if (gltfMaterial.hasOwnProperty('alphaCutoff')) {
            this.alphaTest = gltfMaterial.alphaCutoff;
          } else {
            this.alphaTest = 0.5;
          }
          break;
        case 'BLEND':
          this.blendType = pc.BLEND_NORMAL;

          // note: by default don't write depth on semitransparent materials
          this.depthWrite = false;
          break;
        default:
        case 'OPAQUE':
          this.blendType = pc.BLEND_NONE;
          break;
      }
    } else {
      this.blendType = pc.BLEND_NONE;
    }

    if (gltfMaterial?.emissiveFactor) {
      const emissiveFactor = gltfMaterial.emissiveFactor;
      this.emissive = new pc.Color(
        Math.pow(emissiveFactor[0], 1 / 2.2),
        Math.pow(emissiveFactor[1], 1 / 2.2),
        Math.pow(emissiveFactor[2], 1 / 2.2),
        1.0,
      );
    }

    if (gltfMaterial?.pbrMetallicRoughness?.baseColorFactor) {
      const baseColorFactor = gltfMaterial.pbrMetallicRoughness.baseColorFactor;

      this.diffuse = new pc.Color(
        Math.pow(baseColorFactor[0], 1 / 2.2),
        Math.pow(baseColorFactor[1], 1 / 2.2),
        Math.pow(baseColorFactor[2], 1 / 2.2),
        baseColorFactor[3],
      );
    }

    this.litFactor = this.diffuse;
    this.baseColorMap = this.diffuseMap || this.opacityMap;

    const {
      version,
      shadeColorFactor,
      shadeMultiplyTexture,
      shadingShiftFactor,
      shadingToonyFactor,
      parametricRimColorFactor,
      rimLightingMixFactor,
      parametricRimFresnelPowerFactor,
      parametricRimLiftFactor,
      outlineWidthFactor,
      outlineColorFactor,
      outlineLightingMixFactor,
    } = attrs;

    if (version == '0.0') {
      this.emissiveIntensity = 0.0;
    }

    if (shadeColorFactor) {
      this.shadeColorFactor = new pc.Color(
        Math.pow(shadeColorFactor[0], 1 / 2.2),
        Math.pow(shadeColorFactor[1], 1 / 2.2),
        Math.pow(shadeColorFactor[2], 1 / 2.2),
        1.0,
      );
    }

    this.shadeMultiplyTexture = shadeMultiplyTexture;
    this.shadingShiftFactor = shadingShiftFactor;
    this.shadingToonyFactor = shadingToonyFactor;

    if (parametricRimColorFactor) {
      this.parametricRimColorFactor = new pc.Color(
        Math.pow(parametricRimColorFactor[0], 1 / 2.2),
        Math.pow(parametricRimColorFactor[1], 1 / 2.2),
        Math.pow(parametricRimColorFactor[2], 1 / 2.2),
        1.0,
      );
    }

    this.rimLightingMixFactor = rimLightingMixFactor;
    this.parametricRimFresnelPowerFactor = parametricRimFresnelPowerFactor;
    this.parametricRimLiftFactor = parametricRimLiftFactor;
    this.outlineWidthFactor = outlineWidthFactor;
    if (outlineColorFactor) {
      this.outlineColorFactor = new pc.Color(
        Math.pow(outlineColorFactor[0], 1 / 2.2),
        Math.pow(outlineColorFactor[1], 1 / 2.2),
        Math.pow(outlineColorFactor[2], 1 / 2.2),
        1.0,
      );
    }

    this.outlineLightingMixFactor = outlineLightingMixFactor;

    this.cull = pc.CULLFACE_NONE;

    this.setShaderChunks();
    this.setShaderParameters();
  }

  setShaderChunks() {
    this.chunks.APIVersion = pc.CHUNKAPI_1_70;
    const pcShaderChunks = pc.shaderChunks as any;

    this.chunks.baseVS = pcShaderChunks.baseVS;
    this.chunks.endVS = pcShaderChunks.endVS;
    this.chunks.basePS = pcShaderChunks.basePS;
    this.chunks.endPS = pcShaderChunks.endPS;

    if (this.shadeMultiplyTexture) {
      this.chunks.basePS += `
      #define USE_SHADEMULTIPLYTEXTURE
      `;
    }

    if (this.emissiveMap) {
      this.chunks.basePS += `
      #define USE_EMISSIVEMAP
      `;
    }

    if (this.cull == pc.CULLFACE_NONE) {
      this.chunks.basePS += `
      #define DOUBLE_SIDED
      `;
    }

    this.chunks.baseVS += shaderChunksMtoon.baseVS;
    this.chunks.endVS += shaderChunksMtoon.endVS;
    this.chunks.basePS += shaderChunksMtoon.basePS;
    this.chunks.endPS += shaderChunksMtoon.endPS;
  }

  setShaderParameters() {
    this.setParameter('opacity', this.opacity);

    this.setParameter('litFactor', [this.litFactor.r, this.litFactor.g, this.litFactor.b]);

    if (this.baseColorMap) {
      this.setParameter('baseColorMap', this.baseColorMap);
    }

    this.setParameter('shadeColorFactor', [
      this.shadeColorFactor.r,
      this.shadeColorFactor.g,
      this.shadeColorFactor.b,
    ]);
    if (this.shadeMultiplyTexture) {
      this.setParameter('shadeMultiplyTexture', this.shadeMultiplyTexture);
    }
    this.setParameter('shadingShiftFactor', this.shadingShiftFactor);
    this.setParameter('shadingToonyFactor', this.shadingToonyFactor);

    if (this.emissive) {
      this.setParameter('emissive', [this.emissive.r, this.emissive.g, this.emissive.b]);
    }

    if (this.emissiveIntensity) {
      this.setParameter('emissiveIntensity', this.emissiveIntensity);
    }

    this.setParameter('parametricRimColorFactor', [
      this.parametricRimColorFactor.r,
      this.parametricRimColorFactor.g,
      this.parametricRimColorFactor.b,
    ]);

    this.setParameter('rimLightingMixFactor', this.rimLightingMixFactor);
    this.setParameter('parametricRimFresnelPowerFactor', this.parametricRimFresnelPowerFactor);
    this.setParameter('parametricRimLiftFactor', this.parametricRimLiftFactor);

    if (this.emissiveMap) {
      this.setParameter('emissiveMap', this.emissiveMap);
    }
  }

  setLightDirection(direction: pc.Vec3) {
    this.setParameter('lightDirection', [direction.x, direction.y, direction.z]);
  }

  setLightColor(color: pc.Color) {
    this.setParameter('lightColor', [color.r, color.g, color.b]);
  }
}
