import { VRMHumanBones, VRMHumanBoneName } from './vrm-humanoid';

export class VRMRig {
  public humanBones: Partial<VRMHumanBones>;

  constructor(humanBones: Partial<VRMHumanBones>) {
    this.humanBones = humanBones;
  }
  /**
   * Return a bone bound to a specified {@link VRMHumanBoneName}, as a {@link VRMHumanBone}.
   *
   * @param name Name of the bone you want
   */
  getBone(name: VRMHumanBoneName) {
    return this.humanBones[name] ?? undefined;
  }

  getBoneNode(name: VRMHumanBoneName) {
    return this.humanBones[name]?.node ?? null;
  }
}
