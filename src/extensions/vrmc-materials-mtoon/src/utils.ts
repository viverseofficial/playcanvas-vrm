import * as pc from 'playcanvas';

export const gammaEOTF = (e: number): number => {
  return Math.pow(e, 2.2);
};

type TransformExtensionType = { offset?: number[]; scale?: number[]; rotation?: number };
export const updateTextureMatrix = (
  pcRef: typeof pc,
  mat3: pc.Mat3,
  textureTransform: TransformExtensionType,
) => {
  if (!textureTransform) return;

  const offset = new pcRef.Vec2(0, 0);
  const repeat = new pcRef.Vec2(1, 1);
  const center = new pcRef.Vec2(0, 0);
  let rotation = 0;

  if (textureTransform.offset) {
    offset.x = textureTransform.offset[0];
    offset.y = textureTransform.offset[1];
  }

  if (textureTransform.rotation) {
    rotation = textureTransform.rotation;
  }

  setUvTransform(mat3, offset.x, offset.y, repeat.x, repeat.y, rotation, center.x, center.y);

  return mat3;
};

export const setUvTransform = (
  mat3: pc.Mat3,
  tx: number,
  ty: number,
  sx: number,
  sy: number,
  rotation: number,
  cx: number,
  cy: number,
) => {
  const c = Math.cos(rotation);
  const s = Math.sin(rotation);

  mat3.set([
    sx * c,
    sx * s,
    -sx * (c * cx + s * cy) + cx + tx,
    -sy * s,
    sy * c,
    -sy * (-s * cx + c * cy) + cy + ty,
    0,
    0,
    1,
  ]);
};
