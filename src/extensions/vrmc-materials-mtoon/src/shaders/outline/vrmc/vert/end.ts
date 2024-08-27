export default /* glsl */ `
    vUv0 = vertex_texCoord0;

    vec3 objectNormal = vertex_normal;

    // we need this to compute the outline properly
    objectNormal = normalize( objectNormal );
    vec3 transformedNormal = objectNormal;

    float outlineTex = 1.0;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
        vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv0, 1 ) ).xy;
        outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
    #endif
    
    #ifdef OUTLINE_WIDTH_WORLD
        float worldNormalLength = length( transformedNormal );
        vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
        gl_Position = matrix_viewProjection * getModelMatrix()  * vec4( outlineOffset + vertex_position, 1.0);
    #endif

    
    #ifdef OUTLINE_WIDTH_SCREEN
        // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
`;
