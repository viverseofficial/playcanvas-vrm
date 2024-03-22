import * as pc from 'playcanvas';
import { VRMSpringBoneColliderShapeSphere } from './VRMSpringBoneColliderShapeSphere';

export class VRMSpringBoneCollider extends pc.Entity {
  public shape: VRMSpringBoneColliderShapeSphere;

  constructor(shape: VRMSpringBoneColliderShapeSphere) {
    super();
    this.shape = shape;
  }
}
