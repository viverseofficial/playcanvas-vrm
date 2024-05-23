/**
 * Example: How to create anim state to the avatar
 */

// import * as pc from 'playcanvas'
// import { VrmAnimation, GLTFLoader } from 'playcanvas-vrm';

// const AnimationIdle = new pc.Asset('Idle', 'animation', { url: idleAnimUrl });
// const AnimationRun = new pc.Asset('Run', 'animation', { url: runAnimUrl });

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

//       rootEntity.addComponent('anim', {
//         activate: true,
//       });

//         const animationAssets = [
//           {
//             stateName: 'Idle',
//             asset: AnimationIdle,
//           },
//           {
//             stateName: 'Run',
//             asset: AnimationRun,
//           },
//         ];

//         /**
//          * Note: You can provide the humanoid and reuse it,
//          * or you can recreate the humanoid every time you call the function.
//          */
//         const humanoid = createFormattedVRMHumanoid(pc, asset, rootEntity);
//         const loadedResources = VrmAnimation.createVRMAnimation(
//           pc,
//           animationAssets,
//           convertedAsset,
//           rootEntity,
//           humanoid,
//           motionHipsHeight (optional!)
//         );
//         if (loadedResources) {
//           loadedResources.forEach((resource) => {
//             VrmAnimation.assignAnimation(rootEntity, resource);
//           });
//         }
//       }

//       app.root.addChild(rootEntity);
//     },
//   )
//   .catch((error: Error) => {
//     console.error(error);
//   });
