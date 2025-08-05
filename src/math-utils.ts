import * as pc from 'playcanvas';

export function saturate(value: number) {
  return Math.max(Math.min(value, 1.0), 0.0);
}

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function fromArray(vec3: pc.Vec3, array: number[], offset = 0) {
  vec3.x = array[offset];
  vec3.y = array[offset + 1];
  vec3.z = array[offset + 2];
  return vec3;
}

export function applyMatrix4(vector: pc.Vec3, matrixWorld: pc.Mat4): pc.Vec3 {
  const x = vector.x,
    y = vector.y,
    z = vector.z;
  const e = matrixWorld.data;

  const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);

  vector.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
  vector.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
  vector.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;

  return vector;
}

export function localToWorld(vector: pc.Vec3, matrixWorld: pc.Mat4) {
  return applyMatrix4(vector, matrixWorld);
}

export class Matrix4InverseCache {
  private _pcRef: typeof pc;
  public matrix: pc.Mat4;
  private _inverseCache: pc.Mat4;
  private _shouldUpdateInverse: boolean;
  private _originalElements: Float32Array;

  constructor(pcRef: typeof pc, matrix: pc.Mat4) {
    this._pcRef = pcRef;

    /**
     * The target matrix.
     */
    this.matrix = matrix;

    /**
     * A cache of inverse of current matrix.
     */
    this._inverseCache = new this._pcRef.Mat4();

    /**
     * A flag that makes it want to recalculate its {@link _inverseCache}.
     * Will be set `true` when `elements` are mutated and be used in `getInverse`.
     */
    this._shouldUpdateInverse = true;

    const handler: ProxyHandler<number[]> = {
      // @ts-ignore
      set: (obj, prop: number, newVal) => {
        this._shouldUpdateInverse = true;
        obj[prop] = newVal;

        return true;
      },
    };

    this._originalElements = matrix.data;
    this.matrix.set(new Proxy(Array.from(matrix.data), handler));
  }

  /**
   * Inverse of given matrix.
   * Note that it will return its internal private instance.
   * Make sure copying this before mutate this.
   */
  get inverse() {
    if (this._shouldUpdateInverse) {
      this._inverseCache.copy(this.matrix);
      mat4InvertCompat(this._inverseCache);
      this._shouldUpdateInverse = false;
    }

    return this._inverseCache;
  }

  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}

export function mat4InvertCompat<T extends pc.Mat4>(target: T): T {
  target.invert();
  return target;
}

export function setFromUnitVectors(quat: pc.Quat, vFrom: pc.Vec3, vTo: pc.Vec3) {
  let r = vFrom.dot(vTo) + 1;

  if (r < Number.EPSILON) {
    // vFrom and vTo point in opposite directions
    r = 0;

    if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
      quat.x = -vFrom.y;
      quat.y = vFrom.x;
      quat.z = 0;
      quat.w = r;
    } else {
      quat.x = 0;
      quat.y = -vFrom.z;
      quat.z = vFrom.y;
      quat.w = r;
    }
  } else {
    // crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3
    quat.x = vFrom.y * vTo.z - vFrom.z * vTo.y;
    quat.y = vFrom.z * vTo.x - vFrom.x * vTo.z;
    quat.z = vFrom.x * vTo.y - vFrom.y * vTo.x;
    quat.w = r;
  }

  return quat.normalize();
}

export function transformDirection(vec3: pc.Vec3, m: pc.Mat4) {
  const x = vec3.x,
    y = vec3.y,
    z = vec3.z;
  const e = m.data;

  vec3.x = e[0] * x + e[4] * y + e[8] * z;
  vec3.y = e[1] * x + e[5] * y + e[9] * z;
  vec3.z = e[2] * x + e[6] * y + e[10] * z;

  return vec3.normalize();
}
