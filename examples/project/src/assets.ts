import * as pc from 'playcanvas';

import idleAnimUrl from '/animations/deprecated/Idle.glb?url';
import pointingAnimUrl from '/animations/deprecated/Pointing.glb?url';

// import VRMA
import VrmaIdleUrl from '/animations/vrma/Idle.vrma?url';
import VrmaYawningUrl from '/animations/vrma/Yawn.vrma?url';

const AnimationIdle = new pc.Asset('Idle', 'animation', { url: idleAnimUrl });
const AnimationPointing = new pc.Asset('Pointing', 'animation', { url: pointingAnimUrl });

// create VRMA assets
const AnimationVrmaIdle = new pc.Asset('VrmaIdle', 'container', { url: VrmaIdleUrl });
const AnimationVrmaYawning = new pc.Asset('VrmaYawning', 'container', { url: VrmaYawningUrl });

export const preloadAssets = {
  AnimationIdle,
  AnimationPointing,
  AnimationVrmaIdle,
  AnimationVrmaYawning,
};
