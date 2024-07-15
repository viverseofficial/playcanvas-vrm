import * as pc from "playcanvas";

export const gammaEOTF = (e: number): number => {
  return Math.pow(e, 2.2);
};

export const parseV0MToonProperties = (
  materialProperties: any,
  schemaMaterial: any
): any => {
  const isTransparent =
    materialProperties.keywordMap?.["_ALPHABLEND_ON"] ?? false;
  const enabledZWrite = materialProperties.floatProperties?.["_ZWrite"] === 1;
  const transparentWithZWrite = enabledZWrite && isTransparent;

  // const renderQueueOffsetNumber =
  //   this._v0ParseRenderQueue(materialProperties);

  const isCutoff = materialProperties.keywordMap?.["_ALPHATEST_ON"] ?? false;
  const alphaMode = isTransparent ? "BLEND" : isCutoff ? "MASK" : "OPAQUE";
  const alphaCutoff = isCutoff
    ? materialProperties.floatProperties?.["_Cutoff"] ?? 0.5
    : undefined;

  const cullMode = materialProperties.floatProperties?.["_CullMode"] ?? 2; // enum, { Off, Front, Back }
  const doubleSided = cullMode === 0;

  // const textureTransformExt = this._portTextureTransform(materialProperties);

  const baseColorFactor = (
    materialProperties.vectorProperties?.["_Color"] ?? [1.0, 1.0, 1.0, 1.0]
  ).map(
    (v: number, i: number) => (i === 3 ? v : gammaEOTF(v)) // alpha channel is stored in linear
  );
  const baseColorTextureIndex =
    materialProperties.textureProperties?.["_MainTex"];
  const baseColorTexture =
    baseColorTextureIndex != null
      ? {
          index: baseColorTextureIndex,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  const normalTextureScale =
    materialProperties.floatProperties?.["_BumpScale"] ?? 1.0;
  const normalTextureIndex = materialProperties.textureProperties?.["_BumpMap"];
  const normalTexture =
    normalTextureIndex != null
      ? {
          index: normalTextureIndex,
          scale: normalTextureScale,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  const emissiveFactor = (
    materialProperties.vectorProperties?.["_EmissionColor"] ?? [
      0.0, 0.0, 0.0, 1.0,
    ]
  ).map(gammaEOTF);
  const emissiveTextureIndex =
    materialProperties.textureProperties?.["_EmissionMap"];
  const emissiveTexture =
    emissiveTextureIndex != null
      ? {
          index: emissiveTextureIndex,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  const shadeColorFactor = (
    materialProperties.vectorProperties?.["_ShadeColor"] ?? [
      0.97, 0.81, 0.86, 1.0,
    ]
  ).map(gammaEOTF);
  const shadeMultiplyTextureIndex =
    materialProperties.textureProperties?.["_ShadeTexture"];
  const shadeMultiplyTexture =
    shadeMultiplyTextureIndex != null
      ? {
          index: shadeMultiplyTextureIndex,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  // // convert v0 shade shift / shade toony
  let shadingShiftFactor =
    materialProperties.floatProperties?.["_ShadeShift"] ?? 0.0;
  let shadingToonyFactor =
    materialProperties.floatProperties?.["_ShadeToony"] ?? 0.9;
  shadingToonyFactor = pc.math.lerp(
    shadingToonyFactor,
    1.0,
    0.5 + 0.5 * shadingShiftFactor
  );
  shadingShiftFactor = -shadingShiftFactor - (1.0 - shadingToonyFactor);

  const giIntensityFactor =
    materialProperties.floatProperties?.["_IndirectLightIntensity"] ?? 0.1;
  const giEqualizationFactor = giIntensityFactor
    ? 1.0 - giIntensityFactor
    : undefined;

  const matcapTextureIndex =
    materialProperties.textureProperties?.["_SphereAdd"];
  const matcapFactor = matcapTextureIndex != null ? [1.0, 1.0, 1.0] : undefined;
  const matcapTexture =
    matcapTextureIndex != null
      ? {
          index: matcapTextureIndex,
        }
      : undefined;

  const rimLightingMixFactor =
    materialProperties.floatProperties?.["_RimLightingMix"] ?? 0.0;
  const rimMultiplyTextureIndex =
    materialProperties.textureProperties?.["_RimTexture"];
  const rimMultiplyTexture =
    rimMultiplyTextureIndex != null
      ? {
          index: rimMultiplyTextureIndex,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  const parametricRimColorFactor = (
    materialProperties.vectorProperties?.["_RimColor"] ?? [0.0, 0.0, 0.0, 1.0]
  ).map(gammaEOTF);
  const parametricRimFresnelPowerFactor =
    materialProperties.floatProperties?.["_RimFresnelPower"] ?? 1.0;
  const parametricRimLiftFactor =
    materialProperties.floatProperties?.["_RimLift"] ?? 0.0;

  const outlineWidthMode = ["none", "worldCoordinates", "screenCoordinates"][
    materialProperties.floatProperties?.["_OutlineWidthMode"] ?? 0
  ];

  // v0 outlineWidthFactor is in centimeter
  let outlineWidthFactor =
    materialProperties.floatProperties?.["_OutlineWidth"] ?? 0.0;
  outlineWidthFactor = 0.01 * outlineWidthFactor;

  const outlineWidthMultiplyTextureIndex =
    materialProperties.textureProperties?.["_OutlineWidthTexture"];
  const outlineWidthMultiplyTexture =
    outlineWidthMultiplyTextureIndex != null
      ? {
          index: outlineWidthMultiplyTextureIndex,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  const outlineColorFactor = (
    materialProperties.vectorProperties?.["_OutlineColor"] ?? [0.0, 0.0, 0.0]
  ).map(gammaEOTF);
  const outlineColorMode =
    materialProperties.floatProperties?.["_OutlineColorMode"] ?? 0; // enum, { Fixed, Mixed }
  const outlineLightingMixFactor =
    outlineColorMode === 1
      ? materialProperties.floatProperties?.["_OutlineLightingMix"] ?? 1.0
      : 0.0;

  const uvAnimationMaskTextureIndex =
    materialProperties.textureProperties?.["_UvAnimMaskTexture"];
  const uvAnimationMaskTexture =
    uvAnimationMaskTextureIndex != null
      ? {
          index: uvAnimationMaskTextureIndex,
          // extensions: {
          //   ...textureTransformExt,
          // },
        }
      : undefined;

  const uvAnimationScrollXSpeedFactor =
    materialProperties.floatProperties?.["_UvAnimScrollX"] ?? 0.0;

  // uvAnimationScrollYSpeedFactor will be opposite between V0 and V1
  let uvAnimationScrollYSpeedFactor =
    materialProperties.floatProperties?.["_UvAnimScrollY"] ?? 0.0;
  if (uvAnimationScrollYSpeedFactor != null) {
    uvAnimationScrollYSpeedFactor = -uvAnimationScrollYSpeedFactor;
  }

  const uvAnimationRotationSpeedFactor =
    materialProperties.floatProperties?.["_UvAnimRotation"] ?? 0.0;

  const mtoonExtension = {
    specVersion: "1.0",
    transparentWithZWrite,
    // renderQueueOffsetNumber,
    shadeColorFactor,
    shadeMultiplyTexture,
    shadingShiftFactor,
    shadingToonyFactor,
    giEqualizationFactor,
    matcapFactor,
    matcapTexture,
    rimLightingMixFactor,
    rimMultiplyTexture,
    parametricRimColorFactor,
    parametricRimFresnelPowerFactor,
    parametricRimLiftFactor,
    outlineWidthMode,
    outlineWidthFactor,
    outlineWidthMultiplyTexture,
    outlineColorFactor,
    outlineLightingMixFactor,
    uvAnimationMaskTexture,
    uvAnimationScrollXSpeedFactor,
    uvAnimationScrollYSpeedFactor,
    uvAnimationRotationSpeedFactor,
  };

  return {
    ...schemaMaterial,

    pbrMetallicRoughness: {
      baseColorFactor,
      baseColorTexture,
    },
    normalTexture,
    emissiveTexture,
    emissiveFactor,
    alphaMode,
    alphaCutoff,
    doubleSided,
    extensions: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      VRMC_materials_mtoon: mtoonExtension,
    },
  };
};
