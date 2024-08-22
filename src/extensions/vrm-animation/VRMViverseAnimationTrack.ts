import * as pc from 'playcanvas';
import { VRMHumanoid } from '../vrm-humanoid/VRMHumanoid';
import { IAnimationAsset, IAnimExtraSettings, IMorphCurvePath } from './vrm-animation-interfaces';
import { VRMRigMap } from '../vrm-map-list';
import { cloneAnimTrack } from './utils/cloneAnimTrack';

export class VRMViverseAnimationTrack {
  private pcRef: typeof pc;
  private animationAsset: IAnimationAsset;
  private humanoid: VRMHumanoid;
  private metaVersion: 'v0' | 'v1' | null;
  private extraSettings: IAnimExtraSettings;
  private origAnimTrack: pc.AnimTrack;

  constructor(
    pcRef: typeof pc,
    animationAsset: IAnimationAsset,
    humanoid: VRMHumanoid,
    metaVersion: 'v0' | 'v1' | null = 'v0',
    extraSettings: IAnimExtraSettings,
    origAnimTrack: pc.AnimTrack,
  ) {
    this.pcRef = pcRef;
    this.animationAsset = animationAsset;
    this.humanoid = humanoid;
    this.metaVersion = metaVersion;
    this.extraSettings = extraSettings;
    this.origAnimTrack = origAnimTrack;
  }

  get result(): pc.AnimTrack {
    return this.createViverseAnimTrack();
  }

  createViverseAnimTrack() {
    const vrmHipsPosition =
      this.humanoid.rawHumanBones.hips?.node.getPosition() || new this.pcRef.Vec3();

    const vrmHipsY = vrmHipsPosition.y;
    const vrmHipsHeight = Math.abs(vrmHipsY - 0);

    const vrmHipsZ = vrmHipsPosition.z;
    const vrmHipsDeep = Math.abs(vrmHipsZ - 0);

    const hipPositionOutputIndexes: { [key: number]: boolean } = {};
    const scaleOutputIndexes: { [key: number]: boolean } = {};

    let { motionHipsHeight, negativeZAnimNames } = this.extraSettings;
    if (!negativeZAnimNames) {
      negativeZAnimNames = [];
    }

    const animTrack: pc.AnimTrack = cloneAnimTrack(this.pcRef, this.origAnimTrack);
    // Default animation skeleton forward is +z axis, so vrm version 0 needs to be converted.
    // some animation forward is -z axis, convert to vrm version 1.
    const isNegativeZAxis = negativeZAnimNames.includes(this.origAnimTrack.name);
    const needConvertVersion = isNegativeZAxis ? 'v1' : 'v0';

    // Try to get the animation hips node from asset
    let nodeMotionHipsHeight = 0;
    if (this.animationAsset.asset.type === 'container') {
      const motionHipsNode = this.animationAsset.asset.resource.data.nodes.find(
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
          const vrmNodeName = this.humanoid.getRawBoneNode(vrmBoneName)?.name;

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

            if (this.metaVersion === needConvertVersion && index % 3 !== 1) {
              value *= -1;
            }

            if (hipPositionOutputIndexes[outputIndex] && index % 3 === 1) {
              if (this.animationAsset.removeY) {
                return vrmHipsHeight;
              }

              if (this.animationAsset.removeUpperY && v * hipsPositionScaleY > vrmHipsHeight) {
                return vrmHipsHeight;
              }
            }

            if (hipPositionOutputIndexes[outputIndex] && index % 3 === 2) {
              if (this.animationAsset.removeZ) {
                return vrmHipsDeep;
              }
            }

            return value * hipsPositionScaleY;
          });

          output._data = newData;
        }
      } else if (output.components === 4) {
        const newData = output.data.map((v, index) => {
          if (this.metaVersion === needConvertVersion && index % 2 === 0) {
            return -v;
          } else {
            return v;
          }
        });

        output._data = newData;
      }
    });
    const events = new this.pcRef.AnimEvents([
      { name: `anim-track:${this.animationAsset.stateName}`, time: 0 },
    ]);
    animTrack.events = events;

    return animTrack;
  }
}
