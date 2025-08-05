import * as pc from 'playcanvas';

export class VRMSpringBoneColliderShapeCapsule {
  public offset: pc.Vec3;
  public tail: pc.Vec3;
  public radius: number;
  private _v3A: pc.Vec3;
  private _v3B: pc.Vec3;
  public inside: boolean;

  constructor(
    pcRef: typeof pc,
    params: { radius?: number; offset?: pc.Vec3; tail?: pc.Vec3; inside?: boolean } = {},
  ) {
    this.offset = params?.offset ?? new pcRef.Vec3();
    this.tail = params?.tail ?? new pcRef.Vec3();
    this.radius = params?.radius ?? 0.0;
    this._v3A = new pcRef.Vec3();
    this._v3B = new pcRef.Vec3();
    this.inside = params?.inside ?? false;
  }

  get type() {
    return 'capsule';
  }

  calculateCollision(
    colliderMatrix: pc.Mat4,
    objectPosition: pc.Vec3,
    objectRadius: number,
    target: pc.Vec3,
    reference: pc.Vec3,
  ) {
    this._v3A.copy(colliderMatrix.getTranslation(reference)); // transformed head
    colliderMatrix.transformPoint(reference.sub2(this.tail, this.offset), this._v3B); // transformed tail

    this._v3B.sub(this._v3A); // from head to tail
    const lengthSqCapsule = this._v3B.lengthSq();

    target.copy(objectPosition).sub(this._v3A); // from head to object
    const dot = this._v3B.dot(target); // dot product of offsetToTail and offsetToObject

    if (dot <= 0.0) {
      // if object is near from the head
      // do nothing, use the current value directly
    } else if (lengthSqCapsule <= dot) {
      // if object is near from the tail
      target.sub(this._v3B); // from tail to object
    } else {
      // if object is between two ends
      this._v3B.mulScalar(dot / lengthSqCapsule); // from head to the nearest point of the shaft
      target.sub(this._v3B); // from the shaft point to object
    }

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
