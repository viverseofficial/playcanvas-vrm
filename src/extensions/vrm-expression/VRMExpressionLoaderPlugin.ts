import * as pc from 'playcanvas';
import { VRMExpressionPresetName, v0v1PresetNameMap } from '../vrm-map-list';
import { VRMExpressionManager } from './VRMExpressionManager';
import { VRMExpression } from './VRMExpression';
import { VRMExpressionMorphTargetBind } from './VRMExpressionMorphTargetBind';
import { ExpressionMorphTargetBind } from '../../types/types-vrmc-vrm-1.0/ExpressionMorphTargetBind';
import type * as V0VRM from '../../types/types-vrm-0.0';
import { VRMExpressionNameType, IGltfNode } from './vrm-expression';

export class VRMExpressionLoaderPlugin {
  public asset: pc.Asset;
  public meshInstances: pc.MeshInstance[];

  constructor(asset: pc.Asset, meshInstances: pc.MeshInstance[]) {
    this.asset = asset;
    this.meshInstances = meshInstances;
  }

  import() {
    const resource = this.asset.resource as { data: { gltf: any } };
    const gltf = resource.data.gltf;

    const v1Result = this._v1Import(gltf);
    if (v1Result) {
      return v1Result;
    }

    const v0Result = this._v0Import(gltf);
    if (v0Result) {
      return v0Result;
    }

    return null;
  }

  _v1Import(gltf: any) {
    const isVRMUsed = gltf?.extensionsUsed.indexOf('VRMC_vrm') !== -1;
    if (!isVRMUsed) {
      return null;
    }

    const extension = gltf?.extensions?.VRMC_vrm;
    if (!extension) {
      return null;
    }

    const schemaExpressions = extension.expressions;
    if (!schemaExpressions) {
      return null;
    }

    // list expressions
    const presetNameSet = new Set(Object.values(VRMExpressionPresetName));
    const nameSchemaExpressionMap = new Map();

    if (schemaExpressions.preset != null) {
      Object.entries(schemaExpressions.preset).forEach(([name, schemaExpression]) => {
        if (schemaExpression == null) {
          return;
        }

        if (!presetNameSet.has(name)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${name}" detected. Ignoring the expression`,
          );
          return;
        }

        nameSchemaExpressionMap.set(name, schemaExpression);
      });
    }

    if (schemaExpressions.custom != null) {
      Object.entries(schemaExpressions.custom).forEach(([name, schemaExpression]) => {
        if (presetNameSet.has(name)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${name}". Ignoring the expression`,
          );
          return;
        }

        nameSchemaExpressionMap.set(name, schemaExpression);
      });
    }

    const manager = new VRMExpressionManager();

    Array.from(nameSchemaExpressionMap.entries()).map(([name, schemaExpression]) => {
      const expression = new VRMExpression(name);
      expression.isBinary = schemaExpression.isBinary ?? false;
      expression.overrideBlink = schemaExpression.overrideBlink ?? 'none';
      expression.overrideLookAt = schemaExpression.overrideLookAt ?? 'none';
      expression.overrideMouth = schemaExpression.overrideMouth ?? 'none';

      if (schemaExpression.morphTargetBinds) {
        schemaExpression.morphTargetBinds.forEach((bind: ExpressionMorphTargetBind) => {
          if (bind.node === undefined || bind.index === undefined) {
            return;
          }

          const primitives = this.meshInstances.filter((meshInstance) => {
            // VRM need to have gltf node index on the tags. Please check addExtensionTagsToRenderEntity function
            return meshInstance.node.tags.has(`node_${bind.node}`);
          });
          const morphTargetIndex = bind.index;
          expression.addBind(
            new VRMExpressionMorphTargetBind({
              primitives: primitives,
              targetIndex: morphTargetIndex,
              weight: bind.weight ?? 1.0,
            }),
          );
        });
      }

      manager.registerExpression(expression);
    });

    return manager;
  }

  _v0Import(gltf: any) {
    // early abort if it doesn't use vrm
    const isVRMUsed = gltf.extensionsUsed?.indexOf('VRM') !== -1;
    if (!isVRMUsed) {
      return null;
    }

    const vrmExt = gltf.extensions?.VRM;
    if (!vrmExt) {
      return null;
    }

    const schemaBlendShape = vrmExt.blendShapeMaster;
    if (!schemaBlendShape) {
      return null;
    }

    const manager = new VRMExpressionManager();
    const schemaBlendShapeGroups = schemaBlendShape.blendShapeGroups;
    if (!schemaBlendShapeGroups) {
      return manager;
    }

    const blendShapeNameSet = new Set();

    schemaBlendShapeGroups.map((schemaGroup: V0VRM.BlendShapeGroup) => {
      const v0PresetName = schemaGroup.presetName;
      const v1PresetName = (v0PresetName != null && v0v1PresetNameMap[v0PresetName]) || null;
      const name = v1PresetName ?? (schemaGroup.name as VRMExpressionNameType);

      if (name == null) {
        console.warn(
          'VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression',
        );
        return;
      }

      // duplication check
      if (blendShapeNameSet.has(name)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${v0PresetName} has duplicated entries. Ignoring the expression`,
        );
        return;
      }

      blendShapeNameSet.add(name);

      const expressionCollect = [];
      const expression = new VRMExpression(name);
      expressionCollect.push(expression);

      expression.isBinary = schemaGroup.isBinary ?? false;
      // v0 doesn't have ignore properties

      if (schemaGroup.binds) {
        schemaGroup.binds.forEach((bind) => {
          if (bind.mesh === undefined || bind.index === undefined) {
            return;
          }

          const nodesUsingMesh: { gltfNode: IGltfNode; index: number }[] = [];

          gltf.nodes.forEach((node: IGltfNode, index: number) => {
            if (node.mesh === bind.mesh) {
              nodesUsingMesh.push({ gltfNode: node, index });
            }
          });

          const morphTargetIndex = bind.index;

          nodesUsingMesh.map((node) => {
            const primitives = this.meshInstances.filter((meshInstance) => {
              // VRM need to have gltf node index on the tags. Please check addExtensionTagsToRenderEntity function
              return meshInstance.node.tags.has(`node_${node.index}`);
            });

            expression.addBind(
              new VRMExpressionMorphTargetBind({
                primitives: primitives,
                targetIndex: morphTargetIndex,
                weight: 0.01 * (bind.weight ?? 100), // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
              }),
            );
          });
        });

        // TODO: (yuni) Wait for model contain this extension
        // Bind MaterialColor and TextureTransform
        // const materialValues = schemaGroup.materialValues;
        //   const materialValues = [
        //     {
        //       materialName: 'Alicia_face',
        //       propertyName: '_Color',
        //       targetValue: [247, 209, 209],
        //     },
        //   ];

        //   if (materialValues && materialValues.length !== 0) {
        //     materialValues.forEach((materialValue) => {
        //       if (
        //         materialValue.materialName === undefined ||
        //           materialValue.propertyName === undefined ||
        //           materialValue.targetValue === undefined
        //       ) {
        //         return;
        //       }

        // const materials = [];
        // meshInstances.forEach((mesh) => {
        //   materials.push(mesh?.material);
        // });

        // const materialPropertyName = materialValue.propertyName;
        // materials.forEach((material) => {
        //   if (materialPropertyName === '_MainTex_ST') {
        //     return;
        //   }

        //   const materialColorType =
        //     v0ExpressionMaterialColorMap[materialPropertyName];

        //   if (materialColorType) {
        //     // expression.addBind(
        //     //   new VRMExpressionMaterialColorBind({
        //     //     material,
        //     //     type: materialColorType,
        //     //     targetValue: new pc.Color(...materialValue.targetValue.slice(0, 3)),
        //     //   }),
        //     // );
        //   }
        // });
        // });
        //   }

        manager.registerExpression(expression);
      }
    });

    return manager;
  }
}
