import * as pc from 'playcanvas';
import avatarUrl from './examples/project/public/blue2.vrm?url';
import avatarUrl2 from './examples/project/public/rara.vrm?url';
import idleAnimUrl from './examples/project/public/Idle_anim.glb?url';
import runAnimUrl from './examples/project/public/Run_anim.glb?url';
import mocapV1AnimUrl from './examples/project/public/mocap-animation-v1.glb?url';
import mocapV2AnimUrl from './examples/project/public/mocap-animation-v2.glb?url';

import TestAAnimUrl from './examples/project/public/04_Salute.glb?url';
import TestBAnimUrl from './examples/project/public/23_Laying.glb?url';
import TestCAnimUrl from './examples/project/public/24_Praying.glb?url';
import TestDAnimUrl from './examples/project/public/07_2 Pointing.glb?url';
import TestEAnimUrl from './examples/project/public/25_Catwalk.glb?url';

import * as VrmAnimation from './src/scripts/add-vrm-animations';
import * as VrmExpression from './src/scripts/vrm-expression';
import * as VrmSpringBone from './src/scripts/vrm-spring-bone';
import { createFormattedVRMHumanoid } from './src/extensions/vrm-humanoid/vrm-humanoid-utils';
import { GLTFLoader } from './src/gltf-loader/GLTFLoader';
import * as VRMCMaterialsMToon from './src/extensions/vrmc-materials-mtoon';

declare global {
  interface Window {
    createAnim(type: 'A' | 'B' | 'C' | 'D'): void;
    avatar: pc.Entity;
  }
}

/**
 * Methods A:
 * Use import module directly, but it's better to wait for the package version.
 */

// import {
//   VrmExpression,
//   VrmSpringBone,
//   VrmAnimation,
//   createFormattedVRMHumanoid,
//   GLTFLoader,
// } from 'https://world-dev.viverse.com/assets/js/playcanvas-vrm@{version}/playcanvas-vrm.js';

const VRMLoader: any = {
  VrmAnimation,
  VrmExpression,
  VrmSpringBone,
  createFormattedVRMHumanoid,
};

/**
 * Methods B:
 * Use window to get the module & You can use the Singleton Pattern, assign it to a value. (recommend to cdn version)
 */
// let VRMLoader: any = null;
// let GLTFLoader: any = null;
const loadScript = () =>
  new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    // script.src = '/playcanvas-vrm.js';
    script.src = 'https://world-dev.viverse.com/assets/js/playcanvas-vrm@1.0.1/playcanvas-vrm.js';
    script.async = false;
    document.head.appendChild(script);

    script.onload = () => {
      // VRMLoader = window.VRMLoader;
      // GLTFLoader = window.GLTFLoader;
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };
  });

await loadScript();

const canvas = document.getElementById('application-canvas');
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('No canvas found');
}

const AnimationIdle = new pc.Asset('Idle', 'animation', { url: idleAnimUrl });
const AnimationRun = new pc.Asset('Run', 'animation', { url: runAnimUrl });
const AnimationMocapV1 = new pc.Asset('MocapA', 'container', { url: mocapV1AnimUrl });
const AnimationMocapV2 = new pc.Asset('MocapB', 'container', { url: mocapV2AnimUrl });
const AnimationA = new pc.Asset('ATest', 'animation', { url: TestAAnimUrl });
const AnimationB = new pc.Asset('BTest', 'animation', { url: TestBAnimUrl });
const AnimationC = new pc.Asset('CTest', 'animation', { url: TestCAnimUrl });
const AnimationD = new pc.Asset('DTest', 'animation', { url: TestDAnimUrl });
const AnimationE = new pc.Asset('ETest', 'animation', { url: TestEAnimUrl });
AnimationIdle.preload = true;
AnimationRun.preload = true;
AnimationMocapV1.preload = true;
AnimationMocapV2.preload = true;
AnimationA.preload = true;
AnimationB.preload = true;
AnimationC.preload = true;
AnimationD.preload = true;
AnimationE.preload = true;

const INPUT_SETTINGS = {
  useKeyboard: true,
  useMouse: true,
  useGamepads: false,
  useTouch: true,
};

const createInputDevices = (canvas: HTMLCanvasElement) => {
  return {
    elementInput: new pc.ElementInput(canvas, {
      useMouse: INPUT_SETTINGS.useMouse,
      useTouch: INPUT_SETTINGS.useTouch,
    }),
    keyboard: INPUT_SETTINGS.useKeyboard ? new pc.Keyboard(window) : null,
    mouse: INPUT_SETTINGS.useMouse ? new pc.Mouse(canvas) : null,
    gamepads: INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
    touch: INPUT_SETTINGS.useTouch && pc.platform.touch ? new pc.TouchDevice(canvas) : null,
  };
};

const devices = createInputDevices(canvas);
const app = new pc.Application(canvas, {
  elementInput: devices.elementInput,
  ...(devices.keyboard && { keyboard: devices.keyboard }),
  ...(devices.mouse && { mouse: devices.mouse }),
  ...(devices.gamepads && { gamepads: devices.gamepads }),
  ...(devices.touch && { touch: devices.touch }),
});
app.assets.add(AnimationIdle);
app.assets.add(AnimationRun);
app.assets.add(AnimationMocapV1);
app.assets.add(AnimationMocapV2);
app.assets.add(AnimationA);
app.assets.add(AnimationB);
app.assets.add(AnimationC);
app.assets.add(AnimationD);
app.assets.add(AnimationE);


const applyMaterialMtoon = (asset: pc.Asset) => {
  const glbResource = asset.resource.data;
  const { gltf } = glbResource;
  return {
    instantiated: (entity: pc.Entity) => {
      const getLightDirection = (): pc.Vec3 => {
        const lightEntity = pc.Application.getApplication()?.root.findByName('light');

        if (!lightEntity) {
          throw new Error('Light entity not found');
        }

        return lightEntity.forward.clone();
      };

      const getLightColor = (): pc.Color => {
        const lightEntity = pc.Application.getApplication()?.root.findByName('light');

        if (!lightEntity) {
          throw new Error('Light entity not found');
        }

        return (lightEntity as any).light.color.clone();
      };

      const applyVRMCMtoonShader = (gltfMaterial: any, gltf: any, attrs: any) => {
        if (entity) {
          const renders = entity.findComponents('render');
          renders.forEach((renderComponent) => {
            const render = renderComponent as pc.RenderComponent;
            const meshInstances = render.meshInstances;
            for (let i = 0; i < meshInstances.length; i++) {
              const meshInstance = meshInstances[i];
              const material = meshInstance.material;
              if (material.name === gltfMaterial.name) {
                const shaderMaterial = new VRMCMaterialsMToon.VRMCMtoonMaterial();
                shaderMaterial.copy(material as pc.StandardMaterial);

                shaderMaterial.parseGLTFAttrs(gltfMaterial, gltf, attrs);
                shaderMaterial.setLightDirection(getLightDirection());
                shaderMaterial.setLightColor(getLightColor());
                meshInstance.material = shaderMaterial;
                shaderMaterial.update();
              }
            }
          });
        }
      };

      const outlineShaderMeshInstancesByRender: Map<pc.RenderComponent, pc.MeshInstance[]> = new Map();

      const applyVRMCOutlineShader = (gltfMaterial: any) => {
        if (entity) {
          const renders = entity.findComponents('render');

          renders.forEach((renderComponent) => {
            const render = renderComponent as pc.RenderComponent;
            const meshInstances = render.meshInstances;

            const shaderMeshInstances: pc.MeshInstance[] = [];

            for (let i = 0; i < meshInstances.length; i++) {
              const meshInstance = meshInstances[i];
              const material = meshInstance.material;
              if (material.name === gltfMaterial.name) {
                const shaderBaseColorMap =
                  (material as any).diffuseMap || (material as any).emissiveMap;

                if (shaderBaseColorMap && meshInstance) {
                  
                  const shaderMaterial = new VRMCMaterialsMToon.VRMCOutlineMaterial();
                  shaderMaterial.copy(material as pc.StandardMaterial);
                  shaderMaterial.name = material.name + '_outline';
                  const shaderMeshInstance = new pc.MeshInstance(
                    meshInstance.mesh,
                    shaderMaterial,
                    render.entity,
                  );

                  shaderMaterial.parseGLTFAttrs(gltfMaterial);
                  shaderMeshInstance.material = shaderMaterial;
                  shaderMaterial.setBaseColorMap(shaderBaseColorMap);
                  shaderMaterial.update();
                  shaderMeshInstances.push(shaderMeshInstance);
                }
              }
            }

            const shaderMeshInstancesExist = outlineShaderMeshInstancesByRender.get(render);
            if (shaderMeshInstancesExist) {
              shaderMeshInstancesExist.push(...shaderMeshInstances);
              outlineShaderMeshInstancesByRender.set(render, shaderMeshInstancesExist);
            } else {
              outlineShaderMeshInstancesByRender.set(render, shaderMeshInstances);
            }
          });
        }
      };

      const finalizeOutlineShader = () => {
        if (entity) {
          const renders = entity.findComponents('render');
          renders.forEach((renderComponent) => {
            const render = renderComponent as pc.RenderComponent;
            const shaderMeshInstances = outlineShaderMeshInstancesByRender.get(render);
            if (shaderMeshInstances && shaderMeshInstances.length > 0) {
              render.meshInstances.push(...shaderMeshInstances);
            }
          });
        }
      };

      if (gltf.extensionsUsed) {
        if (gltf.extensionsUsed.includes(VRMCMaterialsMToon.EXTENSION_VRMC_MATERIALS_MTOON)) {
          gltf.materials.forEach((material: any) => {
            if (
              material.extensions.hasOwnProperty(VRMCMaterialsMToon.EXTENSION_VRMC_MATERIALS_MTOON)
            ) {
              const extension =
                material.extensions[VRMCMaterialsMToon.EXTENSION_VRMC_MATERIALS_MTOON];
              if (extension.shadeMultiplyTexture != undefined) {
                const asset = glbResource.textures[extension.shadeMultiplyTexture];
                material.shadeMultiplyTexture = asset.resource;
              }
              applyVRMCMtoonShader(material, gltf, extension);
              applyVRMCOutlineShader(material);
            }
          });

          finalizeOutlineShader();

        } else if (gltf.extensionsUsed.includes(VRMCMaterialsMToon.EXTENSION_VRM)) {
          // convert VRM attributes from 0.0 to 1.0
          // base on https://github.com/vrm-c/vrm-specification/blob/master/specification/VRMC_materials_mtoon-1.0/MToon_comparision.md

          const materialProperties =
            gltf.extensions[VRMCMaterialsMToon.EXTENSION_VRM].materialProperties;

          const materialNewMap = new Map();

          gltf.materials.forEach((material: any) => {
            materialProperties.forEach((materialProperty: any) => {
              if (materialProperty.name === material.name) {
                const materialNew = VRMCMaterialsMToon.parseV0MToonProperties(
                  materialProperty,
                  material,
                );
                materialNewMap.set(materialProperty.name, materialNew);
              }
            });
          });

          gltf.materials.forEach((material: any) => {
            const materialNew = materialNewMap.get(material.name);
            const extension =
              materialNew?.extensions[VRMCMaterialsMToon.EXTENSION_VRMC_MATERIALS_MTOON];
            if (materialNew && extension) {
              if (extension.shadeMultiplyTexture !== undefined) {
                const asset = glbResource.textures[extension.shadeMultiplyTexture.index];
                material.shadeMultiplyTexture = asset.resource;
                extension.shadeMultiplyTexture = asset.resource;
              }
              material.extensions[VRMCMaterialsMToon.EXTENSION_VRMC_MATERIALS_MTOON] = extension;
              applyVRMCMtoonShader(materialNew, gltf, extension);
              applyVRMCOutlineShader(material);
            }
          });

          finalizeOutlineShader();
        }
      }
    },
  };
};

app.once('start', async () => {
  // @ts-ignore
  import('./examples/project/src/orbit-camera');
  VRMLoader.VrmExpression.importScript(pc);
  VRMLoader.VrmSpringBone.importScript(pc);
  try {
    createLight();
    const avatar = await createAvatar(avatarUrl);
    const avatar2 = await createAvatar(avatarUrl2);
    avatar2.setPosition(0.5, 0, 0);
    createCamera(avatar);
  } catch (e) {
    console.error(e);
  }
});

let timer = 0;

const createAvatar = (url: string) => {
  return new Promise<pc.Entity>((resolve, reject) => {
    const loader = new GLTFLoader(pc, app);
    const asset = new pc.Asset('avatar', 'container', { url });
    loader
      .parse(asset, 'VRM_AVATAR_RENDER')
      .then(
        ({
          entity: renderRootEntity,
          asset: convertedAsset,
          version,
        }: {
          entity: pc.Entity;
          asset: pc.Asset;
          version: 'v0' | 'v1' | null;
        }) => {
          const rootEntity = new pc.Entity('VRM_AVATAR_ROOT');
          rootEntity.addChild(renderRootEntity);

          const humanoid = VRMLoader.createFormattedVRMHumanoid(pc, asset, rootEntity, {
            autoUpdateHumanBones: version === 'v1',
          });

          const normalizedRootEntity = humanoid.normalizedHumanBonesRoot;
          const animatedEntity = version === 'v1' ? normalizedRootEntity : rootEntity;

          animatedEntity.addComponent('anim', {
            activate: true,
          });

          rootEntity.addComponent('script');
          if (rootEntity.script) {
            rootEntity.script.create('vrmExpression', {
              attributes: {
                asset: convertedAsset,
              },
            });

            rootEntity.script.create('vrmSpringBone', {
              attributes: {
                asset: convertedAsset,
              },
            });

            const animationAssets:any[] = [
              {
                stateName: 'Idle',
                asset: AnimationIdle,
              },
              {
                stateName: 'Run',
                asset: AnimationRun,
              },
            ];

            const loadedResources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              animationAssets,
              convertedAsset,
              humanoid,
              {
                negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
              },
            );

            if (loadedResources) {
              loadedResources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
              });
            }

            const mocapAnimationAssets:any[] = [
              {
                stateName: 'MocapA',
                asset: AnimationMocapV1,
              },
              {
                stateName: 'MocapB',
                asset: AnimationMocapV2,
              },
            ];

            const mocapLoadedResources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              mocapAnimationAssets,
              convertedAsset,
              humanoid,
              {
                negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
              },
            );

            if (mocapLoadedResources) {
              mocapLoadedResources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
              });
            }
          }

          window.avatar = animatedEntity;

          window.createAnim = (type: 'A' | 'B' | 'C' | 'D' | 'E') => {
            let animAssets = [];

            switch (type) {
              case 'A':
                animAssets.push({
                  stateName: 'A',
                  asset: AnimationA,
                });
                break;
              case 'B':
                animAssets.push({
                  stateName: 'B',
                  asset: AnimationB,
                });
                break;
              case 'C':
                animAssets.push({
                  stateName: 'C',
                  asset: AnimationC,
                });
                break;
              case 'D':
                animAssets.push({
                  stateName: 'D',
                  asset: AnimationD,
                });
                break;
              case 'E':
                animAssets.push({
                  stateName: 'E',
                  asset: AnimationE,
                });
                break;
            }

            const resources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              animAssets,
              convertedAsset,
              humanoid,
              {
                negativeZAnimNames: ['viverse.combination', 'viverse.rp'],
              },
            );

            if (resources) {
              resources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(animatedEntity, resource);
              });
            }

            if (animatedEntity.anim) {
              animatedEntity.anim.baseLayer.transition(type);
            }
          };

          applyMaterialMtoon(convertedAsset).instantiated(renderRootEntity);

          app.root.addChild(rootEntity);

          console.log(rootEntity.findByName('Untitled'));

          app.on('update', (dt) => {
            timer += dt;
            if (humanoid) humanoid.update();
            // Open when you want model move to test spring bone
            // rootEntity.setPosition(Math.sin(timer), 0, 0);
          });

          resolve(rootEntity);
        },
      )
      .catch((error: Error) => {
        reject(error);
      });
  });
};

const createCamera = (focusEntity: pc.Entity) => {
  // Create a camera with an orbit camera script
  const camera = new pc.Entity();
  camera.addComponent('camera', {
    clearColor: new pc.Color(0.4, 0.45, 0.5),
  });
  camera.addComponent('script');
  if (camera.script) {
    camera.script.create('orbitCamera', {
      attributes: {
        focusEntity,
        inertiaFactor: 0.2, // Override default of 0 (no inertia)
      },
    });
    camera.script.create('orbitCameraInputMouse');
    camera.script.create('orbitCameraInputTouch');
  }
  app.root.addChild(camera);
};

const createLight = () => {
  // Create a directional light
  const light = new pc.Entity('light');
  light.addComponent('light', {
    type: 'directional',
  });
  app.root.addChild(light);
  light.setLocalEulerAngles(45, 30, 0);
};

// Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// Ensure canvas is resized when window changes size
const resize = () => app.resizeCanvas();
window.addEventListener('resize', resize);

app.on('destroy', () => {
  window.removeEventListener('resize', resize);
});

const plane = new pc.Entity('Plane');
app.root.addChild(plane);
plane.addComponent('render', {
  type: 'plane',
});

// Front ball at +Z
const ball = new pc.Entity('Ball');
ball.setLocalScale(0.1, 0.1, 0.1);
ball.setPosition(0, 0, 1);
app.root.addChild(ball);
ball.addComponent('render', {
  type: 'sphere',
});

app.start();
