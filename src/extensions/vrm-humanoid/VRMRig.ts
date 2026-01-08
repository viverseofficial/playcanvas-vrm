import { VRMHumanBones, VRMHumanBoneName, VRMHumanBone } from './vrm-humanoid';
import * as pc from 'playcanvas';

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
  getBone(name: VRMHumanBoneName): VRMHumanBone | undefined {
    return this.humanBones[name] ?? undefined;
  }

  getBoneNode(name: VRMHumanBoneName): pc.GraphNode | null {
    return this.humanBones[name]?.node ?? null;
  }
}
