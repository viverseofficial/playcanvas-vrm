interface IAnimationSetting {
  speed?: number;
  loop?: boolean;
  layerName?: string;
}

export interface IAnimationAsset {
  stateName: string;
  asset: pc.Asset;
  removeY?: boolean;
  removeUpperY?: boolean;
  removeZ?: boolean;
  setting?: IAnimationSetting;
}

export interface IAnimationResource {
  name: string;
  resource: pc.AnimTrack;
  setting?: IAnimationSetting;
}

export interface IAnimExtraSettings {
  motionHipsHeight?: number;
  negativeZAnimNames?: string[];
}

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
