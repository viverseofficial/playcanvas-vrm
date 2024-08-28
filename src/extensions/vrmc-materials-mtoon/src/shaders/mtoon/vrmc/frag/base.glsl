export default /* glsl */ `
    #define RECIPROCAL_PI 0.3183098861837907

    // TODO: Check it
    uniform vec3 lightDirection;
    uniform vec3 lightColor;

    uniform vec3 litFactor;

    uniform float opacity;
    

    uniform vec3 shadeColorFactor;
    #ifdef USE_SHADEMULTIPLYTEXTURE
        uniform sampler2D shadeMultiplyTexture;
        uniform mat3 shadeMultiplyTextureUvTransform;
    #endif

    uniform float shadingShiftFactor;
    uniform float shadingToonyFactor;

    #ifdef USE_SHADINGSHIFTTEXTURE
        uniform sampler2D shadingShiftTexture;
        uniform mat3 shadingShiftTextureUvTransform;
        uniform float shadingShiftTextureScale;
    #endif

    uniform float giEqualizationFactor;
    uniform vec3 parametricRimColorFactor;
    #ifdef USE_RIMMULTIPLYTEXTURE
        uniform sampler2D rimMultiplyTexture;
        uniform mat3 rimMultiplyTextureUvTransform;
    #endif

    uniform float rimLightingMixFactor;
    uniform float parametricRimFresnelPowerFactor;
    uniform float parametricRimLiftFactor;

    #ifdef USE_MATCAPTEXTURE
        uniform vec3 matcapFactor;
        uniform sampler2D matcapTexture;
        uniform mat3 matcapTextureUvTransform;
    #endif

    uniform vec3 emissive;
    uniform float emissiveIntensity;

    uniform vec3 outlineColorFactor;
    uniform float outlineLightingMixFactor;

    #ifdef USE_UVANIMATIONMASKTEXTURE
        // TODO:  Wait until an avatar containing this information is found before proceeding with the implementation.
        // uniform sampler2D uvAnimationMaskTexture;
        // uniform mat3 uvAnimationMaskTextureUvTransform;
    #endif

    uniform float uvAnimationScrollXOffset;
    uniform float uvAnimationScrollYOffset;
    uniform float uvAnimationRotationPhase;


    #ifdef USE_MAP
        uniform sampler2D baseColorMap;
        uniform mat3 mapUvTransform;
    #endif

    #ifdef USE_EMISSIVEMAP
        uniform sampler2D emissiveMap;
        uniform mat3 emissiveMapUvTransform;
    #endif

    varying vec3 vViewPosition;

    struct MToonMaterial {
        vec3 diffuseColor;
        vec3 shadeColor;
        float shadingShift;
    };

    struct GeometricContext {
	    vec3 position;
	    vec3 normal;
	    vec3 viewDir;
    };
    
    float linearstep( float a, float b, float t ) {
        return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
    }

    vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
        return RECIPROCAL_PI * diffuseColor;
    }

    /**
        * Convert NdotL into toon shading factor using shadingShift and shadingToony
    */
    float getShading(
        const in float dotNL,
        const in float shadow,
        const in float shadingShift
    ) {
        float shading = dotNL;
        shading = shading + shadingShift;
        shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
        shading *= shadow;
        return shading;
    }

    vec3 getDiffuse(
        const in MToonMaterial material,
        const in float shading,
            in vec3 lightColor
    ) {
        vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );
        return col;
    }


    #ifdef USE_NORMALMAP
        uniform sampler2D normalMap;
        uniform mat3 normalMapUvTransform;
        uniform vec2 normalScale;
    #endif

    uniform mat3 normalMatrix;


    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

        vec3 q0 = dFdx( eye_pos.xyz );
        vec3 q1 = dFdy( eye_pos.xyz );
        vec2 st0 = dFdx( uv.st );
        vec2 st1 = dFdy( uv.st );

        vec3 N = surf_norm;

        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );

        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;

        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

        return mat3( T * scale, B * scale, N );
    }

    float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	    return smoothstep( coneCosine, penumbraCosine, angleCosine );
    }

    float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {
            distanceFalloff *= pow( saturate( 1.0 - pow( lightDistance / cutoffDistance, 4.0 ) ), 2.0 );
		};

		return distanceFalloff;
    }

    struct ReflectedLight {
	    vec3 directDiffuse;
	    vec3 directSpecular;
	    vec3 indirectDiffuse;
	    vec3 indirectSpecular;
    };

    struct IncidentLight {
	    vec3 color;
	    vec3 direction;
	    bool visible;
    };

    #if USE_POINT_LIGHTS
        struct PointLight {
            vec3 position;
            vec3 color;
            float distance;
            float decay;
        };

        uniform PointLight pointLights[NUM_POINT_LIGHTS];

	    void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		    vec3 lVector = pointLight.position - geometry.position;

		    light.direction = normalize( lVector );

		    float lightDistance = length( lVector );

		    light.color = pointLight.color;
		    light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		    light.visible = ( light.color != vec3( 0.0 ) );
	    }
    #endif

    #if USE_SPOT_LIGHTS
    	struct SpotLight {
		    vec3 position;
		    vec3 direction;
		    vec3 color;
		    float distance;
		    float decay;
		    float coneCos;
		    float penumbraCos;
	    };

        uniform SpotLight spotLights[NUM_SPOT_LIGHTS];

        void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		    vec3 lVector = spotLight.position - geometry.position;

		    light.direction = normalize( lVector );

		    float angleCos = dot( light.direction, spotLight.direction );

		    float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		    if ( spotAttenuation > 0.0 ) {

			    float lightDistance = length( lVector );

			    light.color = spotLight.color * spotAttenuation;
			    light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			    light.visible = ( light.color != vec3( 0.0 ) );

		    } else {

			    light.color = vec3( 0.0 );
			    light.visible = false;

		    }
	    }
    #endif

    #if USE_DIR_LIGHTS
        struct DirectionalLight {
            vec3 direction;
            vec3 color;
        };

        uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];

        void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
            light.color = directionalLight.color;
            light.direction = directionalLight.direction;
            light.visible = true;
        }
    #endif

    void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight, const in float shrinkNum ) {
        float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
        vec3 irradiance = directLight.color;

        // directSpecular will be used for rim lighting, not an actual specular
        reflectedLight.directSpecular += irradiance;

        irradiance *= dotNL;

        float shading = getShading( dotNL, shadow, material.shadingShift );

        // Note: Shrink the light intensity to prevent the color from becoming too bright
        float shrink = 1.0 / shrinkNum; 
        // toon shaded diffuse
        reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color ) * shrink;
    }

    #define RE_Direct RE_Direct_MToon


    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
        vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
        vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
        vec2 st0 = dFdx( uv.st );
        vec2 st1 = dFdy( uv.st );

        vec3 N = normalize( surf_norm );

        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );

        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;

        // From three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
        // TODO: Is this still required? Or shall I make a PR about it?
        if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
          return surf_norm;
        }

        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

        return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
    }

    varying vec3 vNormal;
    varying vec3 vViewDirection;
`
