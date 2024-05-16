import * as pc from 'playcanvas';
import { VRMHumanoidRig } from './VRMHumanoidRig';
import { VRMRig } from './VRMRig';
import { VRMHumanBones, VRMHumanBoneName } from './vrm-humanoid';

export class VRMHumanoid {
  public autoUpdateHumanBones: boolean;
  private _rawHumanBones: VRMRig;
  private _normalizedHumanBones: VRMHumanoidRig;

  constructor(
    pcRef: typeof pc,
    humanBones: Partial<VRMHumanBones>,
    options?: { autoUpdateHumanBones?: boolean },
  ) {
    this.autoUpdateHumanBones = options?.autoUpdateHumanBones ?? true;
    this._rawHumanBones = new VRMRig(humanBones);
    this._normalizedHumanBones = new VRMHumanoidRig(pcRef, this._rawHumanBones);
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
    return this._rawHumanBones.humanBones[name]?.entity || null;
  }

  /**
   * Update the humanoid component.
   *
   * If {@link autoUpdateHumanBones} is `true`, it transfers the pose of normalized human bones to raw human bones.
   */
  public update(): void {
    if (this.autoUpdateHumanBones) {
      this._normalizedHumanBones.update();
    }
  }
}
