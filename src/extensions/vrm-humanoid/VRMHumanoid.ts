import { VRMHumanoidRig } from './VRMHumanoidRig';
import { VRMRig } from './VRMRig';
import { VRMHumanBones, VRMHumanBoneName } from './vrm-humanoid';

export class VRMHumanoid {
  private _humanBones: Partial<VRMHumanBones>;
  private _rawHumanBones: VRMRig;
  private _normalizedHumanBones: VRMHumanoidRig;

  constructor(humanBones: Partial<VRMHumanBones>) {
    this._humanBones = humanBones;
    this._rawHumanBones = new VRMRig(humanBones);
    this._normalizedHumanBones = new VRMHumanoidRig(this._rawHumanBones);
  }

  get humanBones() {
    return this._rawHumanBones.humanBones;
  }

  get rawHumanBones() {
    return this._rawHumanBones.humanBones;
  }

  get normalizedHumanBones() {
    return this._normalizedHumanBones.humanBones;
  }

  get normalizedHumanBonesRoot() {
    return this._normalizedHumanBones.root;
  }

  /**
   * Return a raw {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBone(name: VRMHumanBoneName) {
    return this._rawHumanBones.getBone(name);
  }

  /**
   * Return a normalized {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBone(name: VRMHumanBoneName) {
    return this._normalizedHumanBones.getBone(name);
  }

  /**
   * Return a raw bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBoneNode(name: VRMHumanBoneName) {
    return this._rawHumanBones.getBoneNode(name);
  }

  /**
   * Return a normalized bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBoneNode(name: VRMHumanBoneName) {
    return this._normalizedHumanBones.getBoneNode(name);
  }

  getBoneEntity(name: VRMHumanBoneName) {
    return this._humanBones[name]?.entity || null;
  }
}
