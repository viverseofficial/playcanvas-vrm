import * as pc from 'playcanvas';
import setupApplication, {
  createCamera,
  createLight,
  loadScript,
  createScene,
  setSkyBox,
  createMiniStats,
} from './setup';
import { createDefaultAnimations, createWindowTestAnimation } from './utils/animations';

import avatarUrl from '/avatars/sample_alicia_solid.vrm?url';
// import avatarUrl2 from 'your-path';

declare global {
  interface Window {
    createAnim(type: 'Y' | 'V' | 'X'): void;
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
        /**
         * VRM Script Note:
         * If you are using vrm-mtoon script,
         * please add vrm-expression script after vrm-mtoon script.
         */
        rootEntity.script.create('vrmMtoon', {
          attributes: {
            asset,
          },
        });

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
      }

      app.on('update', (dt) => {
        timer += dt;
        if (humanoid) humanoid.update();
        // NOTE: Open when you want model move to test spring bone
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
  const { avatarEntity, animatedEntity, asset, humanoid } = await createAvatar(avatarUrl);
  window.avatar = animatedEntity;
  createWindowTestAnimation(avatarEntity, animatedEntity, asset, humanoid, VRMLoader);
  app.root.addChild(avatarEntity);

  // NOTE: if you want to add another avatar, please uncomment the following code
  // const { avatarEntity: avatarB } = await createAvatar(avatarUrl2);
  // app.root.addChild(avatarB);
  // avatarB.setPosition(0.5, 0, 0);
};

const app = setupApplication();
createMiniStats(app);

app.once('start', async () => {
  const focusEntity = new pc.Entity('FocusEntity');
  const height = 1;
  focusEntity.setPosition(0, height, 0);
  app.root.addChild(focusEntity);
  focusEntity.addComponent('render', {
    type: 'box',
  });
  focusEntity.render!.enabled = false;

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
