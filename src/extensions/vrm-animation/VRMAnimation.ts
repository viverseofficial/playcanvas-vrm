import * as pc from 'playcanvas';
import { VRMExpressionPresetName } from '../vrm-map-list';
import { VRMHumanBoneName } from '../vrm-humanoid/vrm-humanoid';
import { IVrmaTrack } from './vrm-animation-interfaces';
import { IAnimatedMorphConfig } from '../vrm-expression/vrm-expression';

export class VRMAnimation {
  public duration: number;
  public restHipsPosition: pc.Vec3;

  public humanoidTracks: {
    translation: Map<'hips', IVrmaTrack>;
    rotation: Map<VRMHumanBoneName, IVrmaTrack>;
  };
  public expressionTracks: {
    preset: Map<VRMExpressionPresetName, IAnimatedMorphConfig>;
    custom: Map<string, IAnimatedMorphConfig>;
  };

  // public lookAtTrack: IVrmaTrack | null;

  public constructor(pcRef: typeof pc) {
    this.duration = 0.0;
    this.restHipsPosition = new pcRef.Vec3();

    this.humanoidTracks = {
      translation: new Map(),
      rotation: new Map(),
    };

    this.expressionTracks = {
      preset: new Map(),
      custom: new Map(),
    };

    // this.lookAtTrack = null;
  }
}
