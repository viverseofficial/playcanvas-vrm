/**
 * name: playcanvas-vrm
 * version: v1.1.1
 */
var U = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var b = (r, t, e) => (U(r, t, "read from private field"), e ? e.call(r) : t.get(r)), V = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, j = (r, t, e, i) => (U(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e);
var H = (r, t, e) => (U(r, t, "access private method"), e);
const C = [
  "hips",
  "spine",
  "chest",
  "upperChest",
  "neck",
  "head",
  "leftEye",
  "rightEye",
  "jaw",
  "leftUpperLeg",
  "leftLowerLeg",
  "leftFoot",
  "leftToes",
  "rightUpperLeg",
  "rightLowerLeg",
  "rightFoot",
  "rightToes",
  "leftShoulder",
  "leftUpperArm",
  "leftLowerArm",
  "leftHand",
  "rightShoulder",
  "rightUpperArm",
  "rightLowerArm",
  "rightHand",
  "leftThumbMetacarpal",
  "leftThumbProximal",
  "leftThumbDistal",
  "leftIndexProximal",
  "leftIndexIntermediate",
  "leftIndexDistal",
  "leftMiddleProximal",
  "leftMiddleIntermediate",
  "leftMiddleDistal",
  "leftRingProximal",
  "leftRingIntermediate",
  "leftRingDistal",
  "leftLittleProximal",
  "leftLittleIntermediate",
  "leftLittleDistal",
  "rightThumbMetacarpal",
  "rightThumbProximal",
  "rightThumbDistal",
  "rightIndexProximal",
  "rightIndexIntermediate",
  "rightIndexDistal",
  "rightMiddleProximal",
  "rightMiddleIntermediate",
  "rightMiddleDistal",
  "rightRingProximal",
  "rightRingIntermediate",
  "rightRingDistal",
  "rightLittleProximal",
  "rightLittleIntermediate",
  "rightLittleDistal"
], K = {
  hips: null,
  spine: "hips",
  chest: "spine",
  upperChest: "chest",
  neck: "upperChest",
  head: "neck",
  leftEye: "head",
  rightEye: "head",
  jaw: "head",
  leftUpperLeg: "hips",
  leftLowerLeg: "leftUpperLeg",
  leftFoot: "leftLowerLeg",
  leftToes: "leftFoot",
  rightUpperLeg: "hips",
  rightLowerLeg: "rightUpperLeg",
  rightFoot: "rightLowerLeg",
  rightToes: "rightFoot",
  leftShoulder: "upperChest",
  leftUpperArm: "leftShoulder",
  leftLowerArm: "leftUpperArm",
  leftHand: "leftLowerArm",
  rightShoulder: "upperChest",
  rightUpperArm: "rightShoulder",
  rightLowerArm: "rightUpperArm",
  rightHand: "rightLowerArm",
  leftThumbMetacarpal: "leftHand",
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbDistal: "leftThumbProximal",
  leftIndexProximal: "leftHand",
  leftIndexIntermediate: "leftIndexProximal",
  leftIndexDistal: "leftIndexIntermediate",
  leftMiddleProximal: "leftHand",
  leftMiddleIntermediate: "leftMiddleProximal",
  leftMiddleDistal: "leftMiddleIntermediate",
  leftRingProximal: "leftHand",
  leftRingIntermediate: "leftRingProximal",
  leftRingDistal: "leftRingIntermediate",
  leftLittleProximal: "leftHand",
  leftLittleIntermediate: "leftLittleProximal",
  leftLittleDistal: "leftLittleIntermediate",
  rightThumbMetacarpal: "rightHand",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbDistal: "rightThumbProximal",
  rightIndexProximal: "rightHand",
  rightIndexIntermediate: "rightIndexProximal",
  rightIndexDistal: "rightIndexIntermediate",
  rightMiddleProximal: "rightHand",
  rightMiddleIntermediate: "rightMiddleProximal",
  rightMiddleDistal: "rightMiddleIntermediate",
  rightRingProximal: "rightHand",
  rightRingIntermediate: "rightRingProximal",
  rightRingDistal: "rightRingIntermediate",
  rightLittleProximal: "rightHand",
  rightLittleIntermediate: "rightLittleProximal",
  rightLittleDistal: "rightLittleIntermediate"
}, N = {
  hips: "hips",
  spine: "spine",
  chest: "chest",
  upperChest: "upperChest",
  neck: "neck",
  head: "head",
  leftShoulder: "leftShoulder",
  leftUpperArm: "leftUpperArm",
  leftLowerArm: "leftLowerArm",
  leftHand: "leftHand",
  leftUpperLeg: "leftUpperLeg",
  leftLowerLeg: "leftLowerLeg",
  leftFoot: "leftFoot",
  leftToes: "leftToes",
  leftThumbMetacarpal: "leftThumbMetacarpal",
  leftThumbProximal: "leftThumbProximal",
  leftThumbDistal: "leftThumbDistal",
  leftIndexProximal: "leftIndexProximal",
  leftIndexIntermediate: "leftIndexIntermediate",
  leftIndexDistal: "leftIndexDistal",
  leftMiddleProximal: "leftMiddleProximal",
  leftMiddleIntermediate: "leftMiddleIntermediate",
  leftMiddleDistal: "leftMiddleDistal",
  leftRingProximal: "leftRingProximal",
  leftRingIntermediate: "leftRingIntermediate",
  leftRingDistal: "leftRingDistal",
  leftLittleProximal: "leftLittleProximal",
  leftLittleIntermediate: "leftLittleIntermediate",
  leftLittleDistal: "leftLittleDistal",
  rightUpperArm: "rightUpperArm",
  rightShoulder: "rightShoulder",
  rightLowerArm: "rightLowerArm",
  rightHand: "rightHand",
  rightUpperLeg: "rightUpperLeg",
  rightLowerLeg: "rightLowerLeg",
  rightFoot: "rightFoot",
  rightToes: "rightToes",
  rightThumbMetacarpal: "rightThumbMetacarpal",
  rightThumbProximal: "rightThumbProximal",
  rightThumbDistal: "rightThumbDistal",
  rightIndexProximal: "rightIndexProximal",
  rightIndexIntermediate: "rightIndexIntermediate",
  rightIndexDistal: "rightIndexDistal",
  rightMiddleProximal: "rightMiddleProximal",
  rightMiddleIntermediate: "rightMiddleIntermediate",
  rightMiddleDistal: "rightMiddleDistal",
  rightRingProximal: "rightRingProximal",
  rightRingIntermediate: "rightRingIntermediate",
  rightRingDistal: "rightRingDistal",
  rightLittleProximal: "rightLittleProximal",
  rightLittleIntermediate: "rightLittleIntermediate",
  rightLittleDistal: "rightLittleDistal"
}, tt = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
}, et = {
  a: "aa",
  e: "ee",
  i: "ih",
  o: "oh",
  u: "ou",
  blink: "blink",
  joy: "happy",
  angry: "angry",
  sorrow: "sad",
  fun: "relaxed",
  lookup: "lookUp",
  lookdown: "lookDown",
  lookleft: "lookLeft",
  lookright: "lookRight",
  blink_l: "blinkLeft",
  blink_r: "blinkRight",
  neutral: "neutral"
}, it = {
  Aa: "aa",
  Ih: "ih",
  Ou: "ou",
  Ee: "ee",
  Oh: "oh",
  Blink: "blink",
  Happy: "happy",
  Angry: "angry",
  Sad: "sad",
  Relaxed: "relaxed",
  LookUp: "lookUp",
  Surprised: "surprised",
  LookDown: "lookDown",
  LookLeft: "lookLeft",
  LookRight: "lookRight",
  BlinkLeft: "blinkLeft",
  BlinkRight: "blinkRight",
  Neutral: "neutral"
}, O = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]), dt = {
  _Color: "color",
  _EmissionColor: "emissionColor",
  _ShadeColor: "shadeColor",
  _RimColor: "rimColor",
  _OutlineColor: "outlineColor"
}, pt = {
  isMeshStandardMaterial: {
    color: "color",
    emissionColor: "emissive"
  },
  isMeshBasicMaterial: {
    color: "color"
  },
  isMToonMaterial: {
    color: "color",
    emissionColor: "emissive",
    outlineColor: "outlineColorFactor",
    matcapColor: "matcapFactor",
    rimColor: "parametricRimColorFactor",
    shadeColor: "shadeColorFactor"
  }
}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POSSIBLE_SPEC_VERSIONS: O,
  VRMExpressionPresetName: it,
  VRMHumanBoneList: C,
  VRMHumanBoneParentMap: K,
  VRMRigMap: N,
  expressionMateriaPropertyNameMapMap: pt,
  thumbBoneNameMap: tt,
  v0ExpressionMaterialColorMap: dt,
  v0v1PresetNameMap: et
}, Symbol.toStringTag, { value: "Module" })), gt = (r, t) => {
  const e = t.inputs.map((s) => new r.AnimData(s.components, s.data)), i = t.outputs.map(
    (s) => new r.AnimData(s.components, s.data)
  ), n = t.curves.map((s) => {
    const o = s.paths.map((l) => {
      const c = l;
      return {
        component: c.component,
        entityPath: [...c.entityPath],
        propertyPath: [...c.propertyPath]
      };
    });
    return new r.AnimCurve(o, s.input, s.output, s.interpolation);
  });
  return new r.AnimTrack(t.name, t.duration, e, i, n);
}, ft = (r, t, e, {
  vrmHipsHeight: i,
  vrmHipsDeep: n,
  motionHipsHeight: s,
  version: o = "v0",
  negativeZAnimNames: l = []
}) => {
  const c = {}, h = {};
  return t.map((a) => {
    var d, m;
    const p = a.asset.resource && a.asset.type === "container" ? (m = (d = a.asset.resource.animations) == null ? void 0 : d[0]) == null ? void 0 : m.resource : a.asset.resource;
    if (p) {
      const f = gt(r, p), g = l.includes(p.name) ? "v1" : "v0";
      let M = 0;
      if (a.asset.type === "container") {
        const u = a.asset.resource.data.nodes.find(
          (_) => _.name === N.hips
        );
        u && (M = u.getPosition().y);
      }
      s = s || M || 0.855;
      const w = i / s;
      return f.curves.forEach((u) => {
        u.paths.forEach((_) => {
          const y = _, R = y.propertyPath.find((T) => T === "localPosition"), v = y.entityPath[y.entityPath.length - 1] === N.hips;
          R && v && !c[u.output] && (c[u.output] = !0);
        });
      }), f.curves.forEach((u) => {
        let _ = !1;
        u.paths.forEach((y) => {
          const R = y, v = R.entityPath.map((T) => {
            var E;
            const I = N[T], k = (E = e.getRawBoneNode(I)) == null ? void 0 : E.name;
            return !I || !k ? T : k;
          });
          R.entityPath = v, R.propertyPath.find((T) => T === "localScale") && (_ = !0);
        }), _ && !h[u.output] && (h[u.output] = !0);
      }), f.outputs.forEach((u, _) => {
        const y = h[_];
        if (u.components === 3) {
          if (!y) {
            const R = u.data.map((v, T) => {
              let P = v;
              return o === g && T % 3 !== 1 && (P *= -1), c[_] && T % 3 === 1 && (a.removeY || a.removeUpperY && v * w > i) ? i : c[_] && T % 3 === 2 && a.removeZ ? n : P * w;
            });
            u._data = R;
          }
        } else if (u.components === 4) {
          const R = u.data.map((v, T) => o === g && T % 2 === 0 ? -v : v);
          u._data = R;
        }
      }), {
        name: a.stateName,
        resource: f,
        ...a.setting && {
          setting: a.setting
        }
      };
    } else
      return console.error(
        `AddVrmAnimation: loadAnimation can't find available resource from ${a.stateName} asset.`
      ), null;
  }).filter((a) => a);
}, mt = (r, t, e, i, {
  motionHipsHeight: n,
  negativeZAnimNames: s
}) => {
  var f, x, g;
  if (!i)
    return console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".'), null;
  const o = (f = e.resource.data.gltf.extensions) == null ? void 0 : f.VRMC_vrm, l = (x = e.resource.data.gltf.extensions) == null ? void 0 : x.VRM, c = o ? "v1" : l ? "v0" : null, h = ((g = i.rawHumanBones.hips) == null ? void 0 : g.node.getPosition()) || new r.Vec3(), a = h.y, p = Math.abs(a - 0), d = h.z, m = Math.abs(d - 0);
  return ft(r, t, i, {
    vrmHipsHeight: p,
    vrmHipsDeep: m,
    ...n && { motionHipsHeight: n },
    ...c && { version: c },
    ...s && { negativeZAnimNames: s }
  });
}, _t = (r, {
  name: t,
  resource: e,
  setting: i
}) => {
  r.anim ? r.anim.assignAnimation(
    t,
    e,
    i && i.layerName !== void 0 ? i.layerName : void 0,
    i && i.speed !== void 0 ? i.speed : 1,
    i && i.loop !== void 0 ? i.loop : !0
  ) : console.error("assignAnimation: Please set the anim component on the entity.");
}, xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: _t,
  createVRMAnimation: mt
}, Symbol.toStringTag, { value: "Module" }));
class J {
  constructor(t) {
    this.name = t, this._timers = {}, this._nextFreeId = 0, this.timer = {}, this.handle = null, this.isPausing = !0;
  }
  add(t, e, i) {
    if (t > 0) {
      this.isPausing = !1;
      const n = { id: this._nextFreeId };
      this._timers[this._nextFreeId] = {
        secsLeft: t,
        callback: e,
        scope: i
      }, this._nextFreeId += 1, this.handle = n;
    } else
      this.handle = null;
  }
  pause() {
    this.handle && (this.isPausing = !0, this.handle.id && delete this._timers[this.handle.id]);
  }
  update(t) {
    for (let e in this._timers) {
      const i = this._timers[e];
      i.secsLeft !== void 0 && (i.secsLeft -= t, i.secsLeft <= 0 && (delete this._timers[e], i.callback && i.callback.call(i.scope)));
    }
  }
}
function nt(r) {
  return Math.max(Math.min(r, 1), 0);
}
function Mt(r, t) {
  return r = Math.ceil(r), t = Math.floor(t), Math.floor(Math.random() * (t - r) + r);
}
function S(r, t) {
  return Math.random() * (t - r) + r;
}
function A(r, t, e = 0) {
  return r.x = t[e], r.y = t[e + 1], r.z = t[e + 2], r;
}
function G(r, t) {
  return r.copy(t.transformPoint(r));
}
class wt {
  constructor(t, e) {
    this._pcRef = t, this.matrix = e, this._inverseCache = new this._pcRef.Mat4(), this._shouldUpdateInverse = !0;
    const i = {
      // @ts-ignore
      set: (n, s, o) => (this._shouldUpdateInverse = !0, n[s] = o, !0)
    };
    this._originalElements = e.data, this.matrix.set(new Proxy(Array.from(e.data), i));
  }
  /**
   * Inverse of given matrix.
   * Note that it will return its internal private instance.
   * Make sure copying this before mutate this.
   */
  get inverse() {
    return this._shouldUpdateInverse && (this._inverseCache.copy(this.matrix), st(this._pcRef, this._inverseCache), this._shouldUpdateInverse = !1), this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
function st(r, t) {
  const e = new r.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function yt(r, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (r.x = -t.y, r.y = t.x, r.z = 0, r.w = i) : (r.x = 0, r.y = -t.z, r.z = t.y, r.w = i)) : (r.x = t.y * e.z - t.z * e.y, r.y = t.z * e.x - t.x * e.z, r.z = t.x * e.y - t.y * e.x, r.w = i), r.normalize();
}
class Q {
  constructor() {
    this.managerName = "expression", this.blinkExpressionNames = ["blink", "blinkLeft", "blinkRight"], this.lookAtExpressionNames = ["lookLeft", "lookRight", "lookUp", "lookDown"], this.mouthExpressionNames = ["aa", "ee", "ih", "oh", "ou"], this.emotionExpressionNames = ["neutral", "happy", "angry", "sad", "relaxed", "surprised"], this._expressions = [], this._expressionMap = {}, this.talkExpressions = [], this.previousTalkName = "", this.isBackToBlink = !1;
  }
  registerExpression(t) {
    this._expressions.push(t), this._expressionMap[t.expressionName] = t;
  }
  getExpression(t) {
    return this._expressionMap[t] ?? null;
  }
  getTalkingExpression() {
    const t = this.getExpression("aa"), e = this.getExpression("ee"), i = this.getExpression("ih"), n = this.getExpression("oh"), s = this.getExpression("ou");
    return [t, e, i, n, s].filter(
      (o) => o
    );
  }
  setValue(t, e) {
    const i = this.getExpression(t);
    i && (i.weight = nt(e));
  }
  // Specific expression animations
  startBlink(t, e) {
    const i = e || {
      times: [0, t - 0.2, t - 0.1, t],
      values: [0, 0, 1, 0]
    }, n = this.getExpression("blink");
    n && (n.animatedMorph = i, n.isPausing = !1, this.clearAllAppliedWeight(!0));
  }
  stopBlink() {
    const t = this.getExpression("blink");
    t && t.stop();
  }
  startEmotion(t, e) {
    const i = e || {
      times: [0, 1, 2.5, 3],
      values: [0, 1, 1, 0]
    }, n = this.getExpression(t);
    n && (n.animatedMorph = i, n.isPausing = !1, this.clearAllAppliedWeight(!0));
  }
  getNextTalking() {
    if (this.talkExpressions.length === 0)
      return null;
    const t = Mt(0, this.talkExpressions.length - 1);
    return this.talkExpressions[t].name === this.previousTalkName && this.talkExpressions.length > 1 ? this.getNextTalking() : (this.previousTalkName = this.talkExpressions[t].expressionName, this.talkExpressions[t]);
  }
  startTalking(t, e) {
    this.talkExpressions.length === 0 && (this.talkExpressions = this.getTalkingExpression());
    const i = this.getNextTalking();
    i && (i.animatedMorph = {
      times: t,
      values: e
    });
  }
  stopTalking() {
    this.talkExpressions.forEach((t) => {
      t && t.stop();
    });
  }
  updateBlendShape(t) {
    this._expressions.forEach((e) => {
      e.updateBlendShape(t);
    });
  }
  clearAllAppliedWeight(t) {
    this._expressions.forEach((e) => {
      e.clearAppliedWeight(t);
    });
  }
  update(t) {
    this.updateBlendShape(t);
    const e = this._calculateWeightMultipliers();
    this.clearAllAppliedWeight(), this.isBackToBlink = !0, this._expressions.forEach((i) => {
      let n = 1;
      const s = i.expressionName;
      this.blinkExpressionNames.indexOf(s) !== -1 && (n *= e.blink), this.lookAtExpressionNames.indexOf(s) !== -1 && (n *= e.lookAt), this.mouthExpressionNames.indexOf(s) !== -1 && (n *= e.mouth), i.applyWeight({ multiplier: n }), i.weight !== 0 && (this.isBackToBlink = !1);
    });
  }
  /**
   * Calculate sum of override amounts to see how much we should multiply weights of certain expressions.
   */
  _calculateWeightMultipliers() {
    let t = 1, e = 1, i = 1;
    return this._expressions.forEach((n) => {
      t -= n.overrideBlinkAmount, e -= n.overrideLookAtAmount, i -= n.overrideMouthAmount;
    }), t = Math.max(0, t), e = Math.max(0, e), i = Math.max(0, i), { blink: t, lookAt: e, mouth: i };
  }
}
class X {
  constructor(t) {
    this._binds = [], this.overrideLookAt = "none", this.overrideMouth = "none", this.name = `VRMExpression_${t}`, this.expressionName = t, this.type = "VRMExpression", this.isBinary = !1, this.weight = 0, this._animatedMorph = null, this.time = 0, this.currentValue = 0, this.currentTimeIndex = null, this.isPausing = !1, this._binds = [], this.overrideBlink = "none", this.overrideLookAt = "none", this.overrideMouth = "none";
  }
  get animatedMorph() {
    return this._animatedMorph;
  }
  set animatedMorph(t) {
    this.resetAnimatedMorph(), this._animatedMorph = t;
  }
  addBind(t) {
    this._binds.push(t);
  }
  applyWeight({ multiplier: t }) {
    let e = this.isBinary ? this.weight <= 0.5 ? 0 : 1 : this.weight;
    e *= t ?? 1, this._binds.forEach((i) => i.applyWeight(e));
  }
  /**
   * Clear previously assigned blend shapes.
   */
  clearAppliedWeight(t) {
    t && (this.weight = 0), this._binds.forEach((e) => e.clearAppliedWeight());
  }
  /**
   * A value represents how much it should override blink expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideBlinkAmount() {
    return this.overrideBlink === "block" ? 0 < this.weight ? 1 : 0 : this.overrideBlink === "blend" ? this.weight : 0;
  }
  /**
   * A value represents how much it should override lookAt expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideLookAtAmount() {
    return this.overrideLookAt === "block" ? 0 < this.weight ? 1 : 0 : this.overrideLookAt === "blend" ? this.weight : 0;
  }
  /**
   * A value represents how much it should override mouth expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideMouthAmount() {
    return this.overrideMouth === "block" ? 0 < this.weight ? 1 : 0 : this.overrideMouth === "blend" ? this.weight : 0;
  }
  setValue(t) {
    this.currentValue = t, this.weight = nt(t);
  }
  resetAnimatedMorph() {
    this.time = 0, this._animatedMorph = null, this.currentTimeIndex = null;
  }
  stop() {
    this.resetAnimatedMorph();
  }
  pause() {
    this.isPausing = !0;
  }
  play() {
    this.isPausing = !1;
  }
  updateBlendShape(t) {
    if (!this._animatedMorph || this.isPausing)
      return;
    const { times: e, values: i } = this._animatedMorph;
    if (this.time === 0 && this.currentTimeIndex === null) {
      const s = i[0];
      this.setValue(s);
    }
    if (this.time >= e[e.length - 1]) {
      this.resetAnimatedMorph();
      const s = i[i.length - 1];
      this.setValue(s);
      return;
    }
    this.time += t;
    const n = this.time < e[1] ? 0 : e.findIndex(
      (s, o) => e[o - 1] < this.time && e[o + 1] > this.time
    );
    if (n !== -1) {
      this.currentTimeIndex !== n && (this.currentValue = i[n]), this.currentTimeIndex = n;
      const s = i[this.currentTimeIndex + 1], o = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], c = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / o, h = this.currentValue + c * t;
      c > 0 && h >= s || c < 0 && s >= h ? this.setValue(s) : this.setValue(h);
    }
  }
}
class Y {
  constructor({
    primitives: t,
    targetIndex: e,
    weight: i
  }) {
    this.primitives = t, this.targetIndex = e, this.weight = i;
  }
  applyWeight(t) {
    this.primitives.forEach((e) => {
      var i;
      if (((i = e.morphInstance) == null ? void 0 : i.morph.targets[this.targetIndex]) != null) {
        let n = e.morphInstance.getWeight(this.targetIndex);
        e.morphInstance.setWeight(this.targetIndex, n += this.weight * t);
      }
    });
  }
  clearAppliedWeight() {
    this.primitives.forEach((t) => {
      var e;
      ((e = t.morphInstance) == null ? void 0 : e.morph.targets[this.targetIndex]) != null && t.morphInstance.setWeight(this.targetIndex, 0);
    });
  }
}
class Tt {
  constructor(t, e) {
    this.asset = t, this.meshInstances = e;
  }
  import() {
    const t = this.asset.resource.data.gltf, e = this._v1Import(t);
    if (e)
      return e;
    const i = this._v0Import(t);
    return i || null;
  }
  _v1Import(t) {
    var c;
    if (!((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const i = (c = t == null ? void 0 : t.extensions) == null ? void 0 : c.VRMC_vrm;
    if (!i)
      return null;
    const n = i.expressions;
    if (!n)
      return null;
    const s = new Set(Object.values(it)), o = /* @__PURE__ */ new Map();
    n.preset != null && Object.entries(n.preset).forEach(([h, a]) => {
      if (a != null) {
        if (!s.has(h)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${h}" detected. Ignoring the expression`
          );
          return;
        }
        o.set(h, a);
      }
    }), n.custom != null && Object.entries(n.custom).forEach(([h, a]) => {
      if (s.has(h)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${h}". Ignoring the expression`
        );
        return;
      }
      o.set(h, a);
    });
    const l = new Q();
    return Array.from(o.entries()).map(([h, a]) => {
      const p = new X(h);
      p.isBinary = a.isBinary ?? !1, p.overrideBlink = a.overrideBlink ?? "none", p.overrideLookAt = a.overrideLookAt ?? "none", p.overrideMouth = a.overrideMouth ?? "none", a.morphTargetBinds && a.morphTargetBinds.forEach((d) => {
        if (d.node === void 0 || d.index === void 0)
          return;
        const m = this.meshInstances.filter((x) => x.node.tags.has(`node_${d.node}`)), f = d.index;
        p.addBind(
          new Y({
            primitives: m,
            targetIndex: f,
            weight: d.weight ?? 1
          })
        );
      }), l.registerExpression(p);
    }), l;
  }
  _v0Import(t) {
    var c, h;
    if (!(((c = t.extensionsUsed) == null ? void 0 : c.indexOf("VRM")) !== -1))
      return null;
    const i = (h = t.extensions) == null ? void 0 : h.VRM;
    if (!i)
      return null;
    const n = i.blendShapeMaster;
    if (!n)
      return null;
    const s = new Q(), o = n.blendShapeGroups;
    if (!o)
      return s;
    const l = /* @__PURE__ */ new Set();
    return o.map((a) => {
      const p = a.presetName, m = (p != null && et[p] || null) ?? a.name;
      if (m == null) {
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (l.has(m)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${p} has duplicated entries. Ignoring the expression`
        );
        return;
      }
      l.add(m);
      const f = new X(m);
      f.isBinary = a.isBinary ?? !1, a.binds && (a.binds.forEach((x) => {
        if (x.mesh === void 0 || x.index === void 0)
          return;
        const g = [];
        t.nodes.forEach((w, u) => {
          w.mesh === x.mesh && g.push({ gltfNode: w, index: u });
        });
        const M = x.index;
        g.map((w) => {
          const u = this.meshInstances.filter((_) => _.node.tags.has(`node_${w.index}`));
          f.addBind(
            new Y({
              primitives: u,
              targetIndex: M,
              weight: 0.01 * (x.weight ?? 100)
              // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
            })
          );
        });
      }), s.registerExpression(f));
    }), s;
  }
}
const vt = (r) => {
  const t = [];
  if (r) {
    const e = r.findComponents("render");
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      if (n.meshInstances)
        for (let s = 0; s < n.meshInstances.length; s++) {
          const o = n.meshInstances[s];
          t.push(o);
        }
    }
  }
  return t;
};
function Rt(r, t) {
  const e = [];
  let i = r;
  for (; i !== null; )
    e.unshift(i), i = i.parent;
  e.forEach((n) => {
    t(n);
  });
}
const Bt = (r) => {
  class t extends r.ScriptType {
    constructor() {
      super(...arguments), this.previousTalkName = "";
    }
    initialize() {
      const i = vt(this.entity), n = new Tt(this.asset, i);
      this.expressionManager = n.import(), this.blinkTimer = new J("blink"), this.talkTimer = new J("talk"), this.startBlink(), this.entity.on("vrm-expression:start-emotion", this.startEmotion, this), this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this), this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this), this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
      });
    }
    // Specific Expression Animation
    startBlink(i) {
      const n = S(1, 5);
      this.expressionManager && (this.expressionManager.startBlink(1, i), this.blinkTimer.add(n, this.startBlink, this));
    }
    stopBlink(i) {
      this.expressionManager && (this.stopExpressionLoop("blink"), this.expressionManager.stopBlink(), i && this.blinkTimer.add(i, this.startBlink, this));
    }
    startEmotion(i, n) {
      if (!this.expressionManager)
        return;
      this.expressionManager.startEmotion(i, n);
      const s = n ? n.times[n.times.length - 1] : 3;
      this.stopBlink(s);
    }
    startTalking(i = 0.25) {
      if (!this.expressionManager)
        return;
      const n = Math.random() * 0.5, s = Math.random() * 0.5 + 0.5, o = S(0.5, 1), l = S(0.4, 0.6) * o, c = S(0.4, 0.6) * o, h = [0, n, 0.5, s, 1].filter((d) => d * i), a = [0, l, o, c, 0], p = S(0.5, 1);
      this.expressionManager.startTalking(h, a), this.talkTimer.add(p, this.startTalking, this);
    }
    stopTalking(i) {
      this.stopExpressionLoop("talk"), i && this.talkTimer.add(i, this.startTalking, this);
    }
    onIsTalkingChange(i) {
      i && (this.talkTimer.isPausing && this.talkTimer.handle || !this.talkTimer.handle) ? this.startTalking() : this.stopTalking();
    }
    stopExpressionLoop(i) {
      i === "blink" && this.blinkTimer.pause(), i === "talk" && this.talkTimer.pause();
    }
    pauseAllExpression() {
      this.app.timeScale = 0;
    }
    restartAllExpression() {
      this.app.timeScale = 1;
    }
    update(i) {
      this.expressionManager && (this.expressionManager.update(i), this.blinkTimer.update(i), this.talkTimer.update(i));
    }
  }
  r.registerScript(t, "vrmExpression"), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: Bt
}, Symbol.toStringTag, { value: "Module" }));
class q {
  constructor() {
    this._joints = /* @__PURE__ */ new Set(), this._objectSpringBonesMap = /* @__PURE__ */ new Map(), this.managerName = "springBone", this._joints = /* @__PURE__ */ new Set(), this._objectSpringBonesMap = /* @__PURE__ */ new Map(), this.direction = 1, this.strength = 0.1, this.limitHeight = 0.2, this.limitLow = 0;
  }
  get joints() {
    return this._joints;
  }
  addJoint(t) {
    this._joints.add(t);
    let e = this._objectSpringBonesMap.get(t.bone);
    e == null && (e = /* @__PURE__ */ new Set(), this._objectSpringBonesMap.set(t.bone, e)), e.add(t);
  }
  setInitState() {
    const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
    for (const n of this._joints)
      this._processSpringBone(
        n,
        t,
        e,
        i,
        (s) => s.setInitState()
      );
  }
  reset() {
    const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
    for (const n of this._joints)
      this._processSpringBone(
        n,
        t,
        e,
        i,
        (s) => s.reset()
      );
  }
  update(t, e) {
    const i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    e ? (this.strength >= this.limitHeight ? (this.direction = -0.2, this.limitHeight = Math.random() * (0.2 - this.limitLow) + this.limitLow) : this.strength <= this.limitLow && (this.direction = 0.2, this.limitLow = Math.random() * 0.2), this.strength += this.direction * t) : this.strength <= 0.5 && (this.strength += 0.1 * t);
    for (const o of this._joints)
      this._processSpringBone(
        o,
        i,
        n,
        s,
        (l) => {
          l.update(t, this.strength);
        }
      );
  }
  _processSpringBone(t, e, i, n, s) {
    if (i.has(t))
      return;
    if (e.has(t))
      throw new Error(
        "VRMSpringBoneManager: Circular dependency detected while updating springbones"
      );
    e.add(t);
    const o = this._getDependencies(t);
    for (const l of o)
      Rt(l, (c) => {
        const h = this._objectSpringBonesMap.get(c);
        if (h)
          for (const a of h)
            this._processSpringBone(
              a,
              e,
              i,
              n,
              s
            );
        else
          n.has(c) || n.add(c);
      });
    s(t), n.add(t.bone), i.add(t);
  }
  // Return a set of objects that are dependant of given spring bone.
  _getDependencies(t) {
    var n;
    const e = /* @__PURE__ */ new Set(), i = t.bone.parent;
    return i && e.add(i), (n = t.colliderGroups) == null || n.forEach((s) => {
      s.colliders.forEach((o) => {
        e.add(o);
      });
    }), e;
  }
}
class bt {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0;
  }
  get type() {
    return "sphere";
  }
  calculateCollision(t, e, i, n) {
    n.copy(this.offset).copy(t.transformPoint(n)), n.mulScalar(-1).add(e);
    const s = i + this.radius, o = n.length() - s;
    return n.normalize(), o;
  }
}
const Z = (r) => class extends r.Entity {
  constructor(e) {
    super(), this.shape = e;
  }
};
class Lt {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.tail = (e == null ? void 0 : e.tail) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0, this._v3A = new t.Vec3(), this._v3B = new t.Vec3();
  }
  get type() {
    return "capsule";
  }
  calculateCollision(t, e, i, n) {
    this._v3A.copy(this.offset).copy(t.transformPoint(this._v3A)), this._v3B.copy(this.tail).copy(t.transformPoint(this._v3B)), this._v3B.sub(this._v3A);
    const s = this._v3B.lengthSq();
    n.copy(e).sub(this._v3A);
    const o = this._v3B.dot(n);
    o <= 0 || (s <= o ? n.sub(this._v3B) : (this._v3B.mulScalar(o / s), n.sub(this._v3B)));
    const l = i + this.radius, c = n.length() - l;
    return n.normalize(), c;
  }
}
class St {
  constructor(t, e, i, n = {}, s = []) {
    var o;
    this._center = null, this._worldSpaceBoneLength = 0, this._pcRef = t, this._v3A = new this._pcRef.Vec3(), this._v3B = new this._pcRef.Vec3(), this._nextTail = new this._pcRef.Vec3(), this._quatA = new this._pcRef.Quat(), this._matA = new this._pcRef.Mat4(), this._matB = new this._pcRef.Mat4(), this._identityMat4 = new this._pcRef.Mat4(), this._worldSpacePosition = new this._pcRef.Vec3(), this._centerSpacePosition = new this._pcRef.Vec3(), this._matrixWorldToCenterTranslation = new this._pcRef.Vec3(), this._worldSpaceBoneLength = 0, this.bone = e, this.child = i, this.settings = {
      hitRadius: n.hitRadius ?? 0,
      stiffness: n.stiffness ?? 1,
      gravityPower: n.gravityPower ?? 0,
      gravityDir: ((o = n.gravityDir) == null ? void 0 : o.clone()) ?? new this._pcRef.Vec3(0, -1, 0),
      dragForce: n.dragForce ?? 0.4
    }, this.colliderGroups = s, this._initialLocalMatrix = new this._pcRef.Mat4(), this._initialLocalRotation = new this._pcRef.Quat(), this._initialLocalChildPosition = new this._pcRef.Vec3(), this._currentTail = new this._pcRef.Vec3(), this._prevTail = new this._pcRef.Vec3(), this._boneAxis = new this._pcRef.Vec3(), this._center = null;
  }
  get center() {
    return this._center;
  }
  set center(t) {
    var e;
    (e = this._center) != null && e.userData.inverseCacheProxy && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = t, this._center && (this._center.userData || (this._center.userData = {}), this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new wt(
      this._pcRef,
      this._center.getWorldTransform()
    )));
  }
  get _parentMatrixWorld() {
    return this.bone.parent ? this.bone.parent.getWorldTransform() : this._identityMat4;
  }
  setInitState() {
    this._initialLocalMatrix.copy(this.bone.getLocalTransform()), this._initialLocalRotation.copy(this.bone.getLocalRotation()), this.child ? this._initialLocalChildPosition.copy(this.child.getLocalPosition()) : this._initialLocalChildPosition.copy(this.bone.getLocalPosition()).normalize().mulScalar(0.07);
    const t = this.bone.getWorldTransform();
    G(this._currentTail.copy(this._initialLocalChildPosition), t), this._prevTail.copy(this._currentTail), this._boneAxis.copy(this._initialLocalChildPosition).normalize();
    const e = this.bone.getWorldTransform().transformPoint(new this._pcRef.Vec3());
    this._worldSpaceBoneLength = this._v3A.copy(this._initialLocalChildPosition).copy(this.bone.getWorldTransform().transformPoint(this._v3A)).sub(e).length();
  }
  reset() {
    this.bone.setLocalRotation(this._initialLocalRotation);
    const t = new this._pcRef.Mat4();
    t.mul2(this._parentMatrixWorld, this.bone.getLocalTransform());
    const e = t.transformPoint(new this._pcRef.Vec3());
    this.bone.setPosition(e.x, e.y, e.z);
    const i = this._getMatrixWorldToCenter(this._matA), n = this.bone.getWorldTransform();
    G(this._currentTail.copy(this._initialLocalChildPosition), n), this._currentTail.copy(i.transformPoint(this._currentTail)), this._prevTail.copy(this._currentTail);
  }
  update(t, e) {
    if (t <= 0)
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
    let i = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0), i.getTranslation(this._matrixWorldToCenterTranslation), this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const n = this._quatA.setFromMat4(i), s = this._matB.copy(i).mul(this._parentMatrixWorld), o = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(s.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), l = this._v3A.copy(this.settings.gravityDir).copy(n.transformVector(this._v3A)).normalize(), c = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(o).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(l).mulScalar(this.settings.gravityPower * t)).copy(c.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const h = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, h.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
    );
    const a = st(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
    ), p = yt(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(a.transformPoint(this._v3A)).normalize()
    ), d = p.getEulerAngles();
    p.setFromEulerAngles(d.x * e, d.y * e, d.z * e);
    const m = this._initialLocalRotation.clone().mul(p);
    this.bone.setLocalRotation(m);
  }
  _getMatrixCenterToWorld(t) {
    if (this._center) {
      const e = this._center.getWorldTransform();
      t.copy(e);
    } else
      t.setIdentity();
    return t;
  }
  // Create a matrix that converts world space into center space.
  _getMatrixWorldToCenter(t) {
    return this._center ? t.copy(this._center.userData.inverseCacheProxy.inverse) : t.setIdentity(), t;
  }
  _collision(t) {
    var e;
    (e = this.colliderGroups) == null || e.forEach((i) => {
      i.colliders.forEach((n) => {
        const s = n.shape.calculateCollision(
          n.getWorldTransform(),
          t,
          this.settings.hitRadius,
          this._v3A
        );
        s < 0 && (t.add(this._v3A.mulScalar(-s)), t.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition));
      });
    });
  }
}
const L = class L {
  constructor(t, e, i) {
    this.asset = e, this.entity = i, this._pcRef = t;
  }
  import() {
    const t = this.asset.resource.data.gltf, e = this.asset.resource.data, i = this._v1Import(t, e);
    if (i)
      return i;
    const n = this._v0Import(t, e);
    return n || null;
  }
  _v1Import(t, e) {
    var f, x;
    if (!(((f = t.extensionsUsed) == null ? void 0 : f.indexOf(L.EXTENSION_NAME)) !== -1) || !((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const s = new q(), o = t == null ? void 0 : t.nodes, l = (x = t.extensions) == null ? void 0 : x[L.EXTENSION_NAME];
    if (!l)
      return null;
    const c = l.specVersion;
    if (!O.has(c))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${L.EXTENSION_NAME} specVersion "${c}"`
      ), null;
    const h = l.colliders, a = h == null ? void 0 : h.map((g, M) => {
      var _;
      const w = (_ = this.entity.findByTag(`node_${g.node}`)) == null ? void 0 : _[0], u = g.shape;
      if (!w) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      if (u) {
        if (u.sphere)
          return this._importSphereCollider(w, {
            offset: A(new this._pcRef.Vec3(), u.sphere.offset ?? [0, 0, 0]),
            radius: u.sphere.radius ?? 0
          });
        if (u.capsule)
          return this._importCapsuleCollider(w, {
            offset: A(
              new this._pcRef.Vec3(),
              u.capsule.offset ?? [0, 0, 0]
            ),
            radius: u.capsule.radius ?? 0,
            tail: A(new this._pcRef.Vec3(), u.capsule.tail ?? [0, 0, 0])
          });
      }
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${M} has no valid shape`);
    }), p = l.colliderGroups, d = p == null ? void 0 : p.map((g, M) => ({
      colliders: (g.colliders ?? []).map((u) => {
        const _ = a == null ? void 0 : a[u];
        if (_ == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${M} attempted to use a collider #${u} but not found`
          );
        return _;
      }),
      name: g.name
    }));
    return l.springs.forEach((g, M) => {
      var R;
      const w = g.joints, u = (R = g.colliderGroups) == null ? void 0 : R.map((v) => {
        const T = d == null ? void 0 : d[v];
        if (T == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${M} attempted to use a colliderGroup ${v} but not found`
          );
        return T;
      }), _ = g.center != null ? e.nodes[g.center] : void 0;
      let y;
      w.forEach((v) => {
        if (y) {
          const T = y.node, P = o[T], I = this.entity.findByName(P.name), k = v.node, E = o[k], ht = this.entity.findByName(E.name), ct = {
            hitRadius: y.hitRadius,
            dragForce: y.dragForce,
            gravityPower: y.gravityPower,
            stiffness: y.stiffness,
            gravityDir: y.gravityDir != null ? A(new this._pcRef.Vec3(), y.gravityDir) : void 0
          }, $ = this._importJoint(I, ht, ct, u);
          _ && ($.center = _), s.addJoint($);
        }
        y = v;
      });
    }), s.setInitState(), s;
  }
  _v0Import(t, e) {
    var h, a, p;
    const i = (h = t.extensions) == null ? void 0 : h.VRM;
    if (!(((a = t.extensionsUsed) == null ? void 0 : a.indexOf("VRM")) !== -1))
      return null;
    const s = i == null ? void 0 : i.secondaryAnimation;
    if (!s)
      return null;
    const o = s == null ? void 0 : s.boneGroups;
    if (!o)
      return null;
    const l = new q(), c = (p = s.colliderGroups) == null ? void 0 : p.map((d) => {
      var x;
      const m = (x = this.entity.findByTag(`node_${d.node}`)) == null ? void 0 : x[0];
      if (!m) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      return { colliders: (d.colliders ?? []).map((g) => {
        const M = new this._pcRef.Vec3(0, 0, 0);
        return g.offset && M.set(
          g.offset.x ?? 0,
          g.offset.y ?? 0,
          g.offset.z ? -g.offset.z : 0
          // z is opposite in VRM0.0
        ), this._importSphereCollider(m, {
          offset: M,
          radius: g.radius ?? 0
        });
      }) };
    });
    return o == null || o.forEach((d, m) => {
      const f = d.bones;
      f && f.forEach((x) => {
        var y, R;
        const g = (y = this.entity.findByTag(`node_${x}`)) == null ? void 0 : y[0];
        if (!g) {
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
        const M = new this._pcRef.Vec3();
        d.gravityDir ? M.set(
          d.gravityDir.x ?? 0,
          d.gravityDir.y ?? 0,
          d.gravityDir.z ?? 0
        ) : M.set(0, -1, 0);
        const w = d.center != null ? e.nodes[d.center] : void 0, u = {
          hitRadius: d.hitRadius,
          dragForce: d.dragForce,
          gravityPower: d.gravityPower,
          stiffness: d.stiffiness,
          gravityDir: M
        }, _ = (R = d.colliderGroups) == null ? void 0 : R.map((v) => {
          const T = c == null ? void 0 : c[v];
          if (T == null)
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${m} attempted to use a colliderGroup ${v} but not found`
            );
          return T;
        });
        g.forEach((v) => {
          const T = v.children[0] ?? null, P = this._importJoint(v, T, u, _);
          w && (P.center = w), l.addJoint(P);
        });
      });
    }), l.setInitState(), l;
  }
  _importSphereCollider(t, { offset: e, radius: i }) {
    const n = new bt(this._pcRef, { offset: e, radius: i }), s = Z(this._pcRef), o = new s(n);
    return t.addChild(o), o;
  }
  _importCapsuleCollider(t, { offset: e, radius: i, tail: n }) {
    const s = new Lt(this._pcRef, {
      offset: e,
      radius: i,
      tail: n
    }), o = Z(this._pcRef), l = new o(s);
    return t.addChild(l), l;
  }
  _importJoint(t, e, i, n) {
    return new St(
      this._pcRef,
      t,
      e,
      i,
      n
    );
  }
};
L.EXTENSION_NAME = "VRMC_springBone";
let z = L;
const It = (r) => {
  class t extends r.ScriptType {
    constructor() {
      super(...arguments), this.activeSpringBone = !0, this.isWalking = !1;
    }
    initialize() {
      const i = new z(r, this.asset, this.entity);
      this.springBoneManager = i.import(), this.isWalking = !1, this.entity.on("toggle-spring-bone", this.toggleSpringBone, this), this.entity.on("toggle-is-walking", this.toggleIsWalking, this), this.on("destroy", () => {
        this.entity.off("toggle-spring-bone", this.toggleSpringBone, this), this.entity.on("toggle-is-walking", this.toggleIsWalking, this);
      });
    }
    toggleSpringBone(i) {
      this.activeSpringBone = i;
    }
    toggleIsWalking(i) {
      this.isWalking = i;
    }
    update(i) {
      !this.springBoneManager || !this.activeSpringBone || this.springBoneManager.update(i, this.isWalking);
    }
  }
  r.registerScript(t, "vrmSpringBone"), t.attributes.add("activeSpringBone", {
    type: "boolean",
    default: !0
  }), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: It
}, Symbol.toStringTag, { value: "Module" }));
class ot {
  constructor(t) {
    this.humanBones = t;
  }
  /**
   * Return a bone bound to a specified {@link VRMHumanBoneName}, as a {@link VRMHumanBone}.
   *
   * @param name Name of the bone you want
   */
  getBone(t) {
    return this.humanBones[t] ?? void 0;
  }
  getBoneNode(t) {
    var e;
    return ((e = this.humanBones[t]) == null ? void 0 : e.node) ?? null;
  }
}
class F extends ot {
  static _setupTransforms(t, e) {
    const i = new t.Entity();
    i.name = "VRMHumanoidRig";
    const n = {}, s = {}, o = {};
    C.forEach((c) => {
      const h = e.getBoneNode(c);
      if (h) {
        n[c] = h.getPosition().clone(), h.getRotation().clone(), s[c] = h.getLocalRotation().clone();
        const a = new t.Quat();
        h.parent && a.copy(h.parent.getRotation()), o[c] = a;
      }
    });
    const l = {};
    return C.forEach((c) => {
      var a;
      const h = e.getBoneNode(c);
      if (h) {
        const p = n[c];
        let d = c, m;
        for (; m == null && (d = K[d], d != null); )
          m = n[d];
        const f = new t.Entity();
        f.name = h.name, (d ? (a = l[d]) == null ? void 0 : a.node : i).addChild(f);
        const g = new t.Vec3().copy(p);
        m && g.sub(m), f.setLocalPosition(g), l[c] = { node: f };
      }
    }), {
      rigBones: l,
      root: i,
      parentWorldRotations: o,
      boneRotations: s
    };
  }
  constructor(t, e) {
    const { rigBones: i, root: n, parentWorldRotations: s, boneRotations: o } = F._setupTransforms(
      t,
      e
    );
    super(i), this.pcRef = t, this.original = e, this.root = n, this._parentWorldRotations = s, this._boneRotations = o, this._quatA = new t.Quat(), this._quatB = new t.Quat(), this._vec3A = new t.Vec3(), this._mat4A = new t.Mat4();
    const l = t.Application.getApplication();
    l && l.root.addChild(n);
  }
  applyMatrix4(t, e) {
    const i = t.x, n = t.y, s = t.z, o = e.data, l = 1 / (o[3] * i + o[7] * n + o[11] * s + o[15]);
    return t.x = (o[0] * i + o[4] * n + o[8] * s + o[12]) * l, t.y = (o[1] * i + o[5] * n + o[9] * s + o[13]) * l, t.z = (o[2] * i + o[6] * n + o[10] * s + o[14]) * l, t;
  }
  update() {
    C.forEach((t) => {
      var n;
      const e = (n = this.original.humanBones[t]) == null ? void 0 : n.entity, i = this.getBoneNode(t);
      if (e != null && i) {
        const s = this._parentWorldRotations[t], o = this._quatB.copy(s).invert(), l = this._boneRotations[t];
        if (this._quatA.copy(i.getLocalRotation()), this._quatA.mul(s), this._quatA.copy(o.mul(this._quatA)), this._quatA.mul(l), e.setLocalRotation(this._quatA), t === "hips") {
          const c = this._vec3A.copy(i.getPosition()), h = this._mat4A.copy(e.parent.getWorldTransform()), a = this.applyMatrix4(c, h.invert());
          e.setLocalPosition(a);
        }
      }
    });
  }
}
class Et {
  constructor(t, e, i) {
    this.autoUpdateHumanBones = (i == null ? void 0 : i.autoUpdateHumanBones) ?? !0, this._rawHumanBones = new ot(e), this._normalizedHumanBones = new F(t, this._rawHumanBones);
  }
  get humanBones() {
    return this._rawHumanBones.humanBones;
  }
  get rawHumanBones() {
    return this._rawHumanBones.humanBones;
  }
  get normalizedHumanBones() {
    return this._normalizedHumanBones.humanBones;
  }
  get normalizedHumanBonesRoot() {
    return this._normalizedHumanBones.root;
  }
  /**
   * Return a raw {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBone(t) {
    return this._rawHumanBones.getBone(t);
  }
  /**
   * Return a normalized {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBone(t) {
    return this._normalizedHumanBones.getBone(t);
  }
  /**
   * Return a raw bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBoneNode(t) {
    return this._rawHumanBones.getBoneNode(t);
  }
  /**
   * Return a normalized bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBoneNode(t) {
    return this._normalizedHumanBones.getBoneNode(t);
  }
  getBoneEntity(t) {
    var e;
    return ((e = this._rawHumanBones.humanBones[t]) == null ? void 0 : e.entity) || null;
  }
  /**
   * Update the humanoid component.
   *
   * If {@link autoUpdateHumanBones} is `true`, it transfers the pose of normalized human bones to raw human bones.
   */
  update() {
    this.autoUpdateHumanBones && this._normalizedHumanBones.update();
  }
}
function Vt(r, t, e) {
  const i = r.humanBones, n = {};
  return r.humanBones != null && Object.entries(i).map(([, s]) => {
    var h;
    let o = s.bone;
    const l = s.node;
    if (o == null || l == null)
      return;
    const c = t.resource.data.nodes[l];
    if (c == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${o} (index = ${l}) does not exist`
      );
      return;
    }
    n[o] = {
      node: c,
      entity: ((h = e.findByTag(`node_${l}`)) == null ? void 0 : h[0]) || null
    };
  }), n;
}
function At(r, t, e) {
  var s;
  const i = {}, n = r.humanBones.leftThumbIntermediate != null || r.humanBones.rightThumbIntermediate != null;
  if (r.humanBones)
    for (const o in r.humanBones) {
      let l = o;
      const c = r.humanBones[o].node, h = t.resource.data.nodes[c];
      if (n) {
        const a = tt[l];
        a != null && (l = a);
      }
      if (h == null)
        return console.warn(
          `A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`
        ), null;
      i[l] = {
        node: h,
        entity: ((s = e.findByTag(`node_${c}`)) == null ? void 0 : s[0]) || null
      };
    }
  return i;
}
function Ct(r, t, e, i) {
  var l, c, h, a, p, d, m, f, x, g;
  const n = (c = (l = t.resource.data.gltf) == null ? void 0 : l.extensions) == null ? void 0 : c.VRM, s = (a = (h = t.resource.data.gltf) == null ? void 0 : h.extensions) == null ? void 0 : a.VRMC_vrm;
  if (!n && !s)
    return console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar."), null;
  let o = null;
  if (n) {
    const M = (m = (d = (p = t.resource.data.gltf) == null ? void 0 : p.extensions) == null ? void 0 : d.VRM) == null ? void 0 : m.humanoid;
    o = Vt(M, t, e);
  } else if (s) {
    const M = s.specVersion;
    if (!O.has(M))
      return console.warn(`Unknown VRMC_vrm specVersion "${M}"`), null;
    const w = (g = (x = (f = t.resource.data.gltf) == null ? void 0 : f.extensions) == null ? void 0 : x.VRMC_vrm) == null ? void 0 : g.humanoid;
    o = At(w, t, e);
  }
  if (o) {
    const M = !!(i != null && i.autoUpdateHumanBones);
    return new Et(r, o, { autoUpdateHumanBones: M });
  }
  return null;
}
const Nt = function(r, t, e, i, n, s) {
  const o = s;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = function(c) {
    const h = new Blob([c.resource]), a = URL.createObjectURL(h);
    return rt(
      r,
      a,
      e,
      i,
      function(p, d) {
        n(p, d), URL.revokeObjectURL(a);
      },
      o
    );
  };
  t.loaded ? l(t) : (t.ready(l), o.assets.load(t));
}, rt = function(r, t, e, i, n, s) {
  const o = s;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = i, c = {
    url: t,
    filename: l
  }, h = new r.Asset(l, "container", c, void 0, e);
  return h.once("load", function(a) {
    if (n) {
      const p = a.resource.animations;
      if (p.length == 1)
        p[0].name = i;
      else if (p.length > 1)
        for (let d = 0; d < p.length; ++d)
          p[d].name = i + " " + d.toString();
      n(null, a);
    }
  }), o.assets.add(h), o.assets.load(h), h;
};
var B, D, at, W, lt;
class Dt {
  constructor(t, e) {
    V(this, D);
    V(this, W);
    V(this, B, void 0);
    j(this, B, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, n = {}, s = !0) {
    const o = [];
    return new Promise(
      (l, c) => {
        const h = (a, p) => {
          var w, u;
          a && (this.loading = !1, c(`GLTFLoader Error: ${a}`)), b(this, B).forEach((_) => {
            const y = _(p);
            o.push(y);
          });
          const d = p.resource.data;
          s && H(this, W, lt).call(this, d, o);
          const m = p.resource.instantiateRenderEntity(n), f = new this._pcRef.Entity(e, this.app);
          f.addChild(m), o.forEach((_) => {
            _.instantiated && _.instantiated(f);
          }), this.loading = !1;
          const x = (w = p.resource.data.gltf.extensions) == null ? void 0 : w.VRMC_vrm, g = (u = p.resource.data.gltf.extensions) == null ? void 0 : u.VRM;
          l({ entity: f, asset: p, version: x ? "v1" : g ? "v0" : null });
        };
        t || c("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? h(null, t) : (t.once("load", () => {
          h(null, t);
        }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? Nt(
          this._pcRef,
          t,
          i,
          e,
          h.bind(this),
          this.app
        ) : c("GLTFLoader Error: Please pass available asset or url to parse.") : rt(
          this._pcRef,
          t,
          i,
          e,
          h.bind(this),
          this.app
        );
      }
    );
  }
  // Register Plugin to loader
  register(t, e) {
    b(this, B).has(t) || b(this, B).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    b(this, B).has(t) && b(this, B).delete(t);
  }
  static registerAnimation(t, e, { useResourceName: i, defaultPlayIndex: n } = {
    useResourceName: !1,
    defaultPlayIndex: 0
  }) {
    if (e.length !== 0 && (t.addComponent("anim", {
      activate: !0
    }), e.forEach((s, o) => {
      const l = s.resource.name.replace(".", "_");
      t.anim && t.anim.assignAnimation(
        i ? l : `ANIMATION_${o}`,
        s.resource
      );
    }), n !== null)) {
      const s = i ? e[n].resource.name : `ANIMATION_${n}`;
      t.anim && t.anim.baseLayer.states.find((o) => o === s) && t.anim.baseLayer.transition(s);
    }
  }
}
B = new WeakMap(), D = new WeakSet(), at = function(t, e) {
  t.forEach((i, n) => {
    const s = e[n].extensions;
    s && (i.extensions = s);
  });
}, W = new WeakSet(), lt = function(t, e) {
  const i = t.gltf.nodes, n = t.nodes;
  H(this, D, at).call(this, n, i), t.scenes.forEach((s) => {
    const o = /* @__PURE__ */ new Set([]);
    s.forEach((l) => {
      let c = !1, h = [];
      t.nodes.forEach((a, p) => {
        l.path === a.path && h.push(p);
      }), h.forEach((a) => {
        if (!o.has(a) && !c) {
          l.tags.add(`node_${a}`);
          const p = t.nodes[a].extensions;
          e.forEach((d) => {
            d.parsedNodeAddTags && d.parsedNodeAddTags(l, p);
          }), o.add(a), c = !0;
        }
      });
    });
  });
};
window.VRMLoader = {
  VrmAnimation: xt,
  VrmExpression: Pt,
  VrmSpringBone: kt,
  VrmMapList: ut,
  createFormattedVRMHumanoid: Ct
};
window.GLTFLoader = Dt;
export {
  Dt as GLTFLoader,
  xt as VrmAnimation,
  Pt as VrmExpression,
  ut as VrmMapList,
  kt as VrmSpringBone,
  Ct as createFormattedVRMHumanoid
};
