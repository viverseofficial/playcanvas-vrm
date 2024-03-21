/**
 * Sample for using AddVrmAnimations script to add animation on the entity
 */

// import * as pc from 'playcanvas';
// import { AddVrmAnimations } from 'playcanvas-vrm';

// export class VrmSpecificAnimations extends AddVrmAnimations {
//   initialize() {
//     super.initialize();

//     const AnimationRun = this.app.assets.find('A_anim.glb');
//     const AnimationJump = this.app.assets.find('B_anim.glb');

//     const animationAssets = [
//       {
//         stateName: 'Jump',
//         asset: AnimationRun,
//       },
//       {
//         stateName: 'Run',
//         asset: AnimationJump,
//       },
//     ];

//     const loadedResources = this.loadAnimation(animationAssets);
//     this.loadedLoadedResources(loadedResources);
//   }

//   loadedLoadedResources(loadedResources) {
//     loadedResources.forEach(({ name, resource, setting }) => {
//       this.entity.anim.assignAnimation(
//         name,
//         resource,
//         setting && setting.layerName !== undefined ? setting.layerName : null,
//         setting && setting.speed !== undefined ? setting.speed : 1,
//         setting && setting.loop !== undefined ? setting.loop : true,
//       );
//     });
//   }
// }

// pc.registerScript(VrmSpecificAnimations, 'vrmSpecificAnimations');
