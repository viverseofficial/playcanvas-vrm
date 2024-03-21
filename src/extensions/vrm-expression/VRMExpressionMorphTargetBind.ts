import * as pc from 'playcanvas';

export class VRMExpressionMorphTargetBind {
  public readonly primitives: pc.MeshInstance[];
  public readonly targetIndex: number;
  public readonly weight: number;

  constructor({
    primitives,
    targetIndex,
    weight,
  }: {
    /**
     * The mesh primitives that attached to target mesh.
     */
    primitives: pc.MeshInstance[];

    /**
     * The index of the morph target in the mesh.
     */
    targetIndex: number;

    /**
     * The weight value of target morph target. Ranging in [0.0 - 1.0].
     */
    weight: number;
  }) {
    this.primitives = primitives;
    this.targetIndex = targetIndex;
    this.weight = weight;
  }

  applyWeight(weight: number) {
    this.primitives.forEach((mesh) => {
      if (mesh.morphInstance?.morph.targets[this.targetIndex] != null) {
        let currentWeight = mesh.morphInstance.getWeight(this.targetIndex);
        mesh.morphInstance.setWeight(this.targetIndex, (currentWeight += this.weight * weight));
      }
    });
  }

  clearAppliedWeight() {
    this.primitives.forEach((mesh) => {
      if (mesh.morphInstance?.morph.targets[this.targetIndex] != null) {
        mesh.morphInstance.setWeight(this.targetIndex, 0);
      }
    });
  }
}
