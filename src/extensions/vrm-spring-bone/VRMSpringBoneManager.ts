import { traverseAncestorsFromRoot } from '../../entity-utils';
import { ExtensionManagerNameType } from '../extensions';
import { VRMSpringBoneJoint } from './VRMSpringBoneJoint';

export class VRMSpringBoneManager {
  public managerName: ExtensionManagerNameType;
  private _joints = new Set<VRMSpringBoneJoint>();
  private _objectSpringBonesMap = new Map<pc.GraphNode, Set<VRMSpringBoneJoint>>();

  public direction: number;
  public strength: number;
  public limitHeight: number;
  public limitLow: number;

  constructor() {
    this.managerName = 'springBone';
    this._joints = new Set();
    this._objectSpringBonesMap = new Map();

    // Walking rotation strength (0 - 0.2)
    this.direction = 1;
    this.strength = 0.1;
    this.limitHeight = 0.2;
    this.limitLow = 0;
  }

  get joints() {
    return this._joints;
  }

  addJoint(joint: VRMSpringBoneJoint) {
    this._joints.add(joint);
    let objectSet = this._objectSpringBonesMap.get(joint.bone);

    if (objectSet == null) {
      objectSet = new Set();
      this._objectSpringBonesMap.set(joint.bone, objectSet);
    }

    objectSet.add(joint);
  }

  setInitState() {
    const springBonesTried = new Set<VRMSpringBoneJoint>();
    const springBonesDone = new Set<VRMSpringBoneJoint>();
    const objectUpdated = new Set<pc.GraphNode>();

    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone: VRMSpringBoneJoint) => springBone.setInitState(),
      );
    }
  }

  reset() {
    const springBonesTried = new Set<VRMSpringBoneJoint>();
    const springBonesDone = new Set<VRMSpringBoneJoint>();
    const objectUpdated = new Set<pc.GraphNode>();

    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone: VRMSpringBoneJoint) => springBone.reset(),
      );
    }
  }

  update(dt: number, isWalking?: boolean) {
    const springBonesTried = new Set<VRMSpringBoneJoint>();
    const springBonesDone = new Set<VRMSpringBoneJoint>();
    const objectUpdated = new Set<pc.GraphNode>();

    if (isWalking) {
      if (this.strength >= this.limitHeight) {
        this.direction = -0.2;
        this.limitHeight = Math.random() * (0.2 - this.limitLow) + this.limitLow;
      } else if (this.strength <= this.limitLow) {
        this.direction = 0.2;
        this.limitLow = Math.random() * 0.2;
        // this.limitLow = Math.random() * (0.2 - 0.1) + 0.1;
      }

      this.strength += this.direction * dt;
    } else {
      if (this.strength <= 0.5) {
        this.strength += 0.1 * dt;
      }
    }

    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone: VRMSpringBoneJoint) => {
          springBone.update(dt, this.strength);
        },
      );
    }
  }

  _processSpringBone(
    springBone: VRMSpringBoneJoint,
    springBonesTried: Set<VRMSpringBoneJoint>,
    springBonesDone: Set<VRMSpringBoneJoint>,
    objectUpdated: Set<pc.GraphNode>,
    callback: (springBone: VRMSpringBoneJoint) => void,
  ) {
    if (springBonesDone.has(springBone)) {
      return;
    }

    if (springBonesTried.has(springBone)) {
      throw new Error(
        'VRMSpringBoneManager: Circular dependency detected while updating springbones',
      );
    }
    springBonesTried.add(springBone);
    const depObjects = this._getDependencies(springBone);

    for (const depObject of depObjects) {
      traverseAncestorsFromRoot(depObject, (depObjectAncestor: pc.GraphNode) => {
        const objectSet = this._objectSpringBonesMap.get(depObjectAncestor);

        if (objectSet) {
          for (const depSpringBone of objectSet) {
            this._processSpringBone(
              depSpringBone,
              springBonesTried,
              springBonesDone,
              objectUpdated,
              callback,
            );
          }
        } else if (!objectUpdated.has(depObjectAncestor)) {
          objectUpdated.add(depObjectAncestor);
        }
      });
    }

    callback(springBone);

    objectUpdated.add(springBone.bone);

    springBonesDone.add(springBone);
  }

  // Return a set of objects that are dependant of given spring bone.
  _getDependencies(springBone: VRMSpringBoneJoint) {
    const set = new Set<pc.GraphNode>();

    const parent = springBone.bone.parent;
    if (parent) {
      set.add(parent);
    }

    springBone.colliderGroups?.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        set.add(collider);
      });
    });

    return set;
  }
}
