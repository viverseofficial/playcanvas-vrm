import * as pc from 'playcanvas';
import { VRMRigMap } from '../extensions/vrm-map-list';
import { createFormattedVRMHumanoid } from '../extensions/vrm-humanoid/vrm-humanoid-utils';
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
  entity: pc.Entity,
  humanoid: VRMHumanoid,
  {
    vrmHipsHeight,
    vrmHipsDeep,
    motionHipsHeight = 0.855,
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
  const calcQuat = new pcRef.Quat();

  const hipsPositionScaleY = vrmHipsHeight / motionHipsHeight;

  return animationAssets.map((animationAsset) => {
    const animTrack = createAnimTrack(pcRef, animationAsset.asset.resource);

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

      const outputCurve = animTrack.curves.find((curve) => curve.output === outputIndex);

      let entityPath = '';
      if (outputCurve) {
        const path = outputCurve.paths[0] as unknown as IMorphCurvePath;
        const entityPaths = path.entityPath;
        entityPath = entityPaths[entityPaths.length - 1];
      }

      if (output.components === 3) {
        if (!isScaleOutput) {
          const newData = output.data.map((v, index) => {
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

            return v * hipsPositionScaleY;
          });

          output._data = newData;
        }
      } else if (version === 'v1') {
        // Handle vrmc initial local rotation is not 0
        // TODO: (yuni): Arm looks strange
        const newData = [...output.data];
        const mixamoRigNode = entity.findByName(entityPath);
        const restRotationInverse = mixamoRigNode?.getRotation().invert();
        const parentRestWorldRotation = mixamoRigNode?.parent?.getRotation();

        if (restRotationInverse && parentRestWorldRotation) {
          for (let i = 0; i < newData.length; i += 4) {
            const flatQuaternion = newData.slice(i, i + 4);
            const _quatA = new pcRef.Quat(flatQuaternion);

            const calParentRestWorldRotation = calcQuat.copy(parentRestWorldRotation);
            _quatA.copy(calParentRestWorldRotation.mul(_quatA));
            _quatA.mul(restRotationInverse);

            flatQuaternion[0] = _quatA.x;
            flatQuaternion[1] = _quatA.y;
            flatQuaternion[2] = _quatA.z;
            flatQuaternion[3] = _quatA.w;

            flatQuaternion.forEach((v, index) => {
              newData[index + i] = v;
            });
          }
        }

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
  });
};

export const createVRMAnimation = (
  pcRef: typeof pc,
  animationAssets: IAnimationAsset[],
  asset: pc.Asset,
  entity: pc.Entity,
  humanoid?: VRMHumanoid | null,
  motionHipsHeight?: number,
) => {
  let humanoidResult: null | VRMHumanoid = null;

  if (humanoid) {
    humanoidResult = humanoid;
  } else if (asset && entity) {
    humanoidResult = createFormattedVRMHumanoid(pcRef, asset, entity);
  }

  if (!humanoidResult) {
    console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".');
    return null;
  }

  const isV1Used = asset.resource.data.gltf.extensions?.VRMC_vrm;
  const isV0Used = asset.resource.data.gltf.extensions?.VRM;
  const version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

  const hipBoneName = humanoidResult.getNormalizedBoneNode('hips')?.name || '';
  const referenceEntity = entity.clone();
  referenceEntity.setPosition(0, 0, 0);
  const vrmHipsPosition =
    referenceEntity.findByName(hipBoneName)?.getPosition() || new pcRef.Vec3();

  const vrmHipsY = vrmHipsPosition.y;
  const vrmHipsHeight = Math.abs(vrmHipsY - 0);

  const vrmHipsZ = vrmHipsPosition.z;
  const vrmHipsDeep = Math.abs(vrmHipsZ - 0);

  referenceEntity.destroy();

  return loadAnimation(pcRef, animationAssets, entity, humanoidResult, {
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
