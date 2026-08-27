export default /* glsl */ `
#ifdef FORWARD_PASS
    vec4 worldPosition = vec4(vPositionW, 1.0);
    vViewDirection = normalize(view_position - worldPosition.xyz);
    vViewPosition = -worldPosition.xyz;

    vec3 objectNormal = vec3(0.0, 0.0, 1.0);
    vec3 transformedNormal = vec3(0.0, 0.0, 1.0);

    #ifdef NORMALS
        objectNormal = vertex_normal;
        objectNormal = normalize( objectNormal );
        transformedNormal = vNormalW;
    #endif

    vNormal = transformedNormal;

    #ifdef OUTLINE
        float outlineTex = 1.0;
        
        #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
            #ifdef UV0
                vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv0, 1 ) ).xy;
                outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
            #endif
        #endif

        #ifdef OUTLINE_WIDTH_WORLD
            float worldNormalLength = length( transformedNormal );
            vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
            vec3 localPos = getLocalPosition(vertex_position.xyz);

            gl_Position = matrix_viewProjection * getModelMatrix() * vec4( localPos + outlineOffset, 1.0 );
        #endif

        #ifdef OUTLINE_WIDTH_SCREEN
            // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
        #endif

        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
    #endif
#endif
`;
