import * as pc from 'playcanvas';
import { VRMRigMap } from '../extensions/vrm-map-list';
import { VRMHumanoid } from '../extensions/vrm-humanoid/VRMHumanoid';
import { VRMAnimationLoader } from '../extensions/vrm-animation/VRMAnimationLoader';
import { VRMAnimationTrack } from '../extensions/vrm-animation/VRMAnimationTrack';
import type { VRMAnimation } from '../extensions/vrm-animation/VRMAnimation';
// import { load } from './add-vrm-animations';

interface IAnimationSetting {
  speed?: number;
  loop?: boolean;
  layerName?: string;
}

interface IAnimationAsset {
  stateName: string;
  asset: pc.Asset;
  removeY?: boolean;
  removeUpperY?: boolean;
  removeZ?: boolean;
  setting?: IAnimationSetting;
}

interface IAnimationResource {
  stateName: string;
  animTrack: pc.AnimTrack;
  setting?: IAnimationSetting;
}

interface IAnimExtraSettings {
  motionHipsHeight?: number;
  negativeZAnimNames?: string[];
}

interface IMorphCurvePath {
  entityPath: string[];
  component: string;
  propertyPath: string[];
}

export function createVRMAnimResources(
  pcRef: typeof pc,
  vrmAsset: pc.Asset,
  animationAssets: IAnimationAsset[],
  humanoid: VRMHumanoid,
  extraSettings: IAnimExtraSettings = {},
): IAnimationResource[] | undefined {
  // Check vrm (model) version
  const isV1Used = vrmAsset.resource.data.gltf.extensions?.VRMC_vrm;
  const isV0Used = vrmAsset.resource.data.gltf.extensions?.VRM;
  const version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

  const resources: IAnimationResource[] = [];

  animationAssets.forEach((animationAsset) => {
    const assetType = animationAsset.asset.type;
    let resource: IAnimationResource | undefined;

    if (!humanoid) {
      console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".');
      return;
    }
    const checkAnimType = () => {
      if (assetType == 'animation') {
        return false;
      } else if (assetType == 'container') {
        const extensionsUsed = animationAsset.asset.resource.data.gltf.extensionsUsed;
        if (
          extensionsUsed &&
          extensionsUsed.includes('VRMC_vrm_animation') &&
          extensionsUsed.indexOf('VRMC_vrm_animation') !== -1
        ) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    };
    const isVRMA: boolean = checkAnimType();

    if (isVRMA) {
      // Load VRMA
      resource = createVRMAResource(pcRef, animationAsset, humanoid, version);
    } else {
      // Load viverse animations
      const vrmHipsPosition = humanoid.rawHumanBones.hips?.node.getPosition() || new pcRef.Vec3();

      const vrmHipsY = vrmHipsPosition.y;
      const vrmHipsHeight = Math.abs(vrmHipsY - 0);

      const vrmHipsZ = vrmHipsPosition.z;
      const vrmHipsDeep = Math.abs(vrmHipsZ - 0);

      resource = createViverseAnimResource(pcRef, animationAsset, humanoid, {
        vrmHipsHeight,
        vrmHipsDeep,
        ...(extraSettings.motionHipsHeight && { motionHipsHeight: extraSettings.motionHipsHeight }),
        ...(version && { version }),
        ...(extraSettings.negativeZAnimNames && {
          negativeZAnimNames: extraSettings.negativeZAnimNames,
        }),
      });
    }

    if (resource) {
      resources.push(resource);
    }
  });
  return resources;
}

export const assignAnimation = (entity: pc.Entity, resource: IAnimationResource) => {
  if (entity.anim) {
    /*  entity.anim.addAnimationState(
        resource.stateName,
        resource.animTrack,
        resource.setting && resource.setting.speed !== undefined ? resource.setting.speed : 1,
        resource.setting && resource.setting.loop !== undefined ? resource.setting.loop : true,
        resource.setting && resource.setting.layerName !== undefined ? resource.setting.layerName : undefined,
      ); */
    entity.anim.assignAnimation(
      resource.stateName,
      resource.animTrack,
      resource.setting && resource.setting.layerName !== undefined
        ? resource.setting.layerName
        : undefined,
      resource.setting && resource.setting.speed !== undefined ? resource.setting.speed : 1,
      resource.setting && resource.setting.loop !== undefined ? resource.setting.loop : true,
    );
  } else {
    console.error('assignAnimation: Please set the anim component on the entity.');
  }
};

// Methods to create single animation resource (vrma & viverse animation)
function createVRMAResource(
  pcRef: typeof pc,
  animationAsset: IAnimationAsset,
  humanoid: VRMHumanoid,
  version: 'v0' | 'v1' | null,
): IAnimationResource | undefined {
  const vrmaLoader = new VRMAnimationLoader(pcRef);
  const vrmAnimations: VRMAnimation[] | undefined = vrmaLoader.loadVRMA(animationAsset.asset);

  if (vrmAnimations) {
    const animTrack: pc.AnimTrack = new VRMAnimationTrack(
      pcRef,
      animationAsset.stateName,
      vrmAnimations[0],
      humanoid,
      version,
    ).result;
    return { stateName: animationAsset.stateName, animTrack: animTrack };
  }
  return;
}

const createViverseAnimResource = (
  pcRef: typeof pc,
  animationAsset: IAnimationAsset,
  humanoid: VRMHumanoid,
  {
    vrmHipsHeight,
    vrmHipsDeep,
    motionHipsHeight,
    version = 'v0',
    negativeZAnimNames = [],
  }: {
    vrmHipsHeight: number;
    vrmHipsDeep: number;
    motionHipsHeight?: number;
    version?: 'v0' | 'v1';
    negativeZAnimNames?: string[];
  },
) => {
  const hipPositionOutputIndexes: { [key: number]: boolean } = {};
  const scaleOutputIndexes: { [key: number]: boolean } = {};

  const parseAnimAsset = () => {
    const resource =
      animationAsset.asset.resource && animationAsset.asset.type === 'container'
        ? animationAsset.asset.resource.animations?.[0]?.resource
        : animationAsset.asset.resource;

    if (resource) {
      const animTrack = createAnimTrack(pcRef, resource);
      // Default animation skeleton forward is +z axis, so vrm version 0 needs to be converted.
      // some animation forward is -z axis, convert to vrm version 1.
      const isNegativeZAxis = negativeZAnimNames.includes(resource.name);
      const needConvertVersion = isNegativeZAxis ? 'v1' : 'v0';

      // Try to get the animation hips node from asset
      let nodeMotionHipsHeight = 0;
      if (animationAsset.asset.type === 'container') {
        const motionHipsNode = animationAsset.asset.resource.data.nodes.find(
          (node: pc.GraphNode) => node.name === VRMRigMap.hips,
        );
        if (motionHipsNode) {
          nodeMotionHipsHeight = motionHipsNode.getPosition().y;
        }
      }

      motionHipsHeight = motionHipsHeight || nodeMotionHipsHeight || 0.855;

      const hipsPositionScaleY = vrmHipsHeight / motionHipsHeight;

      animTrack.curves.forEach((curve) => {
        curve.paths.forEach((graph) => {
          const morphCurvePath = graph as unknown as IMorphCurvePath;
          const isPosition = morphCurvePath.propertyPath.find((path) => path === 'localPosition');
          // Before transform bone name, so use original name Hips
          const isHipsTarget =
            morphCurvePath.entityPath[morphCurvePath.entityPath.length - 1] === VRMRigMap['hips'];

          if (isPosition && isHipsTarget && !hipPositionOutputIndexes[curve.output]) {
            hipPositionOutputIndexes[curve.output] = true;
          }
        });
      });

      animTrack.curves.forEach((curve) => {
        let isLocalScale = false;

        curve.paths.forEach((graph) => {
          const morphCurvePath = graph as unknown as IMorphCurvePath;

          // Revise bone name to vrm model bone name
          const arrangedEntityPath = morphCurvePath.entityPath.map((path) => {
            const originalRigName = path;
            const vrmBoneName = VRMRigMap[originalRigName];
            const vrmNodeName = humanoid.getRawBoneNode(vrmBoneName)?.name;

            if (!vrmBoneName || !vrmNodeName) {
              return path;
            }

            return vrmNodeName;
          });

          morphCurvePath.entityPath = arrangedEntityPath;

          if (morphCurvePath.propertyPath.find((path) => path === 'localScale')) {
            isLocalScale = true;
          }
        });

        // Store the localScale output index
        if (isLocalScale && !scaleOutputIndexes[curve.output]) {
          scaleOutputIndexes[curve.output] = true;
        }
      });

      animTrack.outputs.forEach((output, outputIndex) => {
        const isScaleOutput = scaleOutputIndexes[outputIndex];

        // const outputCurve = animTrack.curves.find((curve) => curve.output === outputIndex);

        if (output.components === 3) {
          if (!isScaleOutput) {
            const newData = output.data.map((v, index) => {
              let value = v;

              if (version === needConvertVersion && index % 3 !== 1) {
                value *= -1;
              }

              if (hipPositionOutputIndexes[outputIndex] && index % 3 === 1) {
                if (animationAsset.removeY) {
                  return vrmHipsHeight;
                }

                if (animationAsset.removeUpperY && v * hipsPositionScaleY > vrmHipsHeight) {
                  return vrmHipsHeight;
                }
              }

              if (hipPositionOutputIndexes[outputIndex] && index % 3 === 2) {
                if (animationAsset.removeZ) {
                  return vrmHipsDeep;
                }
              }

              return value * hipsPositionScaleY;
            });

            output._data = newData;
          }
        } else if (output.components === 4) {
          const newData = output.data.map((v, index) => {
            if (version === needConvertVersion && index % 2 === 0) {
              return -v;
            } else {
              return v;
            }
          });

          output._data = newData;
        }
      });

      return {
        stateName: animationAsset.stateName,
        animTrack: animTrack,
        ...(animationAsset.setting && {
          setting: animationAsset.setting,
        }),
      };
    } else {
      console.error(
        `AddVrmAnimation: loadAnimation can't find available resource from ${animationAsset.stateName} asset.`,
      );
      return;
    }
  };
  const parsedAnimAsset = parseAnimAsset();
  return parsedAnimAsset;
};

const createAnimTrack = (pcRef: typeof pc, animTrack: pc.AnimTrack) => {
  const inputs = animTrack.inputs.map((input) => new pcRef.AnimData(input.components, input.data));
  const outputs = animTrack.outputs.map(
    (output) => new pcRef.AnimData(output.components, output.data),
  );
  const curves = animTrack.curves.map((curve) => {
    const curvePaths = curve.paths.map((path) => {
      const morphCurvePath = path as unknown as IMorphCurvePath;
      return {
        component: morphCurvePath.component,
        entityPath: [...morphCurvePath.entityPath],
        propertyPath: [...morphCurvePath.propertyPath],
      };
    });

    return new pcRef.AnimCurve(curvePaths as any, curve.input, curve.output, curve.interpolation);
  });

  return new pcRef.AnimTrack(animTrack.name, animTrack.duration, inputs, outputs, curves);
};
