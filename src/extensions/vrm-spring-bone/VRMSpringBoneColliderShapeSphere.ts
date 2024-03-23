import * as pc from 'playcanvas';

export class VRMSpringBoneColliderShapeSphere {
  public offset: pc.Vec3;
  public radius: number;

  constructor(pcRef: typeof pc, params?: { radius?: number; offset?: pc.Vec3 }) {
    this.offset = params?.offset ?? new pcRef.Vec3();
    this.radius = params?.radius ?? 0.0;
  }

  get type() {
    return 'sphere';
  }

  calculateCollision(
    colliderMatrix: pc.Mat4,
    objectPosition: pc.Vec3,
    objectRadius: number,
    target: pc.Vec3,
  ) {
    target.copy(this.offset).copy(colliderMatrix.transformPoint(target)); // transformed offset
    target.mulScalar(-1).add(objectPosition); // a vector from collider center to object position
    const radius = objectRadius + this.radius;
    const distance = target.length() - radius;
    target.normalize();

    return distance;
  }
}
