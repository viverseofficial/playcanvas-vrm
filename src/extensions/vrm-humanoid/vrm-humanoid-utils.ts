import * as pc from 'playcanvas';
import { thumbBoneNameMap } from '../vrm-map-list';
import { VRMHumanoid } from './VRMHumanoid';
import { VRMHumanBoneName, VRMHumanBones } from './vrm-humanoid';

type SchemaHumanoidHumanBoneType = { bone: VRMHumanBoneName; node: number };

function createVRMHumanBones(schemaHumanoid: any, glbAsset: pc.Asset, entity: pc.Entity) {
  const schemaHumanBones = schemaHumanoid.humanBones as SchemaHumanoidHumanBoneType[];

  const existsPreviousThumbName = schemaHumanBones.findIndex((humanBone: { bone: string }) => {
    return (
      humanBone.bone === 'leftThumbIntermediate' || humanBone.bone === 'rightThumbIntermediate'
    );
  });

  const humanBones: Partial<VRMHumanBones> = {};

  if (schemaHumanoid.humanBones != null) {
    Object.entries(schemaHumanBones).map(([, schemaHumanBone]) => {
      let boneName = schemaHumanBone.bone;
      const index = schemaHumanBone.node;

      // compat: 1.0-beta previous thumb bone names
      if (existsPreviousThumbName !== -1) {
        const thumbBoneName = thumbBoneNameMap[boneName];
        if (thumbBoneName != null) {
          boneName = thumbBoneName;
        }
      }

      const node = glbAsset.resource.data.nodes[index];

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

  if (schemaHumanoid.humanBones) {
    for (const property in schemaHumanoid.humanBones) {
      let boneName = property as VRMHumanBoneName;
      const index = schemaHumanoid.humanBones[property].node;
      const node = glbAsset.resource.data.nodes[index];

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
) {
  const VRM = vrmAsset.resource.data.gltf?.extensions?.VRM;
  const VRMC_vrm = vrmAsset.resource.data.gltf?.extensions?.VRMC_vrm;

  if (!VRM && !VRMC_vrm) {
    console.warn('CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar.');
    return null;
  }

  let humanBones: Partial<VRMHumanBones> = {};

  if (VRM) {
    const schemaHumanoid = vrmAsset.resource.data.gltf?.extensions?.VRM?.humanoid;
    humanBones = createVRMHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  } else if (VRMC_vrm) {
    const schemaHumanoid = vrmAsset.resource.data.gltf?.extensions?.VRMC_vrm?.humanoid;
    const VRMCHumanBones = createVRMCHumanBones(schemaHumanoid, vrmAsset, renderEntity);
    if (VRMCHumanBones) humanBones = VRMCHumanBones;
  }

  const humanoid = new VRMHumanoid(pcRef, humanBones);
  return humanoid;
}

export function getVRMHumanoidHead(vrmAsset: pc.Asset, renderEntity: pc.Entity) {
  const VRM = vrmAsset.resource.data.gltf?.extensions?.VRM;
  const VRMC_vrm = vrmAsset.resource.data.gltf?.extensions?.VRMC_vrm;

  if (!VRM && !VRMC_vrm) {
    console.warn('CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar.');
    return;
  }

  let humanBones: Partial<VRMHumanBones> = {};
  if (VRM) {
    const schemaHumanoid = vrmAsset.resource.data.gltf?.extensions?.VRM?.humanoid;
    const schemaHumanBones = schemaHumanoid.humanBones as SchemaHumanoidHumanBoneType[];

    const headSchemaHumanoid = {
      humanBones: [
        schemaHumanBones.find((bone: SchemaHumanoidHumanBoneType) => bone.bone === 'head'),
      ],
    };

    humanBones = createVRMHumanBones(headSchemaHumanoid, vrmAsset, renderEntity);
  } else if (VRMC_vrm) {
    const schemaHumanoid = vrmAsset.resource.data.gltf?.extensions?.VRMC_vrm?.humanoid;

    const headSchemaHumanoid = {
      humanBones: {
        head: schemaHumanoid.humanBones.head,
      },
    };

    const VRMCHumanBones = createVRMCHumanBones(headSchemaHumanoid, vrmAsset, renderEntity);
    if (VRMCHumanBones) humanBones = VRMCHumanBones;
  }

  return humanBones.head ? humanBones.head.entity : null;
}
