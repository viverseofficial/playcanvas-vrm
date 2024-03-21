import * as pc from 'playcanvas';
import { VRMRigMap } from '../extensions/vrm-map-list';
import { createFormattedVRMHumanoid } from '../extensions/vrm-humanoid/vrm-humanoid-utils';
import { VRMHumanoid } from '../extensions/vrm-humanoid/VRMHumanoid';

interface IAnimationAsset {
  stateName: string;
  asset: pc.Asset;
  removeY?: boolean;
  removeUpperY?: boolean;
  removeZ?: boolean;
  setting?: {
    speed?: number;
    loop?: boolean;
  };
}

interface IMorphCurvePath {
  entityPath: string[];
  component: string;
  propertyPath: string[];
}

export class AddVrmAnimations extends pc.ScriptType {
  asset!: pc.Asset;
  humanoid?: VRMHumanoid;
  vrmHipsHeight: number = 0;
  vrmHipsDeep: number = 0;
  version: 'v0' | 'v1' | null = null;

  initialize() {
    this.humanoid = createFormattedVRMHumanoid(this.asset, this.entity);
    this.vrmHipsHeight = 0;
    this.vrmHipsDeep = 0;

    const isV1Used = this.asset.resource.data.gltf.extensions?.VRMC_vrm;
    const isV0Used = this.asset.resource.data.gltf.extensions?.VRM;
    this.version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

    if (this.humanoid) {
      const hipBoneName = this.humanoid.getNormalizedBoneNode('hips')?.name || '';
      const referenceEntity = this.entity.clone();
      referenceEntity.setPosition(0, 0, 0);
      const vrmHipsPosition =
        referenceEntity.findByName(hipBoneName)?.getPosition() || new pc.Vec3();

      const vrmHipsY = vrmHipsPosition.y;
      this.vrmHipsHeight = Math.abs(vrmHipsY - 0);

      const vrmHipsZ = vrmHipsPosition.z;
      this.vrmHipsDeep = Math.abs(vrmHipsZ - 0);

      referenceEntity.destroy();
    }
  }

  createAnimTrack(animTrack: pc.AnimTrack) {
    const inputs = animTrack.inputs.map((input) => new pc.AnimData(input.components, input.data));
    const outputs = animTrack.outputs.map(
      (output) => new pc.AnimData(output.components, output.data),
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

      return new pc.AnimCurve(curvePaths as any, curve.input, curve.output, curve.interpolation);
    });

    return new pc.AnimTrack(animTrack.name, animTrack.duration, inputs, outputs, curves);
  }

  loadAnimation(animationAssets: IAnimationAsset[]) {
    if (!(this.entity.script && this.entity.script.has('vrm'))) {
      return;
    }

    if (!this.humanoid) {
      return;
    }

    const hipPositionOutputIndexes: { [key: number]: boolean } = {};
    const scaleOutputIndexes: { [key: number]: boolean } = {};
    const calcQuat = new pc.Quat();

    const motionHipsHeight = 0.855;
    const hipsPositionScaleY = this.vrmHipsHeight / motionHipsHeight;

    return animationAssets.map((animationAsset) => {
      const animTrack = this.createAnimTrack(animationAsset.asset.resource);

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
            const vrmNodeName = this.humanoid?.getNormalizedBoneNode(vrmBoneName)?.name;

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
                  return this.vrmHipsHeight;
                }

                if (animationAsset.removeUpperY && v * hipsPositionScaleY > this.vrmHipsHeight) {
                  return this.vrmHipsHeight;
                }
              }

              if (hipPositionOutputIndexes[outputIndex] && index % 3 === 2) {
                if (animationAsset.removeZ) {
                  return this.vrmHipsDeep;
                }
              }

              return v * hipsPositionScaleY;
            });

            output._data = newData;
          }
        } else if (this.version === 'v1') {
          // Handle vrmc initial local rotation is not 0
          // TODO: (yuni): Arm looks strange
          const newData = [...output.data];
          const mixamoRigNode = this.entity.findByName(entityPath);
          const restRotationInverse = mixamoRigNode?.getRotation().invert();
          const parentRestWorldRotation = mixamoRigNode?.parent?.getRotation();

          if (restRotationInverse && parentRestWorldRotation) {
            for (let i = 0; i < newData.length; i += 4) {
              const flatQuaternion = newData.slice(i, i + 4);
              const _quatA = new pc.Quat(flatQuaternion);

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
  }
}

AddVrmAnimations.attributes.add('asset', {
  type: 'asset',
  description: 'Set the container asset loaded from vrm avatar.',
});
