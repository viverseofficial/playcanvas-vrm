import * as pc from 'playcanvas';

export interface IDirectionalLightInfo {
  direction: pc.Vec3;
  color: pc.Color;
}

export interface ISpotLightInfo {
  position: pc.Vec3;
  direction: pc.Vec3;
  color: pc.Color;
  distance: number;
  decay: number;
  coneCos: number;
  penumbraCos: number;
}

export interface IPointLightInfo {
  position: pc.Vec3;
  color: pc.Color;
  distance: number;
  decay: number;
}

export interface ISceneLightInfo {
  envAtlas: pc.Texture | null;
  ambientLight: pc.Color;
}

export interface ILightStateInfo {
  directionalLights: Array<IDirectionalLightInfo>;
  spotLights: Array<ISpotLightInfo>;
  pointLights: Array<IPointLightInfo>;
  scene?: ISceneLightInfo;
}
export class RenderStates {
  private _pcRef: typeof pc;
  private _app: pc.AppBase | null;
  public lightStateInfo: ILightStateInfo | null;
  public defaultInfoSetting: {
    directionalLight: IDirectionalLightInfo;
    spotLight: ISpotLightInfo;
    pointLight: IPointLightInfo;
  };

  constructor(pcRef: typeof pc) {
    this._pcRef = pcRef;
    this._app = null;
    this.lightStateInfo = null;

    this.defaultInfoSetting = {
      directionalLight: {
        direction: new pc.Vec3(0, 0, 0),
        color: new pc.Color(0, 0, 0),
      },
      spotLight: {
        position: new pc.Vec3(0, 0, 0),
        direction: new pc.Vec3(0, 0, 0),
        color: new pc.Color(0, 0, 0),
        distance: 0,
        decay: 0,
        coneCos: 0,
        penumbraCos: 0,
      },
      pointLight: {
        position: new pc.Vec3(0, 0, 0),
        color: new pc.Color(0, 0, 0),
        distance: 0,
        decay: 0,
      },
    };
  }

  private _updateMaterialUniforms(lights: pc.Light[][]) {
    this.lightStateInfo = this.convertLightStateInfo(lights);
  }

  setApp(app: pc.AppBase) {
    if (this._app) return;

    this._app = app;
    this.update();

    this._app.on('update', this.update, this);
  }

  convertLightStateInfo(lights: pc.Light[][]) {
    const directionalLights = lights[this._pcRef.LIGHTTYPE_DIRECTIONAL];
    const spotLights = lights[this._pcRef.LIGHTTYPE_SPOT];
    const pointLights = lights[this._pcRef.LIGHTTYPE_POINT];

    const info: ILightStateInfo = {
      directionalLights: [],
      spotLights: [],
      pointLights: [],
      ...(this._app && {
        scene: {
          envAtlas: this._app.scene.envAtlas || null,
          ambientLight: this._app.scene.ambientLight,
        },
      }),
    };

    info.directionalLights = directionalLights.map((light: pc.Light) => {
      if (light._node === null) {
        return this.defaultInfoSetting.directionalLight;
      }

      const component = light._node.light;
      return {
        direction: light._direction,
        color: component.color,
      };
    });

    info.spotLights = spotLights.map((light: pc.Light) => {
      if (light._node === null) {
        return this.defaultInfoSetting.spotLight;
      }

      const component = light._node.light;
      return {
        position: light._node.getPosition(),
        direction: light._node.forward,
        color: component.color,
        distance: component.range,
        decay: light.falloffMode === this._pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2,
        coneCos: Math.cos(component.innerConeAngle),
        penumbraCos: Math.cos(component.outerConeAngle),
      };
    });

    info.pointLights = pointLights.map((light: pc.Light) => {
      if (light._node === null) {
        return this.defaultInfoSetting.pointLight;
      }

      const component = light._node.light;
      return {
        position: light._node.getPosition(),
        color: component.color,
        distance: component.range,
        decay: light.falloffMode === this._pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2,
      };
    });

    return info;
  }

  destroy() {
    if (this._app) {
      this._app.off('update', this.update, this);
    }
  }

  update() {
    if (!this._app) return;

    // Assume that the world layer is always be the main part and use the light data from it
    const worldLayer = this._app.scene.layers.getLayerById(this._pcRef.LAYERID_WORLD);
    if (worldLayer) {
      const lights = worldLayer.splitLights;
      this._updateMaterialUniforms(lights);
    }
  }
}
