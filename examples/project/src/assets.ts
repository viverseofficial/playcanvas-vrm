import * as pc from 'playcanvas';

import idleAnimUrl from '/Idle_anim.glb?url';
import runAnimUrl from '/Run_anim.glb?url';
import mocapV1AnimUrl from '/mocap-animation-v1.glb?url';
import mocapV2AnimUrl from '/mocap-animation-v2.glb?url';

import TestAAnimUrl from '/04_Salute.glb?url';
import TestBAnimUrl from '/23_Laying.glb?url';
import TestCAnimUrl from '/24_Praying.glb?url';
import TestDAnimUrl from '/07_2 Pointing.glb?url';
import TestEAnimUrl from '/25_Catwalk.glb?url';

const AnimationIdle = new pc.Asset('Idle', 'animation', { url: idleAnimUrl });
const AnimationRun = new pc.Asset('Run', 'animation', { url: runAnimUrl });
const AnimationMocapV1 = new pc.Asset('MocapA', 'container', { url: mocapV1AnimUrl });
const AnimationMocapV2 = new pc.Asset('MocapB', 'container', { url: mocapV2AnimUrl });
const AnimationA = new pc.Asset('ATest', 'animation', { url: TestAAnimUrl });
const AnimationB = new pc.Asset('BTest', 'animation', { url: TestBAnimUrl });
const AnimationC = new pc.Asset('CTest', 'animation', { url: TestCAnimUrl });
const AnimationD = new pc.Asset('DTest', 'animation', { url: TestDAnimUrl });
const AnimationE = new pc.Asset('ETest', 'animation', { url: TestEAnimUrl });

export const preloadAssets = {
  AnimationIdle,
  AnimationRun,
  AnimationMocapV1,
  AnimationMocapV2,
  AnimationA,
  AnimationB,
  AnimationC,
  AnimationD,
  AnimationE,
};
