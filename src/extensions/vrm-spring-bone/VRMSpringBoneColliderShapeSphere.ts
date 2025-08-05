import * as pc from 'playcanvas';

export class VRMSpringBoneColliderShapeSphere {
  public offset: pc.Vec3;
  public radius: number;

  /**
   * If true, the collider prevents spring bones from going outside of the sphere instead.
   */
  public inside: boolean;

  constructor(pcRef: typeof pc, params?: { radius?: number; offset?: pc.Vec3; inside?: boolean }) {
    this.offset = params?.offset ?? new pcRef.Vec3();
    this.radius = params?.radius ?? 0.0;
    this.inside = params?.inside ?? false;
  }

  get type() {
    return 'sphere';
  }

  calculateCollision(
    colliderMatrix: pc.Mat4,
    objectPosition: pc.Vec3,
    objectRadius: number,
    target: pc.Vec3,
    reference: pc.Vec3,
  ) {
    target.sub2(objectPosition, colliderMatrix.getTranslation(reference));

    const length = target.length();
    const distance = this.inside
      ? this.radius - objectRadius - length
      : length - objectRadius - this.radius;

    if (distance < 0) {
      target.mulScalar(1 / length); // convert the delta to the direction
      if (this.inside) {
        target.mulScalar(-1); // if inside, reverse the direction
      }
    }

    return distance;
  }
}
