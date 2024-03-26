// import * as pc from 'playcanvas'
// import { VrmExpression } from 'playcanvas-vrm';

// // Find the place register the script
// VrmExpression.importScript(pc);

// const loader = new GLTFLoader(pc, app);
// const asset = new pc.Asset('avatar', 'container', { url: avatarUrl });
// loader
//   .parse(asset, 'VRM_AVATAR_RENDER')
//   .then(
//     ({
//       entity: renderEntity,
//       asset: convertedAsset,
//     }: {
//       entity: pc.Entity;
//       asset: pc.Asset;
//     }) => {
//       const rootEntity = new pc.Entity('VRM_AVATAR_ROOT');
//       rootEntity.addChild(renderEntity);

//       rootEntity.addComponent('script');

//       rootEntity.script.create('vrmExpression', {
//         attributes: {
//           asset: convertedAsset,
//         },
//       });

//       app.root.addChild(rootEntity);
//     },
//   )
//   .catch((error: Error) => {
//     console.error(error);
//   });

/**
 * this.entity.on('vrm-expression:start-emotion', this.startEmotion, this);
 * {
      times: [0, 0.5, 1, 2],
      values: [0, 0.5, 1, 0],
    }
 * You can control the emotion of the avatar through the setting.
    The time will map to values to set the weight strength to each emotion.
 */

/**
 * this.entity.on('audio:is-talking-change', this.onIsTalkingChange, this);
 * You can set avatars start talking expression. It will play talking expression randomly.
 */
