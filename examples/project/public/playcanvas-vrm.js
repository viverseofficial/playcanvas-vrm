/**
 * name: playcanvas-vrm
 * version: v1.1.0
 */
var N = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var P = (r, t, e) => (N(r, t, "read from private field"), e ? e.call(r) : t.get(r)), I = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, O = (r, t, e, i) => (N(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e);
var D = (r, t, e) => (N(r, t, "access private method"), e);
const E = [
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
], Y = {
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
}, A = {
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
}, q = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
}, Z = {
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
}, K = {
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
}, U = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]), dt = {
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
  POSSIBLE_SPEC_VERSIONS: U,
  VRMExpressionPresetName: K,
  VRMHumanBoneList: E,
  VRMHumanBoneParentMap: Y,
  VRMRigMap: A,
  expressionMateriaPropertyNameMapMap: pt,
  thumbBoneNameMap: q,
  v0ExpressionMaterialColorMap: dt,
  v0v1PresetNameMap: Z
}, Symbol.toStringTag, { value: "Module" })), gt = (r, t) => {
  const e = t.inputs.map((s) => new r.AnimData(s.components, s.data)), i = t.outputs.map(
    (s) => new r.AnimData(s.components, s.data)
  ), n = t.curves.map((s) => {
    const o = s.paths.map((l) => {
      const h = l;
      return {
        component: h.component,
        entityPath: [...h.entityPath],
        propertyPath: [...h.propertyPath]
      };
    });
    return new r.AnimCurve(o, s.input, s.output, s.interpolation);
  });
  return new r.AnimTrack(t.name, t.duration, e, i, n);
}, mt = (r, t, e, {
  vrmHipsHeight: i,
  vrmHipsDeep: n,
  motionHipsHeight: s,
  version: o = "v0"
}) => {
  const l = {}, h = {};
  return t.map((a) => {
    var p;
    const c = a.asset.type === "container" ? (p = a.asset.resource.animations[0]) == null ? void 0 : p.resource : a.asset.resource;
    if (c) {
      const d = gt(r, c);
      let f = 0;
      if (a.asset.type === "container") {
        const u = a.asset.resource.data.nodes.find(
          (g) => g.name === A.hips
        );
        u && (f = u.getPosition().y);
      }
      s = s || f || 0.855;
      const _ = i / s;
      return d.curves.forEach((u) => {
        u.paths.forEach((g) => {
          const x = g, M = x.propertyPath.find((w) => w === "localPosition"), m = x.entityPath[x.entityPath.length - 1] === A.hips;
          M && m && !l[u.output] && (l[u.output] = !0);
        });
      }), d.curves.forEach((u) => {
        let g = !1;
        u.paths.forEach((x) => {
          const M = x, m = M.entityPath.map((w) => {
            var v;
            const B = A[w], T = (v = e.getNormalizedBoneNode(B)) == null ? void 0 : v.name;
            return !B || !T ? w : T;
          });
          M.entityPath = m, M.propertyPath.find((w) => w === "localScale") && (g = !0);
        }), g && !h[u.output] && (h[u.output] = !0);
      }), d.outputs.forEach((u, g) => {
        const x = h[g];
        if (u.components === 3) {
          if (!x) {
            const M = u.data.map((m, w) => {
              let y = m;
              return o === "v0" && w % 3 !== 1 && (y *= -1), l[g] && w % 3 === 1 && (a.removeY || a.removeUpperY && m * _ > i) ? i : l[g] && w % 3 === 2 && a.removeZ ? n : y * _;
            });
            u._data = M;
          }
        } else if (u.components === 4) {
          const M = u.data.map((m, w) => o === "v0" && w % 2 === 0 ? -m : m);
          u._data = M;
        }
      }), {
        name: a.stateName,
        resource: d,
        ...a.setting && {
          setting: a.setting
        }
      };
    } else
      return console.error(
        `AddVrmAnimation: loadAnimation can't find available resource from ${a.stateName} asset.`
      ), null;
  }).filter((a) => a);
}, ft = (r, t, e, i, n) => {
  var f, _, u;
  if (!i)
    return console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".'), null;
  const s = (f = e.resource.data.gltf.extensions) == null ? void 0 : f.VRMC_vrm, o = (_ = e.resource.data.gltf.extensions) == null ? void 0 : _.VRM, l = s ? "v1" : o ? "v0" : null, h = ((u = i.rawHumanBones.hips) == null ? void 0 : u.node.getPosition()) || new r.Vec3(), a = h.y, c = Math.abs(a - 0), p = h.z, d = Math.abs(p - 0);
  return mt(r, t, i, {
    vrmHipsHeight: c,
    vrmHipsDeep: d,
    ...n && { motionHipsHeight: n },
    ...l && { version: l }
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
  createVRMAnimation: ft
}, Symbol.toStringTag, { value: "Module" }));
class F {
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
function tt(r) {
  return Math.max(Math.min(r, 1), 0);
}
function Mt(r, t) {
  return r = Math.ceil(r), t = Math.floor(t), Math.floor(Math.random() * (t - r) + r);
}
function L(r, t) {
  return Math.random() * (t - r) + r;
}
function k(r, t, e = 0) {
  return r.x = t[e], r.y = t[e + 1], r.z = t[e + 2], r;
}
function $(r, t) {
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
    return this._shouldUpdateInverse && (this._inverseCache.copy(this.matrix), et(this._pcRef, this._inverseCache), this._shouldUpdateInverse = !1), this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
function et(r, t) {
  const e = new r.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function yt(r, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (r.x = -t.y, r.y = t.x, r.z = 0, r.w = i) : (r.x = 0, r.y = -t.z, r.z = t.y, r.w = i)) : (r.x = t.y * e.z - t.z * e.y, r.y = t.z * e.x - t.x * e.z, r.z = t.x * e.y - t.y * e.x, r.w = i), r.normalize();
}
class j {
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
    i && (i.weight = tt(e));
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
class J {
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
    this.currentValue = t, this.weight = tt(t);
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
      const s = i[this.currentTimeIndex + 1], o = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], h = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / o, a = this.currentValue + h * t;
      h > 0 && a >= s || h < 0 && s >= a ? this.setValue(s) : this.setValue(a);
    }
  }
}
class G {
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
    var h;
    if (!((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const i = (h = t == null ? void 0 : t.extensions) == null ? void 0 : h.VRMC_vrm;
    if (!i)
      return null;
    const n = i.expressions;
    if (!n)
      return null;
    const s = new Set(Object.values(K)), o = /* @__PURE__ */ new Map();
    n.preset != null && Object.entries(n.preset).forEach(([a, c]) => {
      if (c != null) {
        if (!s.has(a)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${a}" detected. Ignoring the expression`
          );
          return;
        }
        o.set(a, c);
      }
    }), n.custom != null && Object.entries(n.custom).forEach(([a, c]) => {
      if (s.has(a)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${a}". Ignoring the expression`
        );
        return;
      }
      o.set(a, c);
    });
    const l = new j();
    return Array.from(o.entries()).map(([a, c]) => {
      const p = new J(a);
      p.isBinary = c.isBinary ?? !1, p.overrideBlink = c.overrideBlink ?? "none", p.overrideLookAt = c.overrideLookAt ?? "none", p.overrideMouth = c.overrideMouth ?? "none", c.morphTargetBinds && c.morphTargetBinds.forEach((d) => {
        if (d.node === void 0 || d.index === void 0)
          return;
        const f = this.meshInstances.filter((u) => u.node.tags.has(`node_${d.node}`)), _ = d.index;
        p.addBind(
          new G({
            primitives: f,
            targetIndex: _,
            weight: d.weight ?? 1
          })
        );
      }), l.registerExpression(p);
    }), l;
  }
  _v0Import(t) {
    var h, a;
    if (!(((h = t.extensionsUsed) == null ? void 0 : h.indexOf("VRM")) !== -1))
      return null;
    const i = (a = t.extensions) == null ? void 0 : a.VRM;
    if (!i)
      return null;
    const n = i.blendShapeMaster;
    if (!n)
      return null;
    const s = new j(), o = n.blendShapeGroups;
    if (!o)
      return s;
    const l = /* @__PURE__ */ new Set();
    return o.map((c) => {
      const p = c.presetName, f = (p != null && Z[p] || null) ?? c.name;
      if (f == null) {
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (l.has(f)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${p} has duplicated entries. Ignoring the expression`
        );
        return;
      }
      l.add(f);
      const _ = new J(f);
      _.isBinary = c.isBinary ?? !1, c.binds && (c.binds.forEach((u) => {
        if (u.mesh === void 0 || u.index === void 0)
          return;
        const g = [];
        t.nodes.forEach((M, m) => {
          M.mesh === u.mesh && g.push({ gltfNode: M, index: m });
        });
        const x = u.index;
        g.map((M) => {
          const m = this.meshInstances.filter((w) => w.node.tags.has(`node_${M.index}`));
          _.addBind(
            new G({
              primitives: m,
              targetIndex: x,
              weight: 0.01 * (u.weight ?? 100)
              // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
            })
          );
        });
      }), s.registerExpression(_));
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
      this.expressionManager = n.import(), this.blinkTimer = new F("blink"), this.talkTimer = new F("talk"), this.startBlink(), this.entity.on("vrm-expression:start-emotion", this.startEmotion, this), this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this), this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this), this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
      });
    }
    // Specific Expression Animation
    startBlink(i) {
      const n = L(1, 5);
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
      const n = Math.random() * 0.5, s = Math.random() * 0.5 + 0.5, o = L(0.5, 1), l = L(0.4, 0.6) * o, h = L(0.4, 0.6) * o, a = [0, n, 0.5, s, 1].filter((d) => d * i), c = [0, l, o, h, 0], p = L(0.5, 1);
      this.expressionManager.startTalking(a, c), this.talkTimer.add(p, this.startTalking, this);
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
class Q {
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
      Rt(l, (h) => {
        const a = this._objectSpringBonesMap.get(h);
        if (a)
          for (const c of a)
            this._processSpringBone(
              c,
              e,
              i,
              n,
              s
            );
        else
          n.has(h) || n.add(h);
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
const X = (r) => class extends r.Entity {
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
    const l = i + this.radius, h = n.length() - l;
    return n.normalize(), h;
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
    $(this._currentTail.copy(this._initialLocalChildPosition), t), this._prevTail.copy(this._currentTail), this._boneAxis.copy(this._initialLocalChildPosition).normalize();
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
    $(this._currentTail.copy(this._initialLocalChildPosition), n), this._currentTail.copy(i.transformPoint(this._currentTail)), this._prevTail.copy(this._currentTail);
  }
  update(t, e) {
    if (t <= 0)
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
    let i = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0), i.getTranslation(this._matrixWorldToCenterTranslation), this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const n = this._quatA.setFromMat4(i), s = this._matB.copy(i).mul(this._parentMatrixWorld), o = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(s.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), l = this._v3A.copy(this.settings.gravityDir).copy(n.transformVector(this._v3A)).normalize(), h = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(o).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(l).mulScalar(this.settings.gravityPower * t)).copy(h.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const a = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, a.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
    );
    const c = et(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
    ), p = yt(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(c.transformPoint(this._v3A)).normalize()
    ), d = p.getEulerAngles();
    p.setFromEulerAngles(d.x * e, d.y * e, d.z * e);
    const f = this._initialLocalRotation.clone().mul(p);
    this.bone.setLocalRotation(f);
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
const b = class b {
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
    var _, u;
    if (!(((_ = t.extensionsUsed) == null ? void 0 : _.indexOf(b.EXTENSION_NAME)) !== -1) || !((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const s = new Q(), o = t == null ? void 0 : t.nodes, l = (u = t.extensions) == null ? void 0 : u[b.EXTENSION_NAME];
    if (!l)
      return null;
    const h = l.specVersion;
    if (!U.has(h))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${b.EXTENSION_NAME} specVersion "${h}"`
      ), null;
    const a = l.colliders, c = a == null ? void 0 : a.map((g, x) => {
      var w;
      const M = (w = this.entity.findByTag(`node_${g.node}`)) == null ? void 0 : w[0], m = g.shape;
      if (!M) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      if (m) {
        if (m.sphere)
          return this._importSphereCollider(M, {
            offset: k(new this._pcRef.Vec3(), m.sphere.offset ?? [0, 0, 0]),
            radius: m.sphere.radius ?? 0
          });
        if (m.capsule)
          return this._importCapsuleCollider(M, {
            offset: k(
              new this._pcRef.Vec3(),
              m.capsule.offset ?? [0, 0, 0]
            ),
            radius: m.capsule.radius ?? 0,
            tail: k(new this._pcRef.Vec3(), m.capsule.tail ?? [0, 0, 0])
          });
      }
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${x} has no valid shape`);
    }), p = l.colliderGroups, d = p == null ? void 0 : p.map((g, x) => ({
      colliders: (g.colliders ?? []).map((m) => {
        const w = c == null ? void 0 : c[m];
        if (w == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${x} attempted to use a collider #${m} but not found`
          );
        return w;
      }),
      name: g.name
    }));
    return l.springs.forEach((g, x) => {
      var B;
      const M = g.joints, m = (B = g.colliderGroups) == null ? void 0 : B.map((T) => {
        const v = d == null ? void 0 : d[T];
        if (v == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${x} attempted to use a colliderGroup ${T} but not found`
          );
        return v;
      }), w = g.center != null ? e.nodes[g.center] : void 0;
      let y;
      M.forEach((T) => {
        if (y) {
          const v = y.node, S = o[v], rt = this.entity.findByName(S.name), at = T.node, lt = o[at], ht = this.entity.findByName(lt.name), ct = {
            hitRadius: y.hitRadius,
            dragForce: y.dragForce,
            gravityPower: y.gravityPower,
            stiffness: y.stiffness,
            gravityDir: y.gravityDir != null ? k(new this._pcRef.Vec3(), y.gravityDir) : void 0
          }, z = this._importJoint(rt, ht, ct, m);
          w && (z.center = w), s.addJoint(z);
        }
        y = T;
      });
    }), s.setInitState(), s;
  }
  _v0Import(t, e) {
    var a, c, p;
    const i = (a = t.extensions) == null ? void 0 : a.VRM;
    if (!(((c = t.extensionsUsed) == null ? void 0 : c.indexOf("VRM")) !== -1))
      return null;
    const s = i == null ? void 0 : i.secondaryAnimation;
    if (!s)
      return null;
    const o = s == null ? void 0 : s.boneGroups;
    if (!o)
      return null;
    const l = new Q(), h = (p = s.colliderGroups) == null ? void 0 : p.map((d) => {
      var u;
      const f = (u = this.entity.findByTag(`node_${d.node}`)) == null ? void 0 : u[0];
      if (!f) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      return { colliders: (d.colliders ?? []).map((g) => {
        const x = new this._pcRef.Vec3(0, 0, 0);
        return g.offset && x.set(
          g.offset.x ?? 0,
          g.offset.y ?? 0,
          g.offset.z ? -g.offset.z : 0
          // z is opposite in VRM0.0
        ), this._importSphereCollider(f, {
          offset: x,
          radius: g.radius ?? 0
        });
      }) };
    });
    return o == null || o.forEach((d, f) => {
      const _ = d.bones;
      _ && _.forEach((u) => {
        var y, B;
        const g = (y = this.entity.findByTag(`node_${u}`)) == null ? void 0 : y[0];
        if (!g) {
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
        const x = new this._pcRef.Vec3();
        d.gravityDir ? x.set(
          d.gravityDir.x ?? 0,
          d.gravityDir.y ?? 0,
          d.gravityDir.z ?? 0
        ) : x.set(0, -1, 0);
        const M = d.center != null ? e.nodes[d.center] : void 0, m = {
          hitRadius: d.hitRadius,
          dragForce: d.dragForce,
          gravityPower: d.gravityPower,
          stiffness: d.stiffiness,
          gravityDir: x
        }, w = (B = d.colliderGroups) == null ? void 0 : B.map((T) => {
          const v = h == null ? void 0 : h[T];
          if (v == null)
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${f} attempted to use a colliderGroup ${T} but not found`
            );
          return v;
        });
        g.forEach((T) => {
          const v = T.children[0] ?? null, S = this._importJoint(T, v, m, w);
          M && (S.center = M), l.addJoint(S);
        });
      });
    }), l.setInitState(), l;
  }
  _importSphereCollider(t, { offset: e, radius: i }) {
    const n = new bt(this._pcRef, { offset: e, radius: i }), s = X(this._pcRef), o = new s(n);
    return t.addChild(o), o;
  }
  _importCapsuleCollider(t, { offset: e, radius: i, tail: n }) {
    const s = new Lt(this._pcRef, {
      offset: e,
      radius: i,
      tail: n
    }), o = X(this._pcRef), l = new o(s);
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
b.EXTENSION_NAME = "VRMC_springBone";
let W = b;
const It = (r) => {
  class t extends r.ScriptType {
    constructor() {
      super(...arguments), this.activeSpringBone = !0, this.isWalking = !1;
    }
    initialize() {
      const i = new W(r, this.asset, this.entity);
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
class it {
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
class H extends it {
  static _setupTransforms(t, e) {
    const i = new t.Entity();
    i.name = "VRMHumanoidRig";
    const n = {}, s = {}, o = {};
    E.forEach((h) => {
      const a = e.getBoneNode(h);
      if (a) {
        n[h] = a.getPosition().clone(), a.getRotation().clone(), s[h] = a.getLocalRotation().clone();
        const c = new t.Quat();
        a.parent && c.copy(a.parent.getRotation()), o[h] = c;
      }
    });
    const l = {};
    return E.forEach((h) => {
      var c;
      const a = e.getBoneNode(h);
      if (a) {
        const p = n[h];
        let d = h, f;
        for (; f == null && (d = Y[d], d != null); )
          f = n[d];
        const _ = new t.Entity();
        _.name = a.name, (d ? (c = l[d]) == null ? void 0 : c.node : i).addChild(_);
        const g = new t.Vec3().copy(p);
        f && g.sub(f), _.setLocalPosition(g), l[h] = { node: _ };
      }
    }), {
      rigBones: l,
      root: i,
      parentWorldRotations: o,
      boneRotations: s
    };
  }
  constructor(t, e) {
    const { rigBones: i, root: n, parentWorldRotations: s, boneRotations: o } = H._setupTransforms(
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
    E.forEach((t) => {
      var n;
      const e = (n = this.original.humanBones[t]) == null ? void 0 : n.entity, i = this.getBoneNode(t);
      if (e != null && i) {
        const s = this._parentWorldRotations[t], o = this._quatB.copy(s).invert(), l = this._boneRotations[t];
        if (this._quatA.copy(i.getLocalRotation()), this._quatA.mul(s), this._quatA.copy(o.mul(this._quatA)), this._quatA.mul(l), e.setLocalRotation(this._quatA), t === "hips") {
          const h = this._vec3A.copy(i.getPosition()), a = this._mat4A.copy(e.parent.getWorldTransform()), c = this.applyMatrix4(h, a.invert());
          e.setLocalPosition(c);
        }
      }
    });
  }
}
class Et {
  constructor(t, e, i) {
    this.autoUpdateHumanBones = (i == null ? void 0 : i.autoUpdateHumanBones) ?? !0, this._rawHumanBones = new it(e), this._normalizedHumanBones = new H(t, this._rawHumanBones);
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
function At(r, t, e) {
  const i = r.humanBones, n = {};
  return r.humanBones != null && Object.entries(i).map(([, s]) => {
    var a;
    let o = s.bone;
    const l = s.node;
    if (o == null || l == null)
      return;
    const h = t.resource.data.nodes[l];
    if (h == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${o} (index = ${l}) does not exist`
      );
      return;
    }
    n[o] = {
      node: h,
      entity: ((a = e.findByTag(`node_${l}`)) == null ? void 0 : a[0]) || null
    };
  }), n;
}
function Vt(r, t, e) {
  var s;
  const i = {}, n = r.humanBones.leftThumbIntermediate != null || r.humanBones.rightThumbIntermediate != null;
  if (r.humanBones)
    for (const o in r.humanBones) {
      let l = o;
      const h = r.humanBones[o].node, a = t.resource.data.nodes[h];
      if (n) {
        const c = q[l];
        c != null && (l = c);
      }
      if (a == null)
        return console.warn(
          `A glTF node bound to the humanoid bone ${l} (index = ${h}) does not exist`
        ), null;
      i[l] = {
        node: a,
        entity: ((s = e.findByTag(`node_${h}`)) == null ? void 0 : s[0]) || null
      };
    }
  return i;
}
function Ct(r, t, e, i) {
  var l, h, a, c, p, d, f, _, u, g;
  const n = (h = (l = t.resource.data.gltf) == null ? void 0 : l.extensions) == null ? void 0 : h.VRM, s = (c = (a = t.resource.data.gltf) == null ? void 0 : a.extensions) == null ? void 0 : c.VRMC_vrm;
  if (!n && !s)
    return console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar."), null;
  let o = null;
  if (n) {
    const x = (f = (d = (p = t.resource.data.gltf) == null ? void 0 : p.extensions) == null ? void 0 : d.VRM) == null ? void 0 : f.humanoid;
    o = At(x, t, e);
  } else if (s) {
    const x = s.specVersion;
    if (!U.has(x))
      return console.warn(`Unknown VRMC_vrm specVersion "${x}"`), null;
    const M = (g = (u = (_ = t.resource.data.gltf) == null ? void 0 : _.extensions) == null ? void 0 : u.VRMC_vrm) == null ? void 0 : g.humanoid;
    o = Vt(M, t, e);
  }
  if (o) {
    const x = !!(i != null && i.autoUpdateHumanBones);
    return new Et(r, o, { autoUpdateHumanBones: x });
  }
  return null;
}
const Nt = function(r, t, e, i, n, s) {
  const o = s;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = function(h) {
    const a = new Blob([h.resource]), c = URL.createObjectURL(a);
    return nt(
      r,
      c,
      e,
      i,
      function(p, d) {
        n(p, d), URL.revokeObjectURL(c);
      },
      o
    );
  };
  t.loaded ? l(t) : (t.ready(l), o.assets.load(t));
}, nt = function(r, t, e, i, n, s) {
  const o = s;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = i, h = {
    url: t,
    filename: l
  }, a = new r.Asset(l, "container", h, void 0, e);
  return a.once("load", function(c) {
    if (n) {
      const p = c.resource.animations;
      if (p.length == 1)
        p[0].name = i;
      else if (p.length > 1)
        for (let d = 0; d < p.length; ++d)
          p[d].name = i + " " + d.toString();
      n(null, c);
    }
  }), o.assets.add(a), o.assets.load(a), a;
};
var R, V, st, C, ot;
class Dt {
  constructor(t, e) {
    I(this, V);
    I(this, C);
    I(this, R, void 0);
    O(this, R, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, n = {}, s = !0) {
    const o = [];
    return new Promise(
      (l, h) => {
        const a = (c, p) => {
          var M, m;
          c && (this.loading = !1, h(`GLTFLoader Error: ${c}`)), P(this, R).forEach((w) => {
            const y = w(p);
            o.push(y);
          });
          const d = p.resource.data;
          s && D(this, C, ot).call(this, d, o);
          const f = p.resource.instantiateRenderEntity(n), _ = new this._pcRef.Entity(e, this.app);
          _.addChild(f), o.forEach((w) => {
            w.instantiated && w.instantiated(_);
          }), this.loading = !1;
          const u = (M = p.resource.data.gltf.extensions) == null ? void 0 : M.VRMC_vrm, g = (m = p.resource.data.gltf.extensions) == null ? void 0 : m.VRM;
          l({ entity: _, asset: p, version: u ? "v1" : g ? "v0" : null });
        };
        t || h("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? a(null, t) : (t.once("load", () => {
          a(null, t);
        }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? Nt(
          this._pcRef,
          t,
          i,
          e,
          a.bind(this),
          this.app
        ) : h("GLTFLoader Error: Please pass available asset or url to parse.") : nt(
          this._pcRef,
          t,
          i,
          e,
          a.bind(this),
          this.app
        );
      }
    );
  }
  // Register Plugin to loader
  register(t, e) {
    P(this, R).has(t) || P(this, R).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    P(this, R).has(t) && P(this, R).delete(t);
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
R = new WeakMap(), V = new WeakSet(), st = function(t, e) {
  t.forEach((i, n) => {
    const s = e[n].extensions;
    s && (i.extensions = s);
  });
}, C = new WeakSet(), ot = function(t, e) {
  const i = t.gltf.nodes, n = t.nodes;
  D(this, V, st).call(this, n, i), t.scenes.forEach((s) => {
    const o = /* @__PURE__ */ new Set([]);
    s.forEach((l) => {
      let h = !1, a = [];
      t.nodes.forEach((c, p) => {
        l.path === c.path && a.push(p);
      }), a.forEach((c) => {
        if (!o.has(c) && !h) {
          l.tags.add(`node_${c}`);
          const p = t.nodes[c].extensions;
          e.forEach((d) => {
            d.parsedNodeAddTags && d.parsedNodeAddTags(l, p);
          }), o.add(c), h = !0;
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
