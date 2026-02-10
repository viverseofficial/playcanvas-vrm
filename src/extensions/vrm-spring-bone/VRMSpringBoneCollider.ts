import * as pc from 'playcanvas';
import { VRMSpringBoneColliderShapeSphere } from './VRMSpringBoneColliderShapeSphere';
import { VRMSpringBoneColliderShapeCapsule } from './VRMSpringBoneColliderShapeCapsule';

export type VRMSpringBoneColliderType = pc.Entity & {
  shape: VRMSpringBoneColliderShapeSphere | VRMSpringBoneColliderShapeCapsule;
  colliderMatrix: pc.Mat4;
  updateWorldMatrix(): void;
};

export function createVRMSpringBoneCollider(
  pcRef: typeof pc,
  shape: VRMSpringBoneColliderShapeSphere | VRMSpringBoneColliderShapeCapsule,
): VRMSpringBoneColliderType {
  const collider = new pcRef.Entity() as VRMSpringBoneColliderType;
  collider.shape = shape;
  collider.setLocalPosition(shape.offset);

  // Debug: Uncomment to visualize colliders
  // import { addColliderDebugVisualization } from './debug';
  // addColliderDebugVisualization(pcRef, collider);

  return collider;
}
