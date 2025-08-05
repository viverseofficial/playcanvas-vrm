import { lowestCommonAncestor } from '../../utils/lowestCommonAncestor';
import { traverseAncestorsFromRoot } from '../../utils/traverseAncestorsFromRoot';
import { traverseChildrenUntilConditionMet } from '../../utils/traverseChildrenUntilConditionMet';
import { ExtensionManagerNameType } from '../extensions';
import { VRMSpringBoneColliderGroup } from './vrm-spring-bone';
import { VRMSpringBoneJoint } from './VRMSpringBoneJoint';

interface IColliderNode extends pc.Entity {
  updateWorldMatrix(): void;
}

export class VRMSpringBoneManager {
  public managerName: ExtensionManagerNameType = 'springBone';
  private _joints = new Set<VRMSpringBoneJoint>();
  private _hasWarnedCircularDependency = false;
  private _sortedJoints: Array<VRMSpringBoneJoint> = [];

  // Strength control properties
  private _limitedStrength: number = 0.3; // Strength when limited
  private _normalStrength: number = 1.0;  // Normal strength

  /**
   * An ordered list of ancestors of all the SpringBone joints. Before the
   * SpringBone joints can be updated, the world matrices of these ancestors
   * must be calculated. The first element is the lowest common ancestor, for
   * which not only its world matrix but its ancestors' world matrices are
   * updated as well.
   */
  private _ancestors: pc.GraphNode[] = [];

  private _objectSpringBonesMap = new Map<pc.GraphNode, Set<VRMSpringBoneJoint>>();
  private _isSortedJointsDirty = false;

  constructor() {
    this._relevantChildrenUpdated = this._relevantChildrenUpdated.bind(this);
  }

  get joints() {
    return this._joints;
  }

  get limitedStrength() {
    return this._limitedStrength;
  }

  get normalStrength() {
    return this._normalStrength;
  }

  public get colliderGroups(): VRMSpringBoneColliderGroup[] {
    const set = new Set<VRMSpringBoneColliderGroup>();
    this._joints.forEach((springBone) => {
      springBone.colliderGroups.forEach((colliderGroup) => {
        set.add(colliderGroup);
      });
    });
    return Array.from(set);
  }

  private _relevantChildrenUpdated(object: pc.GraphNode): boolean {
    // if the object has attached springbone, halt the traversal
    if ((this._objectSpringBonesMap.get(object)?.size ?? 0) > 0) {
      return true;
    }

    // otherwise update its world matrix
    const colliderObject = object as IColliderNode;
    if (colliderObject.updateWorldMatrix) {
      colliderObject.updateWorldMatrix();
    }
    return false;
  }

  addJoint(joint: VRMSpringBoneJoint): void {
    this._joints.add(joint);

    let objectSet = this._objectSpringBonesMap.get(joint.bone);
    if (objectSet == null) {
      objectSet = new Set<VRMSpringBoneJoint>();
      this._objectSpringBonesMap.set(joint.bone, objectSet);
    }
    objectSet.add(joint);

    this._isSortedJointsDirty = true;
  }

  public setInitState(): void {
    this._sortJoints();

    for (let i = 0; i < this._sortedJoints.length; i++) {
      const springBone = this._sortedJoints[i];
      springBone.setInitState();
    }
  }

  public reset(): void {
    this._sortJoints();

    for (let i = 0; i < this._sortedJoints.length; i++) {
      const springBone = this._sortedJoints[i];
      springBone.reset();
    }
  }

  /**
   * Sorts the joints ensuring they are updated in the correct order taking dependencies into account.
   *
   * This method updates {@link _sortedJoints} and {@link _ancestors}.
   * Make sure to call this before using them.
   */
  private _sortJoints() {
    if (!this._isSortedJointsDirty) {
      return;
    }

    const springBoneOrder: Array<VRMSpringBoneJoint> = [];
    const springBonesTried = new Set<VRMSpringBoneJoint>();
    const springBonesDone = new Set<VRMSpringBoneJoint>();
    const ancestors = new Set<pc.GraphNode>();

    for (const springBone of this._joints) {
      this._insertJointSort(
        springBone,
        springBonesTried,
        springBonesDone,
        springBoneOrder,
        ancestors,
      );
    }
    this._sortedJoints = springBoneOrder;

    const lca = lowestCommonAncestor(ancestors);
    this._ancestors = [];
    if (lca) {
      this._ancestors.push(lca);
      traverseChildrenUntilConditionMet(lca, (object: pc.GraphNode) => {
        // if the object has attached springbone, halt the traversal
        if ((this._objectSpringBonesMap.get(object)?.size ?? 0) > 0) {
          return true;
        }
        this._ancestors.push(object);
        return false;
      });
    }

    this._isSortedJointsDirty = false;
  }

  private _insertJointSort(
    springBone: VRMSpringBoneJoint,
    springBonesTried: Set<VRMSpringBoneJoint>,
    springBonesDone: Set<VRMSpringBoneJoint>,
    springBoneOrder: Array<VRMSpringBoneJoint>,
    ancestors: Set<pc.GraphNode>,
  ) {
    if (springBonesDone.has(springBone)) {
      return;
    }

    if (springBonesTried.has(springBone)) {
      if (!this._hasWarnedCircularDependency) {
        console.warn('VRMSpringBoneManager: Circular dependency detected');
        this._hasWarnedCircularDependency = true;
      }
      return;
    }

    springBonesTried.add(springBone);

    const depObjects = springBone.dependencies;
    for (const depObject of depObjects) {
      let encounteredSpringBone = false;
      let ancestor: pc.GraphNode | null = null;
      traverseAncestorsFromRoot(depObject, (depObjectAncestor) => {
        const objectSet = this._objectSpringBonesMap.get(depObjectAncestor);

        if (objectSet) {
          for (const depSpringBone of objectSet) {
            encounteredSpringBone = true;
            this._insertJointSort(
              depSpringBone,
              springBonesTried,
              springBonesDone,
              springBoneOrder,
              ancestors,
            );
          }
        } else if (!encounteredSpringBone) {
          // This object is an ancestor of a spring bone, but is NOT a sparse node in between spring bones.
          ancestor = depObjectAncestor;
        }
      });
      if (ancestor) {
        ancestors.add(ancestor);
      }
    }

    springBoneOrder.push(springBone);

    springBonesDone.add(springBone);
  }

  public update(delta: number, isLimited: boolean = false): void {
    this._sortJoints();

    // Choose strength based on limitation state - simple and direct
    const currentStrength = isLimited ? this._limitedStrength : this._normalStrength;

    for (let i = 0; i < this._sortedJoints.length; i++) {
      // update the springbone
      const springBone = this._sortedJoints[i];
      springBone.update(delta, currentStrength);

      // update children world matrices
      // it is required when the spring bone chain is sparse
      traverseChildrenUntilConditionMet(springBone.bone, this._relevantChildrenUpdated);
    }
  }
}
