import * as pc from 'playcanvas';
import setupApplication, { createCamera, createLight, loadScript, createScene } from './setup';
import { /* createDefaultAnimations, */ createWindowTestAnimation } from './utils/animations';
import { createAnimationFromVRMA } from './utils/animations2';

// import { applyMaterialMtoon } from './utils/mtoon';

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
const GLTFLoader: any = window.GLTFLoader;

const createAvatar = (url: string) => {
  return new Promise<{
    avatarEntity: pc.Entity;
    animatedEntity: pc.Entity;
    asset: pc.Asset;
    humanoid: any;
  }>((resolve, reject) => {
    const loader = new GLTFLoader(pc, app);
    const asset = new pc.Asset('avatar', 'container', { url });
    let timer = 0;

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

          // Idle
          // createDefaultAnimations(animatedEntity, convertedAsset, humanoid, VRMLoader);

          // VRMA
          createAnimationFromVRMA(animatedEntity, convertedAsset, humanoid, VRMLoader);

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
          }

          // const mtoon = applyMaterialMtoon(convertedAsset, VRMLoader);
          // mtoon.instantiated(renderRootEntity);

          app.on('update', (dt) => {
            timer += dt;
            if (humanoid) humanoid.update();
            // Open when you want model move to test spring bone
            // rootEntity.setPosition(Math.sin(timer), 0, 0);
          });

          resolve({ avatarEntity: rootEntity, animatedEntity, asset: convertedAsset, humanoid });
        },
      )
      .catch((error: Error) => {
        reject(error);
      });
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
  createWindowTestAnimation(animatedEntityA, assetA, humanoidA, VRMLoader);

  app.root.addChild(avatarA);
  app.root.addChild(avatarB);
  avatarB.setPosition(0.5, 0, 0);
};

const app = setupApplication();
app.once('start', async () => {
  createLight(app);
  createCamera(app);
  createScene(app);

  VRMLoader.VrmExpression.importScript(pc);
  VRMLoader.VrmSpringBone.importScript(pc);
  setupAvatar(app);
});

app.start();
