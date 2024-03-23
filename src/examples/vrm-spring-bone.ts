// import * as pc from 'playcanvas'
// import { VrmSpringBone } from 'playcanvas-vrm';

// // Find the place register the script
// VrmSpringBone.importScript(pc);

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

//       rootEntity.script.create('vrmSpringBone', {
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
