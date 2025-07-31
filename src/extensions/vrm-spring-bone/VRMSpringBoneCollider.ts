import * as pc from 'playcanvas';
import { VRMSpringBoneColliderShapeSphere } from './VRMSpringBoneColliderShapeSphere';
import { VRMSpringBoneColliderShapeCapsule } from './VRMSpringBoneColliderShapeCapsule';

type VRMSpringBoneColliderType = pc.Entity & {
  shape: VRMSpringBoneColliderShapeSphere | VRMSpringBoneColliderShapeCapsule;
};

export function createVRMSpringBoneCollider(
  pcRef: typeof pc,
  shape: VRMSpringBoneColliderShapeSphere | VRMSpringBoneColliderShapeCapsule,
): VRMSpringBoneColliderType {
  const collider = new pcRef.Entity() as VRMSpringBoneColliderType;
  collider.shape = shape;
  return collider;
}
