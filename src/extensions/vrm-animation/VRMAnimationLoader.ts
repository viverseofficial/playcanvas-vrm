import * as pc from 'playcanvas';
import { GLTF as GLTFSchema } from '../../types/gltf';
import { VRMCVRMAnimation } from './types/VRMCVRMAnimation';
import { VRMHumanBoneName } from '../vrm-humanoid/vrm-humanoid';
import { VRMHumanBoneParentMap, VRMExpressionPresetName } from '../vrm-map-list';
import { VRMAnimation } from './VRMAnimation';
import { IMorphCurvePath, IVrmaTrack } from './vrm-animation-interfaces';
import { arrayChunk } from './utils/arrayChunk';
import { applyMatrix4 } from './utils/applyMatrix4';
import { cloneAnimTrack } from './utils/cloneAnimTrack';
import { IAnimatedMorphConfig } from '../vrm-expression/vrm-expression';

const POSSIBLE_SPEC_VERSIONS = new Set(['1.0', '1.0-draft']);
const vrmExpressionPresetNameSet: Set<string> = new Set(Object.values(VRMExpressionPresetName));

interface VRMANodeMap {
  origNameToHumanoidIndex: Map<string, number>;
  humanoidIndexToName: Map<number, VRMHumanBoneName>;
  expressionsIndexToName: Map<number, string>;
  lookAtIndex: number | null;
}

type VRMAWorldMatrixMap = Map<VRMHumanBoneName | 'hipsParent', pc.Mat4>;

export class VRMAnimationLoader {
  private pcRef: typeof pc;

  constructor(pcRef: typeof pc) {
    this.pcRef = pcRef;
  }

  loadVRMA(vrmaAsset: pc.Asset): VRMAnimation[] | undefined {
    // get gltf properties from the asset
    const defGltf = vrmaAsset.resource.data.gltf as GLTFSchema.IGLTF;

    // make sure the asset is a valid .vrma file
    const defExtensionsUsed = defGltf.extensionsUsed;
    if (defExtensionsUsed == null || defExtensionsUsed.indexOf('VRMC_vrm_animation') == -1) {
      console.warn('CreateVRMAnimation: Please check. It is not a vrma.');
      return;
    }

    const defExtension = defGltf.extensions?.['VRMC_vrm_animation'] as VRMCVRMAnimation | undefined;
    if (defExtension == null) {
      console.warn('CreateVRMAnimation: Please check. It is not a vrma.');
      return;
    }

    // check vrma version
    const specVersion = defExtension.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
      console.warn(`CreateVRMAnimation: Unknown VRMC_vrm_animation spec version: ${specVersion}`);
      return;
    }
    if (specVersion === '1.0-draft') {
      console.warn(
        'CreateVRMAnimation: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file.',
      );
    }

    // get Playcanvas nodes
    const pcNodes = vrmaAsset.resource.data.nodes as pc.GraphNode[];

    const nodeMap = this._createNodeMap(defGltf, defExtension);
    const worldMatrixMap = this._createBoneWorldMatrixMap(pcNodes, defExtension); //await

    const hipsNode = defExtension.humanoid?.humanBones['hips']?.node;
    const hips = hipsNode != null ? (pcNodes[hipsNode] as pc.GraphNode) : null;

    const restHipsPosition = hips ? hips.getPosition() : new this.pcRef.Vec3();

    // get Playcanvas animation
    const animTracks: pc.AnimTrack[] = vrmaAsset.resource.data.animations;
    const animations: VRMAnimation[] = animTracks.map((animTrack: pc.AnimTrack, index: number) => {
      const defAnimation = defGltf.animations![index];

      const animation = this._parseAnimation(animTrack, defAnimation, nodeMap, worldMatrixMap);
      animation.restHipsPosition = restHipsPosition;

      return animation;
    });

    return animations;
  }

  private _createNodeMap(defGltf: GLTFSchema.IGLTF, defExtension: VRMCVRMAnimation): VRMANodeMap {
    const origNameToHumanoidIndex: Map<string, number> = new Map();
    const humanoidIndexToName: Map<number, VRMHumanBoneName> = new Map();
    const expressionsIndexToName: Map<number, string> = new Map();

    // node index
    const origNodes = defGltf.nodes;

    if (origNodes) {
      origNodes.forEach((value, index) => {
        if (value.name) {
          origNameToHumanoidIndex.set(value.name, index);
        }
      });
    }

    // Humanoid
    const humanBones = defExtension.humanoid?.humanBones;

    if (humanBones) {
      Object.entries(humanBones).forEach(([name, bone]) => {
        const node = bone?.node;
        if (node != null) {
          humanoidIndexToName.set(node, name as VRMHumanBoneName);
        }
      });
    }

    // Expressions
    const preset = defExtension.expressions?.preset;

    if (preset) {
      Object.entries(preset).forEach(([name, expression]) => {
        const node = expression?.node;
        if (node != null) {
          expressionsIndexToName.set(node, name);
        }
      });
    }

    const custom = defExtension.expressions?.custom;

    if (custom) {
      Object.entries(custom).forEach(([name, expression]) => {
        const { node } = expression;
        expressionsIndexToName.set(node, name);
      });
    }

    // lookAt
    const lookAtIndex = defExtension.lookAt?.node ?? null;

    return { origNameToHumanoidIndex, humanoidIndexToName, expressionsIndexToName, lookAtIndex };
  }

  //In THREE, it's async
  private _createBoneWorldMatrixMap(
    pcNodes: pc.GraphNode[],
    defExtension: VRMCVRMAnimation,
  ): VRMAWorldMatrixMap {
    /*   // update the entire hierarchy first
    gltf.scene.updateWorldMatrix(false, true); */

    const worldMatrixMap: VRMAWorldMatrixMap = new Map();

    if (defExtension.humanoid == null) {
      return worldMatrixMap;
    }

    for (const [boneName, humanBone] of Object.entries(defExtension.humanoid.humanBones)) {
      const node = humanBone?.node;
      if (node != null) {
        const pcNode = pcNodes[node];
        worldMatrixMap.set(boneName as VRMHumanBoneName, pcNode.getWorldTransform());

        const MAT4_IDENTITY = new this.pcRef.Mat4();

        if (boneName === 'hips') {
          worldMatrixMap.set('hipsParent', pcNode.parent?.getWorldTransform() ?? MAT4_IDENTITY);
        }
      }
    }
    return worldMatrixMap;
  }

  private _parseAnimation(
    animTrack: pc.AnimTrack,
    defAnimation: GLTFSchema.IAnimation,
    nodeMap: VRMANodeMap,
    worldMatrixMap: VRMAWorldMatrixMap,
  ): VRMAnimation {
    const { inputs, outputs, curves } = cloneAnimTrack(this.pcRef, animTrack);

    // mapping data to gltf vrm
    const defChannels = defAnimation.channels;
    const result = new VRMAnimation(this.pcRef);

    result.duration = animTrack.duration;

    defChannels.forEach((channel, index) => {
      const { node, path } = channel.target;

      const curve: pc.AnimCurve = curves[index];
      const input: pc.AnimData = inputs[curve.input];
      const output: pc.AnimData = outputs[curve.output];

      if (node == null) {
        return;
      }

      // humanoid
      const boneName = nodeMap.humanoidIndexToName.get(node);

      if (boneName != null) {
        let parentBoneName: VRMHumanBoneName | 'hipsParent' | null =
          VRMHumanBoneParentMap[boneName];
        while (parentBoneName != null && worldMatrixMap.get(parentBoneName) == null) {
          parentBoneName = VRMHumanBoneParentMap[parentBoneName];
        }
        parentBoneName ?? (parentBoneName = 'hipsParent');

        // Map curve path
        curve.paths.forEach((graph) => {
          const morphCurvePath = graph as unknown as IMorphCurvePath;
          // assign vrma bone name
          const arrangedEntityPath = morphCurvePath.entityPath.map((path) => {
            const nodeIndex = nodeMap.origNameToHumanoidIndex.get(path);
            if (nodeIndex) {
              const _boneName = nodeMap.humanoidIndexToName.get(nodeIndex);
              return _boneName ? _boneName : boneName;
            } else {
              return boneName;
            }
          });
          morphCurvePath.entityPath = arrangedEntityPath;
        });

        if (path === 'translation') {
          if (boneName !== 'hips') {
            console.warn(
              `The loading animation contains a translation track for ${boneName}, which is not permitted in the VRMC_vrm_animation spec. ignoring the track`,
            );
          } else {
            const hipsParentWorldMatrix = worldMatrixMap.get('hipsParent')!;

            const outputData = arrayChunk(output.data, 3).flatMap((v) => {
              let _vec3 = new this.pcRef.Vec3(v[0], v[1], v[2]);
              _vec3 = applyMatrix4(this.pcRef, _vec3, hipsParentWorldMatrix);
              return [_vec3.x, _vec3.y, _vec3.z];
            });

            const _outputData = new Float32Array(outputData);
            const _output = new this.pcRef.AnimData(output.components, _outputData);

            //create keyframe track
            const vrmaTrack: IVrmaTrack = { curve: curve, input: input, output: _output };

            result.humanoidTracks.translation.set(boneName, vrmaTrack);
          }
        } else if (path === 'rotation') {
          const worldMatrix = worldMatrixMap.get(boneName)!;
          const parentWorldMatrix = worldMatrixMap.get(parentBoneName)!;

          // World Quat
          const worldMatrixQuat: pc.Quat = new this.pcRef.Quat();
          worldMatrixQuat.setFromMat4(worldMatrix);

          worldMatrixQuat.invert();

          // Parent World Quat
          const parentWorldMatrixQuat: pc.Quat = new this.pcRef.Quat();
          parentWorldMatrixQuat.setFromMat4(parentWorldMatrix);

          const outputData = arrayChunk(output.data, 4).flatMap((q) => {
            let _quat = new this.pcRef.Quat(q[0], q[1], q[2], q[3]);
            _quat = _quat.mul2(parentWorldMatrixQuat, _quat).mul(worldMatrixQuat);

            return [_quat.x, _quat.y, _quat.z, _quat.w];
          });
          const _outputData = new Float32Array(outputData);
          const _output = new this.pcRef.AnimData(output.components, _outputData);

          //create vrma track
          const vrmaTrack: IVrmaTrack = { curve: curve, input: input, output: _output };

          result.humanoidTracks.rotation.set(boneName, vrmaTrack);
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
        return;
      }

      // expressions
      const expressionName = nodeMap.expressionsIndexToName.get(node);

      if (expressionName != null) {
        if (path === 'translation') {
          const values = new Float32Array(output.data.length / 3);
          for (let i = 0; i < values.length; i++) {
            values[i] = output.data[3 * i];
          }

          const expressionConfig: IAnimatedMorphConfig = {
            times: input.data,
            values: values,
            loop: true,
          };

          if (vrmExpressionPresetNameSet.has(expressionName)) {
            result.expressionTracks.preset.set(
              expressionName as VRMExpressionPresetName,
              expressionConfig,
            );
          } else {
            result.expressionTracks.custom.set(expressionName, expressionConfig);
          }
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
        return;
      }

      // lookAt
      if (node === nodeMap.lookAtIndex) {
        if (path === 'rotation') {
          const lookAtTrack: IVrmaTrack = { curve: curve, input: input, output: output };
          result.lookAtTrack = lookAtTrack;
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
      }
    });
    return result;
  }
}
