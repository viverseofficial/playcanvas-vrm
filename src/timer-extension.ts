import * as pc from 'playcanvas';

interface ITimer {
  secsLeft?: number;
  callback?: () => void;
  scope?: pc.ScriptType;
}

export class Timer {
  public name: string;
  private _timers: { [key: number]: ITimer };
  private _nextFreeId: number;
  public timer: ITimer;
  public handle: { id?: number } | null;
  public isPausing: boolean;

  constructor(name: string) {
    this.name = name;
    this._timers = {};
    this._nextFreeId = 0;

    this.timer = {};
    this.handle = null;
    this.isPausing = true;
  }

  add(durationSecs: number, callback: () => void, scope: pc.ScriptType) {
    if (durationSecs > 0) {
      this.isPausing = false;

      const handle = { id: this._nextFreeId };
      this._timers[this._nextFreeId] = {
        secsLeft: durationSecs,
        callback,
        scope,
      };

      this._nextFreeId += 1;
      this.handle = handle;
    } else {
      this.handle = null;
    }
  }

  pause() {
    if (this.handle) {
      this.isPausing = true;

      if (this.handle.id) {
        delete this._timers[this.handle.id];
      }
    }
  }

  update(dt: number) {
    for (let property in this._timers) {
      const targetTimer = this._timers[property];

      if (targetTimer.secsLeft !== undefined) {
        targetTimer.secsLeft -= dt;
        if (targetTimer.secsLeft <= 0) {
          delete this._timers[property];
          if (targetTimer.callback) targetTimer.callback.call(targetTimer.scope);
        }
      }
    }
  }
}
