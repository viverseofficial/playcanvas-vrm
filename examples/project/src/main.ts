import * as pc from 'playcanvas';
import avatarUrl from '/blue.vrm?url';
import idleAnimUrl from '/Idle_anim.glb?url';
import runAnimUrl from '/Run_anim.glb?url';
import mocapAnimUrl from '/mocap-animation.gltf?url';

import TestAAnimUrl from '/04_Salute.glb?url';
import TestBAnimUrl from '/23_Laying.glb?url';
import TestCAnimUrl from '/24_Praying.glb?url';
import TestDAnimUrl from '/07_2 Pointing.glb?url';

declare global {
  interface Window {
    createAnim(type: 'A' | 'B' | 'C' | 'D'): void;
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

/**
 * Methods B:
 * Use window to get the module & You can use the Singleton Pattern, assign it to a value. (recommend to cdn version)
 */
let VRMLoader: any = null;
let GLTFLoader: any = null;
const loadScript = () =>
  new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/playcanvas-vrm.js';
    // script.src = 'https://world-dev.viverse.com/assets/js/playcanvas-vrm@{version}/playcanvas-vrm.js';
    script.async = false;
    document.head.appendChild(script);

    script.onload = () => {
      VRMLoader = window.VRMLoader;
      GLTFLoader = window.GLTFLoader;
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
const AnimationDance = new pc.Asset('Idle', 'container', { url: mocapAnimUrl });
const AnimationA = new pc.Asset('ATest', 'animation', { url: TestAAnimUrl });
const AnimationB = new pc.Asset('BTest', 'animation', { url: TestBAnimUrl });
const AnimationC = new pc.Asset('CTest', 'animation', { url: TestCAnimUrl });
const AnimationD = new pc.Asset('DTest', 'animation', { url: TestDAnimUrl });
AnimationIdle.preload = true;
AnimationRun.preload = true;
AnimationDance.preload = true;
AnimationA.preload = true;
AnimationB.preload = true;
AnimationC.preload = true;
AnimationD.preload = true;

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
app.assets.add(AnimationDance);
app.assets.add(AnimationA);
app.assets.add(AnimationB);
app.assets.add(AnimationC);
app.assets.add(AnimationD);

app.once('start', async () => {
  // @ts-ignore
  import('./orbit-camera');
  VRMLoader.VrmExpression.importScript(pc);
  VRMLoader.VrmSpringBone.importScript(pc);
  try {
    const avatar = await createAvatar();
    createCamera(avatar);
    createLight();
  } catch (e) {
    console.error(e);
  }
});

let timer = 0;

const createAvatar = () => {
  return new Promise<pc.Entity>((resolve, reject) => {
    const loader = new GLTFLoader(pc, app);
    const asset = new pc.Asset('avatar', 'container', { url: avatarUrl });
    loader
      .parse(asset, 'VRM_AVATAR_RENDER')
      .then(
        ({
          entity: renderRootEntity,
          asset: convertedAsset,
        }: {
          entity: pc.Entity;
          asset: pc.Asset;
        }) => {
          const rootEntity = new pc.Entity('VRM_AVATAR_ROOT');
          rootEntity.addChild(renderRootEntity);

          rootEntity.addComponent('script');
          rootEntity.addComponent('anim', {
            activate: true,
          });

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

            const animationAssets = [
              {
                stateName: 'Idle',
                asset: AnimationIdle,
              },
              {
                stateName: 'Run',
                asset: AnimationRun,
              },
            ];

            const humanoid = VRMLoader.createFormattedVRMHumanoid(pc, asset, rootEntity);
            const loadedResources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              animationAssets,
              convertedAsset,
              rootEntity,
              humanoid,
            );

            if (loadedResources) {
              loadedResources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(rootEntity, resource);
              });
            }

            const mocapAnimationAssets = [
              {
                stateName: 'Dance',
                asset: AnimationDance,
              },
            ];

            const mocapLoadedResources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              mocapAnimationAssets,
              convertedAsset,
              rootEntity,
              humanoid,
            );

            if (mocapLoadedResources) {
              mocapLoadedResources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(rootEntity, resource);
              });
            }
          }

          window.createAnim = (type: 'A' | 'B' | 'C' | 'D') => {
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
            }

            const resources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              animAssets,
              convertedAsset,
              rootEntity,
            );

            if (resources) {
              resources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(rootEntity, resource);
              });
            }

            if (rootEntity.anim) {
              rootEntity.anim.baseLayer.transition(type);
            }
          };

          app.root.addChild(rootEntity);
          app.on('update', (dt) => {
            timer += dt;
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
  const light = new pc.Entity();
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

app.start();
