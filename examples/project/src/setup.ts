import * as pc from 'playcanvas';
import { preloadAssets } from './assets';

export const createScene = (app: pc.Application) => {
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
};

export const createCamera = (app: pc.Application, focusEntity?: pc.Entity) => {
  // @ts-ignore
  import('./orbit-camera');

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
  camera.setPosition(0, 1, 2);
  camera.camera?.clearColor.set(0.7, 0.7, 0.7, 1);

  app.root.addChild(camera);
};

export const createLight = (app: pc.Application) => {
  // Create a directional light
  const light = new pc.Entity('light');
  light.addComponent('light', {
    type: 'directional',
  });
  app.root.addChild(light);
  light.setLocalEulerAngles(45, 120, 0);
};

export const loadScript = () =>
  new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '/playcanvas-vrm.js?url';
    script.async = false;
    document.head.appendChild(script);

    script.onload = () => {
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };
  });

const setupApplication = () => {
  const canvas = document.getElementById('application-canvas');
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error('No canvas found');
  }

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

  // use device pixel ratio
  app.graphicsDevice.maxPixelRatio = window.devicePixelRatio;

  Object.values(preloadAssets).forEach((asset) => {
    asset.preload = true;
    app.assets.add(asset);
  });

  // Set the canvas to fill the window and automatically change resolution to be the same as the canvas size
  app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
  app.setCanvasResolution(pc.RESOLUTION_AUTO);

  // Ensure canvas is resized when window changes size
  const resize = () => app.resizeCanvas();
  window.addEventListener('resize', resize);

  app.on('destroy', () => {
    window.removeEventListener('resize', resize);
  });

  return app;
};

export default setupApplication;
