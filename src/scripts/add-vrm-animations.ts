import * as pc from 'playcanvas';
import { VRMRigMap } from '../extensions/vrm-map-list';
import { VRMHumanoid } from '../extensions/vrm-humanoid/VRMHumanoid';

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

interface IMorphCurvePath {
  entityPath: string[];
  component: string;
  propertyPath: string[];
}

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

const loadAnimation = (
  pcRef: typeof pc,
  animationAssets: IAnimationAsset[],
  humanoid: VRMHumanoid,
  {
    vrmHipsHeight,
    vrmHipsDeep,
    motionHipsHeight,
    version = 'v0',
  }: {
    vrmHipsHeight: number;
    vrmHipsDeep: number;
    motionHipsHeight?: number;
    version?: 'v0' | 'v1';
  },
) => {
  const hipPositionOutputIndexes: { [key: number]: boolean } = {};
  const scaleOutputIndexes: { [key: number]: boolean } = {};

  return animationAssets
    .map((animationAsset: IAnimationAsset) => {
      const resource =
        animationAsset.asset.type === 'container'
          ? animationAsset.asset.resource.animations[0]?.resource
          : animationAsset.asset.resource;

      if (resource) {
        const animTrack = createAnimTrack(pcRef, resource);

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
              const vrmNodeName = humanoid.getNormalizedBoneNode(vrmBoneName)?.name;

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

                if (version === 'v0' && index % 3 !== 1) {
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
              if (version === 'v0' && index % 2 === 0) {
                return -v;
              } else {
                return v;
              }
            });

            output._data = newData;
          }
        });

        return {
          name: animationAsset.stateName,
          resource: animTrack,
          ...(animationAsset.setting && {
            setting: animationAsset.setting,
          }),
        };
      } else {
        console.error(
          `AddVrmAnimation: loadAnimation can't find available resource from ${animationAsset.stateName} asset.`,
        );
        return null;
      }
    })
    .filter((animationAsset) => animationAsset);
};

export const createVRMAnimation = (
  pcRef: typeof pc,
  animationAssets: IAnimationAsset[],
  asset: pc.Asset,
  humanoid?: VRMHumanoid | null,
  motionHipsHeight?: number,
) => {
  if (!humanoid) {
    console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".');
    return null;
  }

  const isV1Used = asset.resource.data.gltf.extensions?.VRMC_vrm;
  const isV0Used = asset.resource.data.gltf.extensions?.VRM;
  const version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

  const vrmHipsPosition = humanoid.rawHumanBones.hips?.node.getPosition() || new pcRef.Vec3();

  const vrmHipsY = vrmHipsPosition.y;
  const vrmHipsHeight = Math.abs(vrmHipsY - 0);

  const vrmHipsZ = vrmHipsPosition.z;
  const vrmHipsDeep = Math.abs(vrmHipsZ - 0);

  return loadAnimation(pcRef, animationAssets, humanoid, {
    vrmHipsHeight,
    vrmHipsDeep,
    ...(motionHipsHeight && { motionHipsHeight }),
    ...(version && { version }),
  });
};

export const assignAnimation = (
  entity: pc.Entity,
  {
    name,
    resource,
    setting,
  }: { name: string; resource: pc.AnimTrack; setting?: IAnimationSetting },
) => {
  if (entity.anim) {
    entity.anim.assignAnimation(
      name,
      resource,
      setting && setting.layerName !== undefined ? setting.layerName : undefined,
      setting && setting.speed !== undefined ? setting.speed : 1,
      setting && setting.loop !== undefined ? setting.loop : true,
    );
  } else {
    console.error('assignAnimation: Please set the anim component on the entity.');
  }
};
