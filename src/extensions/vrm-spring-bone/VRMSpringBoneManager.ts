import { ExtensionManagerNameType } from '../extensions';
import { VRMSpringBoneJoint } from './VRMSpringBoneJoint';

enum ACTION_TYPE {
  INIT = 'init',
  UPDATE = 'update',
  RESET = 'reset',
}

export class VRMSpringBoneManager {
  public managerName: ExtensionManagerNameType;
  private _joints = new Set<VRMSpringBoneJoint>();
  private _objectSpringBonesMap = new Map<pc.GraphNode, Set<VRMSpringBoneJoint>>();
  private _ancestorPathCache = new Map<pc.GraphNode, pc.GraphNode[]>();

  public direction: number;
  public strength: number;
  public limitHeight: number;
  public limitLow: number;
  private _dt: number = 0;

  private _springBonesTried = new Set<string>();
  private _springBonesDone = new Set<string>();
  private _dependenciesCache = new Map<VRMSpringBoneJoint, Set<pc.GraphNode>>();

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
    this._springBonesTried.clear();
    this._springBonesDone.clear();

    for (const springBone of this._joints) {
      this._processSpringBone(springBone, ACTION_TYPE.INIT);
    }
  }

  reset() {
    this._springBonesTried.clear();
    this._springBonesDone.clear();

    for (const springBone of this._joints) {
      this._processSpringBone(springBone, ACTION_TYPE.RESET);
    }
  }

  update(dt: number, isWalking?: boolean) {
    this._springBonesTried.clear();
    this._springBonesDone.clear();
    this._dt = dt;

    if (isWalking) {
      if (this.strength >= this.limitHeight) {
        this.direction = -0.2;
        this.limitHeight = Math.random() * (0.2 - this.limitLow) + this.limitLow;
      } else if (this.strength <= this.limitLow) {
        this.direction = 0.2;
        this.limitLow = Math.random() * 0.2;
      }

      this.strength += this.direction * dt;
    } else {
      if (this.strength <= 0.5) {
        this.strength += 0.1 * dt;
      }
    }

    for (const springBone of this._joints) {
      this._processSpringBone(springBone, ACTION_TYPE.UPDATE);
    }
  }

  _processSpringBone(springBone: VRMSpringBoneJoint, action: ACTION_TYPE) {
    if (this._springBonesDone.has(springBone.id)) {
      return;
    }

    if (this._springBonesTried.has(springBone.id)) {
      return;
    }

    this._springBonesTried.add(springBone.id);
    const depObjects = this._getDependencies(springBone);

    for (const depObject of depObjects) {
      let ancestorPath: pc.GraphNode[];

      if (this._ancestorPathCache.has(depObject)) {
        ancestorPath = this._ancestorPathCache.get(depObject)!;
      } else {
        ancestorPath = [];
        let head = depObject;
        while (head !== null) {
          ancestorPath.push(head);
          head = head.parent;
        }
        ancestorPath.reverse();
        this._ancestorPathCache.set(depObject, ancestorPath);
      }

      for (let i = 0; i < ancestorPath.length; i++) {
        const ancestor = ancestorPath[i];
        const objectSet = this._objectSpringBonesMap.get(ancestor);

        if (objectSet) {
          for (const depSpringBone of objectSet) {
            if (!this._springBonesDone.has(depSpringBone.id)) {
              this._processSpringBone(depSpringBone, action);
            }
          }
        }
      }
    }

    if (action === ACTION_TYPE.UPDATE) {
      springBone.update(this._dt, this.strength);
    } else if (action === ACTION_TYPE.RESET) {
      springBone.reset();
    } else if (action === ACTION_TYPE.INIT) {
      springBone.setInitState();
    }

    this._springBonesDone.add(springBone.id);
  }

  // Return a set of objects that are dependant of given spring bone.
  _getDependencies(springBone: VRMSpringBoneJoint) {
    if (this._dependenciesCache.has(springBone)) {
      return this._dependenciesCache.get(springBone)!;
    }

    const set = new Set<pc.GraphNode>();

    const parent = springBone.bone.parent;
    if (parent) {
      set.add(parent);
    }

    if (springBone.colliderGroups) {
      for (let i = 0; i < springBone.colliderGroups.length; i++) {
        const colliderGroup = springBone.colliderGroups[i];
        const colliders = colliderGroup.colliders;

        for (let j = 0; j < colliders.length; j++) {
          const collider = colliders[j];
          set.add(collider);
        }
      }
    }

    this._dependenciesCache.set(springBone, set);
    return set;
  }
}
