/**
 * name: playcanvas-vrm
 * version: v1.3.2
 */
var G = (o, t, e) => {
  if (!t.has(o))
    throw TypeError("Cannot " + e);
};
var E = (o, t, e) => (G(o, t, "read from private field"), e ? e.call(o) : t.get(o)), U = (o, t, e) => {
  if (t.has(o))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(o) : t.set(o, e);
}, Bt = (o, t, e, i) => (G(o, t, "write to private field"), i ? i.call(o, e) : t.set(o, e), e);
var Q = (o, t, e) => (G(o, t, "access private method"), e);
const z = [
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
], j = {
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
}, F = {
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
}, jt = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
}, $t = {
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
}, Xt = {
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
}, K = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]), ge = {
  _Color: "color",
  _EmissionColor: "emissionColor",
  _ShadeColor: "shadeColor",
  _RimColor: "rimColor",
  _OutlineColor: "outlineColor"
}, _e = {
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
}, xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POSSIBLE_SPEC_VERSIONS: K,
  VRMExpressionPresetName: Xt,
  VRMHumanBoneList: z,
  VRMHumanBoneParentMap: j,
  VRMRigMap: F,
  expressionMateriaPropertyNameMapMap: _e,
  thumbBoneNameMap: jt,
  v0ExpressionMaterialColorMap: ge,
  v0v1PresetNameMap: $t
}, Symbol.toStringTag, { value: "Module" }));
class Me {
  /*     public expressionTracks: {
      preset: Map<VRMExpressionPresetName, IVrmaTrack>;
      custom: Map<string, IVrmaTrack>; 
    };
    public lookAtTrack: IVrmaTrack | null;  */
  constructor(t) {
    this.duration = 0, this.restHipsPosition = new t.Vec3(), this.humanoidTracks = {
      translation: /* @__PURE__ */ new Map(),
      rotation: /* @__PURE__ */ new Map()
    };
  }
}
function Nt(o, t) {
  const e = o.length, i = [];
  let n = [], r = 0;
  for (let s = 0; s < e; s++) {
    const a = o[s];
    r <= 0 && (r = t, n = [], i.push(n)), n.push(a), r--;
  }
  return i;
}
function ve(o, t, e) {
  const i = e.data, n = 1 / (i[3] * t.x + i[7] * t.y + i[11] * t.z + i[15]), r = (i[0] * t.x + i[4] * t.y + i[8] * t.z + i[12]) * n, s = (i[1] * t.x + i[5] * t.y + i[9] * t.z + i[13]) * n, a = (i[2] * t.x + i[6] * t.y + i[10] * t.z + i[14]) * n;
  return new o.Vec3(r, s, a);
}
function Yt(o, t) {
  const e = t.inputs.map(
    (r) => new o.AnimData(r.components, r.data)
  ), i = t.outputs.map(
    (r) => new o.AnimData(r.components, r.data)
  ), n = t.curves.map((r) => {
    const s = r.paths.map((a) => {
      const h = a;
      return {
        component: h.component,
        entityPath: [...h.entityPath],
        propertyPath: [...h.propertyPath]
      };
    });
    return new o.AnimCurve(s, r.input, r.output, r.interpolation);
  });
  return new o.AnimTrack(t.name, t.duration, e, i, n);
}
const Te = /* @__PURE__ */ new Set(["1.0", "1.0-draft"]);
class we {
  constructor(t) {
    this.pcRef = t;
  }
  loadVRMA(t) {
    var x, f, u;
    const e = t.resource.data.gltf, i = e.extensionsUsed;
    if (i == null || i.indexOf("VRMC_vrm_animation") == -1) {
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const n = (x = e.extensions) == null ? void 0 : x.VRMC_vrm_animation;
    if (n == null) {
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const r = n.specVersion;
    if (!Te.has(r)) {
      console.warn(`CreateVRMAnimation: Unknown VRMC_vrm_animation spec version: ${r}`);
      return;
    }
    r === "1.0-draft" && console.warn(
      "CreateVRMAnimation: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file."
    );
    const s = t.resource.data.nodes, a = this._createNodeMap(e, n), h = this._createBoneWorldMatrixMap(s, n), l = (u = (f = n.humanoid) == null ? void 0 : f.humanBones.hips) == null ? void 0 : u.node, c = l != null ? s[l] : null, m = c ? c.getPosition() : new this.pcRef.Vec3();
    return t.resource.data.animations.map((p, _) => {
      const M = e.animations[_], v = this._parseAnimation(p, M, a, h);
      return v.restHipsPosition = m, v;
    });
  }
  _createNodeMap(t, e) {
    var m, d, g, x;
    const i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), s = t.nodes;
    s && s.forEach((f, u) => {
      f.name && i.set(f.name, u);
    });
    const a = (m = e.humanoid) == null ? void 0 : m.humanBones;
    a && Object.entries(a).forEach(([f, u]) => {
      const p = u == null ? void 0 : u.node;
      p != null && n.set(p, f);
    });
    const h = (d = e.expressions) == null ? void 0 : d.preset;
    h && Object.entries(h).forEach(([f, u]) => {
      const p = u == null ? void 0 : u.node;
      p != null && r.set(p, f);
    });
    const l = (g = e.expressions) == null ? void 0 : g.custom;
    l && Object.entries(l).forEach(([f, u]) => {
      const { node: p } = u;
      r.set(p, f);
    });
    const c = ((x = e.lookAt) == null ? void 0 : x.node) ?? null;
    return { origNameToHumanoidIndex: i, humanoidIndexToName: n, expressionsIndexToName: r, lookAtIndex: c };
  }
  //In THREE, it's async
  _createBoneWorldMatrixMap(t, e) {
    var n;
    const i = /* @__PURE__ */ new Map();
    if (e.humanoid == null)
      return i;
    for (const [r, s] of Object.entries(e.humanoid.humanBones)) {
      const a = s == null ? void 0 : s.node;
      if (a != null) {
        const h = t[a];
        i.set(r, h.getWorldTransform());
        const l = new this.pcRef.Mat4();
        r === "hips" && i.set("hipsParent", ((n = h.parent) == null ? void 0 : n.getWorldTransform()) ?? l);
      }
    }
    return i;
  }
  _parseAnimation(t, e, i, n) {
    const { inputs: r, outputs: s, curves: a } = Yt(this.pcRef, t), h = e.channels, l = new Me(this.pcRef);
    return l.duration = t.duration, h.forEach((c, m) => {
      const { node: d, path: g } = c.target, x = r[m], f = s[m], u = a[m];
      if (d == null)
        return;
      const p = i.humanoidIndexToName.get(d);
      if (p != null) {
        let _ = j[p];
        for (; _ != null && n.get(_) == null; )
          _ = j[_];
        if (_ ?? (_ = "hipsParent"), u.paths.forEach((M) => {
          const v = M, T = v.entityPath.map((y) => {
            const S = i.origNameToHumanoidIndex.get(y);
            if (S) {
              const w = i.humanoidIndexToName.get(S);
              return w || p;
            } else
              return p;
          });
          v.entityPath = T;
        }), g === "translation")
          if (p !== "hips")
            console.warn(
              `The loading animation contains a translation track for ${p}, which is not permitted in the VRMC_vrm_animation spec. ignoring the track`
            );
          else {
            const M = n.get("hipsParent"), v = Nt(f.data, 3).flatMap((w) => {
              let P = new this.pcRef.Vec3(w[0], w[1], w[2]);
              return P = ve(this.pcRef, P, M), [P.x, P.y, P.z];
            }), T = new Float32Array(v), y = new this.pcRef.AnimData(f.components, T), S = { curve: u, input: x, output: y };
            l.humanoidTracks.translation.set(p, S);
          }
        else if (g === "rotation") {
          const M = n.get(p), v = n.get(_), T = M.getEulerAngles(), y = new this.pcRef.Quat();
          y.setFromEulerAngles(T), y.invert();
          const S = v.getEulerAngles(), w = new this.pcRef.Quat();
          w.setFromEulerAngles(S);
          const P = Nt(f.data, 4).flatMap((b) => {
            let R = new this.pcRef.Quat(b[0], b[1], b[2], b[3]);
            return R = R.mul2(w, R).mul(y), [R.x, R.y, R.z, R.w];
          }), I = new Float32Array(P), C = new this.pcRef.AnimData(f.components, I), V = { curve: u, input: x, output: C };
          l.humanoidTracks.rotation.set(p, V);
        } else
          throw new Error(`Invalid path "${g}"`);
        return;
      }
    }), l;
  }
}
class Se {
  constructor(t, e, i, n, r = "v0") {
    this.pcRef = t, this.vrmAnimation = i, this.name = e, this.humanoid = n, this.metaVersion = r;
  }
  get result() {
    return this.createVRMAnimTrack();
  }
  createVRMAnimTrack() {
    const t = [], e = [], i = [], n = [], r = this._createVRMAnimationHumanoidTracks();
    n.push(...r.translation.values()), n.push(...r.rotation.values());
    for (let s = 0; s < n.length; s++) {
      t.push(n[s].input), e.push(n[s].output);
      const a = new this.pcRef.AnimCurve(
        n[s].curve.paths,
        s,
        s,
        n[s].curve.interpolation
      );
      i.push(a), n[s].curve.paths.forEach((l) => {
        const c = l, m = c.entityPath;
        m.unshift("SkeletonRoot");
        const d = m.map((g) => {
          var p;
          const f = F[g], u = (p = this.humanoid.getRawBoneNode(f)) == null ? void 0 : p.name;
          return !f || !u ? g : u;
        });
        d.length == 1 && d[0] == "hips" && d.unshift("SkeletonRoot"), c.entityPath = d;
      });
    }
    return new this.pcRef.AnimTrack(this.name, this.vrmAnimation.duration, t, e, i);
  }
  _createVRMAnimationHumanoidTracks() {
    var i, n, r;
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const [s, a] of this.vrmAnimation.humanoidTracks.translation.entries())
      if (((i = this.humanoid.getNormalizedBoneNode(s)) == null ? void 0 : i.name) != null) {
        const l = this.vrmAnimation.restHipsPosition.y, d = (((n = this.humanoid.rawHumanBones.hips) == null ? void 0 : n.node.getPosition()) || new this.pcRef.Vec3()).y / l, g = a.output.data.map(
          (p, _) => (this.metaVersion === "v0" && _ % 3 !== 1 ? -p : p) * d
        ), x = new Float32Array(g), f = new this.pcRef.AnimData(a.output.components, x), u = {
          curve: a.curve,
          input: a.input,
          output: f
        };
        t.set(s, u);
      }
    for (const [s, a] of this.vrmAnimation.humanoidTracks.rotation.entries())
      if (((r = this.humanoid.getNormalizedBoneNode(s)) == null ? void 0 : r.name) != null) {
        const l = a.output.data.map(
          (g, x) => this.metaVersion === "v0" && x % 2 === 0 ? -g : g
        ), c = new Float32Array(l), m = new this.pcRef.AnimData(a.output.components, c), d = {
          curve: a.curve,
          input: a.input,
          output: m
        };
        e.set(s, d);
      }
    return { translation: t, rotation: e };
  }
}
class ye {
  constructor(t, e, i, n = "v0", r, s) {
    this.pcRef = t, this.animationAsset = e, this.humanoid = i, this.metaVersion = n, this.extraSettings = r, this.origAnimTrack = s;
  }
  get result() {
    return this.createViverseAnimTrack();
  }
  createViverseAnimTrack() {
    var f;
    const t = ((f = this.humanoid.rawHumanBones.hips) == null ? void 0 : f.node.getPosition()) || new this.pcRef.Vec3(), e = t.y, i = Math.abs(e - 0), n = t.z, r = Math.abs(n - 0), s = {}, a = {};
    let { motionHipsHeight: h, negativeZAnimNames: l } = this.extraSettings;
    l || (l = []);
    const c = Yt(this.pcRef, this.origAnimTrack), d = l.includes(this.origAnimTrack.name) ? "v1" : "v0";
    let g = 0;
    if (this.animationAsset.asset.type === "container") {
      const u = this.animationAsset.asset.resource.data.nodes.find(
        (p) => p.name === F.hips
      );
      u && (g = u.getPosition().y);
    }
    h = h || g || 0.855;
    const x = i / h;
    return c.curves.forEach((u) => {
      u.paths.forEach((p) => {
        const _ = p, M = _.propertyPath.find((T) => T === "localPosition"), v = _.entityPath[_.entityPath.length - 1] === F.hips;
        M && v && !s[u.output] && (s[u.output] = !0);
      });
    }), c.curves.forEach((u) => {
      let p = !1;
      u.paths.forEach((_) => {
        const M = _, v = M.entityPath.map((T) => {
          var P;
          const S = F[T], w = (P = this.humanoid.getRawBoneNode(S)) == null ? void 0 : P.name;
          return !S || !w ? T : w;
        });
        M.entityPath = v, M.propertyPath.find((T) => T === "localScale") && (p = !0);
      }), p && !a[u.output] && (a[u.output] = !0);
    }), c.outputs.forEach((u, p) => {
      const _ = a[p];
      if (u.components === 3) {
        if (!_) {
          const M = u.data.map((v, T) => {
            let y = v;
            return this.metaVersion === d && T % 3 !== 1 && (y *= -1), s[p] && T % 3 === 1 && (this.animationAsset.removeY || this.animationAsset.removeUpperY && v * x > i) ? i : s[p] && T % 3 === 2 && this.animationAsset.removeZ ? r : y * x;
          });
          u._data = M;
        }
      } else if (u.components === 4) {
        const M = u.data.map((v, T) => this.metaVersion === d && T % 2 === 0 ? -v : v);
        u._data = M;
      }
    }), c;
  }
}
function Pe(o, t, e, i, {
  motionHipsHeight: n,
  negativeZAnimNames: r
} = {}) {
  const s = { motionHipsHeight: n, negativeZAnimNames: r };
  return console.warn(
    "Warning: createVRMAnimation is deprecated. Please use createVRMAnimResources instead."
  ), Gt(o, t, e, i, s);
}
function Gt(o, t, e, i, n = {}) {
  var c, m;
  if (!e) {
    console.error('CreateVRMAnimResources: Please provide "vrm asset".');
    return;
  }
  if (!t) {
    console.error('CreateVRMAnimResources: Please provide "animation assets".');
    return;
  }
  if (!i) {
    console.error('CreateVRMAnimResources: Please provide "humanoid" or "asset and entity".');
    return;
  }
  const r = (c = e.resource.data.gltf.extensions) == null ? void 0 : c.VRMC_vrm, s = (m = e.resource.data.gltf.extensions) == null ? void 0 : m.VRM, a = r ? "v1" : s ? "v0" : null, h = (d, g) => d == "animation" ? !1 : d == "container" ? !!(g && g.includes("VRMC_vrm_animation") && g.indexOf("VRMC_vrm_animation") !== -1) : !1, l = [];
  return t.forEach((d) => {
    var u;
    const g = d.asset.resource, x = d.asset.type;
    let f;
    if (!g)
      f = null, console.warn(
        `createVRMAnimResources: loadAnimation can't find available resource from ${d.stateName} asset.`
      );
    else {
      const p = (u = g.data) == null ? void 0 : u.gltf.extensionsUsed;
      h(x, p) ? f = Le(o, d, i, a) : f = be(
        o,
        d,
        i,
        a,
        n
      );
    }
    f && l.push(f);
  }), l;
}
const Re = (o, t) => {
  o.anim ? o.anim.assignAnimation(
    t.name,
    t.resource,
    t.setting && t.setting.layerName !== void 0 ? t.setting.layerName : void 0,
    t.setting && t.setting.speed !== void 0 ? t.setting.speed : 1,
    t.setting && t.setting.loop !== void 0 ? t.setting.loop : !0
  ) : console.error("AssignAnimation: Please set the anim component on the entity.");
};
function Le(o, t, e, i) {
  var a, h, l, c;
  const r = new we(o).loadVRMA(t.asset);
  let s = (c = (l = (h = (a = t.asset.resource.animations) == null ? void 0 : a[0]) == null ? void 0 : h.resources) == null ? void 0 : l[0]) == null ? void 0 : c.name;
  if (s || (s = ""), r) {
    const m = new Se(
      o,
      s,
      r[0],
      e,
      i
    ).result;
    return { name: t.stateName, resource: m };
  }
  return null;
}
function be(o, t, e, i, n) {
  var s, a;
  const r = t.asset.type === "container" ? (a = (s = t.asset.resource.animations) == null ? void 0 : s[0]) == null ? void 0 : a.resource : t.asset.resource;
  if (r) {
    const h = new ye(
      o,
      t,
      e,
      i,
      n,
      r
    ).result;
    return {
      name: t.stateName,
      resource: h,
      ...t.setting && {
        setting: t.setting
      }
    };
  } else
    return console.error(
      `CreateViverseAnimResource: loadAnimation can't find valid resource from ${t.stateName} asset.`
    ), null;
}
const Ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: Re,
  createVRMAnimResources: Gt,
  createVRMAnimation: Pe
}, Symbol.toStringTag, { value: "Module" }));
class Ft {
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
function Qt(o) {
  return Math.max(Math.min(o, 1), 0);
}
function Ee(o, t) {
  return o = Math.ceil(o), t = Math.floor(t), Math.floor(Math.random() * (t - o) + o);
}
function N(o, t) {
  return Math.random() * (t - o) + o;
}
function O(o, t, e = 0) {
  return o.x = t[e], o.y = t[e + 1], o.z = t[e + 2], o;
}
function Dt(o, t) {
  return o.copy(t.transformPoint(o));
}
class Ae {
  constructor(t, e) {
    this._pcRef = t, this.matrix = e, this._inverseCache = new this._pcRef.Mat4(), this._shouldUpdateInverse = !0;
    const i = {
      // @ts-ignore
      set: (n, r, s) => (this._shouldUpdateInverse = !0, n[r] = s, !0)
    };
    this._originalElements = e.data, this.matrix.set(new Proxy(Array.from(e.data), i));
  }
  /**
   * Inverse of given matrix.
   * Note that it will return its internal private instance.
   * Make sure copying this before mutate this.
   */
  get inverse() {
    return this._shouldUpdateInverse && (this._inverseCache.copy(this.matrix), Zt(this._pcRef, this._inverseCache), this._shouldUpdateInverse = !1), this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
function Zt(o, t) {
  const e = new o.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function ke(o, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (o.x = -t.y, o.y = t.x, o.z = 0, o.w = i) : (o.x = 0, o.y = -t.z, o.z = t.y, o.w = i)) : (o.x = t.y * e.z - t.z * e.y, o.y = t.z * e.x - t.x * e.z, o.z = t.x * e.y - t.y * e.x, o.w = i), o.normalize();
}
class Ut {
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
    const t = this.getExpression("aa"), e = this.getExpression("ee"), i = this.getExpression("ih"), n = this.getExpression("oh"), r = this.getExpression("ou");
    return [t, e, i, n, r].filter(
      (s) => s
    );
  }
  setValue(t, e) {
    const i = this.getExpression(t);
    i && (i.weight = Qt(e));
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
    const t = Ee(0, this.talkExpressions.length - 1);
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
      const r = i.expressionName;
      this.blinkExpressionNames.indexOf(r) !== -1 && (n *= e.blink), this.lookAtExpressionNames.indexOf(r) !== -1 && (n *= e.lookAt), this.mouthExpressionNames.indexOf(r) !== -1 && (n *= e.mouth), i.applyWeight({ multiplier: n }), i.weight !== 0 && (this.isBackToBlink = !1);
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
class Ot {
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
    this.currentValue = t, this.weight = Qt(t);
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
      const r = i[0];
      this.setValue(r);
    }
    if (this.time >= e[e.length - 1]) {
      this.resetAnimatedMorph();
      const r = i[i.length - 1];
      this.setValue(r);
      return;
    }
    this.time += t;
    const n = this.time < e[1] ? 0 : e.findIndex(
      (r, s) => e[s - 1] < this.time && e[s + 1] > this.time
    );
    if (n !== -1) {
      this.currentTimeIndex !== n && (this.currentValue = i[n]), this.currentTimeIndex = n;
      const r = i[this.currentTimeIndex + 1], s = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], h = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / s, l = this.currentValue + h * t;
      h > 0 && l >= r || h < 0 && r >= l ? this.setValue(r) : this.setValue(l);
    }
  }
}
class Wt {
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
class Ie {
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
    const r = new Set(Object.values(Xt)), s = /* @__PURE__ */ new Map();
    n.preset != null && Object.entries(n.preset).forEach(([l, c]) => {
      if (c != null) {
        if (!r.has(l)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${l}" detected. Ignoring the expression`
          );
          return;
        }
        s.set(l, c);
      }
    }), n.custom != null && Object.entries(n.custom).forEach(([l, c]) => {
      if (r.has(l)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${l}". Ignoring the expression`
        );
        return;
      }
      s.set(l, c);
    });
    const a = new Ut();
    return Array.from(s.entries()).map(([l, c]) => {
      const m = new Ot(l);
      m.isBinary = c.isBinary ?? !1, m.overrideBlink = c.overrideBlink ?? "none", m.overrideLookAt = c.overrideLookAt ?? "none", m.overrideMouth = c.overrideMouth ?? "none", c.morphTargetBinds && c.morphTargetBinds.forEach((d) => {
        if (d.node === void 0 || d.index === void 0)
          return;
        const g = this.meshInstances.filter((f) => f.node.tags.has(`node_${d.node}`)), x = d.index;
        m.addBind(
          new Wt({
            primitives: g,
            targetIndex: x,
            weight: d.weight ?? 1
          })
        );
      }), a.registerExpression(m);
    }), a;
  }
  _v0Import(t) {
    var h, l;
    if (!(((h = t.extensionsUsed) == null ? void 0 : h.indexOf("VRM")) !== -1))
      return null;
    const i = (l = t.extensions) == null ? void 0 : l.VRM;
    if (!i)
      return null;
    const n = i.blendShapeMaster;
    if (!n)
      return null;
    const r = new Ut(), s = n.blendShapeGroups;
    if (!s)
      return r;
    const a = /* @__PURE__ */ new Set();
    return s.map((c) => {
      const m = c.presetName, g = (m != null && $t[m] || null) ?? c.name;
      if (g == null) {
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (a.has(g)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${m} has duplicated entries. Ignoring the expression`
        );
        return;
      }
      a.add(g);
      const x = new Ot(g);
      x.isBinary = c.isBinary ?? !1, c.binds && (c.binds.forEach((f) => {
        if (f.mesh === void 0 || f.index === void 0)
          return;
        const u = [];
        t.nodes.forEach((_, M) => {
          _.mesh === f.mesh && u.push({ gltfNode: _, index: M });
        });
        const p = f.index;
        u.map((_) => {
          const M = this.meshInstances.filter((v) => v.node.tags.has(`node_${_.index}`));
          x.addBind(
            new Wt({
              primitives: M,
              targetIndex: p,
              weight: 0.01 * (f.weight ?? 100)
              // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
            })
          );
        });
      }), r.registerExpression(x));
    }), r;
  }
}
const Ve = (o) => {
  const t = [];
  if (o) {
    const e = o.findComponents("render");
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      if (n.meshInstances)
        for (let r = 0; r < n.meshInstances.length; r++) {
          const s = n.meshInstances[r];
          t.push(s);
        }
    }
  }
  return t;
};
function Be(o, t) {
  const e = [];
  let i = o;
  for (; i !== null; )
    e.unshift(i), i = i.parent;
  e.forEach((n) => {
    t(n);
  });
}
const Ne = (o) => {
  class t extends o.ScriptType {
    constructor() {
      super(...arguments), this.previousTalkName = "";
    }
    initialize() {
      const i = Ve(this.entity), n = new Ie(this.asset, i);
      this.expressionManager = n.import(), this.blinkTimer = new Ft("blink"), this.talkTimer = new Ft("talk"), this.startBlink(), this.entity.on("vrm-expression:start-emotion", this.startEmotion, this), this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this), this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this), this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
      });
    }
    // Specific Expression Animation
    startBlink(i) {
      const n = N(1, 5);
      this.expressionManager && (this.expressionManager.startBlink(1, i), this.blinkTimer.add(n, this.startBlink, this));
    }
    stopBlink(i) {
      this.expressionManager && (this.stopExpressionLoop("blink"), this.expressionManager.stopBlink(), i && this.blinkTimer.add(i, this.startBlink, this));
    }
    startEmotion(i, n) {
      if (!this.expressionManager)
        return;
      this.expressionManager.startEmotion(i, n);
      const r = n ? n.times[n.times.length - 1] : 3;
      this.stopBlink(r);
    }
    startTalking(i = 0.25) {
      if (!this.expressionManager)
        return;
      const n = Math.random() * 0.5, r = Math.random() * 0.5 + 0.5, s = N(0.5, 1), a = N(0.4, 0.6) * s, h = N(0.4, 0.6) * s, l = [0, n, 0.5, r, 1].filter((d) => d * i), c = [0, a, s, h, 0], m = N(0.5, 1);
      this.expressionManager.startTalking(l, c), this.talkTimer.add(m, this.startTalking, this);
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
  o.registerScript(t, "vrmExpression"), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: Ne
}, Symbol.toStringTag, { value: "Module" }));
class Ht {
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
        (r) => r.setInitState()
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
        (r) => r.reset()
      );
  }
  update(t, e) {
    const i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
    e ? (this.strength >= this.limitHeight ? (this.direction = -0.2, this.limitHeight = Math.random() * (0.2 - this.limitLow) + this.limitLow) : this.strength <= this.limitLow && (this.direction = 0.2, this.limitLow = Math.random() * 0.2), this.strength += this.direction * t) : this.strength <= 0.5 && (this.strength += 0.1 * t);
    for (const s of this._joints)
      this._processSpringBone(
        s,
        i,
        n,
        r,
        (a) => {
          a.update(t, this.strength);
        }
      );
  }
  _processSpringBone(t, e, i, n, r) {
    if (i.has(t))
      return;
    if (e.has(t))
      throw new Error(
        "VRMSpringBoneManager: Circular dependency detected while updating springbones"
      );
    e.add(t);
    const s = this._getDependencies(t);
    for (const a of s)
      Be(a, (h) => {
        const l = this._objectSpringBonesMap.get(h);
        if (l)
          for (const c of l)
            this._processSpringBone(
              c,
              e,
              i,
              n,
              r
            );
        else
          n.has(h) || n.add(h);
      });
    r(t), n.add(t.bone), i.add(t);
  }
  // Return a set of objects that are dependant of given spring bone.
  _getDependencies(t) {
    var n;
    const e = /* @__PURE__ */ new Set(), i = t.bone.parent;
    return i && e.add(i), (n = t.colliderGroups) == null || n.forEach((r) => {
      r.colliders.forEach((s) => {
        e.add(s);
      });
    }), e;
  }
}
class De {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0;
  }
  get type() {
    return "sphere";
  }
  calculateCollision(t, e, i, n) {
    n.copy(this.offset).copy(t.transformPoint(n)), n.mulScalar(-1).add(e);
    const r = i + this.radius, s = n.length() - r;
    return n.normalize(), s;
  }
}
const zt = (o) => class extends o.Entity {
  constructor(e) {
    super(), this.shape = e;
  }
};
class Ue {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.tail = (e == null ? void 0 : e.tail) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0, this._v3A = new t.Vec3(), this._v3B = new t.Vec3();
  }
  get type() {
    return "capsule";
  }
  calculateCollision(t, e, i, n) {
    this._v3A.copy(this.offset).copy(t.transformPoint(this._v3A)), this._v3B.copy(this.tail).copy(t.transformPoint(this._v3B)), this._v3B.sub(this._v3A);
    const r = this._v3B.lengthSq();
    n.copy(e).sub(this._v3A);
    const s = this._v3B.dot(n);
    s <= 0 || (r <= s ? n.sub(this._v3B) : (this._v3B.mulScalar(s / r), n.sub(this._v3B)));
    const a = i + this.radius, h = n.length() - a;
    return n.normalize(), h;
  }
}
class Oe {
  constructor(t, e, i, n = {}, r = []) {
    var s;
    this._center = null, this._worldSpaceBoneLength = 0, this._pcRef = t, this._v3A = new this._pcRef.Vec3(), this._v3B = new this._pcRef.Vec3(), this._nextTail = new this._pcRef.Vec3(), this._quatA = new this._pcRef.Quat(), this._matA = new this._pcRef.Mat4(), this._matB = new this._pcRef.Mat4(), this._identityMat4 = new this._pcRef.Mat4(), this._worldSpacePosition = new this._pcRef.Vec3(), this._centerSpacePosition = new this._pcRef.Vec3(), this._matrixWorldToCenterTranslation = new this._pcRef.Vec3(), this._worldSpaceBoneLength = 0, this.bone = e, this.child = i, this.settings = {
      hitRadius: n.hitRadius ?? 0,
      stiffness: n.stiffness ?? 1,
      gravityPower: n.gravityPower ?? 0,
      gravityDir: ((s = n.gravityDir) == null ? void 0 : s.clone()) ?? new this._pcRef.Vec3(0, -1, 0),
      dragForce: n.dragForce ?? 0.4
    }, this.colliderGroups = r, this._initialLocalMatrix = new this._pcRef.Mat4(), this._initialLocalRotation = new this._pcRef.Quat(), this._initialLocalChildPosition = new this._pcRef.Vec3(), this._currentTail = new this._pcRef.Vec3(), this._prevTail = new this._pcRef.Vec3(), this._boneAxis = new this._pcRef.Vec3(), this._center = null;
  }
  get center() {
    return this._center;
  }
  set center(t) {
    var e;
    (e = this._center) != null && e.userData.inverseCacheProxy && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = t, this._center && (this._center.userData || (this._center.userData = {}), this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new Ae(
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
    Dt(this._currentTail.copy(this._initialLocalChildPosition), t), this._prevTail.copy(this._currentTail), this._boneAxis.copy(this._initialLocalChildPosition).normalize();
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
    Dt(this._currentTail.copy(this._initialLocalChildPosition), n), this._currentTail.copy(i.transformPoint(this._currentTail)), this._prevTail.copy(this._currentTail);
  }
  update(t, e) {
    if (t <= 0)
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
    let i = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0), i.getTranslation(this._matrixWorldToCenterTranslation), this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const n = this._quatA.setFromMat4(i), r = this._matB.copy(i).mul(this._parentMatrixWorld), s = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(r.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), a = this._v3A.copy(this.settings.gravityDir).copy(n.transformVector(this._v3A)).normalize(), h = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(s).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(a).mulScalar(this.settings.gravityPower * t)).copy(h.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const l = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, l.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
    );
    const c = Zt(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
    ), m = ke(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(c.transformPoint(this._v3A)).normalize()
    ), d = m.getEulerAngles();
    m.setFromEulerAngles(d.x * e, d.y * e, d.z * e);
    const g = this._initialLocalRotation.clone().mul(m);
    this.bone.setLocalRotation(g);
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
        const r = n.shape.calculateCollision(
          n.getWorldTransform(),
          t,
          this.settings.hitRadius,
          this._v3A
        );
        r < 0 && (t.add(this._v3A.mulScalar(-r)), t.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition));
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
    const n = this._v0Import(t, e);
    return n || null;
  }
  _v1Import(t, e) {
    var x, f;
    if (!(((x = t.extensionsUsed) == null ? void 0 : x.indexOf(k.EXTENSION_NAME)) !== -1) || !((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const r = new Ht(), s = t == null ? void 0 : t.nodes, a = (f = t.extensions) == null ? void 0 : f[k.EXTENSION_NAME];
    if (!a)
      return null;
    const h = a.specVersion;
    if (!K.has(h))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${k.EXTENSION_NAME} specVersion "${h}"`
      ), null;
    const l = a.colliders, c = l == null ? void 0 : l.map((u, p) => {
      var v;
      const _ = (v = this.entity.findByTag(`node_${u.node}`)) == null ? void 0 : v[0], M = u.shape;
      if (!_) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      if (M) {
        if (M.sphere)
          return this._importSphereCollider(_, {
            offset: O(new this._pcRef.Vec3(), M.sphere.offset ?? [0, 0, 0]),
            radius: M.sphere.radius ?? 0
          });
        if (M.capsule)
          return this._importCapsuleCollider(_, {
            offset: O(
              new this._pcRef.Vec3(),
              M.capsule.offset ?? [0, 0, 0]
            ),
            radius: M.capsule.radius ?? 0,
            tail: O(new this._pcRef.Vec3(), M.capsule.tail ?? [0, 0, 0])
          });
      }
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape`);
    }), m = a.colliderGroups, d = m == null ? void 0 : m.map((u, p) => ({
      colliders: (u.colliders ?? []).map((M) => {
        const v = c == null ? void 0 : c[M];
        if (v == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${p} attempted to use a collider #${M} but not found`
          );
        return v;
      }),
      name: u.name
    }));
    return a.springs.forEach((u, p) => {
      var y;
      const _ = u.joints, M = (y = u.colliderGroups) == null ? void 0 : y.map((S) => {
        const w = d == null ? void 0 : d[S];
        if (w == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${p} attempted to use a colliderGroup ${S} but not found`
          );
        return w;
      }), v = u.center != null ? e.nodes[u.center] : void 0;
      let T;
      _.forEach((S) => {
        if (T) {
          const w = T.node, P = s[w], I = this.entity.findByName(P.name), C = S.node, V = s[C], b = this.entity.findByName(V.name), R = {
            hitRadius: T.hitRadius,
            dragForce: T.dragForce,
            gravityPower: T.gravityPower,
            stiffness: T.stiffness,
            gravityDir: T.gravityDir != null ? O(new this._pcRef.Vec3(), T.gravityDir) : void 0
          }, B = this._importJoint(I, b, R, M);
          v && (B.center = v), r.addJoint(B);
        }
        T = S;
      });
    }), r.setInitState(), r;
  }
  _v0Import(t, e) {
    var l, c, m;
    const i = (l = t.extensions) == null ? void 0 : l.VRM;
    if (!(((c = t.extensionsUsed) == null ? void 0 : c.indexOf("VRM")) !== -1))
      return null;
    const r = i == null ? void 0 : i.secondaryAnimation;
    if (!r)
      return null;
    const s = r == null ? void 0 : r.boneGroups;
    if (!s)
      return null;
    const a = new Ht(), h = (m = r.colliderGroups) == null ? void 0 : m.map((d) => {
      var f;
      const g = (f = this.entity.findByTag(`node_${d.node}`)) == null ? void 0 : f[0];
      if (!g) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      return { colliders: (d.colliders ?? []).map((u) => {
        const p = new this._pcRef.Vec3(0, 0, 0);
        return u.offset && p.set(
          u.offset.x ?? 0,
          u.offset.y ?? 0,
          u.offset.z ? -u.offset.z : 0
          // z is opposite in VRM0.0
        ), this._importSphereCollider(g, {
          offset: p,
          radius: u.radius ?? 0
        });
      }) };
    });
    return s == null || s.forEach((d, g) => {
      const x = d.bones;
      x && x.forEach((f) => {
        var T, y;
        const u = (T = this.entity.findByTag(`node_${f}`)) == null ? void 0 : T[0];
        if (!u) {
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
        const p = new this._pcRef.Vec3();
        d.gravityDir ? p.set(
          d.gravityDir.x ?? 0,
          d.gravityDir.y ?? 0,
          d.gravityDir.z ?? 0
        ) : p.set(0, -1, 0);
        const _ = d.center != null ? e.nodes[d.center] : void 0, M = {
          hitRadius: d.hitRadius,
          dragForce: d.dragForce,
          gravityPower: d.gravityPower,
          stiffness: d.stiffiness,
          gravityDir: p
        }, v = (y = d.colliderGroups) == null ? void 0 : y.map((S) => {
          const w = h == null ? void 0 : h[S];
          if (w == null)
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${g} attempted to use a colliderGroup ${S} but not found`
            );
          return w;
        });
        u.forEach((S) => {
          const w = S.children[0] ?? null, P = this._importJoint(S, w, M, v);
          _ && (P.center = _), a.addJoint(P);
        });
      });
    }), a.setInitState(), a;
  }
  _importSphereCollider(t, { offset: e, radius: i }) {
    const n = new De(this._pcRef, { offset: e, radius: i }), r = zt(this._pcRef), s = new r(n);
    return t.addChild(s), s;
  }
  _importCapsuleCollider(t, { offset: e, radius: i, tail: n }) {
    const r = new Ue(this._pcRef, {
      offset: e,
      radius: i,
      tail: n
    }), s = zt(this._pcRef), a = new s(r);
    return t.addChild(a), a;
  }
  _importJoint(t, e, i, n) {
    return new Oe(
      this._pcRef,
      t,
      e,
      i,
      n
    );
  }
};
k.EXTENSION_NAME = "VRMC_springBone";
let Z = k;
const We = (o) => {
  class t extends o.ScriptType {
    constructor() {
      super(...arguments), this.activeSpringBone = !0, this.isWalking = !1;
    }
    initialize() {
      const i = new Z(o, this.asset, this.entity);
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
  o.registerScript(t, "vrmSpringBone"), t.attributes.add("activeSpringBone", {
    type: "boolean",
    default: !0
  }), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, He = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: We
}, Symbol.toStringTag, { value: "Module" })), J = "VRMC_materials_mtoon", ze = "VRM";
var Jt = /* @__PURE__ */ ((o) => (o[o.Off = 0] = "Off", o[o.Front = 1] = "Front", o[o.Back = 2] = "Back", o))(Jt || {});
const A = (o) => Math.pow(o, 2.2), je = (o, t, e) => {
  var it, nt, ot, st, rt, at, lt, ht, ct, dt, ut, mt, pt, ft, gt, _t, xt, Mt, vt, Tt, wt, St, yt, Pt, Rt, Lt, bt, Ct, Et, At, kt, It;
  const i = ((it = t.keywordMap) == null ? void 0 : it._ALPHABLEND_ON) ?? !1, r = ((nt = t.floatProperties) == null ? void 0 : nt._ZWrite) === 1 && i, s = ((ot = t.keywordMap) == null ? void 0 : ot._ALPHATEST_ON) ?? !1, a = i ? "BLEND" : s ? "MASK" : "OPAQUE", h = s ? ((st = t.floatProperties) == null ? void 0 : st._Cutoff) ?? 0.5 : void 0, c = (((rt = t.floatProperties) == null ? void 0 : rt._CullMode) ?? 2) === 0, m = (((at = t.vectorProperties) == null ? void 0 : at._Color) ?? [1, 1, 1, 1]).map(
    (Vt, fe) => fe === 3 ? Vt : A(Vt)
    // alpha channel is stored in linear
  ), d = (lt = t.textureProperties) == null ? void 0 : lt._MainTex, g = d != null ? {
    index: d
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, x = ((ht = t.floatProperties) == null ? void 0 : ht._BumpScale) ?? 1, f = (ct = t.textureProperties) == null ? void 0 : ct._BumpMap, u = f != null ? {
    index: f,
    scale: x
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, p = (((dt = t.vectorProperties) == null ? void 0 : dt._EmissionColor) ?? [0, 0, 0, 1]).map(A), _ = (ut = t.textureProperties) == null ? void 0 : ut._EmissionMap, M = _ != null ? {
    index: _
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, v = (((mt = t.vectorProperties) == null ? void 0 : mt._ShadeColor) ?? [0.97, 0.81, 0.86, 1]).map(A), T = (pt = t.textureProperties) == null ? void 0 : pt._ShadeTexture, y = T != null ? {
    index: T
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  let S = ((ft = t.floatProperties) == null ? void 0 : ft._ShadeShift) ?? 0, w = ((gt = t.floatProperties) == null ? void 0 : gt._ShadeToony) ?? 0.9;
  w = o.math.lerp(w, 1, 0.5 + 0.5 * S), S = -S - (1 - w);
  const P = ((_t = t.floatProperties) == null ? void 0 : _t._IndirectLightIntensity) ?? 0.1, I = P ? 1 - P : void 0, C = (xt = t.textureProperties) == null ? void 0 : xt._SphereAdd, V = C != null ? [1, 1, 1] : void 0, b = C != null ? {
    index: C
  } : void 0, R = ((Mt = t.floatProperties) == null ? void 0 : Mt._RimLightingMix) ?? 0, B = (vt = t.textureProperties) == null ? void 0 : vt._RimTexture, oe = B != null ? {
    index: B
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, se = (((Tt = t.vectorProperties) == null ? void 0 : Tt._RimColor) ?? [0, 0, 0, 1]).map(A), re = ((wt = t.floatProperties) == null ? void 0 : wt._RimFresnelPower) ?? 1, ae = ((St = t.floatProperties) == null ? void 0 : St._RimLift) ?? 0, le = ["none", "worldCoordinates", "screenCoordinates"][((yt = t.floatProperties) == null ? void 0 : yt._OutlineWidthMode) ?? 0];
  let Y = ((Pt = t.floatProperties) == null ? void 0 : Pt._OutlineWidth) ?? 0;
  Y = 0.01 * Y;
  const tt = (Rt = t.textureProperties) == null ? void 0 : Rt._OutlineWidthTexture, he = tt != null ? {
    index: tt
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, ce = (((Lt = t.vectorProperties) == null ? void 0 : Lt._OutlineColor) ?? [0, 0, 0]).map(A), de = (((bt = t.floatProperties) == null ? void 0 : bt._OutlineColorMode) ?? 0) === 1 ? ((Ct = t.floatProperties) == null ? void 0 : Ct._OutlineLightingMix) ?? 1 : 0, et = (Et = t.textureProperties) == null ? void 0 : Et._UvAnimMaskTexture, ue = et != null ? {
    index: et
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, me = ((At = t.floatProperties) == null ? void 0 : At._UvAnimScrollX) ?? 0;
  let D = ((kt = t.floatProperties) == null ? void 0 : kt._UvAnimScrollY) ?? 0;
  D != null && (D = -D);
  const pe = ((It = t.floatProperties) == null ? void 0 : It._UvAnimRotation) ?? 0;
  return {
    ...e,
    pbrMetallicRoughness: {
      baseColorFactor: m,
      baseColorTexture: g
    },
    normalTexture: u,
    emissiveTexture: M,
    emissiveFactor: p,
    alphaMode: a,
    alphaCutoff: h,
    doubleSided: c,
    extensions: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      VRMC_materials_mtoon: {
        specVersion: "1.0",
        transparentWithZWrite: r,
        // renderQueueOffsetNumber,
        shadeColorFactor: v,
        shadeMultiplyTexture: y,
        shadingShiftFactor: S,
        shadingToonyFactor: w,
        giEqualizationFactor: I,
        matcapFactor: V,
        matcapTexture: b,
        rimLightingMixFactor: R,
        rimMultiplyTexture: oe,
        parametricRimColorFactor: se,
        parametricRimFresnelPowerFactor: re,
        parametricRimLiftFactor: ae,
        outlineWidthMode: le,
        outlineWidthFactor: Y,
        outlineWidthMultiplyTexture: he,
        outlineColorFactor: ce,
        outlineLightingMixFactor: de,
        uvAnimationMaskTexture: ue,
        uvAnimationScrollXSpeedFactor: me,
        uvAnimationScrollYSpeedFactor: D,
        uvAnimationRotationSpeedFactor: pe
      }
    }
  };
}, $e = (
  /* glsl */
  `
varying vec3 vViewPosition;
`
), Xe = (
  /* glsl */
  `
    // Transform the vertex position to world space
    vec4 worldPosition = matrix_model * vec4(vertex_position, 1.0);

    // Transform the world position to view space
    // vec4 viewPosition = matrix_viewProjection * worldPosition;

    // Pass the view position to the fragment shader
    vViewPosition = -worldPosition.xyz;
`
), Ye = (
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
), Ge = (
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
), W = {
  baseVS: $e,
  endVS: Xe,
  basePS: Ye,
  endPS: Ge
}, Qe = (o) => class extends o.StandardMaterial {
  constructor() {
    super(), this.litFactor = new o.Color(1, 1, 1, 1), this.alphaTest = 0, this.baseColorMap = null, this.mapUvTransform = new o.Mat3(), this.normalMapUvTransform = new o.Mat3(), this.normalScale = new o.Vec2(1, 1), this.emissiveMapUvTransform = new o.Mat3(), this.shadeColorFactor = new o.Color(0, 0, 0, 1), this.shadeMultiplyTexture = null, this.shadeMultiplyTextureUvTransform = new o.Mat3(), this.shadingShiftFactor = 0, this.shadingShiftTexture = null, this.shadingShiftTextureUvTransform = new o.Mat3(), this.shadingShiftTextureScale = 1, this.shadingToonyFactor = 0.9, this.giEqualizationFactor = 0, this.matcapFactor = new o.Color(1, 1, 1, 1), this.matcapTexture = null, this.matcapTextureUvTransform = new o.Mat3(), this.parametricRimColorFactor = new o.Color(0, 0, 0, 1), this.rimMultiplyTexture = null, this.rimMultiplyTextureUvTransform = new o.Mat3(), this.rimLightingMixFactor = 0, this.parametricRimFresnelPowerFactor = 5, this.parametricRimLiftFactor = 0, this.outlineWidthMultiplyTexture = null, this.outlineWidthMultiplyTextureUvTransform = new o.Mat3(), this.outlineWidthFactor = 0.02, this.outlineColorFactor = new o.Color(1, 0.5, 0, 1), this.outlineLightingMixFactor = 0, this.uvAnimationMaskTexture = null, this.uvAnimationMaskTextureUvTransform = new o.Mat3(), this.uvAnimationScrollXOffset = 0, this.uvAnimationScrollYOffset = 0, this.uvAnimationRotationPhase = 0, this.useLighting = !1, this.useSkybox = !1;
  }
  parseGLTFAttrs(e, i, n) {
    var p;
    if (e.hasOwnProperty("alphaMode"))
      switch (e.alphaMode) {
        case "MASK":
          this.blendType = o.BLEND_NONE, e.hasOwnProperty("alphaCutoff") ? this.alphaTest = e.alphaCutoff : this.alphaTest = 0.5;
          break;
        case "BLEND":
          this.blendType = o.BLEND_NORMAL, this.depthWrite = !1;
          break;
        default:
        case "OPAQUE":
          this.blendType = o.BLEND_NONE;
          break;
      }
    else
      this.blendType = o.BLEND_NONE;
    if (e != null && e.emissiveFactor) {
      const _ = e.emissiveFactor;
      this.emissive = new o.Color(
        Math.pow(_[0], 1 / 2.2),
        Math.pow(_[1], 1 / 2.2),
        Math.pow(_[2], 1 / 2.2),
        1
      );
    }
    if ((p = e == null ? void 0 : e.pbrMetallicRoughness) != null && p.baseColorFactor) {
      const _ = e.pbrMetallicRoughness.baseColorFactor;
      this.diffuse = new o.Color(
        Math.pow(_[0], 1 / 2.2),
        Math.pow(_[1], 1 / 2.2),
        Math.pow(_[2], 1 / 2.2),
        _[3]
      );
    }
    this.litFactor = this.diffuse, this.baseColorMap = this.diffuseMap || this.opacityMap;
    const {
      version: r,
      shadeColorFactor: s,
      shadeMultiplyTexture: a,
      shadingShiftFactor: h,
      shadingToonyFactor: l,
      parametricRimColorFactor: c,
      rimLightingMixFactor: m,
      parametricRimFresnelPowerFactor: d,
      parametricRimLiftFactor: g,
      outlineWidthFactor: x,
      outlineColorFactor: f,
      outlineLightingMixFactor: u
    } = n;
    r == "0.0" && (this.emissiveIntensity = 0), s && (this.shadeColorFactor = new o.Color(
      Math.pow(s[0], 1 / 2.2),
      Math.pow(s[1], 1 / 2.2),
      Math.pow(s[2], 1 / 2.2),
      1
    )), this.shadeMultiplyTexture = a, this.shadingShiftFactor = h, this.shadingToonyFactor = l, c && (this.parametricRimColorFactor = new o.Color(
      Math.pow(c[0], 1 / 2.2),
      Math.pow(c[1], 1 / 2.2),
      Math.pow(c[2], 1 / 2.2),
      1
    )), this.rimLightingMixFactor = m, this.parametricRimFresnelPowerFactor = d, this.parametricRimLiftFactor = g, this.outlineWidthFactor = x, f && (this.outlineColorFactor = new o.Color(
      Math.pow(f[0], 1 / 2.2),
      Math.pow(f[1], 1 / 2.2),
      Math.pow(f[2], 1 / 2.2),
      1
    )), this.outlineLightingMixFactor = u, this.cull = o.CULLFACE_NONE, this.setShaderChunks(), this.setShaderParameters();
  }
  setShaderChunks() {
    this.chunks.APIVersion = o.CHUNKAPI_1_70;
    const e = o.shaderChunks;
    this.chunks.baseVS = e.baseVS, this.chunks.endVS = e.endVS, this.chunks.basePS = e.basePS, this.chunks.endPS = e.endPS, this.shadeMultiplyTexture && (this.chunks.basePS += `
        #define USE_SHADEMULTIPLYTEXTURE
        `), this.emissiveMap && (this.chunks.basePS += `
        #define USE_EMISSIVEMAP
        `), this.cull == o.CULLFACE_NONE && (this.chunks.basePS += `
        #define DOUBLE_SIDED
        `), this.chunks.baseVS += W.baseVS, this.chunks.endVS += W.endVS, this.chunks.basePS += W.basePS, this.chunks.endPS += W.endPS;
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
}, Ze = (
  /* glsl */
  `
uniform float outlineWidthFactor;
`
), Je = (
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
), Ke = (
  /* glsl */
  `
uniform sampler2D baseColorMap;
uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;
`
), qe = (
  /* glsl */
  `
    vec4 color = texture2D(baseColorMap, vUv0);
    color.rgb = outlineColorFactor.rgb * mix( vec3( 1.0 ), color.rgb, outlineLightingMixFactor );
    gl_FragColor = color;
`
), H = {
  baseVS: Ze,
  endVS: Je,
  basePS: Ke,
  endPS: qe
}, ti = (o) => class extends o.StandardMaterial {
  parseGLTFAttrs(e) {
    var i, n;
    if (e.hasOwnProperty("alphaMode"))
      switch (e.alphaMode) {
        case "MASK":
          this.blendType = o.BLEND_NONE, e.hasOwnProperty("alphaCutoff") ? this.alphaTest = e.alphaCutoff : this.alphaTest = 0.5;
          break;
        case "BLEND":
          this.blendType = o.BLEND_NORMAL, this.depthWrite = !1;
          break;
        default:
        case "OPAQUE":
          this.blendType = o.BLEND_NONE;
          break;
      }
    else
      this.blendType = o.BLEND_NONE;
    if ((i = e == null ? void 0 : e.extensions) != null && i[J]) {
      const r = (n = e == null ? void 0 : e.extensions) == null ? void 0 : n[J], {
        outlineColorFactor: s,
        outlineWidthFactor: a,
        outlineLightingMixFactor: h
        // outlineWidthMultiplyTexture,
      } = r;
      s && this.setOutlineColorFactor(
        new o.Color(
          Math.pow(s[0], 1 / 2.2),
          Math.pow(s[1], 1 / 2.2),
          Math.pow(s[2], 1 / 2.2)
        )
      ), a && this.setOutlineWidthFactor(a), h && this.setOutlineLightingMixFactor(h);
    }
    this.cull = o.CULLFACE_FRONT, this.setShaderChunks();
  }
  setShaderChunks() {
    this.chunks.APIVersion = o.CHUNKAPI_1_70;
    const e = o.shaderChunks;
    this.chunks.baseVS = e.baseVS, this.chunks.endVS = e.endVS, this.chunks.basePS = e.basePS, this.chunks.endPS = e.endPS, this.chunks.baseVS += H.baseVS, this.chunks.endVS += H.endVS, this.chunks.basePS += H.basePS, this.chunks.endPS += H.endPS;
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
}, ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EXTENSION_VRM: ze,
  EXTENSION_VRMC_MATERIALS_MTOON: J,
  MToonMaterialCullMode: Jt,
  createVRMCMtoonMaterial: Qe,
  createVRMCOutlineMaterial: ti,
  gammaEOTF: A,
  parseV0MToonProperties: je
}, Symbol.toStringTag, { value: "Module" }));
class Kt {
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
class q extends Kt {
  static _setupTransforms(t, e) {
    const i = new t.Entity();
    i.name = "VRMHumanoidRig";
    const n = {}, r = {}, s = {};
    z.forEach((h) => {
      const l = e.getBoneNode(h);
      if (l) {
        n[h] = l.getPosition().clone(), l.getRotation().clone(), r[h] = l.getLocalRotation().clone();
        const c = new t.Quat();
        l.parent && c.copy(l.parent.getRotation()), s[h] = c;
      }
    });
    const a = {};
    return z.forEach((h) => {
      var c;
      const l = e.getBoneNode(h);
      if (l) {
        const m = n[h];
        let d = h, g;
        for (; g == null && (d = j[d], d != null); )
          g = n[d];
        const x = new t.Entity();
        x.name = l.name, (d ? (c = a[d]) == null ? void 0 : c.node : i).addChild(x);
        const u = new t.Vec3().copy(m);
        g && u.sub(g), x.setLocalPosition(u), a[h] = { node: x };
      }
    }), {
      rigBones: a,
      root: i,
      parentWorldRotations: s,
      boneRotations: r
    };
  }
  constructor(t, e) {
    const { rigBones: i, root: n, parentWorldRotations: r, boneRotations: s } = q._setupTransforms(
      t,
      e
    );
    super(i), this.pcRef = t, this.original = e, this.root = n, this._parentWorldRotations = r, this._boneRotations = s, this._quatA = new t.Quat(), this._quatB = new t.Quat(), this._vec3A = new t.Vec3(), this._mat4A = new t.Mat4();
    const a = t.Application.getApplication();
    a && a.root.addChild(n);
  }
  applyMatrix4(t, e) {
    const i = t.x, n = t.y, r = t.z, s = e.data, a = 1 / (s[3] * i + s[7] * n + s[11] * r + s[15]);
    return t.x = (s[0] * i + s[4] * n + s[8] * r + s[12]) * a, t.y = (s[1] * i + s[5] * n + s[9] * r + s[13]) * a, t.z = (s[2] * i + s[6] * n + s[10] * r + s[14]) * a, t;
  }
  update() {
    z.forEach((t) => {
      var n;
      const e = (n = this.original.humanBones[t]) == null ? void 0 : n.entity, i = this.getBoneNode(t);
      if (e != null && i) {
        const r = this._parentWorldRotations[t], s = this._quatB.copy(r).invert(), a = this._boneRotations[t];
        if (this._quatA.copy(i.getLocalRotation()), this._quatA.mul(r), this._quatA.copy(s.mul(this._quatA)), this._quatA.mul(a), e.setLocalRotation(this._quatA), t === "hips") {
          const h = this._vec3A.copy(i.getPosition()), l = this._mat4A.copy(e.parent.getWorldTransform()), c = this.applyMatrix4(h, l.invert());
          e.setLocalPosition(c);
        }
      }
    });
  }
}
class ii {
  constructor(t, e, i) {
    this.autoUpdateHumanBones = (i == null ? void 0 : i.autoUpdateHumanBones) ?? !0, this._rawHumanBones = new Kt(e), this._normalizedHumanBones = new q(t, this._rawHumanBones);
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
function ni(o, t, e) {
  const i = o.humanBones, n = {};
  return o.humanBones != null && Object.entries(i).map(([, r]) => {
    var l;
    let s = r.bone;
    const a = r.node;
    if (s == null || a == null)
      return;
    const h = t.resource.data.nodes[a];
    if (h == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${s} (index = ${a}) does not exist`
      );
      return;
    }
    n[s] = {
      node: h,
      entity: ((l = e.findByTag(`node_${a}`)) == null ? void 0 : l[0]) || null
    };
  }), n;
}
function oi(o, t, e) {
  var r;
  const i = {}, n = o.humanBones.leftThumbIntermediate != null || o.humanBones.rightThumbIntermediate != null;
  if (o.humanBones)
    for (const s in o.humanBones) {
      let a = s;
      const h = o.humanBones[s].node, l = t.resource.data.nodes[h];
      if (n) {
        const c = jt[a];
        c != null && (a = c);
      }
      if (l == null)
        return console.warn(
          `A glTF node bound to the humanoid bone ${a} (index = ${h}) does not exist`
        ), null;
      i[a] = {
        node: l,
        entity: ((r = e.findByTag(`node_${h}`)) == null ? void 0 : r[0]) || null
      };
    }
  return i;
}
function si(o, t, e, i) {
  var a, h, l, c, m, d, g, x, f, u;
  const n = (h = (a = t.resource.data.gltf) == null ? void 0 : a.extensions) == null ? void 0 : h.VRM, r = (c = (l = t.resource.data.gltf) == null ? void 0 : l.extensions) == null ? void 0 : c.VRMC_vrm;
  if (!n && !r)
    return console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar."), null;
  let s = null;
  if (n) {
    const p = (g = (d = (m = t.resource.data.gltf) == null ? void 0 : m.extensions) == null ? void 0 : d.VRM) == null ? void 0 : g.humanoid;
    s = ni(p, t, e);
  } else if (r) {
    const p = r.specVersion;
    if (!K.has(p))
      return console.warn(`Unknown VRMC_vrm specVersion "${p}"`), null;
    const _ = (u = (f = (x = t.resource.data.gltf) == null ? void 0 : x.extensions) == null ? void 0 : f.VRMC_vrm) == null ? void 0 : u.humanoid;
    s = oi(_, t, e);
  }
  if (s) {
    const p = !!(i != null && i.autoUpdateHumanBones);
    return new ii(o, s, { autoUpdateHumanBones: p });
  }
  return null;
}
const ri = function(o, t, e, i, n, r) {
  const s = r;
  if (!s) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const a = function(h) {
    const l = new Blob([h.resource]), c = URL.createObjectURL(l);
    return qt(
      o,
      c,
      e,
      i,
      function(m, d) {
        n(m, d), URL.revokeObjectURL(c);
      },
      s
    );
  };
  t.loaded ? a(t) : (t.ready(a), s.assets.load(t));
}, qt = function(o, t, e, i, n, r) {
  const s = r;
  if (!s) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const a = i, h = {
    url: t,
    filename: a
  }, l = new o.Asset(a, "container", h, void 0, e);
  return l.once("load", function(c) {
    if (n) {
      const m = c.resource.animations;
      if (m.length == 1)
        m[0].name = i;
      else if (m.length > 1)
        for (let d = 0; d < m.length; ++d)
          m[d].name = i + " " + d.toString();
      n(null, c);
    }
  }), s.assets.add(l), s.assets.load(l), l;
}, te = (o) => {
  if (!o.resource) {
    console.error("addIndexToNodeTags Error: asset.resource is not available");
    return;
  }
  if (!(o.resource.data && o.resource.data.gltf)) {
    console.error("addIndexToNodeTags Error: asset.resource.data.gltf is not available");
    return;
  }
  o.resource.data.nodes.forEach((i, n) => {
    i.tags.add(`node_${n}`);
  });
}, ee = (o) => {
  var i, n;
  const t = (i = o.resource.data.gltf.extensions) == null ? void 0 : i.VRMC_vrm, e = (n = o.resource.data.gltf.extensions) == null ? void 0 : n.VRM;
  return t ? "v1" : e ? "v0" : null;
};
var L, $, ie, X, ne;
class ai {
  constructor(t, e) {
    U(this, $);
    U(this, X);
    U(this, L, void 0);
    Bt(this, L, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, n = {}, r = !0) {
    const s = [];
    return new Promise(
      (a, h) => {
        const l = (c, m) => {
          c && (this.loading = !1, h(`GLTFLoader Error: ${c}`)), E(this, L).forEach((f) => {
            const u = f(m);
            s.push(u);
          }), r && Q(this, X, ne).call(this, m);
          const d = m.resource.instantiateRenderEntity(n), g = new this._pcRef.Entity(e, this.app);
          g.addChild(d), s.forEach((f) => {
            f.instantiated && f.instantiated(g);
          }), this.loading = !1;
          const x = ee(m);
          a({ entity: g, asset: m, version: x });
        };
        t || h("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? l(null, t) : (t.once("load", () => {
          l(null, t);
        }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? ri(
          this._pcRef,
          t,
          i,
          e,
          l.bind(this),
          this.app
        ) : h("GLTFLoader Error: Please pass available asset or url to parse.") : qt(
          this._pcRef,
          t,
          i,
          e,
          l.bind(this),
          this.app
        );
      }
    );
  }
  // Register Plugin to loader
  register(t, e) {
    E(this, L).has(t) || E(this, L).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    E(this, L).has(t) && E(this, L).delete(t);
  }
  static registerAnimation(t, e, { useResourceName: i, defaultPlayIndex: n } = {
    useResourceName: !1,
    defaultPlayIndex: 0
  }) {
    if (e.length !== 0 && (t.addComponent("anim", {
      activate: !0
    }), e.forEach((r, s) => {
      const a = r.resource.name.replace(".", "_");
      t.anim && t.anim.assignAnimation(
        i ? a : `ANIMATION_${s}`,
        r.resource
      );
    }), n !== null)) {
      const r = i ? e[n].resource.name : `ANIMATION_${n}`;
      t.anim && t.anim.baseLayer.states.find((s) => s === r) && t.anim.baseLayer.transition(r);
    }
  }
}
L = new WeakMap(), $ = new WeakSet(), ie = function(t, e) {
  t.forEach((i, n) => {
    const r = e[n].extensions;
    r && (i.extensions = r);
  });
}, X = new WeakSet(), ne = function(t) {
  const e = t.resource.data.gltf.nodes, i = t.resource.data.nodes;
  Q(this, $, ie).call(this, i, e), te(t);
};
window.VRMLoader = {
  VrmAnimation: Ce,
  VrmExpression: Fe,
  VrmSpringBone: He,
  VrmMapList: xe,
  VrmcMaterialsMtoon: ei,
  createFormattedVRMHumanoid: si,
  addIndexToNodeTags: te,
  getVersion: ee
};
window.GLTFLoader = ai;
export {
  ai as GLTFLoader,
  Ce as VrmAnimation,
  Fe as VrmExpression,
  xe as VrmMapList,
  He as VrmSpringBone,
  ei as VrmcMaterialsMtoon,
  te as addIndexToNodeTags,
  si as createFormattedVRMHumanoid,
  ee as getVersion
};
