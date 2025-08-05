import * as pc from 'playcanvas';
import { VRMSpringBoneColliderShapeSphere } from './VRMSpringBoneColliderShapeSphere';
import { VRMSpringBoneColliderShapeCapsule } from './VRMSpringBoneColliderShapeCapsule';

type VRMSpringBoneColliderType = pc.Entity & {
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
  collider.colliderMatrix = new pcRef.Mat4();
  collider.updateWorldMatrix = function (): void {
    const matrixWorld = this.getWorldTransform();
    updateColliderMatrix(this.colliderMatrix, matrixWorld, this.shape.offset);
  };

  return collider;
}

/**
 * Computes the colliderMatrix based on an offset and a world matrix.
 * Equivalent to the following code when matrixWorld is an affine matrix:
 * ```js
 * out.makeTranslation(offset).premultiply(matrixWorld)
 * ```
 *
 * @param colliderMatrix The target matrix to store the result in.
 * @param matrixWorld The world matrix fo the collider object.
 * @param offset Optional offset to the collider shape.
 */
function updateColliderMatrix(colliderMatrix: pc.Mat4, matrixWorld: pc.Mat4, offset?: pc.Vec3) {
  const me = matrixWorld.data;

  colliderMatrix.copy(matrixWorld);

  if (offset) {
    colliderMatrix.data[12] = me[0] * offset.x + me[4] * offset.y + me[8] * offset.z + me[12];
    colliderMatrix.data[13] = me[1] * offset.x + me[5] * offset.y + me[9] * offset.z + me[13];
    colliderMatrix.data[14] = me[2] * offset.x + me[6] * offset.y + me[10] * offset.z + me[14];
  }
}
