/**
 * name: playcanvas-vrm
 * version: v1.2.1.a
 */
var G = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var R = (n, t, e) => (G(n, t, "read from private field"), e ? e.call(n) : t.get(n)), F = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, At = (n, t, e, i) => (G(n, t, "write to private field"), i ? i.call(n, e) : t.set(n, e), e);
var Y = (n, t, e) => (G(n, t, "access private method"), e);
const O = [
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
], Ht = {
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
}, W = {
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
}, zt = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
}, jt = {
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
}, $t = {
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
}, Z = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]), de = {
  _Color: "color",
  _EmissionColor: "emissionColor",
  _ShadeColor: "shadeColor",
  _RimColor: "rimColor",
  _OutlineColor: "outlineColor"
}, ue = {
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
}, pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POSSIBLE_SPEC_VERSIONS: Z,
  VRMExpressionPresetName: $t,
  VRMHumanBoneList: O,
  VRMHumanBoneParentMap: Ht,
  VRMRigMap: W,
  expressionMateriaPropertyNameMapMap: ue,
  thumbBoneNameMap: zt,
  v0ExpressionMaterialColorMap: de,
  v0v1PresetNameMap: jt
}, Symbol.toStringTag, { value: "Module" })), me = (n, t) => {
  const e = t.inputs.map((s) => new n.AnimData(s.components, s.data)), i = t.outputs.map(
    (s) => new n.AnimData(s.components, s.data)
  ), o = t.curves.map((s) => {
    const r = s.paths.map((l) => {
      const h = l;
      return {
        component: h.component,
        entityPath: [...h.entityPath],
        propertyPath: [...h.propertyPath]
      };
    });
    return new n.AnimCurve(r, s.input, s.output, s.interpolation);
  });
  return new n.AnimTrack(t.name, t.duration, e, i, o);
}, fe = (n, t, e, {
  vrmHipsHeight: i,
  vrmHipsDeep: o,
  motionHipsHeight: s,
  version: r = "v0",
  negativeZAnimNames: l = []
}) => {
  const h = {}, c = {};
  return t.map((a) => {
    var d, x;
    const u = a.asset.resource && a.asset.type === "container" ? (x = (d = a.asset.resource.animations) == null ? void 0 : d[0]) == null ? void 0 : x.resource : a.asset.resource;
    if (u) {
      const f = me(n, u), m = l.includes(u.name) ? "v1" : "v0";
      let M = 0;
      if (a.asset.type === "container") {
        const p = a.asset.resource.data.nodes.find(
          (v) => v.name === W.hips
        );
        p && (M = p.getPosition().y);
      }
      s = s || M || 0.855;
      const g = i / s;
      return f.curves.forEach((p) => {
        p.paths.forEach((v) => {
          const S = v, L = S.propertyPath.find((T) => T === "localPosition"), w = S.entityPath[S.entityPath.length - 1] === W.hips;
          L && w && !h[p.output] && (h[p.output] = !0);
        });
      }), f.curves.forEach((p) => {
        let v = !1;
        p.paths.forEach((S) => {
          const L = S, w = L.entityPath.map((T) => {
            var E;
            const C = W[T], b = (E = e.getRawBoneNode(C)) == null ? void 0 : E.name;
            return !C || !b ? T : b;
          });
          L.entityPath = w, L.propertyPath.find((T) => T === "localScale") && (v = !0);
        }), v && !c[p.output] && (c[p.output] = !0);
      }), f.outputs.forEach((p, v) => {
        const S = c[v];
        if (p.components === 3) {
          if (!S) {
            const L = p.data.map((w, T) => {
              let y = w;
              return r === m && T % 3 !== 1 && (y *= -1), h[v] && T % 3 === 1 && (a.removeY || a.removeUpperY && w * g > i) ? i : h[v] && T % 3 === 2 && a.removeZ ? o : y * g;
            });
            p._data = L;
          }
        } else if (p.components === 4) {
          const L = p.data.map((w, T) => r === m && T % 2 === 0 ? -w : w);
          p._data = L;
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
}, ge = (n, t, e, i, {
  motionHipsHeight: o,
  negativeZAnimNames: s
} = {}) => {
  var f, _, m;
  if (!i)
    return console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".'), null;
  const r = (f = e.resource.data.gltf.extensions) == null ? void 0 : f.VRMC_vrm, l = (_ = e.resource.data.gltf.extensions) == null ? void 0 : _.VRM, h = r ? "v1" : l ? "v0" : null, c = ((m = i.rawHumanBones.hips) == null ? void 0 : m.node.getPosition()) || new n.Vec3(), a = c.y, u = Math.abs(a - 0), d = c.z, x = Math.abs(d - 0);
  return fe(n, t, i, {
    vrmHipsHeight: u,
    vrmHipsDeep: x,
    ...o && { motionHipsHeight: o },
    ...h && { version: h },
    ...s && { negativeZAnimNames: s }
  });
}, xe = (n, {
  name: t,
  resource: e,
  setting: i
}) => {
  n.anim ? n.anim.assignAnimation(
    t,
    e,
    i && i.layerName !== void 0 ? i.layerName : void 0,
    i && i.speed !== void 0 ? i.speed : 1,
    i && i.loop !== void 0 ? i.loop : !0
  ) : console.error("assignAnimation: Please set the anim component on the entity.");
}, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: xe,
  createVRMAnimation: ge
}, Symbol.toStringTag, { value: "Module" }));
class Vt {
  constructor(t) {
    this.name = t, this._timers = {}, this._nextFreeId = 0, this.timer = {}, this.handle = null, this.isPausing = !0;
  }
  add(t, e, i) {
    if (t > 0) {
      this.isPausing = !1;
      const o = { id: this._nextFreeId };
      this._timers[this._nextFreeId] = {
        secsLeft: t,
        callback: e,
        scope: i
      }, this._nextFreeId += 1, this.handle = o;
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
function Xt(n) {
  return Math.max(Math.min(n, 1), 0);
}
function Me(n, t) {
  return n = Math.ceil(n), t = Math.floor(t), Math.floor(Math.random() * (t - n) + n);
}
function A(n, t) {
  return Math.random() * (t - n) + n;
}
function D(n, t, e = 0) {
  return n.x = t[e], n.y = t[e + 1], n.z = t[e + 2], n;
}
function Ft(n, t) {
  return n.copy(t.transformPoint(n));
}
class ve {
  constructor(t, e) {
    this._pcRef = t, this.matrix = e, this._inverseCache = new this._pcRef.Mat4(), this._shouldUpdateInverse = !0;
    const i = {
      // @ts-ignore
      set: (o, s, r) => (this._shouldUpdateInverse = !0, o[s] = r, !0)
    };
    this._originalElements = e.data, this.matrix.set(new Proxy(Array.from(e.data), i));
  }
  /**
   * Inverse of given matrix.
   * Note that it will return its internal private instance.
   * Make sure copying this before mutate this.
   */
  get inverse() {
    return this._shouldUpdateInverse && (this._inverseCache.copy(this.matrix), Gt(this._pcRef, this._inverseCache), this._shouldUpdateInverse = !1), this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
function Gt(n, t) {
  const e = new n.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function Te(n, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (n.x = -t.y, n.y = t.x, n.z = 0, n.w = i) : (n.x = 0, n.y = -t.z, n.z = t.y, n.w = i)) : (n.x = t.y * e.z - t.z * e.y, n.y = t.z * e.x - t.x * e.z, n.z = t.x * e.y - t.y * e.x, n.w = i), n.normalize();
}
class Dt {
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
    const t = this.getExpression("aa"), e = this.getExpression("ee"), i = this.getExpression("ih"), o = this.getExpression("oh"), s = this.getExpression("ou");
    return [t, e, i, o, s].filter(
      (r) => r
    );
  }
  setValue(t, e) {
    const i = this.getExpression(t);
    i && (i.weight = Xt(e));
  }
  // Specific expression animations
  startBlink(t, e) {
    const i = e || {
      times: [0, t - 0.2, t - 0.1, t],
      values: [0, 0, 1, 0]
    }, o = this.getExpression("blink");
    o && (o.animatedMorph = i, o.isPausing = !1, this.clearAllAppliedWeight(!0));
  }
  stopBlink() {
    const t = this.getExpression("blink");
    t && t.stop();
  }
  startEmotion(t, e) {
    const i = e || {
      times: [0, 1, 2.5, 3],
      values: [0, 1, 1, 0]
    }, o = this.getExpression(t);
    o && (o.animatedMorph = i, o.isPausing = !1, this.clearAllAppliedWeight(!0));
  }
  getNextTalking() {
    if (this.talkExpressions.length === 0)
      return null;
    const t = Me(0, this.talkExpressions.length - 1);
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
      let o = 1;
      const s = i.expressionName;
      this.blinkExpressionNames.indexOf(s) !== -1 && (o *= e.blink), this.lookAtExpressionNames.indexOf(s) !== -1 && (o *= e.lookAt), this.mouthExpressionNames.indexOf(s) !== -1 && (o *= e.mouth), i.applyWeight({ multiplier: o }), i.weight !== 0 && (this.isBackToBlink = !1);
    });
  }
  /**
   * Calculate sum of override amounts to see how much we should multiply weights of certain expressions.
   */
  _calculateWeightMultipliers() {
    let t = 1, e = 1, i = 1;
    return this._expressions.forEach((o) => {
      t -= o.overrideBlinkAmount, e -= o.overrideLookAtAmount, i -= o.overrideMouthAmount;
    }), t = Math.max(0, t), e = Math.max(0, e), i = Math.max(0, i), { blink: t, lookAt: e, mouth: i };
  }
}
class Nt {
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
    this.currentValue = t, this.weight = Xt(t);
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
    const o = this.time < e[1] ? 0 : e.findIndex(
      (s, r) => e[r - 1] < this.time && e[r + 1] > this.time
    );
    if (o !== -1) {
      this.currentTimeIndex !== o && (this.currentValue = i[o]), this.currentTimeIndex = o;
      const s = i[this.currentTimeIndex + 1], r = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], h = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / r, c = this.currentValue + h * t;
      h > 0 && c >= s || h < 0 && s >= c ? this.setValue(s) : this.setValue(c);
    }
  }
}
class Ut {
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
        let o = e.morphInstance.getWeight(this.targetIndex);
        e.morphInstance.setWeight(this.targetIndex, o += this.weight * t);
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
class we {
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
    var h;
    if (!((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const i = (h = t == null ? void 0 : t.extensions) == null ? void 0 : h.VRMC_vrm;
    if (!i)
      return null;
    const o = i.expressions;
    if (!o)
      return null;
    const s = new Set(Object.values($t)), r = /* @__PURE__ */ new Map();
    o.preset != null && Object.entries(o.preset).forEach(([c, a]) => {
      if (a != null) {
        if (!s.has(c)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${c}" detected. Ignoring the expression`
          );
          return;
        }
        r.set(c, a);
      }
    }), o.custom != null && Object.entries(o.custom).forEach(([c, a]) => {
      if (s.has(c)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${c}". Ignoring the expression`
        );
        return;
      }
      r.set(c, a);
    });
    const l = new Dt();
    return Array.from(r.entries()).map(([c, a]) => {
      const u = new Nt(c);
      u.isBinary = a.isBinary ?? !1, u.overrideBlink = a.overrideBlink ?? "none", u.overrideLookAt = a.overrideLookAt ?? "none", u.overrideMouth = a.overrideMouth ?? "none", a.morphTargetBinds && a.morphTargetBinds.forEach((d) => {
        if (d.node === void 0 || d.index === void 0)
          return;
        const x = this.meshInstances.filter((_) => _.node.tags.has(`node_${d.node}`)), f = d.index;
        u.addBind(
          new Ut({
            primitives: x,
            targetIndex: f,
            weight: d.weight ?? 1
          })
        );
      }), l.registerExpression(u);
    }), l;
  }
  _v0Import(t) {
    var h, c;
    if (!(((h = t.extensionsUsed) == null ? void 0 : h.indexOf("VRM")) !== -1))
      return null;
    const i = (c = t.extensions) == null ? void 0 : c.VRM;
    if (!i)
      return null;
    const o = i.blendShapeMaster;
    if (!o)
      return null;
    const s = new Dt(), r = o.blendShapeGroups;
    if (!r)
      return s;
    const l = /* @__PURE__ */ new Set();
    return r.map((a) => {
      const u = a.presetName, x = (u != null && jt[u] || null) ?? a.name;
      if (x == null) {
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (l.has(x)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${u} has duplicated entries. Ignoring the expression`
        );
        return;
      }
      l.add(x);
      const f = new Nt(x);
      f.isBinary = a.isBinary ?? !1, a.binds && (a.binds.forEach((_) => {
        if (_.mesh === void 0 || _.index === void 0)
          return;
        const m = [];
        t.nodes.forEach((g, p) => {
          g.mesh === _.mesh && m.push({ gltfNode: g, index: p });
        });
        const M = _.index;
        m.map((g) => {
          const p = this.meshInstances.filter((v) => v.node.tags.has(`node_${g.index}`));
          f.addBind(
            new Ut({
              primitives: p,
              targetIndex: M,
              weight: 0.01 * (_.weight ?? 100)
              // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
            })
          );
        });
      }), s.registerExpression(f));
    }), s;
  }
}
const Se = (n) => {
  const t = [];
  if (n) {
    const e = n.findComponents("render");
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      if (o.meshInstances)
        for (let s = 0; s < o.meshInstances.length; s++) {
          const r = o.meshInstances[s];
          t.push(r);
        }
    }
  }
  return t;
};
function Le(n, t) {
  const e = [];
  let i = n;
  for (; i !== null; )
    e.unshift(i), i = i.parent;
  e.forEach((o) => {
    t(o);
  });
}
const ye = (n) => {
  class t extends n.ScriptType {
    constructor() {
      super(...arguments), this.previousTalkName = "";
    }
    initialize() {
      const i = Se(this.entity), o = new we(this.asset, i);
      this.expressionManager = o.import(), this.blinkTimer = new Vt("blink"), this.talkTimer = new Vt("talk"), this.startBlink(), this.entity.on("vrm-expression:start-emotion", this.startEmotion, this), this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this), this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this), this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
      });
    }
    // Specific Expression Animation
    startBlink(i) {
      const o = A(1, 5);
      this.expressionManager && (this.expressionManager.startBlink(1, i), this.blinkTimer.add(o, this.startBlink, this));
    }
    stopBlink(i) {
      this.expressionManager && (this.stopExpressionLoop("blink"), this.expressionManager.stopBlink(), i && this.blinkTimer.add(i, this.startBlink, this));
    }
    startEmotion(i, o) {
      if (!this.expressionManager)
        return;
      this.expressionManager.startEmotion(i, o);
      const s = o ? o.times[o.times.length - 1] : 3;
      this.stopBlink(s);
    }
    startTalking(i = 0.25) {
      if (!this.expressionManager)
        return;
      const o = Math.random() * 0.5, s = Math.random() * 0.5 + 0.5, r = A(0.5, 1), l = A(0.4, 0.6) * r, h = A(0.4, 0.6) * r, c = [0, o, 0.5, s, 1].filter((d) => d * i), a = [0, l, r, h, 0], u = A(0.5, 1);
      this.expressionManager.startTalking(c, a), this.talkTimer.add(u, this.startTalking, this);
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
  n.registerScript(t, "vrmExpression"), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, Pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: ye
}, Symbol.toStringTag, { value: "Module" }));
class Ot {
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
    for (const o of this._joints)
      this._processSpringBone(
        o,
        t,
        e,
        i,
        (s) => s.setInitState()
      );
  }
  reset() {
    const t = /* @__PURE__ */ new Set(), e = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
    for (const o of this._joints)
      this._processSpringBone(
        o,
        t,
        e,
        i,
        (s) => s.reset()
      );
  }
  update(t, e) {
    const i = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    e ? (this.strength >= this.limitHeight ? (this.direction = -0.2, this.limitHeight = Math.random() * (0.2 - this.limitLow) + this.limitLow) : this.strength <= this.limitLow && (this.direction = 0.2, this.limitLow = Math.random() * 0.2), this.strength += this.direction * t) : this.strength <= 0.5 && (this.strength += 0.1 * t);
    for (const r of this._joints)
      this._processSpringBone(
        r,
        i,
        o,
        s,
        (l) => {
          l.update(t, this.strength);
        }
      );
  }
  _processSpringBone(t, e, i, o, s) {
    if (i.has(t))
      return;
    if (e.has(t))
      throw new Error(
        "VRMSpringBoneManager: Circular dependency detected while updating springbones"
      );
    e.add(t);
    const r = this._getDependencies(t);
    for (const l of r)
      Le(l, (h) => {
        const c = this._objectSpringBonesMap.get(h);
        if (c)
          for (const a of c)
            this._processSpringBone(
              a,
              e,
              i,
              o,
              s
            );
        else
          o.has(h) || o.add(h);
      });
    s(t), o.add(t.bone), i.add(t);
  }
  // Return a set of objects that are dependant of given spring bone.
  _getDependencies(t) {
    var o;
    const e = /* @__PURE__ */ new Set(), i = t.bone.parent;
    return i && e.add(i), (o = t.colliderGroups) == null || o.forEach((s) => {
      s.colliders.forEach((r) => {
        e.add(r);
      });
    }), e;
  }
}
class be {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0;
  }
  get type() {
    return "sphere";
  }
  calculateCollision(t, e, i, o) {
    o.copy(this.offset).copy(t.transformPoint(o)), o.mulScalar(-1).add(e);
    const s = i + this.radius, r = o.length() - s;
    return o.normalize(), r;
  }
}
const Wt = (n) => class extends n.Entity {
  constructor(e) {
    super(), this.shape = e;
  }
};
class Ce {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.tail = (e == null ? void 0 : e.tail) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0, this._v3A = new t.Vec3(), this._v3B = new t.Vec3();
  }
  get type() {
    return "capsule";
  }
  calculateCollision(t, e, i, o) {
    this._v3A.copy(this.offset).copy(t.transformPoint(this._v3A)), this._v3B.copy(this.tail).copy(t.transformPoint(this._v3B)), this._v3B.sub(this._v3A);
    const s = this._v3B.lengthSq();
    o.copy(e).sub(this._v3A);
    const r = this._v3B.dot(o);
    r <= 0 || (s <= r ? o.sub(this._v3B) : (this._v3B.mulScalar(r / s), o.sub(this._v3B)));
    const l = i + this.radius, h = o.length() - l;
    return o.normalize(), h;
  }
}
class Ee {
  constructor(t, e, i, o = {}, s = []) {
    var r;
    this._center = null, this._worldSpaceBoneLength = 0, this._pcRef = t, this._v3A = new this._pcRef.Vec3(), this._v3B = new this._pcRef.Vec3(), this._nextTail = new this._pcRef.Vec3(), this._quatA = new this._pcRef.Quat(), this._matA = new this._pcRef.Mat4(), this._matB = new this._pcRef.Mat4(), this._identityMat4 = new this._pcRef.Mat4(), this._worldSpacePosition = new this._pcRef.Vec3(), this._centerSpacePosition = new this._pcRef.Vec3(), this._matrixWorldToCenterTranslation = new this._pcRef.Vec3(), this._worldSpaceBoneLength = 0, this.bone = e, this.child = i, this.settings = {
      hitRadius: o.hitRadius ?? 0,
      stiffness: o.stiffness ?? 1,
      gravityPower: o.gravityPower ?? 0,
      gravityDir: ((r = o.gravityDir) == null ? void 0 : r.clone()) ?? new this._pcRef.Vec3(0, -1, 0),
      dragForce: o.dragForce ?? 0.4
    }, this.colliderGroups = s, this._initialLocalMatrix = new this._pcRef.Mat4(), this._initialLocalRotation = new this._pcRef.Quat(), this._initialLocalChildPosition = new this._pcRef.Vec3(), this._currentTail = new this._pcRef.Vec3(), this._prevTail = new this._pcRef.Vec3(), this._boneAxis = new this._pcRef.Vec3(), this._center = null;
  }
  get center() {
    return this._center;
  }
  set center(t) {
    var e;
    (e = this._center) != null && e.userData.inverseCacheProxy && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = t, this._center && (this._center.userData || (this._center.userData = {}), this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new ve(
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
    Ft(this._currentTail.copy(this._initialLocalChildPosition), t), this._prevTail.copy(this._currentTail), this._boneAxis.copy(this._initialLocalChildPosition).normalize();
    const e = this.bone.getWorldTransform().transformPoint(new this._pcRef.Vec3());
    this._worldSpaceBoneLength = this._v3A.copy(this._initialLocalChildPosition).copy(this.bone.getWorldTransform().transformPoint(this._v3A)).sub(e).length();
  }
  reset() {
    this.bone.setLocalRotation(this._initialLocalRotation);
    const t = new this._pcRef.Mat4();
    t.mul2(this._parentMatrixWorld, this.bone.getLocalTransform());
    const e = t.transformPoint(new this._pcRef.Vec3());
    this.bone.setPosition(e.x, e.y, e.z);
    const i = this._getMatrixWorldToCenter(this._matA), o = this.bone.getWorldTransform();
    Ft(this._currentTail.copy(this._initialLocalChildPosition), o), this._currentTail.copy(i.transformPoint(this._currentTail)), this._prevTail.copy(this._currentTail);
  }
  update(t, e) {
    if (t <= 0)
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
    let i = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0), i.getTranslation(this._matrixWorldToCenterTranslation), this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const o = this._quatA.setFromMat4(i), s = this._matB.copy(i).mul(this._parentMatrixWorld), r = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(s.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), l = this._v3A.copy(this.settings.gravityDir).copy(o.transformVector(this._v3A)).normalize(), h = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(r).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(l).mulScalar(this.settings.gravityPower * t)).copy(h.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const c = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, c.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
    );
    const a = Gt(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
    ), u = Te(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(a.transformPoint(this._v3A)).normalize()
    ), d = u.getEulerAngles();
    u.setFromEulerAngles(d.x * e, d.y * e, d.z * e);
    const x = this._initialLocalRotation.clone().mul(u);
    this.bone.setLocalRotation(x);
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
      i.colliders.forEach((o) => {
        const s = o.shape.calculateCollision(
          o.getWorldTransform(),
          t,
          this.settings.hitRadius,
          this._v3A
        );
        s < 0 && (t.add(this._v3A.mulScalar(-s)), t.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition));
      });
    });
  }
}
const k = class k {
  constructor(t, e, i) {
    this.asset = e, this.entity = i, this._pcRef = t;
  }
  import() {
    const t = this.asset.resource.data.gltf, e = this.asset.resource.data, i = this._v1Import(t, e);
    if (i)
      return i;
    const o = this._v0Import(t, e);
    return o || null;
  }
  _v1Import(t, e) {
    var f, _;
    if (!(((f = t.extensionsUsed) == null ? void 0 : f.indexOf(k.EXTENSION_NAME)) !== -1) || !((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const s = new Ot(), r = t == null ? void 0 : t.nodes, l = (_ = t.extensions) == null ? void 0 : _[k.EXTENSION_NAME];
    if (!l)
      return null;
    const h = l.specVersion;
    if (!Z.has(h))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${k.EXTENSION_NAME} specVersion "${h}"`
      ), null;
    const c = l.colliders, a = c == null ? void 0 : c.map((m, M) => {
      var v;
      const g = (v = this.entity.findByTag(`node_${m.node}`)) == null ? void 0 : v[0], p = m.shape;
      if (!g) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      if (p) {
        if (p.sphere)
          return this._importSphereCollider(g, {
            offset: D(new this._pcRef.Vec3(), p.sphere.offset ?? [0, 0, 0]),
            radius: p.sphere.radius ?? 0
          });
        if (p.capsule)
          return this._importCapsuleCollider(g, {
            offset: D(
              new this._pcRef.Vec3(),
              p.capsule.offset ?? [0, 0, 0]
            ),
            radius: p.capsule.radius ?? 0,
            tail: D(new this._pcRef.Vec3(), p.capsule.tail ?? [0, 0, 0])
          });
      }
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${M} has no valid shape`);
    }), u = l.colliderGroups, d = u == null ? void 0 : u.map((m, M) => ({
      colliders: (m.colliders ?? []).map((p) => {
        const v = a == null ? void 0 : a[p];
        if (v == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${M} attempted to use a collider #${p} but not found`
          );
        return v;
      }),
      name: m.name
    }));
    return l.springs.forEach((m, M) => {
      var L;
      const g = m.joints, p = (L = m.colliderGroups) == null ? void 0 : L.map((w) => {
        const T = d == null ? void 0 : d[w];
        if (T == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${M} attempted to use a colliderGroup ${w} but not found`
          );
        return T;
      }), v = m.center != null ? e.nodes[m.center] : void 0;
      let S;
      g.forEach((w) => {
        if (S) {
          const T = S.node, y = r[T], C = this.entity.findByName(y.name), b = w.node, E = r[b], j = this.entity.findByName(E.name), $ = {
            hitRadius: S.hitRadius,
            dragForce: S.dragForce,
            gravityPower: S.gravityPower,
            stiffness: S.stiffness,
            gravityDir: S.gravityDir != null ? D(new this._pcRef.Vec3(), S.gravityDir) : void 0
          }, B = this._importJoint(C, j, $, p);
          v && (B.center = v), s.addJoint(B);
        }
        S = w;
      });
    }), s.setInitState(), s;
  }
  _v0Import(t, e) {
    var c, a, u;
    const i = (c = t.extensions) == null ? void 0 : c.VRM;
    if (!(((a = t.extensionsUsed) == null ? void 0 : a.indexOf("VRM")) !== -1))
      return null;
    const s = i == null ? void 0 : i.secondaryAnimation;
    if (!s)
      return null;
    const r = s == null ? void 0 : s.boneGroups;
    if (!r)
      return null;
    const l = new Ot(), h = (u = s.colliderGroups) == null ? void 0 : u.map((d) => {
      var _;
      const x = (_ = this.entity.findByTag(`node_${d.node}`)) == null ? void 0 : _[0];
      if (!x) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      return { colliders: (d.colliders ?? []).map((m) => {
        const M = new this._pcRef.Vec3(0, 0, 0);
        return m.offset && M.set(
          m.offset.x ?? 0,
          m.offset.y ?? 0,
          m.offset.z ? -m.offset.z : 0
          // z is opposite in VRM0.0
        ), this._importSphereCollider(x, {
          offset: M,
          radius: m.radius ?? 0
        });
      }) };
    });
    return r == null || r.forEach((d, x) => {
      const f = d.bones;
      f && f.forEach((_) => {
        var S, L;
        const m = (S = this.entity.findByTag(`node_${_}`)) == null ? void 0 : S[0];
        if (!m) {
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
        const g = d.center != null ? e.nodes[d.center] : void 0, p = {
          hitRadius: d.hitRadius,
          dragForce: d.dragForce,
          gravityPower: d.gravityPower,
          stiffness: d.stiffiness,
          gravityDir: M
        }, v = (L = d.colliderGroups) == null ? void 0 : L.map((w) => {
          const T = h == null ? void 0 : h[w];
          if (T == null)
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${x} attempted to use a colliderGroup ${w} but not found`
            );
          return T;
        });
        m.forEach((w) => {
          const T = w.children[0] ?? null, y = this._importJoint(w, T, p, v);
          g && (y.center = g), l.addJoint(y);
        });
      });
    }), l.setInitState(), l;
  }
  _importSphereCollider(t, { offset: e, radius: i }) {
    const o = new be(this._pcRef, { offset: e, radius: i }), s = Wt(this._pcRef), r = new s(o);
    return t.addChild(r), r;
  }
  _importCapsuleCollider(t, { offset: e, radius: i, tail: o }) {
    const s = new Ce(this._pcRef, {
      offset: e,
      radius: i,
      tail: o
    }), r = Wt(this._pcRef), l = new r(s);
    return t.addChild(l), l;
  }
  _importJoint(t, e, i, o) {
    return new Ee(
      this._pcRef,
      t,
      e,
      i,
      o
    );
  }
};
k.EXTENSION_NAME = "VRMC_springBone";
let J = k;
const Re = (n) => {
  class t extends n.ScriptType {
    constructor() {
      super(...arguments), this.activeSpringBone = !0, this.isWalking = !1;
    }
    initialize() {
      const i = new J(n, this.asset, this.entity);
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
  n.registerScript(t, "vrmSpringBone"), t.attributes.add("activeSpringBone", {
    type: "boolean",
    default: !0
  }), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, Ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: Re
}, Symbol.toStringTag, { value: "Module" })), Q = "VRMC_materials_mtoon", ke = "VRM";
var Yt = /* @__PURE__ */ ((n) => (n[n.Off = 0] = "Off", n[n.Front = 1] = "Front", n[n.Back = 2] = "Back", n))(Yt || {});
const I = (n) => Math.pow(n, 2.2), Be = (n, t, e) => {
  var et, it, ot, nt, st, rt, at, lt, ht, ct, dt, ut, pt, mt, ft, gt, xt, _t, Mt, vt, Tt, wt, St, Lt, yt, Pt, bt, Ct, Et, Rt, It, kt;
  const i = ((et = t.keywordMap) == null ? void 0 : et._ALPHABLEND_ON) ?? !1, s = ((it = t.floatProperties) == null ? void 0 : it._ZWrite) === 1 && i, r = ((ot = t.keywordMap) == null ? void 0 : ot._ALPHATEST_ON) ?? !1, l = i ? "BLEND" : r ? "MASK" : "OPAQUE", h = r ? ((nt = t.floatProperties) == null ? void 0 : nt._Cutoff) ?? 0.5 : void 0, a = (((st = t.floatProperties) == null ? void 0 : st._CullMode) ?? 2) === 0, u = (((rt = t.vectorProperties) == null ? void 0 : rt._Color) ?? [1, 1, 1, 1]).map(
    (Bt, ce) => ce === 3 ? Bt : I(Bt)
    // alpha channel is stored in linear
  ), d = (at = t.textureProperties) == null ? void 0 : at._MainTex, x = d != null ? {
    index: d
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, f = ((lt = t.floatProperties) == null ? void 0 : lt._BumpScale) ?? 1, _ = (ht = t.textureProperties) == null ? void 0 : ht._BumpMap, m = _ != null ? {
    index: _,
    scale: f
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, M = (((ct = t.vectorProperties) == null ? void 0 : ct._EmissionColor) ?? [0, 0, 0, 1]).map(I), g = (dt = t.textureProperties) == null ? void 0 : dt._EmissionMap, p = g != null ? {
    index: g
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, v = (((ut = t.vectorProperties) == null ? void 0 : ut._ShadeColor) ?? [0.97, 0.81, 0.86, 1]).map(I), S = (pt = t.textureProperties) == null ? void 0 : pt._ShadeTexture, L = S != null ? {
    index: S
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  let w = ((mt = t.floatProperties) == null ? void 0 : mt._ShadeShift) ?? 0, T = ((ft = t.floatProperties) == null ? void 0 : ft._ShadeToony) ?? 0.9;
  T = n.math.lerp(T, 1, 0.5 + 0.5 * w), w = -w - (1 - T);
  const y = ((gt = t.floatProperties) == null ? void 0 : gt._IndirectLightIntensity) ?? 0.1, C = y ? 1 - y : void 0, b = (xt = t.textureProperties) == null ? void 0 : xt._SphereAdd, E = b != null ? [1, 1, 1] : void 0, j = b != null ? {
    index: b
  } : void 0, $ = ((_t = t.floatProperties) == null ? void 0 : _t._RimLightingMix) ?? 0, B = (Mt = t.textureProperties) == null ? void 0 : Mt._RimTexture, Kt = B != null ? {
    index: B
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, te = (((vt = t.vectorProperties) == null ? void 0 : vt._RimColor) ?? [0, 0, 0, 1]).map(I), ee = ((Tt = t.floatProperties) == null ? void 0 : Tt._RimFresnelPower) ?? 1, ie = ((wt = t.floatProperties) == null ? void 0 : wt._RimLift) ?? 0, oe = ["none", "worldCoordinates", "screenCoordinates"][((St = t.floatProperties) == null ? void 0 : St._OutlineWidthMode) ?? 0];
  let X = ((Lt = t.floatProperties) == null ? void 0 : Lt._OutlineWidth) ?? 0;
  X = 0.01 * X;
  const K = (yt = t.textureProperties) == null ? void 0 : yt._OutlineWidthTexture, ne = K != null ? {
    index: K
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, se = (((Pt = t.vectorProperties) == null ? void 0 : Pt._OutlineColor) ?? [0, 0, 0]).map(I), re = (((bt = t.floatProperties) == null ? void 0 : bt._OutlineColorMode) ?? 0) === 1 ? ((Ct = t.floatProperties) == null ? void 0 : Ct._OutlineLightingMix) ?? 1 : 0, tt = (Et = t.textureProperties) == null ? void 0 : Et._UvAnimMaskTexture, ae = tt != null ? {
    index: tt
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, le = ((Rt = t.floatProperties) == null ? void 0 : Rt._UvAnimScrollX) ?? 0;
  let V = ((It = t.floatProperties) == null ? void 0 : It._UvAnimScrollY) ?? 0;
  V != null && (V = -V);
  const he = ((kt = t.floatProperties) == null ? void 0 : kt._UvAnimRotation) ?? 0;
  return {
    ...e,
    pbrMetallicRoughness: {
      baseColorFactor: u,
      baseColorTexture: x
    },
    normalTexture: m,
    emissiveTexture: p,
    emissiveFactor: M,
    alphaMode: l,
    alphaCutoff: h,
    doubleSided: a,
    extensions: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      VRMC_materials_mtoon: {
        specVersion: "1.0",
        transparentWithZWrite: s,
        // renderQueueOffsetNumber,
        shadeColorFactor: v,
        shadeMultiplyTexture: L,
        shadingShiftFactor: w,
        shadingToonyFactor: T,
        giEqualizationFactor: C,
        matcapFactor: E,
        matcapTexture: j,
        rimLightingMixFactor: $,
        rimMultiplyTexture: Kt,
        parametricRimColorFactor: te,
        parametricRimFresnelPowerFactor: ee,
        parametricRimLiftFactor: ie,
        outlineWidthMode: oe,
        outlineWidthFactor: X,
        outlineWidthMultiplyTexture: ne,
        outlineColorFactor: se,
        outlineLightingMixFactor: re,
        uvAnimationMaskTexture: ae,
        uvAnimationScrollXSpeedFactor: le,
        uvAnimationScrollYSpeedFactor: V,
        uvAnimationRotationSpeedFactor: he
      }
    }
  };
}, Ae = (
  /* glsl */
  `
varying vec3 vViewPosition;
`
), Ve = (
  /* glsl */
  `
    // Transform the vertex position to world space
    vec4 worldPosition = matrix_model * vec4(vertex_position, 1.0);

    // Transform the world position to view space
    // vec4 viewPosition = matrix_viewProjection * worldPosition;

    // Pass the view position to the fragment shader
    vViewPosition = -worldPosition.xyz;
`
), Fe = (
  /* glsl */
  `

uniform vec3 lightDirection;
uniform vec3 lightColor;

varying vec3 vViewPosition;

uniform vec3 litFactor;
uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

uniform sampler2D baseColorMap;

#ifdef USE_EMISSIVEMAP
uniform sampler2D emissiveMap;
#endif

// porting from https://github.com/pixiv/three-vrm/blob/dev/packages/three-vrm-materials-mtoon/src/shaders/mtoon.frag

#define RECIPROCAL_PI 0.3183098861837907

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
};

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct DirectionalLight {
  vec3 direction;
  vec3 color;
};

// todo : add support for multiple lights
// uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

  light.color = directionalLight.color;
  light.direction = directionalLight.direction;
  light.visible = true;

}

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
  return RECIPROCAL_PI * diffuseColor;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  return col;
}

void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
  float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
  vec3 irradiance = directLight.color;

  // directSpecular will be used for rim lighting, not an actual specular
  reflectedLight.directSpecular += irradiance;

  irradiance *= dotNL;

  float shading = getShading( dotNL, shadow, material.shadingShift );

  // toon shaded diffuse
  reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
}

void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
  // indirect diffuse will use diffuseColor, no shadeColor involved
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

  // directSpecular will be used for rim lighting, not an actual specular
  reflectedLight.directSpecular += irradiance;
}

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
`
), De = (
  /* glsl */
  `
    vec3 normal = normalize(vNormalW);

    float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

    #ifdef DOUBLE_SIDED
      normal *= faceDirection;
    #endif

    vec4 diffuseColor = vec4( litFactor, opacity );
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

    #ifdef USE_EMISSIVEMAP
        totalEmissiveRadiance *= texture2D( emissiveMap, vUv0 ).rgb;
    #endif

    vec4 sampledDiffuseColor = texture2D(baseColorMap, vUv0);
    diffuseColor *= sampledDiffuseColor;

    // -- MToon: lighting --------------------------------------------------------
    MToonMaterial material;
    material.diffuseColor = diffuseColor.rgb;
    material.shadeColor = shadeColorFactor;
    #ifdef USE_SHADEMULTIPLYTEXTURE
        // vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
        material.shadeColor *= texture2D( shadeMultiplyTexture, vUv0 ).rgb;
    #endif
    material.shadingShift = shadingShiftFactor;

    DirectionalLight directionalLight;
    IncidentLight directLight;

    directionalLight.color = lightColor;
    directionalLight.direction = lightDirection;

    getDirectionalLightInfo( directionalLight, directLight );
    float shadow = 1.0;

    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = normalize( vViewPosition );

    RE_Direct( directLight, geometry, material, shadow, reflectedLight );

    // force the color lighter
    vec3 col = 2.8 * reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

    // -- MToon: rim --------------------------------------------------------
    vec3 viewDir = normalize( vViewPosition );
    vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );
    vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

    col += rimMix * rim;

    // -- MToon: emission --------------------------------------------------------
    col += totalEmissiveRadiance;

    gl_FragColor = vec4( col, diffuseColor.a );

    
    // gl_FragColor = diffuseColor;
`
), N = {
  baseVS: Ae,
  endVS: Ve,
  basePS: Fe,
  endPS: De
}, Ne = (n) => class extends n.StandardMaterial {
  constructor() {
    super(), this.litFactor = new n.Color(1, 1, 1, 1), this.alphaTest = 0, this.baseColorMap = null, this.mapUvTransform = new n.Mat3(), this.normalMapUvTransform = new n.Mat3(), this.normalScale = new n.Vec2(1, 1), this.emissiveMapUvTransform = new n.Mat3(), this.shadeColorFactor = new n.Color(0, 0, 0, 1), this.shadeMultiplyTexture = null, this.shadeMultiplyTextureUvTransform = new n.Mat3(), this.shadingShiftFactor = 0, this.shadingShiftTexture = null, this.shadingShiftTextureUvTransform = new n.Mat3(), this.shadingShiftTextureScale = 1, this.shadingToonyFactor = 0.9, this.giEqualizationFactor = 0, this.matcapFactor = new n.Color(1, 1, 1, 1), this.matcapTexture = null, this.matcapTextureUvTransform = new n.Mat3(), this.parametricRimColorFactor = new n.Color(0, 0, 0, 1), this.rimMultiplyTexture = null, this.rimMultiplyTextureUvTransform = new n.Mat3(), this.rimLightingMixFactor = 0, this.parametricRimFresnelPowerFactor = 5, this.parametricRimLiftFactor = 0, this.outlineWidthMultiplyTexture = null, this.outlineWidthMultiplyTextureUvTransform = new n.Mat3(), this.outlineWidthFactor = 0.02, this.outlineColorFactor = new n.Color(1, 0.5, 0, 1), this.outlineLightingMixFactor = 0, this.uvAnimationMaskTexture = null, this.uvAnimationMaskTextureUvTransform = new n.Mat3(), this.uvAnimationScrollXOffset = 0, this.uvAnimationScrollYOffset = 0, this.uvAnimationRotationPhase = 0, this.useLighting = !1, this.useSkybox = !1;
  }
  parseGLTFAttrs(e, i, o) {
    var M;
    if (e.hasOwnProperty("alphaMode"))
      switch (e.alphaMode) {
        case "MASK":
          this.blendType = n.BLEND_NONE, e.hasOwnProperty("alphaCutoff") ? this.alphaTest = e.alphaCutoff : this.alphaTest = 0.5;
          break;
        case "BLEND":
          this.blendType = n.BLEND_NORMAL, this.depthWrite = !1;
          break;
        default:
        case "OPAQUE":
          this.blendType = n.BLEND_NONE;
          break;
      }
    else
      this.blendType = n.BLEND_NONE;
    if (e != null && e.emissiveFactor) {
      const g = e.emissiveFactor;
      this.emissive = new n.Color(
        Math.pow(g[0], 1 / 2.2),
        Math.pow(g[1], 1 / 2.2),
        Math.pow(g[2], 1 / 2.2),
        1
      );
    }
    if ((M = e == null ? void 0 : e.pbrMetallicRoughness) != null && M.baseColorFactor) {
      const g = e.pbrMetallicRoughness.baseColorFactor;
      this.diffuse = new n.Color(
        Math.pow(g[0], 1 / 2.2),
        Math.pow(g[1], 1 / 2.2),
        Math.pow(g[2], 1 / 2.2),
        g[3]
      );
    }
    this.litFactor = this.diffuse, this.baseColorMap = this.diffuseMap || this.opacityMap;
    const {
      version: s,
      shadeColorFactor: r,
      shadeMultiplyTexture: l,
      shadingShiftFactor: h,
      shadingToonyFactor: c,
      parametricRimColorFactor: a,
      rimLightingMixFactor: u,
      parametricRimFresnelPowerFactor: d,
      parametricRimLiftFactor: x,
      outlineWidthFactor: f,
      outlineColorFactor: _,
      outlineLightingMixFactor: m
    } = o;
    s == "0.0" && (this.emissiveIntensity = 0), r && (this.shadeColorFactor = new n.Color(
      Math.pow(r[0], 1 / 2.2),
      Math.pow(r[1], 1 / 2.2),
      Math.pow(r[2], 1 / 2.2),
      1
    )), this.shadeMultiplyTexture = l, this.shadingShiftFactor = h, this.shadingToonyFactor = c, a && (this.parametricRimColorFactor = new n.Color(
      Math.pow(a[0], 1 / 2.2),
      Math.pow(a[1], 1 / 2.2),
      Math.pow(a[2], 1 / 2.2),
      1
    )), this.rimLightingMixFactor = u, this.parametricRimFresnelPowerFactor = d, this.parametricRimLiftFactor = x, this.outlineWidthFactor = f, _ && (this.outlineColorFactor = new n.Color(
      Math.pow(_[0], 1 / 2.2),
      Math.pow(_[1], 1 / 2.2),
      Math.pow(_[2], 1 / 2.2),
      1
    )), this.outlineLightingMixFactor = m, this.cull = n.CULLFACE_NONE, this.setShaderChunks(), this.setShaderParameters();
  }
  setShaderChunks() {
    this.chunks.APIVersion = n.CHUNKAPI_1_70;
    const e = n.shaderChunks;
    this.chunks.baseVS = e.baseVS, this.chunks.endVS = e.endVS, this.chunks.basePS = e.basePS, this.chunks.endPS = e.endPS, this.shadeMultiplyTexture && (this.chunks.basePS += `
        #define USE_SHADEMULTIPLYTEXTURE
        `), this.emissiveMap && (this.chunks.basePS += `
        #define USE_EMISSIVEMAP
        `), this.cull == n.CULLFACE_NONE && (this.chunks.basePS += `
        #define DOUBLE_SIDED
        `), this.chunks.baseVS += N.baseVS, this.chunks.endVS += N.endVS, this.chunks.basePS += N.basePS, this.chunks.endPS += N.endPS;
  }
  setShaderParameters() {
    this.setParameter("opacity", this.opacity), this.setParameter("litFactor", [this.litFactor.r, this.litFactor.g, this.litFactor.b]), this.baseColorMap && this.setParameter("baseColorMap", this.baseColorMap), this.setParameter("shadeColorFactor", [
      this.shadeColorFactor.r,
      this.shadeColorFactor.g,
      this.shadeColorFactor.b
    ]), this.shadeMultiplyTexture && this.setParameter("shadeMultiplyTexture", this.shadeMultiplyTexture), this.setParameter("shadingShiftFactor", this.shadingShiftFactor), this.setParameter("shadingToonyFactor", this.shadingToonyFactor), this.emissive && this.setParameter("emissive", [this.emissive.r, this.emissive.g, this.emissive.b]), this.emissiveIntensity && this.setParameter("emissiveIntensity", this.emissiveIntensity), this.setParameter("parametricRimColorFactor", [
      this.parametricRimColorFactor.r,
      this.parametricRimColorFactor.g,
      this.parametricRimColorFactor.b
    ]), this.setParameter("rimLightingMixFactor", this.rimLightingMixFactor), this.setParameter("parametricRimFresnelPowerFactor", this.parametricRimFresnelPowerFactor), this.setParameter("parametricRimLiftFactor", this.parametricRimLiftFactor), this.emissiveMap && this.setParameter("emissiveMap", this.emissiveMap);
  }
  setLightDirection(e) {
    this.setParameter("lightDirection", [e.x, e.y, e.z]);
  }
  setLightColor(e) {
    this.setParameter("lightColor", [e.r, e.g, e.b]);
  }
}, Ue = (
  /* glsl */
  `
uniform float outlineWidthFactor;
`
), Oe = (
  /* glsl */
  `
    vUv0 = vertex_texCoord0;

    vec3 objectNormal = vertex_normal;
    vec3 transformedNormal = objectNormal;
    
    // #ifdef OUTLINE_WIDTH_WORLD
        float worldNormalLength = length( transformedNormal );
        vec3 outlineOffset = 1.0 * outlineWidthFactor * worldNormalLength * objectNormal;
        // gl_Position = matrix_viewProjection * matrix_model * vec4( outlineOffset + vertex_position, 1.0 );
        gl_Position = matrix_viewProjection * getModelMatrix()  * vec4( outlineOffset + vertex_position, 1.0 );
    // #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
`
), We = (
  /* glsl */
  `
uniform sampler2D baseColorMap;
uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;
`
), He = (
  /* glsl */
  `
    vec4 color = texture2D(baseColorMap, vUv0);
    color.rgb = outlineColorFactor.rgb * mix( vec3( 1.0 ), color.rgb, outlineLightingMixFactor );
    gl_FragColor = color;
`
), U = {
  baseVS: Ue,
  endVS: Oe,
  basePS: We,
  endPS: He
}, ze = (n) => class extends n.StandardMaterial {
  parseGLTFAttrs(e) {
    var i, o;
    if (e.hasOwnProperty("alphaMode"))
      switch (e.alphaMode) {
        case "MASK":
          this.blendType = n.BLEND_NONE, e.hasOwnProperty("alphaCutoff") ? this.alphaTest = e.alphaCutoff : this.alphaTest = 0.5;
          break;
        case "BLEND":
          this.blendType = n.BLEND_NORMAL, this.depthWrite = !1;
          break;
        default:
        case "OPAQUE":
          this.blendType = n.BLEND_NONE;
          break;
      }
    else
      this.blendType = n.BLEND_NONE;
    if ((i = e == null ? void 0 : e.extensions) != null && i[Q]) {
      const s = (o = e == null ? void 0 : e.extensions) == null ? void 0 : o[Q], {
        outlineColorFactor: r,
        outlineWidthFactor: l,
        outlineLightingMixFactor: h
        // outlineWidthMultiplyTexture,
      } = s;
      r && this.setOutlineColorFactor(
        new n.Color(
          Math.pow(r[0], 1 / 2.2),
          Math.pow(r[1], 1 / 2.2),
          Math.pow(r[2], 1 / 2.2)
        )
      ), l && this.setOutlineWidthFactor(l), h && this.setOutlineLightingMixFactor(h);
    }
    this.cull = n.CULLFACE_FRONT, this.setShaderChunks();
  }
  setShaderChunks() {
    this.chunks.APIVersion = n.CHUNKAPI_1_70;
    const e = n.shaderChunks;
    this.chunks.baseVS = e.baseVS, this.chunks.endVS = e.endVS, this.chunks.basePS = e.basePS, this.chunks.endPS = e.endPS, this.chunks.baseVS += U.baseVS, this.chunks.endVS += U.endVS, this.chunks.basePS += U.basePS, this.chunks.endPS += U.endPS;
  }
  setOutlineWidthFactor(e) {
    this.setParameter("outlineWidthFactor", e);
  }
  setOutlineLightingMixFactor(e) {
    this.setParameter("outlineLightingMixFactor", e);
  }
  setOutlineColorFactor(e) {
    this.setParameter("outlineColorFactor", [
      e.r,
      e.g,
      e.b
    ]);
  }
  setBaseColorMap(e) {
    e && this.setParameter("baseColorMap", e);
  }
}, je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EXTENSION_VRM: ke,
  EXTENSION_VRMC_MATERIALS_MTOON: Q,
  MToonMaterialCullMode: Yt,
  createVRMCMtoonMaterial: Ne,
  createVRMCOutlineMaterial: ze,
  gammaEOTF: I,
  parseV0MToonProperties: Be
}, Symbol.toStringTag, { value: "Module" }));
class Jt {
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
class q extends Jt {
  static _setupTransforms(t, e) {
    const i = new t.Entity();
    i.name = "VRMHumanoidRig";
    const o = {}, s = {}, r = {};
    O.forEach((h) => {
      const c = e.getBoneNode(h);
      if (c) {
        o[h] = c.getPosition().clone(), c.getRotation().clone(), s[h] = c.getLocalRotation().clone();
        const a = new t.Quat();
        c.parent && a.copy(c.parent.getRotation()), r[h] = a;
      }
    });
    const l = {};
    return O.forEach((h) => {
      var a;
      const c = e.getBoneNode(h);
      if (c) {
        const u = o[h];
        let d = h, x;
        for (; x == null && (d = Ht[d], d != null); )
          x = o[d];
        const f = new t.Entity();
        f.name = c.name, (d ? (a = l[d]) == null ? void 0 : a.node : i).addChild(f);
        const m = new t.Vec3().copy(u);
        x && m.sub(x), f.setLocalPosition(m), l[h] = { node: f };
      }
    }), {
      rigBones: l,
      root: i,
      parentWorldRotations: r,
      boneRotations: s
    };
  }
  constructor(t, e) {
    const { rigBones: i, root: o, parentWorldRotations: s, boneRotations: r } = q._setupTransforms(
      t,
      e
    );
    super(i), this.pcRef = t, this.original = e, this.root = o, this._parentWorldRotations = s, this._boneRotations = r, this._quatA = new t.Quat(), this._quatB = new t.Quat(), this._vec3A = new t.Vec3(), this._mat4A = new t.Mat4();
    const l = t.Application.getApplication();
    l && l.root.addChild(o);
  }
  applyMatrix4(t, e) {
    const i = t.x, o = t.y, s = t.z, r = e.data, l = 1 / (r[3] * i + r[7] * o + r[11] * s + r[15]);
    return t.x = (r[0] * i + r[4] * o + r[8] * s + r[12]) * l, t.y = (r[1] * i + r[5] * o + r[9] * s + r[13]) * l, t.z = (r[2] * i + r[6] * o + r[10] * s + r[14]) * l, t;
  }
  update() {
    O.forEach((t) => {
      var o;
      const e = (o = this.original.humanBones[t]) == null ? void 0 : o.entity, i = this.getBoneNode(t);
      if (e != null && i) {
        const s = this._parentWorldRotations[t], r = this._quatB.copy(s).invert(), l = this._boneRotations[t];
        if (this._quatA.copy(i.getLocalRotation()), this._quatA.mul(s), this._quatA.copy(r.mul(this._quatA)), this._quatA.mul(l), e.setLocalRotation(this._quatA), t === "hips") {
          const h = this._vec3A.copy(i.getPosition()), c = this._mat4A.copy(e.parent.getWorldTransform()), a = this.applyMatrix4(h, c.invert());
          e.setLocalPosition(a);
        }
      }
    });
  }
}
class $e {
  constructor(t, e, i) {
    this.autoUpdateHumanBones = (i == null ? void 0 : i.autoUpdateHumanBones) ?? !0, this._rawHumanBones = new Jt(e), this._normalizedHumanBones = new q(t, this._rawHumanBones);
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
function Xe(n, t, e) {
  const i = n.humanBones, o = {};
  return n.humanBones != null && Object.entries(i).map(([, s]) => {
    var c;
    let r = s.bone;
    const l = s.node;
    if (r == null || l == null)
      return;
    const h = t.resource.data.nodes[l];
    if (h == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${r} (index = ${l}) does not exist`
      );
      return;
    }
    o[r] = {
      node: h,
      entity: ((c = e.findByTag(`node_${l}`)) == null ? void 0 : c[0]) || null
    };
  }), o;
}
function Ge(n, t, e) {
  var s;
  const i = {}, o = n.humanBones.leftThumbIntermediate != null || n.humanBones.rightThumbIntermediate != null;
  if (n.humanBones)
    for (const r in n.humanBones) {
      let l = r;
      const h = n.humanBones[r].node, c = t.resource.data.nodes[h];
      if (o) {
        const a = zt[l];
        a != null && (l = a);
      }
      if (c == null)
        return console.warn(
          `A glTF node bound to the humanoid bone ${l} (index = ${h}) does not exist`
        ), null;
      i[l] = {
        node: c,
        entity: ((s = e.findByTag(`node_${h}`)) == null ? void 0 : s[0]) || null
      };
    }
  return i;
}
function Ye(n, t, e, i) {
  var l, h, c, a, u, d, x, f, _, m;
  const o = (h = (l = t.resource.data.gltf) == null ? void 0 : l.extensions) == null ? void 0 : h.VRM, s = (a = (c = t.resource.data.gltf) == null ? void 0 : c.extensions) == null ? void 0 : a.VRMC_vrm;
  if (!o && !s)
    return console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar."), null;
  let r = null;
  if (o) {
    const M = (x = (d = (u = t.resource.data.gltf) == null ? void 0 : u.extensions) == null ? void 0 : d.VRM) == null ? void 0 : x.humanoid;
    r = Xe(M, t, e);
  } else if (s) {
    const M = s.specVersion;
    if (!Z.has(M))
      return console.warn(`Unknown VRMC_vrm specVersion "${M}"`), null;
    const g = (m = (_ = (f = t.resource.data.gltf) == null ? void 0 : f.extensions) == null ? void 0 : _.VRMC_vrm) == null ? void 0 : m.humanoid;
    r = Ge(g, t, e);
  }
  if (r) {
    const M = !!(i != null && i.autoUpdateHumanBones);
    return new $e(n, r, { autoUpdateHumanBones: M });
  }
  return null;
}
const Je = function(n, t, e, i, o, s) {
  const r = s;
  if (!r) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = function(h) {
    const c = new Blob([h.resource]), a = URL.createObjectURL(c);
    return Qt(
      n,
      a,
      e,
      i,
      function(u, d) {
        o(u, d), URL.revokeObjectURL(a);
      },
      r
    );
  };
  t.loaded ? l(t) : (t.ready(l), r.assets.load(t));
}, Qt = function(n, t, e, i, o, s) {
  const r = s;
  if (!r) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = i, h = {
    url: t,
    filename: l
  }, c = new n.Asset(l, "container", h, void 0, e);
  return c.once("load", function(a) {
    if (o) {
      const u = a.resource.animations;
      if (u.length == 1)
        u[0].name = i;
      else if (u.length > 1)
        for (let d = 0; d < u.length; ++d)
          u[d].name = i + " " + d.toString();
      o(null, a);
    }
  }), r.assets.add(c), r.assets.load(c), c;
};
var P, H, Zt, z, qt;
class Qe {
  constructor(t, e) {
    F(this, H);
    F(this, z);
    F(this, P, void 0);
    At(this, P, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, o = {}, s = !0) {
    const r = [];
    return new Promise(
      (l, h) => {
        const c = (a, u) => {
          var g, p;
          a && (this.loading = !1, h(`GLTFLoader Error: ${a}`)), R(this, P).forEach((v) => {
            const S = v(u);
            r.push(S);
          });
          const d = u.resource.data;
          s && Y(this, z, qt).call(this, d, r);
          const x = u.resource.instantiateRenderEntity(o), f = new this._pcRef.Entity(e, this.app);
          f.addChild(x), r.forEach((v) => {
            v.instantiated && v.instantiated(f);
          }), this.loading = !1;
          const _ = (g = u.resource.data.gltf.extensions) == null ? void 0 : g.VRMC_vrm, m = (p = u.resource.data.gltf.extensions) == null ? void 0 : p.VRM;
          l({ entity: f, asset: u, version: _ ? "v1" : m ? "v0" : null });
        };
        t || h("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? c(null, t) : (t.once("load", () => {
          c(null, t);
        }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? Je(
          this._pcRef,
          t,
          i,
          e,
          c.bind(this),
          this.app
        ) : h("GLTFLoader Error: Please pass available asset or url to parse.") : Qt(
          this._pcRef,
          t,
          i,
          e,
          c.bind(this),
          this.app
        );
      }
    );
  }
  // Register Plugin to loader
  register(t, e) {
    R(this, P).has(t) || R(this, P).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    R(this, P).has(t) && R(this, P).delete(t);
  }
  static registerAnimation(t, e, { useResourceName: i, defaultPlayIndex: o } = {
    useResourceName: !1,
    defaultPlayIndex: 0
  }) {
    if (e.length !== 0 && (t.addComponent("anim", {
      activate: !0
    }), e.forEach((s, r) => {
      const l = s.resource.name.replace(".", "_");
      t.anim && t.anim.assignAnimation(
        i ? l : `ANIMATION_${r}`,
        s.resource
      );
    }), o !== null)) {
      const s = i ? e[o].resource.name : `ANIMATION_${o}`;
      t.anim && t.anim.baseLayer.states.find((r) => r === s) && t.anim.baseLayer.transition(s);
    }
  }
}
P = new WeakMap(), H = new WeakSet(), Zt = function(t, e) {
  t.forEach((i, o) => {
    const s = e[o].extensions;
    s && (i.extensions = s);
  });
}, z = new WeakSet(), qt = function(t, e) {
  const i = t.gltf.nodes, o = t.nodes;
  Y(this, H, Zt).call(this, o, i), t.scenes.forEach((s) => {
    const r = /* @__PURE__ */ new Set([]);
    s.forEach((l) => {
      let h = !1, c = [];
      t.nodes.forEach((a, u) => {
        l.path === a.path && c.push(u);
      }), c.forEach((a) => {
        if (!r.has(a) && !h) {
          l.tags.add(`node_${a}`);
          const u = t.nodes[a].extensions;
          e.forEach((d) => {
            d.parsedNodeAddTags && d.parsedNodeAddTags(l, u);
          }), r.add(a), h = !0;
        }
      });
    });
  });
};
window.VRMLoader = {
  VrmAnimation: _e,
  VrmExpression: Pe,
  VrmSpringBone: Ie,
  VrmMapList: pe,
  VrmcMaterialsMtoon: je,
  createFormattedVRMHumanoid: Ye
};
window.GLTFLoader = Qe;
export {
  Qe as GLTFLoader,
  _e as VrmAnimation,
  Pe as VrmExpression,
  pe as VrmMapList,
  Ie as VrmSpringBone,
  je as VrmcMaterialsMtoon,
  Ye as createFormattedVRMHumanoid
};
