/**
 * name: playcanvas-vrm
 * version: v1.4.0
 */
var G = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var C = (s, t, e) => (G(s, t, "read from private field"), e ? e.call(s) : t.get(s)), U = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ft = (s, t, e, i) => (G(s, t, "write to private field"), i ? i.call(s, e) : t.set(s, e), e);
var Q = (s, t, e) => (G(s, t, "access private method"), e);
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
], $ = {
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
  leftEye: "leftEye",
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
  rightEye: "rightEye",
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
}, Xt = {
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
}, q = {
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
}, tt = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]), ge = {
  _Color: "color",
  _EmissionColor: "emissionColor",
  _ShadeColor: "shadeColor",
  _RimColor: "rimColor",
  _OutlineColor: "outlineColor"
}, xe = {
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
}, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POSSIBLE_SPEC_VERSIONS: tt,
  VRMExpressionPresetName: q,
  VRMHumanBoneList: z,
  VRMHumanBoneParentMap: $,
  VRMRigMap: F,
  expressionMateriaPropertyNameMapMap: xe,
  thumbBoneNameMap: jt,
  v0ExpressionMaterialColorMap: ge,
  v0v1PresetNameMap: Xt
}, Symbol.toStringTag, { value: "Module" }));
class ve {
  constructor(t) {
    this.duration = 0, this.restHipsPosition = new t.Vec3(), this.humanoidTracks = {
      translation: /* @__PURE__ */ new Map(),
      rotation: /* @__PURE__ */ new Map()
    }, this.expressionTracks = {
      preset: /* @__PURE__ */ new Map(),
      custom: /* @__PURE__ */ new Map()
    }, this.lookAtTrack = null;
  }
}
function Dt(s, t) {
  const e = s.length, i = [];
  let n = [], r = 0;
  for (let o = 0; o < e; o++) {
    const a = s[o];
    r <= 0 && (r = t, n = [], i.push(n)), n.push(a), r--;
  }
  return i;
}
function Me(s, t, e) {
  const i = e.data, n = 1 / (i[3] * t.x + i[7] * t.y + i[11] * t.z + i[15]), r = (i[0] * t.x + i[4] * t.y + i[8] * t.z + i[12]) * n, o = (i[1] * t.x + i[5] * t.y + i[9] * t.z + i[13]) * n, a = (i[2] * t.x + i[6] * t.y + i[10] * t.z + i[14]) * n;
  return new s.Vec3(r, o, a);
}
function Yt(s, t) {
  const e = t.inputs.map(
    (r) => new s.AnimData(r.components, r.data)
  ), i = t.outputs.map(
    (r) => new s.AnimData(r.components, r.data)
  ), n = t.curves.map((r) => {
    const o = r.paths.map((a) => {
      const h = a;
      return {
        component: h.component,
        entityPath: [...h.entityPath],
        propertyPath: [...h.propertyPath]
      };
    });
    return new s.AnimCurve(o, r.input, r.output, r.interpolation);
  });
  return new s.AnimTrack(t.name, t.duration, e, i, n);
}
const Te = /* @__PURE__ */ new Set(["1.0", "1.0-draft"]), we = new Set(Object.values(q));
class ye {
  constructor(t) {
    this.pcRef = t;
  }
  loadVRMA(t) {
    var _, g, p;
    const e = t.resource.data.gltf, i = e.extensionsUsed;
    if (i == null || i.indexOf("VRMC_vrm_animation") == -1) {
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const n = (_ = e.extensions) == null ? void 0 : _.VRMC_vrm_animation;
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
    const o = t.resource.data.nodes, a = this._createNodeMap(e, n), h = this._createBoneWorldMatrixMap(o, n), l = (p = (g = n.humanoid) == null ? void 0 : g.humanBones.hips) == null ? void 0 : p.node, c = l != null ? o[l] : null, m = c ? c.getPosition() : new this.pcRef.Vec3();
    return t.resource.data.animations.map((u, x) => {
      const v = e.animations[x], T = this._parseAnimation(u, v, a, h);
      return T.restHipsPosition = m, T;
    });
  }
  _createNodeMap(t, e) {
    var m, d, f, _;
    const i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), o = t.nodes;
    o && o.forEach((g, p) => {
      g.name && i.set(g.name, p);
    });
    const a = (m = e.humanoid) == null ? void 0 : m.humanBones;
    a && Object.entries(a).forEach(([g, p]) => {
      const u = p == null ? void 0 : p.node;
      u != null && n.set(u, g);
    });
    const h = (d = e.expressions) == null ? void 0 : d.preset;
    h && Object.entries(h).forEach(([g, p]) => {
      const u = p == null ? void 0 : p.node;
      u != null && r.set(u, g);
    });
    const l = (f = e.expressions) == null ? void 0 : f.custom;
    l && Object.entries(l).forEach(([g, p]) => {
      const { node: u } = p;
      r.set(u, g);
    });
    const c = ((_ = e.lookAt) == null ? void 0 : _.node) ?? null;
    return { origNameToHumanoidIndex: i, humanoidIndexToName: n, expressionsIndexToName: r, lookAtIndex: c };
  }
  //In THREE, it's async
  _createBoneWorldMatrixMap(t, e) {
    var n;
    const i = /* @__PURE__ */ new Map();
    if (e.humanoid == null)
      return i;
    for (const [r, o] of Object.entries(e.humanoid.humanBones)) {
      const a = o == null ? void 0 : o.node;
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
    const { inputs: r, outputs: o, curves: a } = Yt(this.pcRef, t), h = e.channels, l = new ve(this.pcRef);
    return l.duration = t.duration, h.forEach((c, m) => {
      const { node: d, path: f } = c.target, _ = a[m], g = r[_.input], p = o[_.output];
      if (d == null)
        return;
      const u = i.humanoidIndexToName.get(d);
      if (u != null) {
        let v = $[u];
        for (; v != null && n.get(v) == null; )
          v = $[v];
        if (v ?? (v = "hipsParent"), _.paths.forEach((T) => {
          const M = T, y = M.entityPath.map((w) => {
            const S = i.origNameToHumanoidIndex.get(w);
            if (S) {
              const P = i.humanoidIndexToName.get(S);
              return P || u;
            } else
              return u;
          });
          M.entityPath = y;
        }), f === "translation")
          if (u !== "hips")
            console.warn(
              `The loading animation contains a translation track for ${u}, which is not permitted in the VRMC_vrm_animation spec. ignoring the track`
            );
          else {
            const T = n.get("hipsParent"), M = Dt(p.data, 3).flatMap((P) => {
              let R = new this.pcRef.Vec3(P[0], P[1], P[2]);
              return R = Me(this.pcRef, R, T), [R.x, R.y, R.z];
            }), y = new Float32Array(M), w = new this.pcRef.AnimData(p.components, y), S = { curve: _, input: g, output: w };
            l.humanoidTracks.translation.set(u, S);
          }
        else if (f === "rotation") {
          const T = n.get(u), M = n.get(v), y = T.getEulerAngles(), w = new this.pcRef.Quat();
          w.setFromEulerAngles(y), w.invert();
          const S = M.getEulerAngles(), P = new this.pcRef.Quat();
          P.setFromEulerAngles(S);
          const R = Dt(p.data, 4).flatMap((k) => {
            let L = new this.pcRef.Quat(k[0], k[1], k[2], k[3]);
            return L = L.mul2(P, L).mul(w), [L.x, L.y, L.z, L.w];
          }), b = new Float32Array(R), V = new this.pcRef.AnimData(p.components, b), B = { curve: _, input: g, output: V };
          l.humanoidTracks.rotation.set(u, B);
        } else
          throw new Error(`Invalid path "${f}"`);
        return;
      }
      const x = i.expressionsIndexToName.get(d);
      if (x != null) {
        if (f === "translation") {
          const v = new Float32Array(p.data.length / 3);
          for (let M = 0; M < v.length; M++)
            v[M] = p.data[3 * M];
          const T = {
            times: g.data,
            values: v,
            loop: !0
          };
          we.has(x) ? l.expressionTracks.preset.set(
            x,
            T
          ) : l.expressionTracks.custom.set(x, T);
        } else
          throw new Error(`Invalid path "${f}"`);
        return;
      }
      if (d === i.lookAtIndex)
        if (f === "rotation") {
          const v = { curve: _, input: g, output: p };
          l.lookAtTrack = v;
        } else
          throw new Error(`Invalid path "${f}"`);
    }), l;
  }
}
class Se {
  constructor(t, e, i, n, r, o = "v0") {
    this.pcRef = t, this.vrmAnimation = n, this.stateName = e, this.name = i, this.humanoid = r, this.metaVersion = o;
  }
  get result() {
    return this.createVRMAnimTrack();
  }
  createVRMAnimTrack() {
    const t = [], e = [], i = [], n = [], r = this._createHumanoidTracks();
    n.push(...r.translation.values()), n.push(...r.rotation.values());
    const o = this._createLookAtTracks() ?? this._resetLookAtTrack(n[0].input);
    n.push(...o.values());
    for (let h = 0; h < n.length; h++) {
      t.push(n[h].input), e.push(n[h].output);
      const l = new this.pcRef.AnimCurve(
        n[h].curve.paths,
        h,
        h,
        n[h].curve.interpolation
      );
      i.push(l), n[h].curve.paths.forEach((m) => {
        const d = m, f = d.entityPath;
        f.unshift("SkeletonRoot");
        const _ = f.map((g) => {
          var v;
          const u = F[g], x = (v = this.humanoid.getRawBoneNode(u)) == null ? void 0 : v.name;
          return !u || !x ? g : x;
        });
        d.entityPath = _;
      });
    }
    const a = new this.pcRef.AnimEvents([{ name: `anim-track:${this.stateName}`, time: 0 }]);
    return new this.pcRef.AnimTrack(
      this.name,
      this.vrmAnimation.duration,
      t,
      e,
      i,
      a
    );
  }
  _createHumanoidTracks() {
    var i, n, r;
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
    for (const [o, a] of this.vrmAnimation.humanoidTracks.translation.entries())
      if (((i = this.humanoid.getNormalizedBoneNode(o)) == null ? void 0 : i.name) != null) {
        const l = this.vrmAnimation.restHipsPosition.y, d = (((n = this.humanoid.rawHumanBones.hips) == null ? void 0 : n.node.getPosition()) || new this.pcRef.Vec3()).y / l, f = a.output.data.map(
          (u, x) => (this.metaVersion === "v0" && x % 3 !== 1 ? -u : u) * d
        ), _ = new Float32Array(f), g = new this.pcRef.AnimData(a.output.components, _), p = {
          curve: a.curve,
          input: a.input,
          output: g
        };
        t.set(o, p);
      }
    for (const [o, a] of this.vrmAnimation.humanoidTracks.rotation.entries())
      if (((r = this.humanoid.getNormalizedBoneNode(o)) == null ? void 0 : r.name) != null) {
        const l = a.output.data.map(
          (f, _) => this.metaVersion === "v0" && _ % 2 === 0 ? -f : f
        ), c = new Float32Array(l), m = new this.pcRef.AnimData(a.output.components, c), d = {
          curve: a.curve,
          input: a.input,
          output: m
        };
        e.set(o, d);
      }
    return { translation: t, rotation: e };
  }
  _createLookAtTracks() {
    const t = this.vrmAnimation.lookAtTrack;
    if (!t)
      return null;
    const e = /* @__PURE__ */ new Map(), i = ["leftEye", "rightEye"], n = (l, c) => {
      const m = c % 4, d = t.output.data[c + 3 - m], f = d === 0 ? 1 : d;
      switch (m) {
        case 0:
          return l / f * 0.06;
        case 1:
          return l / f * 0.08;
        default:
          return 1;
      }
    }, r = t.output.data.map((l, c) => (this.metaVersion === "v0" && c % 4 == 0 ? -l : l) * n(l, c)), o = new Float32Array(r), a = new this.pcRef.AnimData(t.output.components, o), h = t.curve;
    return h.paths.forEach((l) => {
      const c = l;
      i.forEach((m) => {
        c.entityPath = [m];
        const d = [{ ...c }], _ = {
          curve: new this.pcRef.AnimCurve(
            d,
            h.input,
            h.output,
            h.interpolation
          ),
          input: t.input,
          output: a
        };
        e.set(m, _);
      });
    }), e;
  }
  _resetLookAtTrack(t) {
    const e = /* @__PURE__ */ new Map(), i = ["leftEye", "rightEye"], n = new Float32Array(t.data.length * 4);
    for (let o = 0; o < n.length; o++)
      o % 4 === 3 && (n[o] = 1);
    const r = new this.pcRef.AnimData(4, n);
    return i.forEach((o) => {
      const a = {
        entityPath: [o],
        component: "graph",
        propertyPath: ["localRotation"]
      }, l = {
        curve: new this.pcRef.AnimCurve([{ ...a }], 0, 0, 1),
        input: t,
        output: r
      };
      e.set(o, l);
    }), e;
  }
}
class Pe {
  constructor(t, e, i, n = "v0", r, o) {
    this.pcRef = t, this.animationAsset = e, this.humanoid = i, this.metaVersion = n, this.extraSettings = r, this.origAnimTrack = o;
  }
  get result() {
    return this.createViverseAnimTrack();
  }
  createViverseAnimTrack() {
    var p;
    const t = ((p = this.humanoid.rawHumanBones.hips) == null ? void 0 : p.node.getPosition()) || new this.pcRef.Vec3(), e = t.y, i = Math.abs(e - 0), n = t.z, r = Math.abs(n - 0), o = {}, a = {};
    let { motionHipsHeight: h, negativeZAnimNames: l } = this.extraSettings;
    l || (l = []);
    const c = Yt(this.pcRef, this.origAnimTrack), d = l.includes(this.origAnimTrack.name) ? "v1" : "v0";
    let f = 0;
    if (this.animationAsset.asset.type === "container") {
      const u = this.animationAsset.asset.resource.data.nodes.find(
        (x) => x.name === F.hips
      );
      u && (f = u.getPosition().y);
    }
    h = h || f || 0.855;
    const _ = i / h;
    c.curves.forEach((u) => {
      u.paths.forEach((x) => {
        const v = x, T = v.propertyPath.find((y) => y === "localPosition"), M = v.entityPath[v.entityPath.length - 1] === F.hips;
        T && M && !o[u.output] && (o[u.output] = !0);
      });
    }), c.curves.forEach((u) => {
      let x = !1;
      u.paths.forEach((v) => {
        const T = v, M = T.entityPath.map((y) => {
          var R;
          const S = F[y], P = (R = this.humanoid.getRawBoneNode(S)) == null ? void 0 : R.name;
          return !S || !P ? y : P;
        });
        T.entityPath = M, T.propertyPath.find((y) => y === "localScale") && (x = !0);
      }), x && !a[u.output] && (a[u.output] = !0);
    }), c.outputs.forEach((u, x) => {
      const v = a[x];
      if (u.components === 3) {
        if (!v) {
          const T = u.data.map((M, y) => {
            let w = M;
            return this.metaVersion === d && y % 3 !== 1 && (w *= -1), o[x] && y % 3 === 1 && (this.animationAsset.removeY || this.animationAsset.removeUpperY && M * _ > i) ? i : o[x] && y % 3 === 2 && this.animationAsset.removeZ ? r : w * _;
          });
          u._data = T;
        }
      } else if (u.components === 4) {
        const T = u.data.map((M, y) => this.metaVersion === d && y % 2 === 0 ? -M : M);
        u._data = T;
      }
    });
    const g = new this.pcRef.AnimEvents([
      { name: `anim-track:${this.animationAsset.stateName}`, time: 0 }
    ]);
    return c.events = g, c;
  }
}
class Re {
  constructor(t) {
    this.preset = t.expressionTracks.preset, this.custom = t.expressionTracks.custom;
  }
  createCustomExpression() {
    console.log(this.custom);
  }
}
function Le(s, t, e, i, {
  motionHipsHeight: n,
  negativeZAnimNames: r
} = {}) {
  const o = { motionHipsHeight: n, negativeZAnimNames: r };
  return console.warn(
    "Warning: createVRMAnimation is deprecated. Please use createVRMAnimResources instead."
  ), Gt(s, t, e, i, o);
}
function Gt(s, t, e, i, n = {}) {
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
  const r = (c = e.resource.data.gltf.extensions) == null ? void 0 : c.VRMC_vrm, o = (m = e.resource.data.gltf.extensions) == null ? void 0 : m.VRM, a = r ? "v1" : o ? "v0" : null, h = (d, f) => d == "animation" ? !1 : d == "container" ? !!(f && f.includes("VRMC_vrm_animation") && f.indexOf("VRMC_vrm_animation") !== -1) : !1, l = [];
  return t.forEach((d) => {
    var p;
    const f = d.asset.resource, _ = d.asset.type;
    let g;
    if (!f)
      g = null, console.warn(
        `createVRMAnimResources: loadAnimation can't find available resource from ${d.stateName} asset.`
      );
    else {
      const u = (p = f.data) == null ? void 0 : p.gltf.extensionsUsed;
      h(_, u) ? g = be(s, d, i, a) : g = Ce(
        s,
        d,
        i,
        a,
        n
      );
    }
    g && l.push(g);
  }), l;
}
const Ee = (s, t) => {
  s.anim ? s.anim.assignAnimation(
    t.name,
    t.resource,
    t.setting && t.setting.layerName !== void 0 ? t.setting.layerName : void 0,
    t.setting && t.setting.speed !== void 0 ? t.setting.speed : 1,
    t.setting && t.setting.loop !== void 0 ? t.setting.loop : !0
  ) : console.error("AssignAnimation: Please set the anim component on the entity.");
};
function ke(s, t, e) {
  const i = e ?? s;
  i.anim && i.anim.on(`anim-track:${t.name}`, () => {
    var n, r, o, a;
    if (t.expression)
      s.fire("vrma-expression:start", t.expression);
    else if (((n = i.anim) == null ? void 0 : n.baseLayer.activeState) !== i.anim.lastBaseLayerPlayedAnimTrackName) {
      let h = ((r = i.anim.layers) == null ? void 0 : r[0]._controller._totalTransitionTime) ?? 0;
      (o = i.anim) == null || o.layers.forEach((l) => {
        l.name === "upperBodyLayer" && (h = l._controller._totalTransitionTime);
      }), s.fire("vrm-expression:reset", h);
    }
    i.anim.lastBaseLayerPlayedAnimTrackName = ((a = i.anim) == null ? void 0 : a.baseLayer.activeState) || void 0;
  });
}
function be(s, t, e, i) {
  var a, h, l, c;
  const r = new ye(s).loadVRMA(t.asset);
  let o = (c = (l = (h = (a = t.asset.resource.animations) == null ? void 0 : a[0]) == null ? void 0 : h.resources) == null ? void 0 : l[0]) == null ? void 0 : c.name;
  if (o || (o = ""), r) {
    const m = new Se(
      s,
      t.stateName,
      o,
      r[0],
      e,
      i
    ).result, d = new Re(r[0]);
    return { name: t.stateName, resource: m, expression: d };
  }
  return null;
}
function Ce(s, t, e, i, n) {
  var o, a;
  const r = t.asset.type === "container" ? (a = (o = t.asset.resource.animations) == null ? void 0 : o[0]) == null ? void 0 : a.resource : t.asset.resource;
  if (r) {
    const h = new Pe(
      s,
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
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: Ee,
  bindVRMAExpression: ke,
  createVRMAnimResources: Gt,
  createVRMAnimation: Le
}, Symbol.toStringTag, { value: "Module" }));
class Z {
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
function Qt(s) {
  return Math.max(Math.min(s, 1), 0);
}
function Ie(s, t) {
  return s = Math.ceil(s), t = Math.floor(t), Math.floor(Math.random() * (t - s) + s);
}
function N(s, t) {
  return Math.random() * (t - s) + s;
}
function W(s, t, e = 0) {
  return s.x = t[e], s.y = t[e + 1], s.z = t[e + 2], s;
}
function Ut(s, t) {
  return s.copy(t.transformPoint(s));
}
class Ve {
  constructor(t, e) {
    this._pcRef = t, this.matrix = e, this._inverseCache = new this._pcRef.Mat4(), this._shouldUpdateInverse = !0;
    const i = {
      // @ts-ignore
      set: (n, r, o) => (this._shouldUpdateInverse = !0, n[r] = o, !0)
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
function Zt(s, t) {
  const e = new s.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function Be(s, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (s.x = -t.y, s.y = t.x, s.z = 0, s.w = i) : (s.x = 0, s.y = -t.z, s.z = t.y, s.w = i)) : (s.x = t.y * e.z - t.z * e.y, s.y = t.z * e.x - t.x * e.z, s.z = t.x * e.y - t.y * e.x, s.w = i), s.normalize();
}
class Wt {
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
      (o) => o
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
  stopEmotions(t) {
    t.forEach((e) => {
      this.getExpression(e).stop();
    });
  }
  getNextTalking() {
    if (this.talkExpressions.length === 0)
      return null;
    const t = Ie(0, this.talkExpressions.length - 1);
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
      (r, o) => e[o - 1] < this.time && e[o + 1] > this.time
    );
    if (n !== -1) {
      this.currentTimeIndex !== n && (this.currentValue = i[n]), this.currentTimeIndex = n;
      const r = i[this.currentTimeIndex + 1], o = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], h = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / o, l = this.currentValue + h * t;
      h > 0 && l >= r || h < 0 && r >= l ? this.setValue(r) : this.setValue(l);
    }
  }
}
class Ht {
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
class Ne {
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
    const r = new Set(Object.values(q)), o = /* @__PURE__ */ new Map();
    n.preset != null && Object.entries(n.preset).forEach(([l, c]) => {
      if (c != null) {
        if (!r.has(l)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${l}" detected. Ignoring the expression`
          );
          return;
        }
        o.set(l, c);
      }
    }), n.custom != null && Object.entries(n.custom).forEach(([l, c]) => {
      if (r.has(l)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${l}". Ignoring the expression`
        );
        return;
      }
      o.set(l, c);
    });
    const a = new Wt();
    return Array.from(o.entries()).map(([l, c]) => {
      const m = new Ot(l);
      m.isBinary = c.isBinary ?? !1, m.overrideBlink = c.overrideBlink ?? "none", m.overrideLookAt = c.overrideLookAt ?? "none", m.overrideMouth = c.overrideMouth ?? "none", c.morphTargetBinds && c.morphTargetBinds.forEach((d) => {
        if (d.node === void 0 || d.index === void 0)
          return;
        const f = this.meshInstances.filter((g) => g.node.tags.has(`node_${d.node}`)), _ = d.index;
        m.addBind(
          new Ht({
            primitives: f,
            targetIndex: _,
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
    const r = new Wt(), o = n.blendShapeGroups;
    if (!o)
      return r;
    const a = /* @__PURE__ */ new Set();
    return o.map((c) => {
      const m = c.presetName, f = (m != null && Xt[m] || null) ?? c.name;
      if (f == null) {
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (a.has(f)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${m} has duplicated entries. Ignoring the expression`
        );
        return;
      }
      a.add(f);
      const _ = new Ot(f);
      _.isBinary = c.isBinary ?? !1, c.binds && (c.binds.forEach((g) => {
        if (g.mesh === void 0 || g.index === void 0)
          return;
        const p = [];
        t.nodes.forEach((x, v) => {
          x.mesh === g.mesh && p.push({ gltfNode: x, index: v });
        });
        const u = g.index;
        p.map((x) => {
          const v = this.meshInstances.filter((T) => T.node.tags.has(`node_${x.index}`));
          _.addBind(
            new Ht({
              primitives: v,
              targetIndex: u,
              weight: 0.01 * (g.weight ?? 100)
              // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
            })
          );
        });
      }), r.registerExpression(_));
    }), r;
  }
}
const Fe = (s) => {
  const t = [];
  if (s) {
    const e = s.findComponents("render");
    for (let i = 0; i < e.length; i++) {
      const n = e[i];
      if (n.meshInstances)
        for (let r = 0; r < n.meshInstances.length; r++) {
          const o = n.meshInstances[r];
          t.push(o);
        }
    }
  }
  return t;
};
function De(s, t) {
  const e = [];
  let i = s;
  for (; i !== null; )
    e.unshift(i), i = i.parent;
  e.forEach((n) => {
    t(n);
  });
}
const Ue = (s) => {
  class t extends s.ScriptType {
    constructor() {
      super(...arguments), this.previousTalkName = "", this.previousEmotions = [], this.vrmaEmotionWasPlaying = !1;
    }
    initialize() {
      const i = Fe(this.entity), n = new Ne(this.asset, i);
      this.expressionManager = n.import(), this.blinkTimer = new Z("blink"), this.talkTimer = new Z("talk"), this.resetEmotionTimer = new Z("resetEmotion"), this.startBlink(), this.entity.on("vrm-expression:start-emotion", this.startEmotion, this), this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this), this.entity.on("vrma-expression:start", this.startVRMAExpression, this), this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this), this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this), this.entity.off("vrma-expression:start", this.startVRMAExpression, this), this.entity.off("vrm-expression:reset", this.resetExpression, this);
      });
    }
    // Specific Expression Animation
    startBlink(i) {
      const n = N(1, 5);
      this.expressionManager && (this.expressionManager.startBlink(1, i), this.blinkTimer.add(n, this.startBlink, this));
    }
    stopBlink(i, n) {
      this.expressionManager && (this.stopExpressionLoop("blink"), this.expressionManager.stopBlink(), n || i && this.blinkTimer.add(i, this.startBlink, this));
    }
    startEmotion(i, n) {
      if (!this.expressionManager)
        return;
      const r = n ? n.times[n.times.length - 1] : 3, o = n ? !!n.loop : !1;
      this.stopBlink(r, o), this.expressionManager.startEmotion(i, n);
    }
    startTalking(i = 0.25) {
      if (!this.expressionManager)
        return;
      const n = Math.random() * 0.5, r = Math.random() * 0.5 + 0.5, o = N(0.5, 1), a = N(0.4, 0.6) * o, h = N(0.4, 0.6) * o, l = [0, n, 0.5, r, 1].filter((d) => d * i), c = [0, a, o, h, 0], m = N(0.5, 1);
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
      this.expressionManager && (this.expressionManager.update(i), this.blinkTimer.update(i), this.talkTimer.update(i), this.resetEmotionTimer.update(i));
    }
    startVRMAExpression(i) {
      for (const [n, r] of i.preset.entries())
        this.startEmotion(n, r);
      this.previousEmotions.length === 0 && (this.previousEmotions = Array.from(i.preset.keys())), this.vrmaEmotionWasPlaying = !0, this.entity.hasEvent("vrm-expression:reset") || this.entity.on("vrm-expression:reset", this.resetExpression, this);
    }
    resetExpression(i) {
      if (this.vrmaEmotionWasPlaying) {
        const n = () => {
          this.expressionManager && this.expressionManager.stopEmotions(this.previousEmotions), this.startBlink(), this.previousEmotions = [], this.vrmaEmotionWasPlaying = !1;
        };
        i ? this.resetEmotionTimer.add(i, n, this) : n();
      }
    }
  }
  s.registerScript(t, "vrmExpression"), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: Ue
}, Symbol.toStringTag, { value: "Module" }));
class zt {
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
    for (const o of this._joints)
      this._processSpringBone(
        o,
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
    const o = this._getDependencies(t);
    for (const a of o)
      De(a, (h) => {
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
      r.colliders.forEach((o) => {
        e.add(o);
      });
    }), e;
  }
}
class Oe {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0;
  }
  get type() {
    return "sphere";
  }
  calculateCollision(t, e, i, n) {
    n.copy(this.offset).copy(t.transformPoint(n)), n.mulScalar(-1).add(e);
    const r = i + this.radius, o = n.length() - r;
    return n.normalize(), o;
  }
}
const $t = (s) => class extends s.Entity {
  constructor(e) {
    super(), this.shape = e;
  }
};
class He {
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
    const o = this._v3B.dot(n);
    o <= 0 || (r <= o ? n.sub(this._v3B) : (this._v3B.mulScalar(o / r), n.sub(this._v3B)));
    const a = i + this.radius, h = n.length() - a;
    return n.normalize(), h;
  }
}
class ze {
  constructor(t, e, i, n = {}, r = []) {
    var o;
    this._center = null, this._worldSpaceBoneLength = 0, this._pcRef = t, this._v3A = new this._pcRef.Vec3(), this._v3B = new this._pcRef.Vec3(), this._nextTail = new this._pcRef.Vec3(), this._quatA = new this._pcRef.Quat(), this._matA = new this._pcRef.Mat4(), this._matB = new this._pcRef.Mat4(), this._identityMat4 = new this._pcRef.Mat4(), this._worldSpacePosition = new this._pcRef.Vec3(), this._centerSpacePosition = new this._pcRef.Vec3(), this._matrixWorldToCenterTranslation = new this._pcRef.Vec3(), this._worldSpaceBoneLength = 0, this.bone = e, this.child = i, this.settings = {
      hitRadius: n.hitRadius ?? 0,
      stiffness: n.stiffness ?? 1,
      gravityPower: n.gravityPower ?? 0,
      gravityDir: ((o = n.gravityDir) == null ? void 0 : o.clone()) ?? new this._pcRef.Vec3(0, -1, 0),
      dragForce: n.dragForce ?? 0.4
    }, this.colliderGroups = r, this._initialLocalMatrix = new this._pcRef.Mat4(), this._initialLocalRotation = new this._pcRef.Quat(), this._initialLocalChildPosition = new this._pcRef.Vec3(), this._currentTail = new this._pcRef.Vec3(), this._prevTail = new this._pcRef.Vec3(), this._boneAxis = new this._pcRef.Vec3(), this._center = null;
  }
  get center() {
    return this._center;
  }
  set center(t) {
    var e;
    (e = this._center) != null && e.userData.inverseCacheProxy && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = t, this._center && (this._center.userData || (this._center.userData = {}), this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new Ve(
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
    Ut(this._currentTail.copy(this._initialLocalChildPosition), t), this._prevTail.copy(this._currentTail), this._boneAxis.copy(this._initialLocalChildPosition).normalize();
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
    Ut(this._currentTail.copy(this._initialLocalChildPosition), n), this._currentTail.copy(i.transformPoint(this._currentTail)), this._prevTail.copy(this._currentTail);
  }
  update(t, e) {
    if (t <= 0)
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
    let i = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0), i.getTranslation(this._matrixWorldToCenterTranslation), this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const n = this._quatA.setFromMat4(i), r = this._matB.copy(i).mul(this._parentMatrixWorld), o = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(r.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), a = this._v3A.copy(this.settings.gravityDir).copy(n.transformVector(this._v3A)).normalize(), h = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(o).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(a).mulScalar(this.settings.gravityPower * t)).copy(h.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const l = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, l.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
    );
    const c = Zt(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
    ), m = Be(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(c.transformPoint(this._v3A)).normalize()
    ), d = m.getEulerAngles();
    m.setFromEulerAngles(d.x * e, d.y * e, d.z * e);
    const f = this._initialLocalRotation.clone().mul(m);
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
const I = class I {
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
    var _, g;
    if (!(((_ = t.extensionsUsed) == null ? void 0 : _.indexOf(I.EXTENSION_NAME)) !== -1) || !((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const r = new zt(), o = t == null ? void 0 : t.nodes, a = (g = t.extensions) == null ? void 0 : g[I.EXTENSION_NAME];
    if (!a)
      return null;
    const h = a.specVersion;
    if (!tt.has(h))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${I.EXTENSION_NAME} specVersion "${h}"`
      ), null;
    const l = a.colliders, c = l == null ? void 0 : l.map((p, u) => {
      var T;
      const x = (T = this.entity.findByTag(`node_${p.node}`)) == null ? void 0 : T[0], v = p.shape;
      if (!x) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      if (v) {
        if (v.sphere)
          return this._importSphereCollider(x, {
            offset: W(new this._pcRef.Vec3(), v.sphere.offset ?? [0, 0, 0]),
            radius: v.sphere.radius ?? 0
          });
        if (v.capsule)
          return this._importCapsuleCollider(x, {
            offset: W(
              new this._pcRef.Vec3(),
              v.capsule.offset ?? [0, 0, 0]
            ),
            radius: v.capsule.radius ?? 0,
            tail: W(new this._pcRef.Vec3(), v.capsule.tail ?? [0, 0, 0])
          });
      }
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${u} has no valid shape`);
    }), m = a.colliderGroups, d = m == null ? void 0 : m.map((p, u) => ({
      colliders: (p.colliders ?? []).map((v) => {
        const T = c == null ? void 0 : c[v];
        if (T == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${u} attempted to use a collider #${v} but not found`
          );
        return T;
      }),
      name: p.name
    }));
    return a.springs.forEach((p, u) => {
      var y;
      const x = p.joints, v = (y = p.colliderGroups) == null ? void 0 : y.map((w) => {
        const S = d == null ? void 0 : d[w];
        if (S == null)
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${u} attempted to use a colliderGroup ${w} but not found`
          );
        return S;
      }), T = p.center != null ? e.nodes[p.center] : void 0;
      let M;
      x.forEach((w) => {
        if (M) {
          const S = M.node, P = o[S], R = this.entity.findByName(P.name), b = w.node, V = o[b], B = this.entity.findByName(V.name), k = {
            hitRadius: M.hitRadius,
            dragForce: M.dragForce,
            gravityPower: M.gravityPower,
            stiffness: M.stiffness,
            gravityDir: M.gravityDir != null ? W(new this._pcRef.Vec3(), M.gravityDir) : void 0
          }, L = this._importJoint(R, B, k, v);
          T && (L.center = T), r.addJoint(L);
        }
        M = w;
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
    const o = r == null ? void 0 : r.boneGroups;
    if (!o)
      return null;
    const a = new zt(), h = (m = r.colliderGroups) == null ? void 0 : m.map((d) => {
      var g;
      const f = (g = this.entity.findByTag(`node_${d.node}`)) == null ? void 0 : g[0];
      if (!f) {
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
      return { colliders: (d.colliders ?? []).map((p) => {
        const u = new this._pcRef.Vec3(0, 0, 0);
        return p.offset && u.set(
          p.offset.x ?? 0,
          p.offset.y ?? 0,
          p.offset.z ? -p.offset.z : 0
          // z is opposite in VRM0.0
        ), this._importSphereCollider(f, {
          offset: u,
          radius: p.radius ?? 0
        });
      }) };
    });
    return o == null || o.forEach((d, f) => {
      const _ = d.bones;
      _ && _.forEach((g) => {
        var M, y;
        const p = (M = this.entity.findByTag(`node_${g}`)) == null ? void 0 : M[0];
        if (!p) {
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
        const u = new this._pcRef.Vec3();
        d.gravityDir ? u.set(
          d.gravityDir.x ?? 0,
          d.gravityDir.y ?? 0,
          d.gravityDir.z ?? 0
        ) : u.set(0, -1, 0);
        const x = d.center != null ? e.nodes[d.center] : void 0, v = {
          hitRadius: d.hitRadius,
          dragForce: d.dragForce,
          gravityPower: d.gravityPower,
          stiffness: d.stiffiness,
          gravityDir: u
        }, T = (y = d.colliderGroups) == null ? void 0 : y.map((w) => {
          const S = h == null ? void 0 : h[w];
          if (S == null)
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${f} attempted to use a colliderGroup ${w} but not found`
            );
          return S;
        });
        p.forEach((w) => {
          const S = w.children[0] ?? null, P = this._importJoint(w, S, v, T);
          x && (P.center = x), a.addJoint(P);
        });
      });
    }), a.setInitState(), a;
  }
  _importSphereCollider(t, { offset: e, radius: i }) {
    const n = new Oe(this._pcRef, { offset: e, radius: i }), r = $t(this._pcRef), o = new r(n);
    return t.addChild(o), o;
  }
  _importCapsuleCollider(t, { offset: e, radius: i, tail: n }) {
    const r = new He(this._pcRef, {
      offset: e,
      radius: i,
      tail: n
    }), o = $t(this._pcRef), a = new o(r);
    return t.addChild(a), a;
  }
  _importJoint(t, e, i, n) {
    return new ze(
      this._pcRef,
      t,
      e,
      i,
      n
    );
  }
};
I.EXTENSION_NAME = "VRMC_springBone";
let J = I;
const $e = (s) => {
  class t extends s.ScriptType {
    constructor() {
      super(...arguments), this.activeSpringBone = !0, this.isWalking = !1;
    }
    initialize() {
      const i = new J(s, this.asset, this.entity);
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
  s.registerScript(t, "vrmSpringBone"), t.attributes.add("activeSpringBone", {
    type: "boolean",
    default: !0
  }), t.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
}, je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: $e
}, Symbol.toStringTag, { value: "Module" })), K = "VRMC_materials_mtoon", Xe = "VRM";
var Jt = /* @__PURE__ */ ((s) => (s[s.Off = 0] = "Off", s[s.Front = 1] = "Front", s[s.Back = 2] = "Back", s))(Jt || {});
const A = (s) => Math.pow(s, 2.2), Ye = (s, t, e) => {
  var st, ot, rt, at, lt, ht, ct, dt, ut, mt, pt, ft, gt, xt, _t, vt, Mt, Tt, wt, yt, St, Pt, Rt, Lt, Et, kt, bt, Ct, At, It, Vt, Bt;
  const i = ((st = t.keywordMap) == null ? void 0 : st._ALPHABLEND_ON) ?? !1, r = ((ot = t.floatProperties) == null ? void 0 : ot._ZWrite) === 1 && i, o = ((rt = t.keywordMap) == null ? void 0 : rt._ALPHATEST_ON) ?? !1, a = i ? "BLEND" : o ? "MASK" : "OPAQUE", h = o ? ((at = t.floatProperties) == null ? void 0 : at._Cutoff) ?? 0.5 : void 0, c = (((lt = t.floatProperties) == null ? void 0 : lt._CullMode) ?? 2) === 0, m = (((ht = t.vectorProperties) == null ? void 0 : ht._Color) ?? [1, 1, 1, 1]).map(
    (Nt, fe) => fe === 3 ? Nt : A(Nt)
    // alpha channel is stored in linear
  ), d = (ct = t.textureProperties) == null ? void 0 : ct._MainTex, f = d != null ? {
    index: d
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, _ = ((dt = t.floatProperties) == null ? void 0 : dt._BumpScale) ?? 1, g = (ut = t.textureProperties) == null ? void 0 : ut._BumpMap, p = g != null ? {
    index: g,
    scale: _
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, u = (((mt = t.vectorProperties) == null ? void 0 : mt._EmissionColor) ?? [0, 0, 0, 1]).map(A), x = (pt = t.textureProperties) == null ? void 0 : pt._EmissionMap, v = x != null ? {
    index: x
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, T = (((ft = t.vectorProperties) == null ? void 0 : ft._ShadeColor) ?? [0.97, 0.81, 0.86, 1]).map(A), M = (gt = t.textureProperties) == null ? void 0 : gt._ShadeTexture, y = M != null ? {
    index: M
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  let w = ((xt = t.floatProperties) == null ? void 0 : xt._ShadeShift) ?? 0, S = ((_t = t.floatProperties) == null ? void 0 : _t._ShadeToony) ?? 0.9;
  S = s.math.lerp(S, 1, 0.5 + 0.5 * w), w = -w - (1 - S);
  const P = ((vt = t.floatProperties) == null ? void 0 : vt._IndirectLightIntensity) ?? 0.1, R = P ? 1 - P : void 0, b = (Mt = t.textureProperties) == null ? void 0 : Mt._SphereAdd, V = b != null ? [1, 1, 1] : void 0, B = b != null ? {
    index: b
  } : void 0, k = ((Tt = t.floatProperties) == null ? void 0 : Tt._RimLightingMix) ?? 0, L = (wt = t.textureProperties) == null ? void 0 : wt._RimTexture, se = L != null ? {
    index: L
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, oe = (((yt = t.vectorProperties) == null ? void 0 : yt._RimColor) ?? [0, 0, 0, 1]).map(A), re = ((St = t.floatProperties) == null ? void 0 : St._RimFresnelPower) ?? 1, ae = ((Pt = t.floatProperties) == null ? void 0 : Pt._RimLift) ?? 0, le = ["none", "worldCoordinates", "screenCoordinates"][((Rt = t.floatProperties) == null ? void 0 : Rt._OutlineWidthMode) ?? 0];
  let Y = ((Lt = t.floatProperties) == null ? void 0 : Lt._OutlineWidth) ?? 0;
  Y = 0.01 * Y;
  const it = (Et = t.textureProperties) == null ? void 0 : Et._OutlineWidthTexture, he = it != null ? {
    index: it
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, ce = (((kt = t.vectorProperties) == null ? void 0 : kt._OutlineColor) ?? [0, 0, 0]).map(A), de = (((bt = t.floatProperties) == null ? void 0 : bt._OutlineColorMode) ?? 0) === 1 ? ((Ct = t.floatProperties) == null ? void 0 : Ct._OutlineLightingMix) ?? 1 : 0, nt = (At = t.textureProperties) == null ? void 0 : At._UvAnimMaskTexture, ue = nt != null ? {
    index: nt
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, me = ((It = t.floatProperties) == null ? void 0 : It._UvAnimScrollX) ?? 0;
  let D = ((Vt = t.floatProperties) == null ? void 0 : Vt._UvAnimScrollY) ?? 0;
  D != null && (D = -D);
  const pe = ((Bt = t.floatProperties) == null ? void 0 : Bt._UvAnimRotation) ?? 0;
  return {
    ...e,
    pbrMetallicRoughness: {
      baseColorFactor: m,
      baseColorTexture: f
    },
    normalTexture: p,
    emissiveTexture: v,
    emissiveFactor: u,
    alphaMode: a,
    alphaCutoff: h,
    doubleSided: c,
    extensions: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      VRMC_materials_mtoon: {
        specVersion: "1.0",
        transparentWithZWrite: r,
        // renderQueueOffsetNumber,
        shadeColorFactor: T,
        shadeMultiplyTexture: y,
        shadingShiftFactor: w,
        shadingToonyFactor: S,
        giEqualizationFactor: R,
        matcapFactor: V,
        matcapTexture: B,
        rimLightingMixFactor: k,
        rimMultiplyTexture: se,
        parametricRimColorFactor: oe,
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
}, Ge = (
  /* glsl */
  `
varying vec3 vViewPosition;
`
), Qe = (
  /* glsl */
  `
    // Transform the vertex position to world space
    vec4 worldPosition = matrix_model * vec4(vertex_position, 1.0);

    // Transform the world position to view space
    // vec4 viewPosition = matrix_viewProjection * worldPosition;

    // Pass the view position to the fragment shader
    vViewPosition = -worldPosition.xyz;
`
), Ze = (
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
), Je = (
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
), O = {
  baseVS: Ge,
  endVS: Qe,
  basePS: Ze,
  endPS: Je
}, Ke = (s) => class extends s.StandardMaterial {
  constructor() {
    super(), this.litFactor = new s.Color(1, 1, 1, 1), this.alphaTest = 0, this.baseColorMap = null, this.mapUvTransform = new s.Mat3(), this.normalMapUvTransform = new s.Mat3(), this.normalScale = new s.Vec2(1, 1), this.emissiveMapUvTransform = new s.Mat3(), this.shadeColorFactor = new s.Color(0, 0, 0, 1), this.shadeMultiplyTexture = null, this.shadeMultiplyTextureUvTransform = new s.Mat3(), this.shadingShiftFactor = 0, this.shadingShiftTexture = null, this.shadingShiftTextureUvTransform = new s.Mat3(), this.shadingShiftTextureScale = 1, this.shadingToonyFactor = 0.9, this.giEqualizationFactor = 0, this.matcapFactor = new s.Color(1, 1, 1, 1), this.matcapTexture = null, this.matcapTextureUvTransform = new s.Mat3(), this.parametricRimColorFactor = new s.Color(0, 0, 0, 1), this.rimMultiplyTexture = null, this.rimMultiplyTextureUvTransform = new s.Mat3(), this.rimLightingMixFactor = 0, this.parametricRimFresnelPowerFactor = 5, this.parametricRimLiftFactor = 0, this.outlineWidthMultiplyTexture = null, this.outlineWidthMultiplyTextureUvTransform = new s.Mat3(), this.outlineWidthFactor = 0.02, this.outlineColorFactor = new s.Color(1, 0.5, 0, 1), this.outlineLightingMixFactor = 0, this.uvAnimationMaskTexture = null, this.uvAnimationMaskTextureUvTransform = new s.Mat3(), this.uvAnimationScrollXOffset = 0, this.uvAnimationScrollYOffset = 0, this.uvAnimationRotationPhase = 0, this.useLighting = !1, this.useSkybox = !1;
  }
  parseGLTFAttrs(e, i, n) {
    var u;
    if (e.hasOwnProperty("alphaMode"))
      switch (e.alphaMode) {
        case "MASK":
          this.blendType = s.BLEND_NONE, e.hasOwnProperty("alphaCutoff") ? this.alphaTest = e.alphaCutoff : this.alphaTest = 0.5;
          break;
        case "BLEND":
          this.blendType = s.BLEND_NORMAL, this.depthWrite = !1;
          break;
        default:
        case "OPAQUE":
          this.blendType = s.BLEND_NONE;
          break;
      }
    else
      this.blendType = s.BLEND_NONE;
    if (e != null && e.emissiveFactor) {
      const x = e.emissiveFactor;
      this.emissive = new s.Color(
        Math.pow(x[0], 1 / 2.2),
        Math.pow(x[1], 1 / 2.2),
        Math.pow(x[2], 1 / 2.2),
        1
      );
    }
    if ((u = e == null ? void 0 : e.pbrMetallicRoughness) != null && u.baseColorFactor) {
      const x = e.pbrMetallicRoughness.baseColorFactor;
      this.diffuse = new s.Color(
        Math.pow(x[0], 1 / 2.2),
        Math.pow(x[1], 1 / 2.2),
        Math.pow(x[2], 1 / 2.2),
        x[3]
      );
    }
    this.litFactor = this.diffuse, this.baseColorMap = this.diffuseMap || this.opacityMap;
    const {
      version: r,
      shadeColorFactor: o,
      shadeMultiplyTexture: a,
      shadingShiftFactor: h,
      shadingToonyFactor: l,
      parametricRimColorFactor: c,
      rimLightingMixFactor: m,
      parametricRimFresnelPowerFactor: d,
      parametricRimLiftFactor: f,
      outlineWidthFactor: _,
      outlineColorFactor: g,
      outlineLightingMixFactor: p
    } = n;
    r == "0.0" && (this.emissiveIntensity = 0), o && (this.shadeColorFactor = new s.Color(
      Math.pow(o[0], 1 / 2.2),
      Math.pow(o[1], 1 / 2.2),
      Math.pow(o[2], 1 / 2.2),
      1
    )), this.shadeMultiplyTexture = a, this.shadingShiftFactor = h, this.shadingToonyFactor = l, c && (this.parametricRimColorFactor = new s.Color(
      Math.pow(c[0], 1 / 2.2),
      Math.pow(c[1], 1 / 2.2),
      Math.pow(c[2], 1 / 2.2),
      1
    )), this.rimLightingMixFactor = m, this.parametricRimFresnelPowerFactor = d, this.parametricRimLiftFactor = f, this.outlineWidthFactor = _, g && (this.outlineColorFactor = new s.Color(
      Math.pow(g[0], 1 / 2.2),
      Math.pow(g[1], 1 / 2.2),
      Math.pow(g[2], 1 / 2.2),
      1
    )), this.outlineLightingMixFactor = p, this.cull = s.CULLFACE_NONE, this.setShaderChunks(), this.setShaderParameters();
  }
  setShaderChunks() {
    this.chunks.APIVersion = s.CHUNKAPI_1_70;
    const e = s.shaderChunks;
    this.chunks.baseVS = e.baseVS, this.chunks.endVS = e.endVS, this.chunks.basePS = e.basePS, this.chunks.endPS = e.endPS, this.shadeMultiplyTexture && (this.chunks.basePS += `
        #define USE_SHADEMULTIPLYTEXTURE
        `), this.emissiveMap && (this.chunks.basePS += `
        #define USE_EMISSIVEMAP
        `), this.cull == s.CULLFACE_NONE && (this.chunks.basePS += `
        #define DOUBLE_SIDED
        `), this.chunks.baseVS += O.baseVS, this.chunks.endVS += O.endVS, this.chunks.basePS += O.basePS, this.chunks.endPS += O.endPS;
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
}, qe = (
  /* glsl */
  `
uniform float outlineWidthFactor;
`
), ti = (
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
), ei = (
  /* glsl */
  `
uniform sampler2D baseColorMap;
uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;
`
), ii = (
  /* glsl */
  `
    vec4 color = texture2D(baseColorMap, vUv0);
    color.rgb = outlineColorFactor.rgb * mix( vec3( 1.0 ), color.rgb, outlineLightingMixFactor );
    gl_FragColor = color;
`
), H = {
  baseVS: qe,
  endVS: ti,
  basePS: ei,
  endPS: ii
}, ni = (s) => class extends s.StandardMaterial {
  parseGLTFAttrs(e) {
    var i, n;
    if (e.hasOwnProperty("alphaMode"))
      switch (e.alphaMode) {
        case "MASK":
          this.blendType = s.BLEND_NONE, e.hasOwnProperty("alphaCutoff") ? this.alphaTest = e.alphaCutoff : this.alphaTest = 0.5;
          break;
        case "BLEND":
          this.blendType = s.BLEND_NORMAL, this.depthWrite = !1;
          break;
        default:
        case "OPAQUE":
          this.blendType = s.BLEND_NONE;
          break;
      }
    else
      this.blendType = s.BLEND_NONE;
    if ((i = e == null ? void 0 : e.extensions) != null && i[K]) {
      const r = (n = e == null ? void 0 : e.extensions) == null ? void 0 : n[K], {
        outlineColorFactor: o,
        outlineWidthFactor: a,
        outlineLightingMixFactor: h
        // outlineWidthMultiplyTexture,
      } = r;
      o && this.setOutlineColorFactor(
        new s.Color(
          Math.pow(o[0], 1 / 2.2),
          Math.pow(o[1], 1 / 2.2),
          Math.pow(o[2], 1 / 2.2)
        )
      ), a && this.setOutlineWidthFactor(a), h && this.setOutlineLightingMixFactor(h);
    }
    this.cull = s.CULLFACE_FRONT, this.setShaderChunks();
  }
  setShaderChunks() {
    this.chunks.APIVersion = s.CHUNKAPI_1_70;
    const e = s.shaderChunks;
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
}, si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EXTENSION_VRM: Xe,
  EXTENSION_VRMC_MATERIALS_MTOON: K,
  MToonMaterialCullMode: Jt,
  createVRMCMtoonMaterial: Ke,
  createVRMCOutlineMaterial: ni,
  gammaEOTF: A,
  parseV0MToonProperties: Ye
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
class et extends Kt {
  static _setupTransforms(t, e) {
    const i = new t.Entity();
    i.name = "VRMHumanoidRig";
    const n = {}, r = {}, o = {};
    z.forEach((h) => {
      const l = e.getBoneNode(h);
      if (l) {
        n[h] = l.getPosition().clone(), l.getRotation().clone(), r[h] = l.getLocalRotation().clone();
        const c = new t.Quat();
        l.parent && c.copy(l.parent.getRotation()), o[h] = c;
      }
    });
    const a = {};
    return z.forEach((h) => {
      var c;
      const l = e.getBoneNode(h);
      if (l) {
        const m = n[h];
        let d = h, f;
        for (; f == null && (d = $[d], d != null); )
          f = n[d];
        const _ = new t.Entity();
        _.name = l.name, (d ? (c = a[d]) == null ? void 0 : c.node : i).addChild(_);
        const p = new t.Vec3().copy(m);
        f && p.sub(f), _.setLocalPosition(p), a[h] = { node: _ };
      }
    }), {
      rigBones: a,
      root: i,
      parentWorldRotations: o,
      boneRotations: r
    };
  }
  constructor(t, e) {
    const { rigBones: i, root: n, parentWorldRotations: r, boneRotations: o } = et._setupTransforms(
      t,
      e
    );
    super(i), this.pcRef = t, this.original = e, this.root = n, this._parentWorldRotations = r, this._boneRotations = o, this._quatA = new t.Quat(), this._quatB = new t.Quat(), this._vec3A = new t.Vec3(), this._mat4A = new t.Mat4();
    const a = t.Application.getApplication();
    a && a.root.addChild(n);
  }
  applyMatrix4(t, e) {
    const i = t.x, n = t.y, r = t.z, o = e.data, a = 1 / (o[3] * i + o[7] * n + o[11] * r + o[15]);
    return t.x = (o[0] * i + o[4] * n + o[8] * r + o[12]) * a, t.y = (o[1] * i + o[5] * n + o[9] * r + o[13]) * a, t.z = (o[2] * i + o[6] * n + o[10] * r + o[14]) * a, t;
  }
  update() {
    z.forEach((t) => {
      var n;
      const e = (n = this.original.humanBones[t]) == null ? void 0 : n.entity, i = this.getBoneNode(t);
      if (e != null && i) {
        const r = this._parentWorldRotations[t], o = this._quatB.copy(r).invert(), a = this._boneRotations[t];
        if (this._quatA.copy(i.getLocalRotation()), this._quatA.mul(r), this._quatA.copy(o.mul(this._quatA)), this._quatA.mul(a), e.setLocalRotation(this._quatA), t === "hips") {
          const h = this._vec3A.copy(i.getPosition()), l = this._mat4A.copy(e.parent.getWorldTransform()), c = this.applyMatrix4(h, l.invert());
          e.setLocalPosition(c);
        }
      }
    });
  }
}
class oi {
  constructor(t, e, i) {
    this.autoUpdateHumanBones = (i == null ? void 0 : i.autoUpdateHumanBones) ?? !0, this._rawHumanBones = new Kt(e), this._normalizedHumanBones = new et(t, this._rawHumanBones);
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
function ri(s, t, e) {
  const i = s.humanBones, n = {};
  return s.humanBones != null && Object.entries(i).map(([, r]) => {
    var l;
    let o = r.bone;
    const a = r.node;
    if (o == null || a == null)
      return;
    const h = t.resource.data.nodes[a];
    if (h == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${o} (index = ${a}) does not exist`
      );
      return;
    }
    n[o] = {
      node: h,
      entity: ((l = e.findByTag(`node_${a}`)) == null ? void 0 : l[0]) || null
    };
  }), n;
}
function ai(s, t, e) {
  var r;
  const i = {}, n = s.humanBones.leftThumbIntermediate != null || s.humanBones.rightThumbIntermediate != null;
  if (s.humanBones)
    for (const o in s.humanBones) {
      let a = o;
      const h = s.humanBones[o].node, l = t.resource.data.nodes[h];
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
function li(s, t, e, i) {
  var a, h, l, c, m, d, f, _, g, p;
  const n = (h = (a = t.resource.data.gltf) == null ? void 0 : a.extensions) == null ? void 0 : h.VRM, r = (c = (l = t.resource.data.gltf) == null ? void 0 : l.extensions) == null ? void 0 : c.VRMC_vrm;
  if (!n && !r)
    return console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar."), null;
  let o = null;
  if (n) {
    const u = (f = (d = (m = t.resource.data.gltf) == null ? void 0 : m.extensions) == null ? void 0 : d.VRM) == null ? void 0 : f.humanoid;
    o = ri(u, t, e);
  } else if (r) {
    const u = r.specVersion;
    if (!tt.has(u))
      return console.warn(`Unknown VRMC_vrm specVersion "${u}"`), null;
    const x = (p = (g = (_ = t.resource.data.gltf) == null ? void 0 : _.extensions) == null ? void 0 : g.VRMC_vrm) == null ? void 0 : p.humanoid;
    o = ai(x, t, e);
  }
  if (o) {
    const u = !!(i != null && i.autoUpdateHumanBones);
    return new oi(s, o, { autoUpdateHumanBones: u });
  }
  return null;
}
const hi = function(s, t, e, i, n, r) {
  const o = r;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const a = function(h) {
    const l = new Blob([h.resource]), c = URL.createObjectURL(l);
    return qt(
      s,
      c,
      e,
      i,
      function(m, d) {
        n(m, d), URL.revokeObjectURL(c);
      },
      o
    );
  };
  t.loaded ? a(t) : (t.ready(a), o.assets.load(t));
}, qt = function(s, t, e, i, n, r) {
  const o = r;
  if (!o) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const a = i, h = {
    url: t,
    filename: a
  }, l = new s.Asset(a, "container", h, void 0, e);
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
  }), o.assets.add(l), o.assets.load(l), l;
}, te = (s) => {
  if (!s.resource) {
    console.error("addIndexToNodeTags Error: asset.resource is not available");
    return;
  }
  if (!(s.resource.data && s.resource.data.gltf)) {
    console.error("addIndexToNodeTags Error: asset.resource.data.gltf is not available");
    return;
  }
  s.resource.data.nodes.forEach((i, n) => {
    i.tags.add(`node_${n}`);
  });
}, ee = (s) => {
  var i, n;
  const t = (i = s.resource.data.gltf.extensions) == null ? void 0 : i.VRMC_vrm, e = (n = s.resource.data.gltf.extensions) == null ? void 0 : n.VRM;
  return t ? "v1" : e ? "v0" : null;
};
var E, j, ie, X, ne;
class ci {
  constructor(t, e) {
    U(this, j);
    U(this, X);
    U(this, E, void 0);
    Ft(this, E, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, n = {}, r = !0) {
    const o = [];
    return new Promise(
      (a, h) => {
        const l = (c, m) => {
          c && (this.loading = !1, h(`GLTFLoader Error: ${c}`)), C(this, E).forEach((g) => {
            const p = g(m);
            o.push(p);
          }), r && Q(this, X, ne).call(this, m);
          const d = m.resource.instantiateRenderEntity(n), f = new this._pcRef.Entity(e, this.app);
          f.addChild(d), o.forEach((g) => {
            g.instantiated && g.instantiated(f);
          }), this.loading = !1;
          const _ = ee(m);
          a({ entity: f, asset: m, version: _ });
        };
        t || h("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? l(null, t) : (t.once("load", () => {
          l(null, t);
        }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? hi(
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
    C(this, E).has(t) || C(this, E).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    C(this, E).has(t) && C(this, E).delete(t);
  }
  static registerAnimation(t, e, { useResourceName: i, defaultPlayIndex: n } = {
    useResourceName: !1,
    defaultPlayIndex: 0
  }) {
    if (e.length !== 0 && (t.addComponent("anim", {
      activate: !0
    }), e.forEach((r, o) => {
      const a = r.resource.name.replace(".", "_");
      t.anim && t.anim.assignAnimation(
        i ? a : `ANIMATION_${o}`,
        r.resource
      );
    }), n !== null)) {
      const r = i ? e[n].resource.name : `ANIMATION_${n}`;
      t.anim && t.anim.baseLayer.states.find((o) => o === r) && t.anim.baseLayer.transition(r);
    }
  }
}
E = new WeakMap(), j = new WeakSet(), ie = function(t, e) {
  t.forEach((i, n) => {
    const r = e[n].extensions;
    r && (i.extensions = r);
  });
}, X = new WeakSet(), ne = function(t) {
  const e = t.resource.data.gltf.nodes, i = t.resource.data.nodes;
  Q(this, j, ie).call(this, i, e), te(t);
};
window.VRMLoader = {
  VrmAnimation: Ae,
  VrmExpression: We,
  VrmSpringBone: je,
  VrmMapList: _e,
  VrmcMaterialsMtoon: si,
  createFormattedVRMHumanoid: li,
  addIndexToNodeTags: te,
  getVersion: ee
};
window.GLTFLoader = ci;
export {
  ci as GLTFLoader,
  Ae as VrmAnimation,
  We as VrmExpression,
  _e as VrmMapList,
  je as VrmSpringBone,
  si as VrmcMaterialsMtoon,
  te as addIndexToNodeTags,
  li as createFormattedVRMHumanoid,
  ee as getVersion
};
