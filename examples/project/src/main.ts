import * as pc from 'playcanvas';
import avatarUrl from '/blue.vrm?url';
import idleAnimUrl from '/Idle_anim.glb?url';
import runAnimUrl from '/Run_anim.glb?url';
import mocapAnimUrl from '/mocap-animation.gltf?url';

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
// } from 'https://world-dev.viverse.com/assets/js/playcanvas-vrm@1.0.1/playcanvas-vrm.js';

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
    script.src = 'https://world-dev.viverse.com/assets/js/playcanvas-vrm@1.0.1/playcanvas-vrm.js';
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
AnimationIdle.preload = true;
AnimationRun.preload = true;
AnimationDance.preload = true;

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

app.once('start', async () => {
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
                asset: AnimationDance.resource.animations[0],
              },
            ];

            const mocaLoadedResources = VRMLoader.VrmAnimation.createVRMAnimation(
              pc,
              mocapAnimationAssets,
              convertedAsset,
              rootEntity,
              humanoid,
              1.05, // You can set custom motionHipsHeight
            );

            if (mocaLoadedResources) {
              mocaLoadedResources.forEach((resource: any) => {
                VRMLoader.VrmAnimation.assignAnimation(rootEntity, resource);
              });
            }
          }

          app.root.addChild(rootEntity);
          app.on('update', (dt) => {
            timer += dt;
            rootEntity.setPosition(Math.sin(timer), 0, 0);
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
