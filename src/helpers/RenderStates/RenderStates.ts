import * as pc from 'playcanvas';

export class RenderStates {
  private _pcRef: typeof pc;
  private _app: pc.AppBase | null = null;
  private _materials: Set<any>;
  public lightStates: Map<number, any>;
  public lightTypes: { [key: string]: number };

  constructor(pcRef: typeof pc, app: pc.AppBase) {
    this._pcRef = pcRef;
    this._app = app;

    this.lightTypes = {
      directional: pcRef.LIGHTTYPE_DIRECTIONAL,
      omni: pcRef.LIGHTTYPE_OMNI,
      point: pcRef.LIGHTTYPE_POINT,
      spot: pcRef.LIGHTTYPE_SPOT,
    };

    this._materials = new Set();
    this.lightStates = new Map();
  }

  // TODO: Change to scrips
  private _updateMaterialUniforms() {
    this._materials.forEach((material) => {
      if (this._app) {
        material.updateLightUniforms(this.lightStates, this._app.scene);
      }
    });
  }

  addMaterial(material: any) {
    this._materials.add(material);
  }

  removeMaterial(material: any) {
    this._materials.delete(material);
  }

  update() {
    if (this._app) {
      const directionalList: Array<any> = [];
      const spotList: Array<any> = [];
      const pointList: Array<any> = [];

      this._app.root.findComponents('light').forEach((light) => {
        const lightComponent = light as unknown as pc.LightComponent;

        if (lightComponent.enabled && lightComponent.entity.enabled) {
          const type = this.lightTypes[lightComponent.type];
          if (type === this._pcRef.LIGHTTYPE_DIRECTIONAL) {
            directionalList.push(lightComponent);
          } else if (type === this._pcRef.LIGHTTYPE_SPOT) {
            spotList.push(lightComponent);
          } else if (type === this._pcRef.LIGHTTYPE_OMNI || type === this._pcRef.LIGHTTYPE_POINT) {
            pointList.push(lightComponent);
          }
        }
      });

      this.lightStates.set(this._pcRef.LIGHTTYPE_DIRECTIONAL, directionalList);
      this.lightStates.set(this._pcRef.LIGHTTYPE_SPOT, spotList);
      this.lightStates.set(this._pcRef.LIGHTTYPE_POINT, pointList);

      this._updateMaterialUniforms();
    }
  }
}
