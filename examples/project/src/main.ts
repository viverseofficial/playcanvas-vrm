import * as pc from 'playcanvas';
import setupApplication, {
  createCamera,
  createLight,
  loadScript,
  createScene,
  setSkyBox,
} from './setup';
import { createDefaultAnimations, createWindowTestAnimation } from './utils/animations';

import avatarUrl from '/Avatar_v1.vrm?url'; // v1
import avatarUrl2 from '/rara.vrm?url'; // v0

declare global {
  interface Window {
    createAnim(type: 'A' | 'B' | 'C' | 'D'): void;
    avatar: pc.Entity;
  }
}

await loadScript();
const VRMLoader: any = window.VRMLoader;

const createAvatar = (url: string) => {
  return new Promise<{
    avatarEntity: pc.Entity;
    animatedEntity: pc.Entity;
    asset: pc.Asset;
    humanoid: any;
  }>((resolve, reject) => {
    let timer = 0;
    const asset = new pc.Asset('avatar', 'container', { url });
    app.assets.add(asset);

    asset.on('load', (asset) => {
      VRMLoader.addIndexToNodeTags(asset);
      VRMLoader.VrmMtoon.convertVRMMtoonMaterials(pc, asset);

      const renderRootEntity = asset.resource.instantiateRenderEntity();
      const rootEntity = new pc.Entity('VRM_AVATAR_ROOT');
      rootEntity.addChild(renderRootEntity);

      const version = VRMLoader.getVersion(asset);
      // Rotate version v0 model to face the +z axis
      if (version === 'v0') rootEntity.rotateLocal(0, 180, 0);

      const humanoid = VRMLoader.createFormattedVRMHumanoid(pc, asset, rootEntity, {
        autoUpdateHumanBones: version === 'v1',
      });
      const normalizedRootEntity = humanoid.normalizedHumanBonesRoot;
      const animatedEntity = version === 'v1' ? normalizedRootEntity : rootEntity;

      animatedEntity.addComponent('anim', {
        activate: true,
      });

      createDefaultAnimations(rootEntity, animatedEntity, asset, humanoid, VRMLoader);

      rootEntity.addComponent('script');
      if (rootEntity.script) {
        rootEntity.script.create('vrmExpression', {
          attributes: {
            asset,
          },
        });

        rootEntity.script.create('vrmSpringBone', {
          attributes: {
            asset,
          },
        });

        rootEntity.script.create('vrmMtoon', {
          attributes: {
            asset,
          },
        });
      }

      app.on('update', (dt) => {
        timer += dt;
        if (humanoid) humanoid.update();
        // Open when you want model move to test spring bone
        // rootEntity.setPosition(Math.sin(timer), 0, 0);
      });

      resolve({ avatarEntity: rootEntity, animatedEntity, asset, humanoid });
    });

    asset.on('error', (error) => {
      reject(error);
    });

    app.assets.load(asset);
  });
};

const setupAvatar = async (app: pc.Application) => {
  const {
    avatarEntity: avatarA,
    animatedEntity: animatedEntityA,
    asset: assetA,
    humanoid: humanoidA,
  } = await createAvatar(avatarUrl);
  const { avatarEntity: avatarB } = await createAvatar(avatarUrl2);

  window.avatar = animatedEntityA;
  createWindowTestAnimation(avatarA, animatedEntityA, assetA, humanoidA, VRMLoader);

  app.root.addChild(avatarA);
  app.root.addChild(avatarB);
  avatarB.setPosition(0.5, 0, 0);
};

const app = setupApplication();

app.scene.ambientLight.set(0.5, 0.5, 0.5);

app.once('start', async () => {
  const focusEntity = new pc.Entity('Test');
  focusEntity.setPosition(0, 1.8, 0);
  app.root.addChild(focusEntity);
  focusEntity.addComponent('render', {
    type: 'box',
  });
  if (focusEntity.render) focusEntity.render.enabled = false;

  createLight(app);
  createCamera(app, focusEntity);
  createScene(app);
  setSkyBox(app);

  VRMLoader.VrmExpression.importScript(pc);
  VRMLoader.VrmSpringBone.importScript(pc);
  VRMLoader.VrmMtoon.importScript(pc);
  setupAvatar(app);
});

app.start();
