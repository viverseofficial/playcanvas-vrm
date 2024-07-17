# Todos

## VRMC_materials_mtoon

https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/README.md

Current version `1.2.0.a`<br/>

only get first directional light's color and position for shader.
Needs to implement for all lights in the scene.

- lights
    - directional 
    - spot
    - omni

- uniforms
    | Name                 | Description                           | Implement |
    |------------------------------|---------------------------------------|-|
    | litFactor                    | Factor for lit shading                 |O|
    | opacity                      | Opacity of the material                |O|
    | shadeColorFactor             | Factor for shade color                  |O|
    | shadeMultiplyTexture         | Texture for shade multiplication       |O|
    | shadeMultiplyTextureUvTransform | UV transform for shade multiplication |
    | shadingShiftFactor           | Factor for shading shift                |O|
    | shadingToonyFactor           | Factor for toony shading                |O|
    | shadingShiftTexture          | Texture for shading shift               |
    | shadingShiftTextureUvTransform | UV transform for shading shift         |
    | shadingShiftTextureScale     | Scale for shading shift texture         |
    | giEqualizationFactor         | Factor for GI equalization              |
    | parametricRimColorFactor     | Factor for parametric rim color         |O
    | rimMultiplyTexture           | Texture for rim multiplication          |
    | rimMultiplyTextureUvTransform | UV transform for rim multiplication    |
    | rimLightingMixFactor         | Factor for rim lighting mix             |O
    | parametricRimFresnelPowerFactor | Factor for parametric rim fresnel power |O
    | parametricRimLiftFactor      | Factor for parametric rim lift          |O
    | matcapFactor                 | Factor for matcap shading               |
    | matcapTexture                | Texture for matcap shading              |
    | matcapTextureUvTransform     | UV transform for matcap shading         |
    | emissive                     | Emissive color of the material          |O
    | emissiveIntensity            | Intensity of the emissive color         |O
    | uvAnimationMaskTexture       | Texture for UV animation mask           |
    | uvAnimationMaskTextureUvTransform | UV transform for UV animation mask   |
    | uvAnimationScrollXOffset     | X offset for UV animation scroll        |
    | uvAnimationScrollYOffset     | Y offset for UV animation scroll        |
    | uvAnimationRotationPhase     | Rotation phase for UV animation         |

    