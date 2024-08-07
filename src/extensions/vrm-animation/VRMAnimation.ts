import * as pc from 'playcanvas';
// import { VRMExpressionPresetName } from '../../extensions//vrm-map-list';
import { VRMHumanBoneName } from '../vrm-humanoid/vrm-humanoid';

export interface IVrmaTrack {
  curve: pc.AnimCurve;
  input: pc.AnimData; //each input represents a sequence a keyframe times
  output: pc.AnimData; //values that correspond to the keyframe times
}

export interface IMorphCurvePath {
  entityPath: string[];
  component: string;
  propertyPath: string[];
}

export class VRMAnimation {
  public duration: number;
  public restHipsPosition: pc.Vec3;

  public humanoidTracks: {
    translation: Map<'hips', IVrmaTrack>;
    rotation: Map<VRMHumanBoneName, IVrmaTrack>;
  };
  /*     public expressionTracks: {
      preset: Map<VRMExpressionPresetName, IVrmaTrack>;
      custom: Map<string, IVrmaTrack>; 
    };
    public lookAtTrack: IVrmaTrack | null;  */

  public constructor(pcRef: typeof pc) {
    this.duration = 0.0;
    this.restHipsPosition = new pcRef.Vec3();

    this.humanoidTracks = {
      translation: new Map(),
      rotation: new Map(),
    };

    /*       this.expressionTracks = {
        preset: new Map(),
        custom: new Map(),
      };
  
      this.lookAtTrack = null; */
  }
}
