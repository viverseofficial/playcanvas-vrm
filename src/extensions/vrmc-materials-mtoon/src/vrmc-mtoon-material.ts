import * as pc from 'playcanvas';
import { shaderChunksMtoon } from './shaders/mtoon/vrmc/shader-chunk';
import { updateTextureMatrix } from './utils';
import {
  EXTENSION_VRMC_MATERIALS_MTOON,
  MToonMaterialOutlineWidthMode,
  MToonMaterialOutlineWidthModeType,
} from './constants';
import { RenderStates } from '../../../helpers/RenderStates/RenderStates';

const textureTransformExtensionName = 'KHR_texture_transform';

export const createVRMCMtoonMaterial = (pcRef: typeof pc) => {
  return class VRMCMtoonMaterial extends pcRef.StandardMaterial {
    litFactor: pc.Color = new pcRef.Color(1.0, 1.0, 1.0, 1.0);
    alphaTest: number = 0;
    baseColorMap: pc.Texture | null = null;
    mapUvTransform: pc.Mat3 = new pcRef.Mat3();
    normalMapUvTransform: pc.Mat3 = new pcRef.Mat3();
    normalScale: pc.Vec2 = new pcRef.Vec2(1, 1);
    emissiveMapUvTransform: pc.Mat3 = new pcRef.Mat3();
    shadeColorFactor: pc.Color = new pcRef.Color(0, 0, 0, 1.0);
    shadeMultiplyTexture: pc.Texture | null = null;
    shadeMultiplyTextureUvTransform: pc.Mat3 = new pcRef.Mat3();
    shadingShiftFactor: number = 0.0;
    shadingShiftTexture: pc.Texture | null = null;
    shadingShiftTextureUvTransform: pc.Mat3 = new pcRef.Mat3();
    shadingShiftTextureScale: number = 1.0;
    shadingToonyFactor: number = 0.9;
    giEqualizationFactor: number = 0.0;
    matcapFactor: pc.Color = new pcRef.Color(1.0, 1.0, 1.0, 1.0);
    matcapTexture: pc.Texture | null = null;
    matcapTextureUvTransform: pc.Mat3 = new pcRef.Mat3();
    parametricRimColorFactor: pc.Color = new pcRef.Color(0, 0, 0, 1.0);
    rimMultiplyTexture: pc.Texture | null = null;
    rimMultiplyTextureUvTransform: pc.Mat3 = new pcRef.Mat3();
    rimLightingMixFactor: number = 0.0;
    parametricRimFresnelPowerFactor: number = 5.0;
    parametricRimLiftFactor: number = 0.0;
    uvAnimationMaskTexture: pc.Texture | null = null;
    uvAnimationMaskTextureUvTransform: pc.Mat3 = new pcRef.Mat3();
    uvAnimationScrollXOffset: number = 0.0;
    uvAnimationScrollYOffset: number = 0.0;
    uvAnimationRotationPhase: number = 0.0;

    isOutline: boolean = false;
    outlineWidthMode: MToonMaterialOutlineWidthModeType = MToonMaterialOutlineWidthMode.None;
    outlineWidthMultiplyTexture: pc.Texture | null = null;
    outlineWidthMultiplyTextureUvTransform: pc.Mat3 = new pcRef.Mat3();
    outlineWidthFactor: number = 0.02;
    outlineColorFactor: pc.Color = new pcRef.Color(1.0, 0.5, 0.0, 1.0);
    outlineLightingMixFactor: number = 0.0;

    private _asset: pc.Asset;
    private _renderStates: RenderStates;
    private _vec3A: pc.Vec3;

    constructor(asset: pc.Asset, renderStates: RenderStates) {
      super();
      this.useLighting = false;
      this._asset = asset;
      this._vec3A = new pcRef.Vec3();

      this._renderStates = renderStates;
      this._renderStates.addMaterial(this);
    }

    parse(gltfMaterial: any) {
      // StandardMaterial parameters
      this.litFactor = this.diffuse;

      if (gltfMaterial.hasOwnProperty('alphaMode')) {
        switch (gltfMaterial.alphaMode) {
          case 'MASK':
            this.blendType = pcRef.BLEND_NONE;
            if (
              gltfMaterial.hasOwnProperty('alphaCutoff') &&
              gltfMaterial.alphaCutoff !== undefined
            ) {
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

      this.baseColorMap = this.diffuseMap || this.emissiveMap;

      if (this.baseColorMap) {
        updateTextureMatrix(pcRef, this.mapUvTransform, {
          offset: [this.diffuseMapOffset.x, this.diffuseMapOffset.y],
          rotation: this.diffuseMapRotation,
        });
      }

      if (this.normalMap) {
        this.normalScale.set(this.bumpiness, this.bumpiness);
        updateTextureMatrix(pcRef, this.normalMapUvTransform, {
          offset: [this.normalDetailMapOffset.x, this.normalDetailMapOffset.y],
          rotation: this.normalMapRotation,
        });
      }

      if (this.emissiveMap) {
        updateTextureMatrix(pcRef, this.normalMapUvTransform, {
          offset: [this.emissiveMapOffset.x, this.emissiveMapOffset.y],
          rotation: this.emissiveMapRotation,
        });
      }

      if (gltfMaterial.emissiveFactor) {
        const emissiveFactor = gltfMaterial.emissiveFactor;
        this.emissive = new pcRef.Color(
          emissiveFactor[0],
          emissiveFactor[1],
          emissiveFactor[2],
          1.0,
        );
      }

      if (gltfMaterial.pbrMetallicRoughness?.baseColorFactor) {
        const baseColorFactor = gltfMaterial.pbrMetallicRoughness.baseColorFactor;
        this.diffuse = new pcRef.Color(
          Math.pow(baseColorFactor[0], 1 / 2.2),
          Math.pow(baseColorFactor[1], 1 / 2.2),
          Math.pow(baseColorFactor[2], 1 / 2.2),
          baseColorFactor[3],
        );
      }

      // Extension parameters
      const extension = gltfMaterial?.extensions?.[EXTENSION_VRMC_MATERIALS_MTOON];

      const {
        shadeColorFactor,
        shadeMultiplyTexture: shadeMultiplyTextureInfo,
        shadingShiftFactor,
        shadingToonyFactor,
        parametricRimColorFactor,
        rimLightingMixFactor,
        parametricRimFresnelPowerFactor,
        parametricRimLiftFactor,
        outlineWidthFactor,
        outlineColorFactor,
        outlineLightingMixFactor,
        shadingShiftTexture: shadingShiftTextureInfo,
        giEqualizationFactor,
        rimMultiplyTexture: rimMultiplyTextureInfo,
        matcapTexture: matcapTextureInfo,
        matcapFactor,
        uvAnimationMaskTexture,
        outlineWidthMode,
        outlineWidthMultiplyTexture: outlineWidthMultiplyTextureInfo,
      } = extension;

      if (uvAnimationMaskTexture) {
        TODO: uvAnimationMaskTexture;
      }

      if (giEqualizationFactor !== undefined) {
        this.giEqualizationFactor = giEqualizationFactor;
      }

      if (shadeColorFactor) {
        this.shadeColorFactor = new pcRef.Color(
          Math.pow(shadeColorFactor[0], 1 / 2.2),
          Math.pow(shadeColorFactor[1], 1 / 2.2),
          Math.pow(shadeColorFactor[2], 1 / 2.2),
          1.0,
        );
      }

      if (shadeMultiplyTextureInfo !== undefined) {
        const texture = this._asset.resource?.textures?.[shadeMultiplyTextureInfo.index]?.resource;
        if (texture) {
          this.shadeMultiplyTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.shadeMultiplyTextureUvTransform,
            shadeMultiplyTextureInfo.extensions?.[textureTransformExtensionName],
          );
        }
      }

      if (rimMultiplyTextureInfo !== undefined) {
        const texture = this._asset.resource?.textures?.[rimMultiplyTextureInfo.index]?.resource;

        if (texture) {
          this.rimMultiplyTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.rimMultiplyTextureUvTransform,
            rimMultiplyTextureInfo.extensions?.[textureTransformExtensionName],
          );
        }
      }

      if (matcapTextureInfo !== undefined) {
        const texture = this._asset.resource?.textures?.[matcapTextureInfo.index]?.resource;
        if (texture) {
          this.matcapTexture = texture;
        }
      }

      if (shadingShiftTextureInfo !== undefined) {
        const texture = this._asset.resource?.textures?.[shadingShiftTextureInfo.index]?.resource;
        if (texture) {
          this.shadingShiftTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.shadingShiftTextureUvTransform,
            shadingShiftTextureInfo.extensions?.[textureTransformExtensionName],
          );
        }

        if (shadingShiftTextureInfo.scale !== undefined) {
          this.shadingShiftTextureScale = shadingShiftTextureInfo.scale;
        }
      }

      if (matcapFactor) {
        this.matcapFactor = new pcRef.Color(
          Math.pow(matcapFactor[0], 1 / 2.2),
          Math.pow(matcapFactor[1], 1 / 2.2),
          Math.pow(matcapFactor[2], 1 / 2.2),
          1.0,
        );
      }

      this.shadingShiftFactor = shadingShiftFactor;
      this.shadingToonyFactor = shadingToonyFactor;

      if (parametricRimColorFactor) {
        this.parametricRimColorFactor = new pcRef.Color(
          Math.pow(parametricRimColorFactor[0], 1 / 2.2),
          Math.pow(parametricRimColorFactor[1], 1 / 2.2),
          Math.pow(parametricRimColorFactor[2], 1 / 2.2),
          1.0,
        );
      }

      this.rimLightingMixFactor = rimLightingMixFactor;
      this.parametricRimFresnelPowerFactor = parametricRimFresnelPowerFactor;
      this.parametricRimLiftFactor = parametricRimLiftFactor;

      // Outline
      this.outlineWidthFactor = outlineWidthFactor;
      if (outlineColorFactor) {
        this.outlineColorFactor = new pcRef.Color(
          Math.pow(outlineColorFactor[0], 1 / 2.2),
          Math.pow(outlineColorFactor[1], 1 / 2.2),
          Math.pow(outlineColorFactor[2], 1 / 2.2),
          1.0,
        );
      }

      if (outlineWidthMode) {
        this.outlineWidthMode = outlineWidthMode as MToonMaterialOutlineWidthModeType;
      }

      if (outlineWidthMultiplyTextureInfo !== undefined) {
        const texture =
          this._asset.resource?.textures?.[outlineWidthMultiplyTextureInfo.index]?.resource;

        if (texture) {
          this.outlineWidthMultiplyTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.outlineWidthMultiplyTextureUvTransform,
            outlineWidthMultiplyTextureInfo.extensions?.[textureTransformExtensionName],
          );
        }
      }
      this.outlineLightingMixFactor = outlineLightingMixFactor;
      if (this.isOutline) this.cull = pcRef.CULLFACE_FRONT;

      this.setShaderChunks();
      this.setShaderUniforms();
    }

    setShaderChunks() {
      this.chunks.APIVersion = pcRef.CHUNKAPI_1_70;
      const pcShaderChunks = pcRef.shaderChunks as any;

      this.chunks.baseVS = pcShaderChunks.baseVS;
      this.chunks.endVS = pcShaderChunks.endVS;
      this.chunks.basePS = pcShaderChunks.basePS;
      this.chunks.endPS = pcShaderChunks.endPS;

      if (this.shadeMultiplyTexture) {
        this.chunks.basePS += '#define USE_SHADEMULTIPLYTEXTURE\n';
      }

      if (this.emissiveMap) {
        this.chunks.basePS += '#define USE_EMISSIVEMAP\n';
      }

      if (this.baseColorMap) {
        this.chunks.basePS += '#define USE_MAP\n';
      }

      if (this.normalMap) {
        this.chunks.basePS += '#define USE_NORMALMAP\n';
      }

      if (this.cull === pcRef.CULLFACE_NONE) {
        this.chunks.basePS += '#define DOUBLE_SIDED\n';
      }

      if (this.matcapTexture) {
        this.chunks.basePS += '#define USE_MATCAPTEXTURE\n';
      }

      const useUvInVert = this.outlineWidthMultiplyTexture !== null;
      const useUvInFrag =
        this.diffuseMap !== null ||
        this.normalMap !== null ||
        this.emissiveMap !== null ||
        this.shadeMultiplyTexture !== null ||
        this.shadingShiftTexture !== null ||
        this.rimMultiplyTexture !== null ||
        this.uvAnimationMaskTexture !== null;

      if (useUvInVert || useUvInFrag) {
        this.chunks.basePS += '#define MTOON_USE_UV\n';
      }

      if (useUvInVert && !useUvInFrag) {
        console.log('Adding MTOON_UVS_VERTEX_ONLY');
        this.chunks.basePS += '#define MTOON_UVS_VERTEX_ONLY\n';
      }

      const USE_RIMMULTIPLYTEXTURE = this.rimMultiplyTexture;
      if (USE_RIMMULTIPLYTEXTURE) {
        this.chunks.basePS += '#define USE_RIMMULTIPLYTEXTURE\n';
      }

      const USE_UVANIMATIONMASKTEXTURE = this.uvAnimationMaskTexture !== null;
      if (USE_UVANIMATIONMASKTEXTURE) {
        this.chunks.basePS += '#define USE_UVANIMATIONMASKTEXTURE\n';
      }

      const OPAQUE = this.blendType === pcRef.BLEND_NONE;
      if (OPAQUE) {
        this.chunks.basePS += '#define OPAQUE\n';
      }

      const USE_OUTLINEWIDTHMULTIPLYTEXTURE = this.outlineWidthMultiplyTexture !== null;
      if (USE_OUTLINEWIDTHMULTIPLYTEXTURE) {
        this.chunks.baseVS += '#define USE_OUTLINEWIDTHMULTIPLYTEXTURE\n';
      }

      const OUTLINE_WIDTH_WORLD =
        this.outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates;
      if (OUTLINE_WIDTH_WORLD) {
        this.chunks.baseVS += '#define OUTLINE_WIDTH_WORLD\n';
      }

      const OUTLINE_WIDTH_SCREEN =
        this.outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates;
      if (OUTLINE_WIDTH_SCREEN) {
        this.chunks.baseVS += '#define OUTLINE_WIDTH_SCREEN\n';
      }

      if (this.isOutline) {
        this.chunks.basePS += '#define OUTLINE\n';
        this.chunks.baseVS += '#define OUTLINE\n';
      }

      this.chunks.basePS += '#define NUM_DIR_LIGHTS 0\n';
      this.chunks.basePS += '#define NUM_SPOT_LIGHTS 0\n';
      this.chunks.basePS += '#define NUM_POINT_LIGHTS 0\n';

      this.chunks.baseVS += shaderChunksMtoon.baseVS;
      this.chunks.endVS += shaderChunksMtoon.endVS;
      this.chunks.basePS += shaderChunksMtoon.basePS;
      this.chunks.basePS += shaderChunksMtoon.light;
      this.chunks.endPS += shaderChunksMtoon.endPS;
    }

    setShaderUniforms() {
      this.setParameter('litFactor', [this.litFactor.r, this.litFactor.g, this.litFactor.b]);
      this.setParameter('opacity', this.opacity);
      this.setParameters('giEqualizationFactor', this.giEqualizationFactor);
      this.setParameter('shadeColorFactor', [
        this.shadeColorFactor.r,
        this.shadeColorFactor.g,
        this.shadeColorFactor.b,
      ]);

      if (this.shadeMultiplyTexture) {
        this.setParameter('shadeMultiplyTexture', this.shadeMultiplyTexture);
      }

      if (this.matcapTexture) {
        this.setParameter('matcapTexture', this.matcapTexture);
      }

      this.setParameter('matcapTextureUvTransform', this.matcapTextureUvTransform.data);
      this.setParameter('matcapFactor', [
        this.matcapFactor.r,
        this.matcapFactor.g,
        this.matcapFactor.b,
      ]);

      this.setParameter(
        'shadeMultiplyTextureUvTransform',
        this.shadeMultiplyTextureUvTransform.data,
      );

      if (this.shadingShiftTexture) {
        this.setParameter('shadingShiftTexture', this.shadingShiftTexture);
      }

      this.setParameter('shadingShiftTextureUvTransform', this.shadingShiftTextureUvTransform.data);

      if (this.baseColorMap) {
        this.setParameter('baseColorMap', this.baseColorMap);
        this.setParameter('mapUvTransform', this.mapUvTransform.data);
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

      if (this.normalMap) {
        this.setParameter('normalMap', this.normalMap);
      }

      this.setParameter('normalMapUvTransform', this.normalMapUvTransform.data);
      this.setParameter('emissiveMapUvTransform', this.emissiveMapUvTransform.data);

      if (this.emissiveMap) {
        this.setParameter('emissiveMap', this.emissiveMap);
      }

      this.setParameter('shadingShiftTextureScale', this.shadingShiftTextureScale);

      if (this.matcapTexture) {
        this.setParameter('matcapTexture', this.matcapTexture);
      }

      if (this.rimMultiplyTexture) {
        this.setParameter('rimMultiplyTexture', this.rimMultiplyTexture);
        this.setParameter('rimMultiplyTextureUvTransform', this.rimMultiplyTextureUvTransform.data);
      }

      if (this.outlineWidthMultiplyTexture) {
        this.setParameter('outlineWidthMultiplyTexture', this.outlineWidthMultiplyTexture);
      }

      this.setParameter('outlineWidthFactor', this.outlineWidthFactor);
      this.setParameter('outlineLightingMixFactor', this.outlineLightingMixFactor);
      this.setParameter('outlineColorFactor', [
        this.outlineColorFactor.r,
        this.outlineColorFactor.g,
        this.outlineColorFactor.b,
      ]);
    }

    updateLightUniforms(lightStates: Map<number, any>, scene: pc.Scene) {
      this.updateIndirectLightUniforms(scene);

      const directionalLights = lightStates.get(pcRef.LIGHTTYPE_DIRECTIONAL);
      const spotLights = lightStates.get(pcRef.LIGHTTYPE_SPOT);
      const pointLights = lightStates.get(pcRef.LIGHTTYPE_POINT);
      this.replaceLightNumbers(directionalLights.length, spotLights.length, pointLights.length);

      directionalLights.forEach((light: pc.LightComponent, i: number) => {
        const directional = light.data.light;
        const direction = directional._direction;

        this._vec3A.copy(direction);
        this._vec3A.mulScalar(-1);
        this._vec3A.normalize();

        const color = light.color;
        this.setParameter(`directionalLights[${i}].color`, [color.r, color.g, color.b]);
        this.setParameter(`directionalLights[${i}].direction`, [
          this._vec3A.x,
          this._vec3A.y,
          this._vec3A.z,
        ]);
      });

      spotLights.forEach((light: pc.LightComponent, i: number) => {
        const position = light.entity.getPosition();
        const direction = light.entity.forward;
        const color = light.color;
        const distance = light.range;
        const decay = light.falloffMode === pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2;
        const coneCos = Math.cos(light.innerConeAngle);
        const penumbraCos = Math.cos(light.outerConeAngle);
        this.setParameter(`spotLights[${i}].position`, [position.x, position.y, position.z]);
        this.setParameter(`spotLights[${i}].direction`, [direction.x, direction.y, direction.z]);
        this.setParameter(`spotLights[${i}].color`, [color.r, color.g, color.b]);
        this.setParameter(`spotLights[${i}].distance`, distance);
        this.setParameter(`spotLights[${i}].decay`, decay);
        this.setParameter(`spotLights[${i}].coneCos`, coneCos);
        this.setParameter(`spotLights[${i}].penumbraCos`, penumbraCos);
      });

      pointLights.forEach((light: pc.LightComponent, i: number) => {
        const position = light.entity.getPosition();
        const color = light.color;
        const distance = light.range;
        const decay = light.falloffMode === pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2;

        this.setParameter(`pointLights[${i}].position`, [position.x, position.y, position.z]);
        this.setParameter(`pointLights[${i}].color`, [color.r, color.g, color.b]);
        this.setParameter(`pointLights[${i}].distance`, distance);
        this.setParameter(`pointLights[${i}].decay`, decay);
      });
    }

    updateIndirectLightUniforms(scene: pc.Scene) {
      if (!this.envAtlas && scene.envAtlas) {
        this.envAtlas = scene.envAtlas;
      }

      if (this.envAtlas) {
        this.setParameter('ambientLightColor', [0, 0, 0]);
      } else {
        this.ambient.copy(scene.ambientLight);
        this.setParameter('ambientLightColor', [this.ambient.r, this.ambient.g, this.ambient.b]);
      }
    }

    replaceLightNumbers(dirNum: number, spotNum: number, pointNum: number) {
      let chunk = this.chunks.basePS;

      chunk = chunk
        .replace(/#define USE_DIR_LIGHTS\n/g, '')
        .replace(/#define USE_SPOT_LIGHTS\n/g, '')
        .replace(/#define USE_POINT_LIGHTS\n/g, '')
        .replace(/#define USE_ENV_LIGHTS\n/g, '');

      if (dirNum > 0) {
        chunk = `#define USE_DIR_LIGHTS\n${chunk}`;
        chunk = chunk.replace(/#define NUM_DIR_LIGHTS \d+/, `#define NUM_DIR_LIGHTS ${dirNum}`);
      }

      if (spotNum > 0) {
        chunk = `#define USE_SPOT_LIGHTS\n${chunk}`;
        chunk = chunk.replace(/#define NUM_SPOT_LIGHTS \d+/, `#define NUM_SPOT_LIGHTS ${spotNum}`);
      }

      if (pointNum > 0) {
        chunk = `#define USE_POINT_LIGHTS\n${chunk}`;
        chunk = chunk.replace(
          /#define NUM_POINT_LIGHTS \d+/,
          `#define NUM_POINT_LIGHTS ${pointNum}`,
        );
      }

      if (this.envAtlas) {
        chunk = `#define USE_ENV_LIGHTS\n${chunk}`;
      }

      this.chunks.basePS = chunk;
    }

    destroy() {
      super.destroy();
      this._renderStates.removeMaterial(this);
    }
  };
};
