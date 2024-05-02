/**
 * name: playcanvas-vrm
 * version: v1.0.3
 */
var H = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var k = (r, t, e) => (H(r, t, "read from private field"), e ? e.call(r) : t.get(r)), C = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, F = (r, t, e, i) => (H(r, t, "write to private field"), i ? i.call(r, e) : t.set(r, e), e);
var z = (r, t, e) => (H(r, t, "access private method"), e);
const J = [
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
], lt = {
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
}, O = {
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
}, ht = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
}, ct = {
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
}, dt = {
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
}, pt = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
class tt {
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
class $ extends tt {
  static _setupTransforms(t, e) {
    const i = {}, n = {}, s = {}, o = new t.Entity();
    return o.name = "VRMHumanoidRig", J.forEach((l) => {
      const h = e.getBoneNode(l);
      if (h) {
        const c = new t.Vec3(), d = new t.Quat(), a = h.getWorldTransform();
        a.getTranslation(c);
        const p = a.getEulerAngles();
        d.setFromEulerAngles(p), n[l] = c, s[l] = d, h.getLocalRotation().clone();
      }
    }), J.forEach((l) => {
      var d;
      const h = e.getBoneNode(l), c = n[l];
      if (h && c) {
        let a = l, p, _;
        for (; p == null && (a = lt[a], a != null); )
          p = n[a], _ = s[a];
        const g = new t.Entity();
        if (g.name = h.name, ((a ? (d = i[a]) == null ? void 0 : d.node : o) || o).addChild(g), g.setLocalPosition(c), p) {
          const f = g.getLocalPosition().clone();
          f.sub(p), g.setLocalPosition(f);
        }
        i[l] = { node: g }, _ ?? new t.Quat();
      }
    }), {
      rigBones: i,
      root: o
    };
  }
  constructor(t, e) {
    const { rigBones: i, root: n } = $._setupTransforms(t, e);
    super(i), this.root = n;
  }
}
class ut {
  constructor(t, e) {
    this._humanBones = e, this._rawHumanBones = new tt(e), this._normalizedHumanBones = new $(t, this._rawHumanBones);
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
    return ((e = this._humanBones[t]) == null ? void 0 : e.entity) || null;
  }
}
function ft(r, t, e) {
  const i = r.humanBones, n = i.findIndex((o) => o.bone === "leftThumbIntermediate" || o.bone === "rightThumbIntermediate"), s = {};
  return r.humanBones != null && Object.entries(i).map(([, o]) => {
    var d;
    let l = o.bone;
    const h = o.node;
    if (n !== -1) {
      const a = ht[l];
      a != null && (l = a);
    }
    const c = t.resource.data.nodes[h];
    if (c == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${l} (index = ${h}) does not exist`
      );
      return;
    }
    s[l] = {
      node: c,
      entity: ((d = e.findByTag(`node_${h}`)) == null ? void 0 : d[0]) || null
    };
  }), s;
}
function gt(r, t, e) {
  var n;
  const i = {};
  if (r.humanBones)
    for (const s in r.humanBones) {
      let o = s;
      const l = r.humanBones[s].node, h = t.resource.data.nodes[l];
      if (h == null)
        return console.warn(
          `A glTF node bound to the humanoid bone ${o} (index = ${l}) does not exist`
        ), null;
      i[o] = {
        node: h,
        entity: ((n = e.findByTag(`node_${l}`)) == null ? void 0 : n[0]) || null
      };
    }
  return i;
}
function et(r, t, e) {
  var l, h, c, d, a, p, _, g, m, f;
  const i = (h = (l = t.resource.data.gltf) == null ? void 0 : l.extensions) == null ? void 0 : h.VRM, n = (d = (c = t.resource.data.gltf) == null ? void 0 : c.extensions) == null ? void 0 : d.VRMC_vrm;
  if (!i && !n)
    return console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar."), null;
  let s = {};
  if (i) {
    const u = (_ = (p = (a = t.resource.data.gltf) == null ? void 0 : a.extensions) == null ? void 0 : p.VRM) == null ? void 0 : _.humanoid;
    s = ft(u, t, e);
  } else if (n) {
    const u = (f = (m = (g = t.resource.data.gltf) == null ? void 0 : g.extensions) == null ? void 0 : m.VRMC_vrm) == null ? void 0 : f.humanoid, x = gt(u, t, e);
    x && (s = x);
  }
  return new ut(r, s);
}
const mt = (r, t) => {
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
}, _t = (r, t, e, i, {
  vrmHipsHeight: n,
  vrmHipsDeep: s,
  motionHipsHeight: o,
  version: l = "v0"
}) => {
  const h = {}, c = {}, d = new r.Quat();
  return t.map((a) => {
    var _;
    const p = a.asset.type === "container" ? (_ = a.asset.resource.animations[0]) == null ? void 0 : _.resource : a.asset.resource;
    if (p) {
      const g = mt(r, p);
      let m = 0;
      if (a.asset.type === "container") {
        const u = a.asset.resource.data.nodes.find(
          (x) => x.name === O.hips
        );
        u && (m = u.getPosition().y);
      }
      o = o || m || 0.855;
      const f = n / o;
      return g.curves.forEach((u) => {
        u.paths.forEach((x) => {
          const M = x, T = M.propertyPath.find((v) => v === "localPosition"), R = M.entityPath[M.entityPath.length - 1] === O.hips;
          T && R && !h[u.output] && (h[u.output] = !0);
        });
      }), g.curves.forEach((u) => {
        let x = !1;
        u.paths.forEach((M) => {
          const T = M, R = T.entityPath.map((v) => {
            var I;
            const w = O[v], b = (I = i.getNormalizedBoneNode(w)) == null ? void 0 : I.name;
            return !w || !b ? v : b;
          });
          T.entityPath = R, T.propertyPath.find((v) => v === "localScale") && (x = !0);
        }), x && !c[u.output] && (c[u.output] = !0);
      }), g.outputs.forEach((u, x) => {
        var v;
        const M = c[x], T = g.curves.find((y) => y.output === x);
        let R = "";
        if (T) {
          const w = T.paths[0].entityPath;
          R = w[w.length - 1];
        }
        if (u.components === 3) {
          if (!M) {
            const y = u.data.map((w, b) => h[x] && b % 3 === 1 && (a.removeY || a.removeUpperY && w * f > n) ? n : h[x] && b % 3 === 2 && a.removeZ ? s : w * f);
            u._data = y;
          }
        } else if (l === "v1") {
          const y = [...u.data], w = e.findByName(R), b = w == null ? void 0 : w.getRotation().invert(), I = (v = w == null ? void 0 : w.parent) == null ? void 0 : v.getRotation();
          if (b && I)
            for (let S = 0; S < y.length; S += 4) {
              const B = y.slice(S, S + 4), P = new r.Quat(B), U = d.copy(I);
              P.copy(U.mul(P)), P.mul(b), B[0] = P.x, B[1] = P.y, B[2] = P.z, B[3] = P.w, B.forEach((A, at) => {
                y[at + S] = A;
              });
            }
          u._data = y;
        }
      }), {
        name: a.stateName,
        resource: g,
        ...a.setting && {
          setting: a.setting
        }
      };
    } else
      return console.error(
        `AddVrmAnimation: loadAnimation can't find available resource from ${a.stateName} asset.`
      ), null;
  }).filter((a) => a);
}, xt = (r, t, e, i, n, s) => {
  var m, f, u;
  let o = null;
  if (n ? o = n : e && i && (o = et(r, e, i)), !o)
    return console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".'), null;
  const l = (m = e.resource.data.gltf.extensions) == null ? void 0 : m.VRMC_vrm, h = (f = e.resource.data.gltf.extensions) == null ? void 0 : f.VRM, c = l ? "v1" : h ? "v0" : null, d = ((u = o.rawHumanBones.hips) == null ? void 0 : u.node.getPosition()) || new r.Vec3(), a = d.y, p = Math.abs(a - 0), _ = d.z, g = Math.abs(_ - 0);
  return _t(r, t, i, o, {
    vrmHipsHeight: p,
    vrmHipsDeep: g,
    ...s && { motionHipsHeight: s },
    ...c && { version: c }
  });
}, Mt = (r, {
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
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: Mt,
  createVRMAnimation: xt
}, Symbol.toStringTag, { value: "Module" }));
class Q {
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
function it(r) {
  return Math.max(Math.min(r, 1), 0);
}
function yt(r, t) {
  return r = Math.ceil(r), t = Math.floor(t), Math.floor(Math.random() * (t - r) + r);
}
function V(r, t) {
  return Math.random() * (t - r) + r;
}
function N(r, t, e = 0) {
  return r.x = t[e], r.y = t[e + 1], r.z = t[e + 2], r;
}
function G(r, t) {
  return r.copy(t.transformPoint(r));
}
class Tt {
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
    return this._shouldUpdateInverse && (this._inverseCache.copy(this.matrix), nt(this._pcRef, this._inverseCache), this._shouldUpdateInverse = !1), this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
function nt(r, t) {
  const e = new r.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function Rt(r, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (r.x = -t.y, r.y = t.x, r.z = 0, r.w = i) : (r.x = 0, r.y = -t.z, r.z = t.y, r.w = i)) : (r.x = t.y * e.z - t.z * e.y, r.y = t.z * e.x - t.x * e.z, r.z = t.x * e.y - t.y * e.x, r.w = i), r.normalize();
}
class X {
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
    i && (i.weight = it(e));
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
    const t = yt(0, this.talkExpressions.length - 1);
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
class Y {
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
    this.currentValue = t, this.weight = it(t);
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
      const s = i[this.currentTimeIndex + 1], o = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], h = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / o, c = this.currentValue + h * t;
      h > 0 && c >= s || h < 0 && s >= c ? this.setValue(s) : this.setValue(c);
    }
  }
}
class Z {
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
class vt {
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
    const s = new Set(Object.values(dt)), o = /* @__PURE__ */ new Map();
    n.preset != null && Object.entries(n.preset).forEach(([c, d]) => {
      if (d != null) {
        if (!s.has(c)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${c}" detected. Ignoring the expression`
          );
          return;
        }
        o.set(c, d);
      }
    }), n.custom != null && Object.entries(n.custom).forEach(([c, d]) => {
      if (s.has(c)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${c}". Ignoring the expression`
        );
        return;
      }
      o.set(c, d);
    });
    const l = new X();
    return Array.from(o.entries()).map(([c, d]) => {
      const a = new Y(c);
      a.isBinary = d.isBinary ?? !1, a.overrideBlink = d.overrideBlink ?? "none", a.overrideLookAt = d.overrideLookAt ?? "none", a.overrideMouth = d.overrideMouth ?? "none", d.morphTargetBinds && d.morphTargetBinds.forEach((p) => {
        if (p.node === void 0 || p.index === void 0)
          return;
        const _ = this.meshInstances.filter((m) => m.node.tags.has(`node_${p.node}`)), g = p.index;
        a.addBind(
          new Z({
            primitives: _,
            targetIndex: g,
            weight: p.weight ?? 1
          })
        );
      }), l.registerExpression(a);
    }), l;
  }
  _v0Import(t) {
    var h, c;
    if (!(((h = t.extensionsUsed) == null ? void 0 : h.indexOf("VRM")) !== -1))
      return null;
    const i = (c = t.extensions) == null ? void 0 : c.VRM;
    if (!i)
      return null;
    const n = i.blendShapeMaster;
    if (!n)
      return null;
    const s = new X(), o = n.blendShapeGroups;
    if (!o)
      return s;
    const l = /* @__PURE__ */ new Set();
    return o.map((d) => {
      const a = d.presetName, _ = (a != null && ct[a] || null) ?? d.name;
      if (_ == null) {
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (l.has(_)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${a} has duplicated entries. Ignoring the expression`
        );
        return;
      }
      l.add(_);
      const g = new Y(_);
      g.isBinary = d.isBinary ?? !1, d.binds && (d.binds.forEach((m) => {
        if (m.mesh === void 0 || m.index === void 0)
          return;
        const f = [];
        t.nodes.forEach((x, M) => {
          x.mesh === m.mesh && f.push({ gltfNode: x, index: M });
        });
        const u = m.index;
        f.map((x) => {
          const M = this.meshInstances.filter((T) => T.node.tags.has(`node_${x.index}`));
          g.addBind(
            new Z({
              primitives: M,
              targetIndex: u,
              weight: 0.01 * (m.weight ?? 100)
              // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
            })
          );
        });
      }), s.registerExpression(g));
    }), s;
  }
}
const bt = (r) => {
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
function Pt(r, t) {
  const e = [];
  let i = r;
  for (; i !== null; )
    e.unshift(i), i = i.parent;
  e.forEach((n) => {
    t(n);
  });
}
const Lt = (r) => {
  class t extends r.ScriptType {
    constructor() {
      super(...arguments), this.previousTalkName = "";
    }
    initialize() {
      const i = bt(this.entity), n = new vt(this.asset, i);
      this.expressionManager = n.import(), this.blinkTimer = new Q("blink"), this.talkTimer = new Q("talk"), this.startBlink(), this.entity.on("vrm-expression:start-emotion", this.startEmotion, this), this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this), this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this), this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
      });
    }
    // Specific Expression Animation
    startBlink(i) {
      const n = V(1, 5);
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
      const n = Math.random() * 0.5, s = Math.random() * 0.5 + 0.5, o = V(0.5, 1), l = V(0.4, 0.6) * o, h = V(0.4, 0.6) * o, c = [0, n, 0.5, s, 1].filter((p) => p * i), d = [0, l, o, h, 0], a = V(0.5, 1);
      this.expressionManager.startTalking(c, d), this.talkTimer.add(a, this.startTalking, this);
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
}, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: Lt
}, Symbol.toStringTag, { value: "Module" }));
class K {
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
      Pt(l, (h) => {
        const c = this._objectSpringBonesMap.get(h);
        if (c)
          for (const d of c)
            this._processSpringBone(
              d,
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
class It {
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
const q = (r) => class extends r.Entity {
  constructor(e) {
    super(), this.shape = e;
  }
};
class St {
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
class kt {
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
    (e = this._center) != null && e.userData.inverseCacheProxy && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = t, this._center && (this._center.userData || (this._center.userData = {}), this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new Tt(
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
    const n = this._quatA.setFromMat4(i), s = this._matB.copy(i).mul(this._parentMatrixWorld), o = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(s.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), l = this._v3A.copy(this.settings.gravityDir).copy(n.transformVector(this._v3A)).normalize(), h = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(o).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(l).mulScalar(this.settings.gravityPower * t)).copy(h.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const c = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, c.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
    );
    const d = nt(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
    ), a = Rt(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(d.transformPoint(this._v3A)).normalize()
    ), p = a.getEulerAngles();
    a.setFromEulerAngles(p.x * e, p.y * e, p.z * e);
    const _ = this._initialLocalRotation.clone().mul(a);
    this.bone.setLocalRotation(_);
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
const E = class E {
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
    var g, m;
    if (!(((g = t.extensionsUsed) == null ? void 0 : g.indexOf(E.EXTENSION_NAME)) !== -1) || !((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const s = new K(), o = t == null ? void 0 : t.nodes, l = (m = t.extensions) == null ? void 0 : m[E.EXTENSION_NAME];
    if (!l)
      return null;
    const h = l.specVersion;
    if (!pt.has(h))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${E.EXTENSION_NAME} specVersion "${h}"`
      ), null;
    const c = l.colliders, d = c == null ? void 0 : c.map((f, u) => {
      var T;
      const x = (T = this.entity.findByTag(`node_${f.node}`)) == null ? void 0 : T[0], M = f.shape;
      if (!x) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      if (M) {
        if (M.sphere)
          return this._importSphereCollider(x, {
            offset: N(new this._pcRef.Vec3(), M.sphere.offset ?? [0, 0, 0]),
            radius: M.sphere.radius ?? 0
          });
        if (M.capsule)
          return this._importCapsuleCollider(x, {
            offset: N(
              new this._pcRef.Vec3(),
              M.capsule.offset ?? [0, 0, 0]
            ),
            radius: M.capsule.radius ?? 0,
            tail: N(new this._pcRef.Vec3(), M.capsule.tail ?? [0, 0, 0])
          });
      }
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${u} has no valid shape`);
    }), a = l.colliderGroups, p = a == null ? void 0 : a.map((f, u) => ({
      colliders: (f.colliders ?? []).map((M) => {
        const T = d == null ? void 0 : d[M];
        if (T == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${u} attempted to use a collider #${M} but not found`
          );
        return T;
      }),
      name: f.name
    }));
    return l.springs.forEach((f, u) => {
      var v;
      const x = f.joints, M = (v = f.colliderGroups) == null ? void 0 : v.map((y) => {
        const w = p == null ? void 0 : p[y];
        if (w == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${u} attempted to use a colliderGroup ${y} but not found`
          );
        return w;
      }), T = f.center != null ? e.nodes[f.center] : void 0;
      let R;
      x.forEach((y) => {
        if (R) {
          const w = R.node, b = o[w], I = this.entity.findByName(b.name), S = y.node, B = o[S], P = this.entity.findByName(B.name), U = {
            hitRadius: R.hitRadius,
            dragForce: R.dragForce,
            gravityPower: R.gravityPower,
            stiffness: R.stiffness,
            gravityDir: R.gravityDir != null ? N(new this._pcRef.Vec3(), R.gravityDir) : void 0
          }, A = this._importJoint(I, P, U, M);
          T && (A.center = T), s.addJoint(A);
        }
        R = y;
      });
    }), s.setInitState(), s;
  }
  _v0Import(t, e) {
    var c, d, a;
    const i = (c = t.extensions) == null ? void 0 : c.VRM;
    if (!(((d = t.extensionsUsed) == null ? void 0 : d.indexOf("VRM")) !== -1))
      return null;
    const s = i == null ? void 0 : i.secondaryAnimation;
    if (!s)
      return null;
    const o = s == null ? void 0 : s.boneGroups;
    if (!o)
      return null;
    const l = new K(), h = (a = s.colliderGroups) == null ? void 0 : a.map((p) => {
      var m;
      const _ = (m = this.entity.findByTag(`node_${p.node}`)) == null ? void 0 : m[0];
      if (!_) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      return { colliders: (p.colliders ?? []).map((f) => {
        const u = new this._pcRef.Vec3(0, 0, 0);
        return f.offset && u.set(
          f.offset.x ?? 0,
          f.offset.y ?? 0,
          f.offset.z ? -f.offset.z : 0
          // z is opposite in VRM0.0
        ), this._importSphereCollider(_, {
          offset: u,
          radius: f.radius ?? 0
        });
      }) };
    });
    return o == null || o.forEach((p, _) => {
      const g = p.bones;
      g && g.forEach((m) => {
        var R, v;
        const f = (R = this.entity.findByTag(`node_${m}`)) == null ? void 0 : R[0];
        if (!f) {
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
        const u = new this._pcRef.Vec3();
        p.gravityDir ? u.set(
          p.gravityDir.x ?? 0,
          p.gravityDir.y ?? 0,
          p.gravityDir.z ?? 0
        ) : u.set(0, -1, 0);
        const x = p.center != null ? e.nodes[p.center] : void 0, M = {
          hitRadius: p.hitRadius,
          dragForce: p.dragForce,
          gravityPower: p.gravityPower,
          stiffness: p.stiffiness,
          gravityDir: u
        }, T = (v = p.colliderGroups) == null ? void 0 : v.map((y) => {
          const w = h == null ? void 0 : h[y];
          if (w == null)
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${_} attempted to use a colliderGroup ${y} but not found`
            );
          return w;
        });
        f.forEach((y) => {
          const w = y.children[0] ?? null, b = this._importJoint(y, w, M, T);
          x && (b.center = x), l.addJoint(b);
        });
      });
    }), l.setInitState(), l;
  }
  _importSphereCollider(t, { offset: e, radius: i }) {
    const n = new It(this._pcRef, { offset: e, radius: i }), s = q(this._pcRef), o = new s(n);
    return t.addChild(o), o;
  }
  _importCapsuleCollider(t, { offset: e, radius: i, tail: n }) {
    const s = new St(this._pcRef, {
      offset: e,
      radius: i,
      tail: n
    }), o = q(this._pcRef), l = new o(s);
    return t.addChild(l), l;
  }
  _importJoint(t, e, i, n) {
    return new kt(
      this._pcRef,
      t,
      e,
      i,
      n
    );
  }
};
E.EXTENSION_NAME = "VRMC_springBone";
let j = E;
const Et = (r) => {
  class t extends r.ScriptType {
    constructor() {
      super(...arguments), this.activeSpringBone = !0, this.isWalking = !1;
    }
    initialize() {
      const i = new j(r, this.asset, this.entity);
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
}, Vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: Et
}, Symbol.toStringTag, { value: "Module" })), At = function(r, t, e, i, n, s) {
  const o = s;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = function(h) {
    const c = new Blob([h.resource]), d = URL.createObjectURL(c);
    return st(
      r,
      d,
      e,
      i,
      function(a, p) {
        n(a, p), URL.revokeObjectURL(d);
      },
      o
    );
  };
  t.loaded ? l(t) : (t.ready(l), o.assets.load(t));
}, st = function(r, t, e, i, n, s) {
  const o = s;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const l = i, h = {
    url: t,
    filename: l
  }, c = new r.Asset(l, "container", h, void 0, e);
  return c.once("load", function(d) {
    if (n) {
      const a = d.resource.animations;
      if (a.length == 1)
        a[0].name = i;
      else if (a.length > 1)
        for (let p = 0; p < a.length; ++p)
          a[p].name = i + " " + p.toString();
      n(null, d);
    }
  }), o.assets.add(c), o.assets.load(c), c;
};
var L, D, rt, W, ot;
class Ct {
  constructor(t, e) {
    C(this, D);
    C(this, W);
    C(this, L, void 0);
    F(this, L, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, n = {}, s = !0) {
    const o = [];
    return new Promise((l, h) => {
      const c = (d, a) => {
        d && (this.loading = !1, h(`GLTFLoader Error: ${d}`)), k(this, L).forEach((m) => {
          const f = m(a);
          o.push(f);
        });
        const p = a.resource.data;
        s && z(this, W, ot).call(this, p, o);
        const _ = a.resource.instantiateRenderEntity(n), g = new this._pcRef.Entity(e, this.app);
        if (_.name !== "Room Objects" && e === "Objects") {
          const m = new this._pcRef.Entity("Room Objects");
          m.addChild(_), g.addChild(m);
        } else
          g.addChild(_);
        o.forEach((m) => {
          m.instantiated && m.instantiated(g);
        }), this.loading = !1, l({ entity: g, asset: a });
      };
      t || h("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? c(null, t) : (t.once("load", () => {
        c(null, t);
      }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? At(
        this._pcRef,
        t,
        i,
        e,
        c.bind(this),
        this.app
      ) : h("GLTFLoader Error: Please pass available asset or url to parse.") : st(
        this._pcRef,
        t,
        i,
        e,
        c.bind(this),
        this.app
      );
    });
  }
  // Register Plugin to loader
  register(t, e) {
    k(this, L).has(t) || k(this, L).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    k(this, L).has(t) && k(this, L).delete(t);
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
L = new WeakMap(), D = new WeakSet(), rt = function(t, e) {
  t.forEach((i, n) => {
    const s = e[n].extensions;
    s && (i.extensions = s);
  });
}, W = new WeakSet(), ot = function(t, e) {
  const i = t.gltf.nodes, n = t.nodes;
  z(this, D, rt).call(this, n, i), t.scenes.forEach((s) => {
    const o = /* @__PURE__ */ new Set([]);
    s.forEach((l) => {
      let h = !1, c = [];
      t.nodes.forEach((d, a) => {
        l.path === d.path && c.push(a);
      }), c.forEach((d) => {
        if (!o.has(d) && !h) {
          l.tags.add(`node_${d}`);
          const a = t.nodes[d].extensions;
          e.forEach((p) => {
            p.parsedNodeAddTags && p.parsedNodeAddTags(l, a);
          }), o.add(d), h = !0;
        }
      });
    });
  });
};
window.VRMLoader = {
  VrmAnimation: wt,
  VrmExpression: Bt,
  VrmSpringBone: Vt,
  createFormattedVRMHumanoid: et
};
window.GLTFLoader = Ct;
export {
  Ct as GLTFLoader,
  wt as VrmAnimation,
  Bt as VrmExpression,
  Vt as VrmSpringBone,
  et as createFormattedVRMHumanoid
};
