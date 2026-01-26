import * as pc from 'playcanvas';
import { shaderChunksMtoon } from './shaders/mtoon/vrmc/shader-chunk';
import { updateTextureMatrix } from './utils';
import {
  EXTENSION_VRMC_MATERIALS_MTOON,
  MToonMaterialOutlineWidthMode,
  MToonMaterialOutlineWidthModeType,
} from './constants';
import {
  ILightStateInfo,
  IDirectionalLightInfo,
  IPointLightInfo,
  ISpotLightInfo,
  ISceneLightInfo,
} from '../../../helpers/RenderStates';
import { GltfAssetResource } from './VRMMtoonLoader';

const textureTransformExtensionName = 'KHR_texture_transform';

export type VRMCMtoonMaterialType = pc.StandardMaterial & {
  isMtoonMaterial: boolean;

  mapUvTransform: pc.Mat3;
  normalMapUvTransform: pc.Mat3;
  normalScale: pc.Vec2;
  emissiveMapUvTransform: pc.Mat3;
  shadeColorFactor: pc.Color;
  shadeMultiplyTexture: pc.Texture | null;
  shadeMultiplyTextureUvTransform: pc.Mat3;
  shadingShiftFactor: number;
  shadingShiftTexture: pc.Texture | null;
  shadingShiftTextureUvTransform: pc.Mat3;
  shadingShiftTextureScale: number;
  shadingToonyFactor: number;
  giEqualizationFactor: number;
  matcapFactor: pc.Color;
  matcapTexture: pc.Texture | null;
  matcapTextureUvTransform: pc.Mat3;
  parametricRimColorFactor: pc.Color;
  rimMultiplyTexture: pc.Texture | null;
  rimMultiplyTextureUvTransform: pc.Mat3;
  rimLightingMixFactor: number;
  parametricRimFresnelPowerFactor: number;
  parametricRimLiftFactor: number;
  uvAnimationMaskTexture: pc.Texture | null;
  uvAnimationMaskTextureUvTransform: pc.Mat3;
  uvAnimationScrollXOffset: number;
  uvAnimationScrollYOffset: number;
  uvAnimationRotationPhase: number;
  uvAnimationScrollXSpeed: number;
  uvAnimationScrollYSpeed: number;
  uvAnimationRotationSpeed: number;
  v0CompatShade: boolean;

  isOutline: boolean;
  outlineWidthMode: MToonMaterialOutlineWidthModeType;
  outlineWidthMultiplyTexture: pc.Texture | null;
  outlineWidthMultiplyTextureUvTransform: pc.Mat3;
  outlineWidthFactor: number;
  outlineColorFactor: pc.Color;
  outlineLightingMixFactor: number;

  _asset: pc.Asset;
  _vec3A: pc.Vec3;
  _currentDirLights: number;
  _currentSpotLights: number;
  _currentPointLights: number;

  parse(gltfMaterial: any, gltf: any): void;
  updateLightState(lightStateInfo: ILightStateInfo): void;
  updateUvAnimation(deltaTime: number): void;
  _setShaderChunks(): void;
  _setShaderUniforms(): void;
  _updateIndirectLightUniforms(scene?: ISceneLightInfo): void;
};

export function createVRMCMtoonMaterial(pcRef: typeof pc, asset: pc.Asset): VRMCMtoonMaterialType {
  const material = new pcRef.StandardMaterial() as VRMCMtoonMaterialType;

  // Custom properties
  material.isMtoonMaterial = true;

  material.mapUvTransform = new pcRef.Mat3();
  material.normalMapUvTransform = new pcRef.Mat3();
  material.normalScale = new pcRef.Vec2(1, 1);
  material.emissiveMapUvTransform = new pcRef.Mat3();
  material.shadeColorFactor = new pcRef.Color(0, 0, 0, 1.0);
  material.shadeMultiplyTexture = null;
  material.shadeMultiplyTextureUvTransform = new pcRef.Mat3();
  material.shadingShiftFactor = 0.0;
  material.shadingShiftTexture = null;
  material.shadingShiftTextureUvTransform = new pcRef.Mat3();
  material.shadingShiftTextureScale = 1.0;
  material.shadingToonyFactor = 0.9;
  material.giEqualizationFactor = 0.0;
  material.matcapFactor = new pcRef.Color(1.0, 1.0, 1.0, 1.0);
  material.matcapTexture = null;
  material.matcapTextureUvTransform = new pcRef.Mat3();
  material.parametricRimColorFactor = new pcRef.Color(0, 0, 0, 1.0);
  material.rimMultiplyTexture = null;
  material.rimMultiplyTextureUvTransform = new pcRef.Mat3();
  material.rimLightingMixFactor = 0.0;
  material.parametricRimFresnelPowerFactor = 5.0;
  material.parametricRimLiftFactor = 0.0;
  material.uvAnimationMaskTexture = null;
  material.uvAnimationMaskTextureUvTransform = new pcRef.Mat3();
  material.uvAnimationScrollXOffset = 0.0;
  material.uvAnimationScrollYOffset = 0.0;
  material.uvAnimationRotationPhase = 0.0;
  material.uvAnimationScrollXSpeed = 0.0;
  material.uvAnimationScrollYSpeed = 0.0;
  material.uvAnimationRotationSpeed = 0.0;
  material.v0CompatShade = false;

  material.isOutline = false;
  material.outlineWidthMode = MToonMaterialOutlineWidthMode.None;
  material.outlineWidthMultiplyTexture = null;
  material.outlineWidthMultiplyTextureUvTransform = new pcRef.Mat3();
  material.outlineWidthFactor = 0.02;
  material.outlineColorFactor = new pcRef.Color(1.0, 0.5, 0.0, 1.0);
  material.outlineLightingMixFactor = 0.0;

  material._asset = asset;
  material._vec3A = new pcRef.Vec3();
  material._currentDirLights = 0;
  material._currentSpotLights = 0;
  material._currentPointLights = 0;

  // Methods
  material.parse = function (gltfMaterial: any, gltf: any) {
    // Check if KHR_materials_unlit was applied by glb-parser
    // If so, restore diffuse from emissive as extensionUnlit moved it there
    // Note: Playcanvas dose not have beforeRoot timing to remove this extension like three.js,
    // only way is to restore here as a workaround.
    const hasUnlitExtension =
      gltfMaterial?.extensions?.KHR_materials_unlit !== undefined ||
      gltf.extensionsUsed?.includes('KHR_materials_unlit');
    if (hasUnlitExtension) {
      // Restore diffuse map from emissive
      this.diffuseMap = this.emissiveMap;
      this.diffuseMapUv = this.emissiveMapUv;
      this.diffuseMapTiling.copy(this.emissiveMapTiling);
      this.diffuseMapOffset.copy(this.emissiveMapOffset);
      this.diffuseMapRotation = this.emissiveMapRotation;
      this.diffuseMapChannel = this.emissiveMapChannel;
      this.diffuse.copy(this.emissive);

      if (gltfMaterial.hasOwnProperty('pbrMetallicRoughness')) {
        const pbrData = gltfMaterial.pbrMetallicRoughness;

        if (pbrData.hasOwnProperty('baseColorFactor')) {
          const [r, g, b, a] = pbrData.baseColorFactor;
          material.diffuse.set(r, g, b).gamma();
          material.opacity = a;
        }
      }

      if (gltfMaterial.hasOwnProperty('emissiveFactor')) {
        // playcanvas will throw warning when emissive is black(0,0,0) and has emissive map
        // workaround: set very small value to warn nothing
        const [r, g, b] = gltfMaterial.emissiveFactor.map((v: number) => Math.max(0.0001, v));
        material.emissive.set(r, g, b).gamma();
      }
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
      shadingShiftTexture: shadingShiftTextureInfo,
      giEqualizationFactor,
      rimMultiplyTexture: rimMultiplyTextureInfo,
      matcapTexture: matcapTextureInfo,
      matcapFactor,
      outlineWidthFactor,
      outlineColorFactor,
      outlineLightingMixFactor,
      outlineWidthMode,
      outlineWidthMultiplyTexture: outlineWidthMultiplyTextureInfo,
      transparentWithZWrite,
      v0CompatShade,
      uvAnimationMaskTexture,
      uvAnimationScrollXSpeedFactor,
      uvAnimationScrollYSpeedFactor,
      uvAnimationRotationSpeedFactor,
    } = extension;

    if (v0CompatShade !== undefined) {
      this.v0CompatShade = v0CompatShade;
    }

    if (uvAnimationMaskTexture !== undefined) {
      // TODO: uvAnimationMaskTexture;
    }

    if (uvAnimationScrollXSpeedFactor !== undefined) {
      this.uvAnimationScrollXSpeed = uvAnimationScrollXSpeedFactor;
    }

    if (uvAnimationScrollYSpeedFactor !== undefined) {
      this.uvAnimationScrollYSpeed = uvAnimationScrollYSpeedFactor;
    }

    if (uvAnimationRotationSpeedFactor !== undefined) {
      this.uvAnimationRotationSpeed = uvAnimationRotationSpeedFactor;
    }

    if (giEqualizationFactor !== undefined) {
      this.giEqualizationFactor = giEqualizationFactor;
    }

    if (shadeColorFactor) {
      this.shadeColorFactor = new pcRef.Color(
        shadeColorFactor[0],
        shadeColorFactor[1],
        shadeColorFactor[2],
        1.0,
      );
    }

    if (shadeMultiplyTextureInfo !== undefined) {
      const resource = this._asset.resource as GltfAssetResource;
      const texture = resource?.textures?.[shadeMultiplyTextureInfo.index]?.resource;
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
      const resource = this._asset.resource as GltfAssetResource;
      const texture = resource?.textures?.[rimMultiplyTextureInfo.index]?.resource;

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
      const resource = this._asset.resource as GltfAssetResource;
      const texture = resource?.textures?.[matcapTextureInfo.index]?.resource;
      if (texture) {
        this.matcapTexture = texture;
      }
    }

    if (shadingShiftTextureInfo !== undefined) {
      const resource = this._asset.resource as GltfAssetResource;
      const texture = resource?.textures?.[shadingShiftTextureInfo.index]?.resource;
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
      this.matcapFactor = new pcRef.Color(matcapFactor[0], matcapFactor[1], matcapFactor[2], 1.0);
    }

    this.shadingShiftFactor = shadingShiftFactor;
    this.shadingToonyFactor = shadingToonyFactor;

    if (parametricRimColorFactor) {
      this.parametricRimColorFactor = new pcRef.Color(
        parametricRimColorFactor[0],
        parametricRimColorFactor[1],
        parametricRimColorFactor[2],
        1.0,
      );
    }

    this.rimLightingMixFactor = rimLightingMixFactor;
    this.parametricRimFresnelPowerFactor = parametricRimFresnelPowerFactor;
    this.parametricRimLiftFactor = parametricRimLiftFactor;

    if (transparentWithZWrite) {
      this.depthWrite = true;
    }

    // Outline
    if (outlineWidthFactor !== undefined) {
      this.outlineWidthFactor = outlineWidthFactor;
    }

    if (outlineColorFactor) {
      this.outlineColorFactor = new pcRef.Color(
        outlineColorFactor[0],
        outlineColorFactor[1],
        outlineColorFactor[2],
        1.0,
      );
    }

    if (outlineWidthMode) {
      this.outlineWidthMode = outlineWidthMode as MToonMaterialOutlineWidthModeType;
    }

    if (outlineWidthMultiplyTextureInfo !== undefined) {
      const resource = this._asset.resource as GltfAssetResource;
      const texture = resource?.textures?.[outlineWidthMultiplyTextureInfo.index]?.resource;

      if (texture) {
        this.outlineWidthMultiplyTexture = texture;
        updateTextureMatrix(
          pcRef,
          this.outlineWidthMultiplyTextureUvTransform,
          outlineWidthMultiplyTextureInfo.extensions?.[textureTransformExtensionName],
        );
      }
    }

    if (outlineLightingMixFactor !== undefined) {
      this.outlineLightingMixFactor = outlineLightingMixFactor;
    }

    if (this.isOutline) this.cull = pcRef.CULLFACE_FRONT;

    this._setShaderChunks();
    this._setShaderUniforms();
  };

  material.onUpdateShader = function (options: pc.StandardMaterialOptions) {
    if (this.shadeMultiplyTexture) {
      options.defines.set('USE_SHADEMULTIPLYTEXTURE', '');
    }

    if (this.emissiveMap) {
      options.defines.set('USE_EMISSIVEMAP', '');
    }

    if (this.diffuseMap) {
      options.defines.set('USE_MAP', '');
    }

    if (this.normalMap) {
      options.defines.set('USE_NORMALMAP', '');
    }

    if (this.cull === pcRef.CULLFACE_NONE) {
      options.defines.set('DOUBLE_SIDED', '');
    }

    if (this.matcapTexture) {
      options.defines.set('USE_MATCAPTEXTURE', '');
    }

    if (this.v0CompatShade) {
      options.defines.set('V0_COMPAT_SHADE', '');
    }

    const USE_RIMMULTIPLYTEXTURE = this.rimMultiplyTexture;
    if (USE_RIMMULTIPLYTEXTURE) {
      options.defines.set('USE_RIMMULTIPLYTEXTURE', '');
    }

    const USE_UVANIMATIONMASKTEXTURE = this.uvAnimationMaskTexture !== null;
    if (USE_UVANIMATIONMASKTEXTURE) {
      options.defines.set('USE_UVANIMATIONMASKTEXTURE', '');
    }

    const OPAQUE = this.blendType === pcRef.BLEND_NONE;
    if (OPAQUE) {
      options.defines.set('OPAQUE', '');
    }

    const USE_OUTLINEWIDTHMULTIPLYTEXTURE = this.outlineWidthMultiplyTexture !== null;
    if (USE_OUTLINEWIDTHMULTIPLYTEXTURE) {
      options.defines.set('USE_OUTLINEWIDTHMULTIPLYTEXTURE', '');
    }

    const OUTLINE_WIDTH_WORLD =
      this.outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates;
    if (OUTLINE_WIDTH_WORLD) {
      options.defines.set('OUTLINE_WIDTH_WORLD', '');
    }

    const OUTLINE_WIDTH_SCREEN =
      this.outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates;
    if (OUTLINE_WIDTH_SCREEN) {
      options.defines.set('OUTLINE_WIDTH_SCREEN', '');
    }

    if (this.isOutline) {
      options.defines.set('OUTLINE', '');
    }

    if (this.envAtlas) {
      options.defines.set('USE_ENV_LIGHTS', '');
    }

    // Set light counts as compile-time constants
    options.defines.set('NUM_DIR_LIGHTS', this._currentDirLights.toString());
    options.defines.set('NUM_SPOT_LIGHTS', this._currentSpotLights.toString());
    options.defines.set('NUM_POINT_LIGHTS', this._currentPointLights.toString());

    // Set USE_*_LIGHTS flags to avoid zero-sized arrays
    if (this._currentDirLights > 0) {
      options.defines.set('USE_DIR_LIGHTS', '');
    }
    if (this._currentSpotLights > 0) {
      options.defines.set('USE_SPOT_LIGHTS', '');
    }
    if (this._currentPointLights > 0) {
      options.defines.set('USE_POINT_LIGHTS', '');
    }

    return options;
  };

  material._setShaderChunks = function () {
    this.shaderChunksVersion = '2.8';
    const glsl = pc.SHADERLANGUAGE_GLSL;
    this.getShaderChunks(glsl).set('litUserDeclarationVS', shaderChunksMtoon.litUserDeclarationVS);
    this.getShaderChunks(glsl).set('litUserMainEndVS', shaderChunksMtoon.litUserMainEndVS);
    this.getShaderChunks(glsl).set('litUserDeclarationPS', shaderChunksMtoon.litUserDeclarationPS);
    this.getShaderChunks(glsl).set('litUserCodePS', shaderChunksMtoon.litUserCodePS);
    this.getShaderChunks(glsl).set('litUserMainEndPS', shaderChunksMtoon.litUserMainEndPS);
    this.getShaderChunks(glsl).set('opacityPS', shaderChunksMtoon.opacityPS);
  };

  material._setShaderUniforms = function () {
    this.setParameter('litFactor', [this.diffuse.r, this.diffuse.g, this.diffuse.b]);
    this.setParameters('giEqualizationFactor', this.giEqualizationFactor);
    this.setParameter('shadeColorFactor', [
      this.shadeColorFactor.r,
      this.shadeColorFactor.g,
      this.shadeColorFactor.b,
    ]);

    if (this.shadeMultiplyTexture) {
      this.setParameter('shadeMultiplyTexture', this.shadeMultiplyTexture);
      this.setParameter(
        'shadeMultiplyTextureUvTransform',
        this.shadeMultiplyTextureUvTransform.data,
      );
    }
    if (this.matcapTexture) {
      this.setParameter('matcapTexture', this.matcapTexture);
      this.setParameter('matcapTextureUvTransform', this.matcapTextureUvTransform.data);
    }
    this.setParameter('matcapFactor', [
      this.matcapFactor.r,
      this.matcapFactor.g,
      this.matcapFactor.b,
    ]);
    if (this.shadingShiftTexture) {
      this.setParameter('shadingShiftTexture', this.shadingShiftTexture);
    }
    this.setParameter('shadingShiftTextureUvTransform', this.shadingShiftTextureUvTransform.data);
    if (this.diffuseMap) {
      this.setParameter('diffuseMap', this.diffuseMap);
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
      this.setParameter('normalScale', [this.normalScale.x, this.normalScale.y]);
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
      this.setParameter(
        'outlineWidthMultiplyTextureUvTransform',
        this.outlineWidthMultiplyTextureUvTransform.data,
      );
    }
    this.setParameter('outlineWidthFactor', this.outlineWidthFactor);
    this.setParameter('outlineLightingMixFactor', this.outlineLightingMixFactor);
    this.setParameter('outlineColorFactor', [
      this.outlineColorFactor.r,
      this.outlineColorFactor.g,
      this.outlineColorFactor.b,
    ]);

    this.setParameter('uvAnimationScrollXOffset', this.uvAnimationScrollXOffset);
    this.setParameter('uvAnimationScrollYOffset', this.uvAnimationScrollYOffset);
    this.setParameter('uvAnimationRotationPhase', this.uvAnimationRotationPhase);
  };

  material.updateLightState = function (lightStateInfo: ILightStateInfo) {
    const { directionalLights, spotLights, pointLights, scene } = lightStateInfo;
    this._updateIndirectLightUniforms(scene);

    // Update light data
    directionalLights.forEach((info: IDirectionalLightInfo, i: number) => {
      const direction = info.direction;
      this._vec3A.copy(direction);
      this._vec3A.mulScalar(-1);
      this._vec3A.normalize();
      const color = info.color;
      this.setParameter(`directionalLights[${i}].color`, [color.r, color.g, color.b]);
      this.setParameter(`directionalLights[${i}].direction`, [
        this._vec3A.x,
        this._vec3A.y,
        this._vec3A.z,
      ]);
    });
    spotLights.forEach((info: ISpotLightInfo, i: number) => {
      const position = info.position;
      const direction = info.direction;
      const color = info.color;
      const distance = info.distance;
      const decay = info.decay;
      const coneCos = info.coneCos;
      const penumbraCos = info.penumbraCos;
      this.setParameter(`spotLights[${i}].position`, [position.x, position.y, position.z]);
      this.setParameter(`spotLights[${i}].direction`, [direction.x, direction.y, direction.z]);
      this.setParameter(`spotLights[${i}].color`, [color.r, color.g, color.b]);
      this.setParameter(`spotLights[${i}].distance`, distance);
      this.setParameter(`spotLights[${i}].decay`, decay);
      this.setParameter(`spotLights[${i}].coneCos`, coneCos);
      this.setParameter(`spotLights[${i}].penumbraCos`, penumbraCos);
    });
    pointLights.forEach((info: IPointLightInfo, i: number) => {
      const position = info.position;
      const color = info.color;
      const distance = info.distance;
      const decay = info.decay;
      this.setParameter(`pointLights[${i}].position`, [position.x, position.y, position.z]);
      this.setParameter(`pointLights[${i}].color`, [color.r, color.g, color.b]);
      this.setParameter(`pointLights[${i}].distance`, distance);
      this.setParameter(`pointLights[${i}].decay`, decay);
    });

    // Check if light counts have changed
    const dirNum = directionalLights.length;
    const spotNum = spotLights.length;
    const pointNum = pointLights.length;

    const lightsChanged =
      dirNum !== this._currentDirLights ||
      spotNum !== this._currentSpotLights ||
      pointNum !== this._currentPointLights;

    if (lightsChanged) {
      this._currentDirLights = dirNum;
      this._currentSpotLights = spotNum;
      this._currentPointLights = pointNum;
      this.update(); // Recompile shader to update NUM_LIGHTS defines
    }
  };

  material._updateIndirectLightUniforms = function (scene?: ISceneLightInfo) {
    if (!scene) return;

    if (!this.envAtlas && scene.envAtlas) {
      this.envAtlas = scene.envAtlas;
    }

    if (this.envAtlas) {
      this.setParameter('ambientLightColor', [0, 0, 0]);
    } else {
      this.ambient.copy(scene.ambientLight);
      this.setParameter('ambientLightColor', [this.ambient.r, this.ambient.g, this.ambient.b]);
    }
  };

  material.updateUvAnimation = function (deltaTime: number) {
    this.uvAnimationScrollXOffset += this.uvAnimationScrollXSpeed * deltaTime;
    this.setParameter('uvAnimationScrollXOffset', this.uvAnimationScrollXOffset);

    this.uvAnimationScrollYOffset += this.uvAnimationScrollYSpeed * deltaTime;
    this.setParameter('uvAnimationScrollYOffset', this.uvAnimationScrollYOffset);

    this.uvAnimationRotationPhase += this.uvAnimationRotationSpeed * deltaTime;
    this.setParameter('uvAnimationRotationPhase', this.uvAnimationRotationPhase);
  };

  return material;
}
