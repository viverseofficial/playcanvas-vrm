import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import * as pc from 'playcanvas';
import ts from 'typescript';

const source = await readFile(new URL('../src/helpers/RenderStates.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { RenderStates } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
);

function createStates(layer) {
  const states = new RenderStates(pc);
  states.setApp({
    scene: {
      layers: { getLayerById: (id) => (id === pc.LAYERID_WORLD ? layer : null) },
      ambientLight: new pc.Color(0.1, 0.2, 0.3),
      envAtlas: null,
    },
  });
  return states;
}

test('2.23.3 removed splitLights and reproduces the original error', () => {
  const layer = new pc.Layer();
  assert.equal(layer.splitLights, undefined);
  assert.throws(
    () => new RenderStates(pc).convertLightStateInfo(layer.splitLights),
    /Cannot read properties of undefined \(reading '0'\)/,
  );
});

for (const clustered of [true, false]) {
  test(`collects enabled lights of every type with clustered=${clustered}`, (context) => {
    const device = new pc.NullGraphicsDevice({ width: 1, height: 1 });
    const layer = new pc.Layer();
    const lights = [];
    context.after(() => {
      lights.forEach((light) => light.destroy());
      device.destroy();
    });

    for (const type of [pc.LIGHTTYPE_DIRECTIONAL, pc.LIGHTTYPE_POINT, pc.LIGHTTYPE_SPOT]) {
      for (const enabled of [true, false]) {
        const light = new pc.Light(device, clustered);
        light.type = type;
        light.enabled = enabled;
        const node = new pc.Entity();
        node.setPosition(1, 2, 3);
        node.light = {
          color: new pc.Color(0.5, 0.25, 0.125),
          intensity: 2,
          range: 10,
          innerConeAngle: 20,
          outerConeAngle: 30,
        };
        light._node = node;
        lights.push(light);
        layer.addLight({ light });
        light.addLayer(layer);
      }
    }

    const states = createStates(layer);
    states.update();
    for (const group of ['directionalLights', 'pointLights', 'spotLights']) {
      assert.equal(states.lightStateInfo[group].length, 1);
      assert.deepEqual(states.lightStateInfo[group][0].color, new pc.Color(1, 0.5, 0.25));
    }
    assert.deepEqual(states.lightStateInfo.pointLights[0].position, new pc.Vec3(1, 2, 3));
    assert.equal(states.lightStateInfo.spotLights[0].distance, 10);

    lights.forEach((light) => {
      light.enabled = false;
    });
    states.update();
    assert.deepEqual(states.lightStateInfo.directionalLights, []);
    assert.deepEqual(states.lightStateInfo.pointLights, []);
    assert.deepEqual(states.lightStateInfo.spotLights, []);
  });
}

test('empty layers retain scene lighting without throwing', () => {
  const states = createStates(new pc.Layer());
  states.update();
  assert.deepEqual(states.lightStateInfo, {
    directionalLights: [],
    spotLights: [],
    pointLights: [],
    scene: { envAtlas: null, ambientLight: new pc.Color(0.1, 0.2, 0.3) },
  });
});

test('updates without an app or world layer do not throw', () => {
  const states = new RenderStates(pc);
  states.update();
  assert.equal(states.lightStateInfo, null);
  states.setApp({ scene: { layers: { getLayerById: () => null } } });
  states.update();
  assert.equal(states.lightStateInfo, null);
});
