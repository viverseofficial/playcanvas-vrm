export default /* glsl */ `
#ifdef FORWARD_PASS
  varying vec3 vViewPosition;
  varying vec3 vViewDirection;
  varying vec3 vNormal;

  // engine supplied uniforms
  uniform vec3 view_position;

  #ifdef OUTLINE
    uniform float outlineWidthFactor;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      uniform sampler2D outlineWidthMultiplyTexture;
      uniform mat3 outlineWidthMultiplyTextureUvTransform;
    #endif
  #endif

#endif
`;
