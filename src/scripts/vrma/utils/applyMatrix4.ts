import * as pc from 'playcanvas';

export function applyMatrix4( pcRef: typeof pc, v3: pc.Vec3, m: pc.Mat4 ): pc.Vec3 {


    const e = m.data;

    const w = 1 / ( e[ 3 ] * v3.x + e[ 7 ] * v3.y + e[ 11 ] * v3.z + e[ 15 ] );

    const _x = ( e[ 0 ] * v3.x + e[ 4 ] * v3.y + e[ 8 ] * v3.z + e[ 12 ] ) * w;
    const _y = ( e[ 1 ] * v3.x + e[ 5 ] * v3.y + e[ 9 ] * v3.z + e[ 13 ] ) * w;
    const _z = ( e[ 2 ] * v3.x + e[ 6 ] * v3.y + e[ 10 ] * v3.z + e[ 14 ] ) * w;

    return new pcRef.Vec3(_x, _y, _z);
}