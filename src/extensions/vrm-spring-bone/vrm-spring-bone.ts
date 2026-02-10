import * as pc from 'playcanvas';
import { VRMSpringBoneColliderType } from './VRMSpringBoneCollider';

export interface VRMSpringBoneJointSettings {
  /**
   * Radius of the bone, will be used for collision.
   */
  hitRadius: number;

  stiffness: number;
  gravityPower: number;
  gravityDir: pc.Vec3;
  dragForce: number;
}

/**
 * Represents a collider group of a VRM.
 */
export interface VRMSpringBoneColliderGroup {
  /**
   * The colliders of the collider group.
   */
  colliders: VRMSpringBoneColliderType[];

  /**
   * The name of the collider.
   */
  name?: string;
}
