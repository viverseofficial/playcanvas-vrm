export default /* glsl */ `
#ifdef FORWARD_PASS
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

	vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
        vec3 irradiance = ambientLightColor;
		return irradiance;
	}
	vec3 getIBLIrradiance( const in vec3 envMapColor ) {
        return envMapColor.rgb;
	}
    // Point Lights
    #ifdef USE_POINT_LIGHTS
    #ifndef NUM_POINT_LIGHTS
    #define NUM_POINT_LIGHTS 0
    #endif
    struct PointLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
    };
    #if NUM_POINT_LIGHTS > 0
    uniform vec3 pointLightPositions[NUM_POINT_LIGHTS];
    uniform vec3 pointLightColors[NUM_POINT_LIGHTS];
    uniform float pointLightDistances[NUM_POINT_LIGHTS];
    uniform float pointLightDecays[NUM_POINT_LIGHTS];
    #endif

    void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
        vec3 lVector = pointLight.position - geometry.position;
        light.direction = normalize( lVector );
        float lightDistance = length( lVector );
        light.color = pointLight.color;
        light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );

        light.visible = ( light.color != vec3( 0.0 ) );
    }
    #endif

    // Spot Lights
    #ifdef USE_SPOT_LIGHTS
    #ifndef NUM_SPOT_LIGHTS
    #define NUM_SPOT_LIGHTS 0
    #endif
    struct SpotLight {
        vec3 position;
        vec3 direction;
        vec3 color;
        float distance;
        float decay;
        float coneCos;
        float penumbraCos;
    };
    #if NUM_SPOT_LIGHTS > 0
    uniform vec3 spotLightPositions[NUM_SPOT_LIGHTS];
    uniform vec3 spotLightDirections[NUM_SPOT_LIGHTS];
    uniform vec3 spotLightColors[NUM_SPOT_LIGHTS];
    uniform float spotLightDistances[NUM_SPOT_LIGHTS];
    uniform float spotLightDecays[NUM_SPOT_LIGHTS];
    uniform float spotLightConeCos[NUM_SPOT_LIGHTS];
    uniform float spotLightPenumbraCos[NUM_SPOT_LIGHTS];
    #endif

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

    // Directional Lights
    #ifdef USE_DIR_LIGHTS
    #ifndef NUM_DIR_LIGHTS
    #define NUM_DIR_LIGHTS 0
    #endif
    struct DirectionalLight {
        vec3 direction;
        vec3 color;
    };
    #if NUM_DIR_LIGHTS > 0
    uniform vec3 directionalLightDirections[NUM_DIR_LIGHTS];
    uniform vec3 directionalLightColors[NUM_DIR_LIGHTS];
    #endif

    void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
        light.color = directionalLight.color;

        light.direction = directionalLight.direction;
        light.visible = true;
    }
    #endif
    
#endif
`