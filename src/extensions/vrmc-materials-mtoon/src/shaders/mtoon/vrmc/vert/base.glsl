export default /* glsl */ `
varying vec3 vViewPosition;
varying vec3 vViewDirection;
varying vec3 vNormal;

uniform vec3 view_position;

uniform float outlineWidthFactor;

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif
`;
