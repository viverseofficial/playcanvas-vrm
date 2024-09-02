import * as pc from 'playcanvas';
import { preloadAssets } from './assets';
import skyCubeMapUrl from './assets/skybox.dds?url';

export const createScene = (app: pc.Application) => {
  const plane = new pc.Entity('Plane');
  app.root.addChild(plane);
  plane.addComponent('render', {
    type: 'plane',
  });

  // Front ball at +Z
  const ball = new pc.Entity('Ball');
  ball.setLocalScale(0.2, 0.2, 0.2);
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

  // Light A
  const lightA = new pc.Entity('light');
  lightA.addComponent('light', {
    type: 'directional',
  });
  lightA.setPosition(-1, 2, 0);
  lightA.lookAt(pc.Vec3.ZERO);

  // Light B
  const lightB = new pc.Entity('light');
  lightB.addComponent('light', {
    type: 'spot',
  });
  lightB.setPosition(0, 2.5, 0);

  const colorB = new pc.Color(0, 0, 0.5);
  const materialB = new pc.BasicMaterial();
  materialB.color = colorB;
  materialB.update();

  lightB.addComponent('render', {
    type: 'cone',
    material: materialB,
  });
  lightB.setLocalScale(0.2, 0.2, 0.2);

  if (lightB.light) {
    lightB.light.color = colorB;
  }

  // Light C
  const lightC = new pc.Entity('light');
  lightC.addComponent('light', {
    type: 'spot',
  });
  lightC.setPosition(0, 2.5, 0);

  const colorC = new pc.Color(0, 0.5, 0.5);
  const materialC = new pc.BasicMaterial();
  materialC.color = colorC;
  materialC.update();

  lightC.addComponent('render', {
    type: 'cone',
    material: materialC,
  });
  lightC.setLocalScale(0.2, 0.2, 0.2);

  if (lightC.light) {
    lightC.light.color = colorC;
    lightC.setPosition(1, 2.5, 0);
    lightC.lookAt(pc.Vec3.ZERO);
  }

  // Light D
  const lightD = new pc.Entity('light');
  lightD.addComponent('light', {
    type: 'point',
  });
  lightD.setPosition(0, 0.5, 0);

  const colorD = new pc.Color(0.5, 0, 0);
  const materialD = new pc.BasicMaterial();
  materialD.color = colorD;
  materialD.update();

  lightD.addComponent('render', {
    type: 'sphere',
    material: materialD,
  });
  lightD.setLocalScale(0.2, 0.2, 0.2);

  if (lightD.light) {
    lightD.light.color = colorD;
    lightD.setPosition(1, 2.5, 0);
  }

  app.root.addChild(lightA);
  // app.root.addChild(lightB);
  // app.root.addChild(lightC);
  // app.root.addChild(lightD);

  let timer = 0;

  app.on('update', (dt) => {
    timer += dt;

    lightB.setPosition(Math.sin(timer) * 2.0, 2.5, 0);
    lightC.setPosition(-(Math.cos(timer) + 1.0) * 2.0, 2, 0);
    lightD.setPosition(1, Math.sin(timer) + 1.0, 0);

    // Open when you want model move the light
    lightA.setPosition(Math.sin(timer), 2, Math.cos(timer));
    lightA.lookAt(pc.Vec3.ZERO);
  });
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

export const setSkyBox = (app: pc.Application) => {
  const cubemapAsset = new pc.Asset(
    'skybox',
    'cubemap',
    {
      url: skyCubeMapUrl,
    },
    {
      magFilter: 1,
      minFilter: 5,
      anisotropy: 1,
      name: 'Skybox',
      prefiltered: 'skybox.dds',
    },
  );

  cubemapAsset.ready((asset) => {
    app.scene.setSkybox(asset.resources);
    app.scene.skyboxMip = 1;
  });

  app.assets.load(cubemapAsset);
};

export const createMiniStats = (app: pc.Application) => {
  // @ts-ignore
  // set up options for mini-stats, start with the default options
  const options: {
    sizes: { width: number; height: number; spacing: number; graphs: boolean }[];
    startSizeIndex: number;
  } = pc.MiniStats.getDefaultOptions();

  // configure sizes
  options.sizes = [
    { width: 128, height: 16, spacing: 0, graphs: false },
    { width: 256, height: 32, spacing: 2, graphs: true },
    { width: 500, height: 64, spacing: 2, graphs: true },
  ];

  // when the application starts, use the largest size
  options.startSizeIndex = 0;

  // @ts-ignore
  const miniStats = new pc.MiniStats(app, options);
  miniStats.div.style.cursor = 'pointer';
};

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
