export default /* glsl */ `
    vUv0 = vertex_texCoord0;

    // Transform the vertex position to world space
    vec4 mvPosition = getModelMatrix() * vec4(vertex_position, 1.0);
    // Pass the view position to the fragment shader
    vViewPosition = -mvPosition.xyz;


    vec4 worldPosition = mvPosition;
    vViewDirection = view_position - worldPosition.xyz;
    vViewDirection = normalize(vViewDirection);

    vec3 objectNormal = vertex_normal;

    // we need this to compute the outline properly
    objectNormal = normalize( objectNormal );
    vec3 transformedNormal = vNormalW;
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
            vec3 localPos = vertex_position;     

            // From playcanvas transform.js vertex shader
            #ifdef MORPHING
            #ifdef MORPHING_POS03
            localPos.xyz += morph_weights_a[0] * morph_pos0;
            localPos.xyz += morph_weights_a[1] * morph_pos1;
            localPos.xyz += morph_weights_a[2] * morph_pos2;
            localPos.xyz += morph_weights_a[3] * morph_pos3;
            #endif // MORPHING_POS03
            #ifdef MORPHING_POS47
            localPos.xyz += morph_weights_b[0] * morph_pos4;
            localPos.xyz += morph_weights_b[1] * morph_pos5;
            localPos.xyz += morph_weights_b[2] * morph_pos6;
            localPos.xyz += morph_weights_b[3] * morph_pos7;
            #endif // MORPHING_POS47
            #endif // MORPHING

            #ifdef MORPHING_TEXTURE_BASED_POSITION
                vec2 morphUV = getTextureMorphCoords();
                    vec3 morphPos = texture2D(morphPositionTex, morphUV).xyz;
                localPos += morphPos;
            #endif

            gl_Position = matrix_viewProjection * getModelMatrix() * vec4( localPos + outlineOffset, 1.0 );
        #endif

        #ifdef OUTLINE_WIDTH_SCREEN
            // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
        #endif

        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
    #endif
`;
