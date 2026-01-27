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
  const center = new pcRef.Vec2(0.5, 0.5);
  let rotation = 0;

  // Read scale (tiling) from KHR_texture_transform
  if (textureTransform.scale) {
    repeat.x = textureTransform.scale[0];
    repeat.y = textureTransform.scale[1];
  }

  // Read offset - PlayCanvas flips Y and considers scale
  if (textureTransform.offset) {
    offset.x = textureTransform.offset[0];
    offset.y = 1.0 - repeat.y - textureTransform.offset[1];
  }

  // Read rotation - note: rotation is in radians, no conversion needed for matrix calculation
  if (textureTransform.rotation) {
    // PlayCanvas uses negative rotation, but since we're building matrix directly,
    // the sign depends on your setUvTransform implementation
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
