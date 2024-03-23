import * as pc from 'playcanvas';
import { POSSIBLE_SPEC_VERSIONS } from '../vrm-map-list';
import { fromArray } from '../../math-utils';
import { VRMSpringBoneManager } from './VRMSpringBoneManager';
import { VRMSpringBoneColliderShapeSphere } from './VRMSpringBoneColliderShapeSphere';
import { VRMSpringBoneCollider } from './VRMSpringBoneCollider';
import { VRMSpringBoneColliderShapeCapsule } from './VRMSpringBoneColliderShapeCapsule';
import { VRMSpringBoneJoint } from './VRMSpringBoneJoint';
import type * as V1SpringBoneSchema from '../../types/types-vrmc-springbone-1.0';
import type * as V0VRM from '../../types/types-vrm-0.0';
import { VRMSpringBoneJointSettings, VRMSpringBoneColliderGroup } from './vrm-spring-bone';

export class VRMSpringBoneLoaderPlugin {
  static EXTENSION_NAME = 'VRMC_springBone';
  public asset: pc.Asset;
  public entity: pc.Entity;
  private _pcRef: typeof pc;

  constructor(pcRef: typeof pc, asset: pc.Asset, entity: pc.Entity) {
    this.asset = asset;
    this.entity = entity;
    this._pcRef = pcRef;
  }

  import() {
    const gltf = this.asset.resource.data.gltf;
    const data = this.asset.resource.data;

    const v1Result = this._v1Import(gltf, data);
    if (v1Result) {
      return v1Result;
    }

    const v0Result = this._v0Import(gltf, data);
    if (v0Result) {
      return v0Result;
    }

    return null;
  }

  _v1Import(gltf: any, resourceData: any) {
    // early abort if it doesn't use spring bones
    const isSpringBoneUsed =
      gltf.extensionsUsed?.indexOf(VRMSpringBoneLoaderPlugin.EXTENSION_NAME) !== -1;
    if (!isSpringBoneUsed) {
      return null;
    }

    const isVRMUsed = gltf?.extensionsUsed.indexOf('VRMC_vrm') !== -1;
    if (!isVRMUsed) {
      return null;
    }

    const manager = new VRMSpringBoneManager();
    const gltfNodes = gltf?.nodes;

    const extension = gltf.extensions?.[VRMSpringBoneLoaderPlugin.EXTENSION_NAME];
    if (!extension) {
      return null;
    }

    const specVersion = extension.specVersion;

    if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
      console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${VRMSpringBoneLoaderPlugin.EXTENSION_NAME} specVersion "${specVersion}"`,
      );
      return null;
    }

    const extensionColliders: V1SpringBoneSchema.SpringBoneCollider[] = extension.colliders;
    const colliders = extensionColliders?.map((schemaCollider, iCollider) => {
      // 1. schemaColliderGroup.node will map to index of gltfNodes
      // 2. VRM need to have gltf node index on the tags. Please check addExtensionTagsToRenderEntity function
      const node = this.entity.findByTag(`node_${schemaCollider.node}`)?.[0];
      const schemaShape = schemaCollider.shape;

      if (!node) {
        console.error(
          'VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup',
        );
        return;
      }

      if (schemaShape) {
        if (schemaShape.sphere) {
          return this._importSphereCollider(node, {
            offset: fromArray(new this._pcRef.Vec3(), schemaShape.sphere.offset ?? [0.0, 0.0, 0.0]),
            radius: schemaShape.sphere.radius ?? 0.0,
          });
        } else if (schemaShape.capsule) {
          return this._importCapsuleCollider(node, {
            offset: fromArray(
              new this._pcRef.Vec3(),
              schemaShape.capsule.offset ?? [0.0, 0.0, 0.0],
            ),
            radius: schemaShape.capsule.radius ?? 0.0,
            tail: fromArray(new this._pcRef.Vec3(), schemaShape.capsule.tail ?? [0.0, 0.0, 0.0]),
          });
        }
      }

      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${iCollider} has no valid shape`);
    });

    const extensionColliderGroups: V1SpringBoneSchema.SpringBoneColliderGroup[] =
      extension.colliderGroups;
    const colliderGroups = extensionColliderGroups?.map((schemaColliderGroup, iColliderGroup) => {
      const cols = (schemaColliderGroup.colliders ?? []).map((iCollider) => {
        const col = colliders?.[iCollider];
        if (col == null) {
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${iColliderGroup} attempted to use a collider #${iCollider} but not found`,
          );
        }
        return col;
      });
      return {
        colliders: cols,
        name: schemaColliderGroup.name,
      };
    });

    const extensionSprings: V1SpringBoneSchema.SpringBoneSpring[] = extension.springs;
    extensionSprings.forEach((schemaSpring, iSpring) => {
      const schemaJoints = schemaSpring.joints;
      // prepare colliders
      const colliderGroupsForSpring = schemaSpring.colliderGroups?.map((iColliderGroup) => {
        const group = colliderGroups?.[iColliderGroup];

        if (group == null) {
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${iSpring} attempted to use a colliderGroup ${iColliderGroup} but not found`,
          );
        }

        return group;
      });

      // Need to use original resourceData when gltf loaded, because entity will effected when you entered room
      const center =
        schemaSpring.center != null ? resourceData.nodes[schemaSpring.center] : undefined;

      let prevSchemaJoint: V1SpringBoneSchema.SpringBoneJoint | undefined;

      schemaJoints.forEach((schemaJoint) => {
        if (prevSchemaJoint) {
          // prepare node
          const nodeIndex = prevSchemaJoint.node;
          const rootNode = gltfNodes[nodeIndex];
          const node = this.entity.findByName(rootNode.name)!;
          const childIndex = schemaJoint.node;
          const rootChild = gltfNodes[childIndex];
          const child = this.entity.findByName(rootChild.name);

          // prepare setting
          const setting = {
            hitRadius: prevSchemaJoint.hitRadius,
            dragForce: prevSchemaJoint.dragForce,
            gravityPower: prevSchemaJoint.gravityPower,
            stiffness: prevSchemaJoint.stiffness,
            gravityDir:
              prevSchemaJoint.gravityDir != null
                ? fromArray(new this._pcRef.Vec3(), prevSchemaJoint.gravityDir)
                : undefined,
          };

          // create spring bones
          const joint = this._importJoint(node, child, setting, colliderGroupsForSpring);
          if (center) {
            joint.center = center;
          }

          manager.addJoint(joint);
        }

        prevSchemaJoint = schemaJoint;
      });
    });

    // init spring bones
    manager.setInitState();

    return manager;
  }

  _v0Import(gltf: any, resourceData: any) {
    const extension = gltf.extensions?.VRM;

    // early abort if it doesn't use vrm
    const isVRMUsed = gltf.extensionsUsed?.indexOf('VRM') !== -1;
    if (!isVRMUsed) {
      return null;
    }

    // early abort if it doesn't have bone groups
    const schemaSecondaryAnimation: V0VRM.SecondaryAnimation | undefined =
      extension?.secondaryAnimation;

    if (!schemaSecondaryAnimation) {
      return null;
    }

    const schemaBoneGroups = schemaSecondaryAnimation?.boneGroups;
    if (!schemaBoneGroups) {
      return null;
    }

    const manager = new VRMSpringBoneManager();

    const colliderGroups = schemaSecondaryAnimation.colliderGroups?.map((schemaColliderGroup) => {
      // 1. schemaColliderGroup.node will map to index of gltfNodes
      // 2. VRM need to have gltf node index on the tags. Please check addExtensionTagsToRenderEntity function
      const node = this.entity.findByTag(`node_${schemaColliderGroup.node}`)?.[0];

      if (!node) {
        console.error(
          'VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup',
        );
        return;
      }

      const colliders = (schemaColliderGroup.colliders ?? []).map((schemaCollider) => {
        const offset = new this._pcRef.Vec3(0, 0, 0);

        if (schemaCollider.offset) {
          offset.set(
            schemaCollider.offset.x ?? 0.0,
            schemaCollider.offset.y ?? 0.0,
            schemaCollider.offset.z ? -schemaCollider.offset.z : 0.0, // z is opposite in VRM0.0
          );
        }

        return this._importSphereCollider(node, {
          offset,
          radius: schemaCollider.radius ?? 0.0,
        });
      });

      return { colliders };
    });

    // import spring bones for each spring bone groups
    schemaBoneGroups?.forEach((schemaBoneGroup, iBoneGroup) => {
      const rootIndices = schemaBoneGroup.bones;

      if (!rootIndices) {
        return;
      }

      rootIndices.forEach((rootIndex) => {
        // VRM need to have gltf node index on the tags. Please check addExtensionTagsToRenderEntity function
        const root = this.entity.findByTag(`node_${rootIndex}`)?.[0];

        if (!root) {
          console.error(
            'VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup',
          );
          return;
        }

        // prepare setting
        const gravityDir = new this._pcRef.Vec3();
        if (schemaBoneGroup.gravityDir) {
          gravityDir.set(
            schemaBoneGroup.gravityDir.x ?? 0.0,
            schemaBoneGroup.gravityDir.y ?? 0.0,
            schemaBoneGroup.gravityDir.z ?? 0.0,
          );
        } else {
          gravityDir.set(0.0, -1.0, 0.0);
        }

        // Need to use original resourceData when gltf loaded, because entity will effected when you entered room
        const center =
          schemaBoneGroup.center != null ? resourceData.nodes[schemaBoneGroup.center] : undefined;

        const setting = {
          hitRadius: schemaBoneGroup.hitRadius,
          dragForce: schemaBoneGroup.dragForce,
          gravityPower: schemaBoneGroup.gravityPower,
          stiffness: schemaBoneGroup.stiffiness,
          gravityDir,
        };

        // prepare colliders
        const colliderGroupsForSpring = schemaBoneGroup.colliderGroups?.map((iColliderGroup) => {
          const group = colliderGroups?.[iColliderGroup];

          if (group == null) {
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${iBoneGroup} attempted to use a colliderGroup ${iColliderGroup} but not found`,
            );
          }

          return group;
        });

        // create spring bones
        root.forEach((node) => {
          const child = node.children[0] ?? null;
          const joint = this._importJoint(node, child, setting, colliderGroupsForSpring);

          if (center) {
            joint.center = center;
          }

          manager.addJoint(joint);
        });
      });
    });

    // init spring bones
    manager.setInitState();

    return manager;
  }

  _importSphereCollider(
    destination: pc.GraphNode,
    { offset, radius }: { offset: pc.Vec3; radius: number },
  ) {
    const shape = new VRMSpringBoneColliderShapeSphere(this._pcRef, { offset, radius });
    const collider = new VRMSpringBoneCollider(shape);
    destination.addChild(collider);

    return collider;
  }

  _importCapsuleCollider(
    destination: pc.GraphNode,
    { offset, radius, tail }: { offset: pc.Vec3; radius: number; tail: pc.Vec3 },
  ) {
    const shape = new VRMSpringBoneColliderShapeCapsule(this._pcRef, {
      offset,
      radius,
      tail,
    });
    const collider = new VRMSpringBoneCollider(shape);

    destination.addChild(collider);
    return collider;
  }

  _importJoint(
    node: pc.GraphNode,
    child: pc.GraphNode | null,
    setting?: Partial<VRMSpringBoneJointSettings>,
    colliderGroupsForSpring?: VRMSpringBoneColliderGroup[],
  ) {
    const springBone = new VRMSpringBoneJoint(
      this._pcRef,
      node,
      child,
      setting,
      colliderGroupsForSpring,
    );

    return springBone;
  }
}
