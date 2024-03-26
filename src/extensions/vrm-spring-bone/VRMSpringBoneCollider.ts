import * as pc from 'playcanvas';
import { VRMSpringBoneColliderShapeSphere } from './VRMSpringBoneColliderShapeSphere';

export const createVRMSpringBoneCollider = (pcRef: typeof pc) => {
  return class VRMSpringBoneCollider extends pcRef.Entity {
    public shape: VRMSpringBoneColliderShapeSphere;

    constructor(shape: VRMSpringBoneColliderShapeSphere) {
      super();
      this.shape = shape;
    }
  };
};
