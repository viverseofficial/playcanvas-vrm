export default /* glsl */ `
    #ifdef MTOON_USE_UV
       vUv0 = vertex_texCoord0;
    #endif


    // Transform the vertex position to world space
    vec4 mvPosition = matrix_model * vec4(vertex_position, 1.0);
    // Pass the view position to the fragment shader
    vViewPosition = -mvPosition.xyz;


    vec4 worldPosition = mvPosition;
    vViewDirection = view_position - worldPosition.xyz;

    vec3 objectNormal = vertex_normal;
    vec3 transformedNormal = normalize(matrix_normal * objectNormal);
    vNormal = transformedNormal;


    #ifdef OUTLINE
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
    #endif
`;
