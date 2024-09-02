export default /* glsl */ `
    vec2 uv = vec2(0.5, 0.5);

    #if (defined(MTOON_USE_UV))
        #if !defined(MTOON_UVS_VERTEX_ONLY)
            uv = vUv0;

            float uvAnimMask = 1.0;
            #ifdef USE_UVANIMATIONMASKTEXTURE
                // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
            #endif

            uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
            float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
            float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
            uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
        #endif
    #endif

    vec4 diffuseColor = vec4( litFactor, opacity );
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;

    #ifdef USE_MAP
        vec2 colorMapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
        vec4 sampledDiffuseColor = texture2D( baseColorMap, colorMapUv );
        diffuseColor *= sampledDiffuseColor;
    #endif

    float faceDirection = gl_FrontFacing ? 1.0 : -1.0;
    vec3 normal = normalize( vNormal );
    normal *= faceDirection;

    #ifdef OUTLINE
        normal *= -1.0;
    #endif

    #ifdef USE_NORMALMAP
        vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

        #ifdef SHADERDEF_TANGENTS
            mat3 tbn = mat3( normalize( vTangentW ), normalize( vBinormalW ), normal );
        #else
            mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );
        #endif

        vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
        mapN.xy *= normalScale;

        #if defined(SHADERDEF_TANGENTS)
            normal = normalize( tbn * mapN );
        #else
            normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );
        #endif
    #endif

    #ifdef USE_EMISSIVEMAP
        vec2 emissiveMapUv = (emissiveMapUvTransform * vec3( uv, 1 )).xy;
        totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
    #endif

    // -- MToon: lighting --------------------------------------------------------
    MToonMaterial material;
    material.diffuseColor = diffuseColor.rgb;
    material.shadeColor = shadeColorFactor;

    #ifdef USE_SHADEMULTIPLYTEXTURE
        vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
        material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
    #endif

    material.shadingShift = shadingShiftFactor;
    #ifdef USE_SHADINGSHIFTTEXTURE
        vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
        material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
    #endif
    

    GeometricContext geometry;
    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = normalize( vViewPosition );

    IncidentLight directLight;
    // since these variables will be used in unrolled loop, we have to define in prior
    float shadow = 1.0;

    #ifdef USE_POINT_LIGHTS
        PointLight pointLight;
        shadow = 1.0; 

        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
            pointLight = pointLights[ i ];
            getPointLightInfo( pointLight, geometry, directLight );
            RE_Direct( directLight, geometry, material, shadow, reflectedLight, 1.0 );
        }
        #pragma unroll_loop_end
    #endif
    

    #if USE_SPOT_LIGHTS
        SpotLight spotLight;
        shadow = 1.0; 

        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
            spotLight = spotLights[ i ];
            getSpotLightInfo( spotLight, geometry, directLight );
            RE_Direct( directLight, geometry, material, shadow, reflectedLight, 1.0 );
        }
        #pragma unroll_loop_end
    #endif

    #if USE_DIR_LIGHTS
        DirectionalLight directionalLight;
        shadow = 1.0; 

        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
            directionalLight = directionalLights[0];
            getDirectionalLightInfo( directionalLight, directLight );  
            RE_Direct( directLight, geometry, material, shadow, reflectedLight, float(NUM_DIR_LIGHTS) );
        }
        #pragma unroll_loop_end
    #endif 

    // -- MToon: Ambient --------------------------------------------------------
    vec3 iblIrradiance = vec3( 0.0 );
    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );


    // From three.js #include <lights_fragment_maps>
    // -- MToon: Environment --------------------------------------------------------
	#ifdef USE_ENV_LIGHTS
		vec3 dir = normalize(cubeMapRotate(vNormal) * vec3(-1.0, 1.0, 1.0));
        vec2 envuv = mapUv(toSphericalUv(dir), vec4(128.0, 256.0 + 128.0, 64.0, 32.0) / atlasSize);
        vec4 raw = texture2D(texture_envAtlas, envuv);
        vec3 linear = decodeLinear(raw);

        float shrinkEnvLightRatio = 0.75;

        #ifdef USE_DIR_LIGHTS
            shrinkEnvLightRatio = 0.25;
        #endif

        irradiance += getIBLIrradiance(linear) * shrinkEnvLightRatio;
	#endif


    // From three.js #include <lights_fragment_end>
    RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
    

    // force the color lighter
    float lighter = 2.5;
    vec3 col = lighter * reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

    // -- MToon: rim lighting -----------------------------------------
    vec3 viewDir = normalize( vViewDirection );
    vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );
    vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

    #ifdef USE_MATCAPTEXTURE
        {
          vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
          vec3 y = cross( viewDir, x ); // guaranteed to be normalized
          vec2 sphereUv = vec2(dot(x, normal), dot(y, normal)) * 0.5 + 0.5;
          sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
          vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
          rim += matcapFactor * matcap;
        }
    #endif


    #ifdef USE_RIMMULTIPLYTEXTURE
        vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
        rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
    #endif

    col += rimMix * rim;

    // -- MToon: Emission --------------------------------------------------------
    // Note: Sometimes look wired, but this is the implemention from three-vrm.
    // Remove it temporarily.
    // col += totalEmissiveRadiance;


    // -- MToon: Outline --------------------------------------------------------
    #ifdef OUTLINE
        col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
    #endif

    #ifdef OPAQUE
        diffuseColor.a = 1.0;
    #endif

    gl_FragColor = vec4( col, diffuseColor.a );
`
