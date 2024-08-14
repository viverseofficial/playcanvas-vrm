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

import WaveUpperAnimUrl from '/Wave_Upper.glb?url';

// import VRMA
import VrmaTestUrl from '/VRMA_test.vrma?url';
import VrmaAUrl from '/VRMA_01.vrma?url';
import VrmaBUrl from '/VRMA_02.vrma?url';
import VrmaCUrl from '/VRMA_03.vrma?url';

const AnimationIdle = new pc.Asset('Idle', 'animation', { url: idleAnimUrl });
const AnimationRun = new pc.Asset('Run', 'animation', { url: runAnimUrl });
const AnimationMocapV1 = new pc.Asset('MocapA', 'container', { url: mocapV1AnimUrl });
const AnimationMocapV2 = new pc.Asset('MocapB', 'container', { url: mocapV2AnimUrl });
const AnimationA = new pc.Asset('ATest', 'animation', { url: TestAAnimUrl });
const AnimationB = new pc.Asset('BTest', 'animation', { url: TestBAnimUrl });
const AnimationC = new pc.Asset('CTest', 'animation', { url: TestCAnimUrl });
const AnimationD = new pc.Asset('DTest', 'animation', { url: TestDAnimUrl });
const AnimationE = new pc.Asset('ETest', 'animation', { url: TestEAnimUrl });

const AnimationWaveUpper = new pc.Asset('WaveUpper', 'animation', { url: WaveUpperAnimUrl });

// create VRMA assets
const AnimationVrmaTest = new pc.Asset('VrmaTest', 'container', { url: VrmaTestUrl });
const AnimationVrmaA = new pc.Asset('VrmaA', 'container', { url: VrmaAUrl });
const AnimationVrmaB = new pc.Asset('VrmaA', 'container', { url: VrmaBUrl });
const AnimationVrmaC = new pc.Asset('VrmaA', 'container', { url: VrmaCUrl });

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
  AnimationWaveUpper,
  AnimationVrmaTest, //vrma
  AnimationVrmaA,
  AnimationVrmaB,
  AnimationVrmaC,
};
