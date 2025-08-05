import * as pc from 'playcanvas';
import { POSSIBLE_SPEC_VERSIONS, thumbBoneNameMap } from '../vrm-map-list';
import { VRMHumanoid } from './VRMHumanoid';
import { VRMHumanBoneName, VRMHumanBones } from './vrm-humanoid';

type SchemaHumanoidHumanBoneType = { bone: VRMHumanBoneName; node: number };

function createVRMHumanBones(schemaHumanoid: any, glbAsset: pc.Asset, entity: pc.Entity) {
  const schemaHumanBones = schemaHumanoid.humanBones as SchemaHumanoidHumanBoneType[];
  const humanBones: Partial<VRMHumanBones> = {};

  if (schemaHumanoid.humanBones != null) {
    Object.entries(schemaHumanBones).map(([, schemaHumanBone]) => {
      let boneName = schemaHumanBone.bone;
      const index = schemaHumanBone.node;

      if (boneName == null || index == null) {
        return;
      }

      const resource = glbAsset.resource as { data: { nodes: pc.GraphNode[] } };
      const node = resource.data.nodes[index];

      // if the specified node does not exist, emit a warning
      if (node == null) {
        console.warn(
          `A glTF node bound to the humanoid bone ${boneName} (index = ${index}) does not exist`,
        );
        return;
      }

      // set to the `humanBones`
      humanBones[boneName] = {
        node,
        entity: entity.findByTag(`node_${index}`)?.[0] || null,
      };
    });
  }

  return humanBones;
}

export function createVRMCHumanBones(schemaHumanoid: any, glbAsset: pc.Asset, entity: pc.Entity) {
  const humanBones: Partial<VRMHumanBones> = {};

  /**
   * compat: 1.0-beta thumb bone names
   *
   * `true` if `leftThumbIntermediate` or `rightThumbIntermediate` exists
   */
  const existsPreviousThumbName =
    (schemaHumanoid.humanBones as any).leftThumbIntermediate != null ||
    (schemaHumanoid.humanBones as any).rightThumbIntermediate != null;

  if (schemaHumanoid.humanBones) {
    for (const property in schemaHumanoid.humanBones) {
      let boneName = property as VRMHumanBoneName;
      const index = schemaHumanoid.humanBones[property].node;
      const resource = glbAsset.resource as { data: { nodes: pc.GraphNode[] } };
      const node = resource.data.nodes[index];

      // compat: 1.0-beta previous thumb bone names
      if (existsPreviousThumbName) {
        const thumbBoneName = thumbBoneNameMap[boneName];
        if (thumbBoneName != null) {
          boneName = thumbBoneName;
        }
      }

      // if the specified node does not exist, emit a warning
      if (node == null) {
        console.warn(
          `A glTF node bound to the humanoid bone ${boneName} (index = ${index}) does not exist`,
        );
        return null;
      }

      // set to the `humanBones`
      humanBones[boneName] = {
        node,
        entity: entity.findByTag(`node_${index}`)?.[0] || null,
      };
    }
  }

  return humanBones;
}

export function createFormattedVRMHumanoid(
  pcRef: typeof pc,
  vrmAsset: pc.Asset,
  renderEntity: pc.Entity,
  options?: { autoUpdateHumanBones?: boolean },
) {
  const resource = vrmAsset.resource as { data: { gltf: any } };
  const VRM = resource.data.gltf?.extensions?.VRM;
  const VRMC_vrm = resource.data.gltf?.extensions?.VRMC_vrm;

  if (!VRM && !VRMC_vrm) {
    console.warn('CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar.');
    return null;
  }

  let humanBones: Partial<VRMHumanBones> | null = null;

  if (VRM) {
    // v0Import
    const schemaHumanoid = resource.data.gltf?.extensions?.VRM?.humanoid;
    humanBones = createVRMHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  } else if (VRMC_vrm) {
    // v1Import
    const specVersion = VRMC_vrm.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
      console.warn(`Unknown VRMC_vrm specVersion "${specVersion}"`);
      return null;
    }

    const schemaHumanoid = resource.data.gltf?.extensions?.VRMC_vrm?.humanoid;
    humanBones = createVRMCHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  }

  if (humanBones) {
    const autoUpdateHumanBones = !!options?.autoUpdateHumanBones;
    const humanoid = new VRMHumanoid(pcRef, humanBones, { autoUpdateHumanBones });

    if (VRMC_vrm) {
      // v1Import
      renderEntity.addChild(humanoid.normalizedHumanBonesRoot);
    }
    return humanoid;
  }

  return null;
}
