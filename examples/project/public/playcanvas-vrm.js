/**
 * name: playcanvas-vrm
 * version: v1.4.0
 */
<<<<<<< HEAD
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
=======
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _pluginsCallbacks, _setExtensionsToNodes, setExtensionsToNodes_fn, _addEssentialTags, addEssentialTags_fn;
import * as pc from "playcanvas";
const VRMHumanBoneList = [
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
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
<<<<<<< HEAD
], $ = {
=======
];
const VRMHumanBoneParentMap = {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
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
};
const VRMRigMap = {
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
};
const thumbBoneNameMap = {
  leftThumbProximal: "leftThumbMetacarpal",
  leftThumbIntermediate: "leftThumbProximal",
  rightThumbProximal: "rightThumbMetacarpal",
  rightThumbIntermediate: "rightThumbProximal"
<<<<<<< HEAD
}, Xt = {
=======
};
const v0v1PresetNameMap = {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
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
<<<<<<< HEAD
}, q = {
=======
};
const VRMExpressionPresetName = {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
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
<<<<<<< HEAD
}, tt = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]), ge = {
=======
};
const POSSIBLE_SPEC_VERSIONS$1 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
const v0ExpressionMaterialColorMap = {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  _Color: "color",
  _EmissionColor: "emissionColor",
  _ShadeColor: "shadeColor",
  _RimColor: "rimColor",
  _OutlineColor: "outlineColor"
<<<<<<< HEAD
}, xe = {
=======
};
const expressionMateriaPropertyNameMapMap = {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
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
<<<<<<< HEAD
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
=======
};
const VrmMapList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POSSIBLE_SPEC_VERSIONS: POSSIBLE_SPEC_VERSIONS$1,
  VRMExpressionPresetName,
  VRMHumanBoneList,
  VRMHumanBoneParentMap,
  VRMRigMap,
  expressionMateriaPropertyNameMapMap,
  thumbBoneNameMap,
  v0ExpressionMaterialColorMap,
  v0v1PresetNameMap
}, Symbol.toStringTag, { value: "Module" }));
class VRMAnimation {
  /*     public expressionTracks: {
      preset: Map<VRMExpressionPresetName, IVrmaTrack>;
      custom: Map<string, IVrmaTrack>; 
    };
    public lookAtTrack: IVrmaTrack | null;  */
  constructor(pcRef) {
    this.duration = 0;
    this.restHipsPosition = new pcRef.Vec3();
    this.humanoidTracks = {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      translation: /* @__PURE__ */ new Map(),
      rotation: /* @__PURE__ */ new Map()
    }, this.expressionTracks = {
      preset: /* @__PURE__ */ new Map(),
      custom: /* @__PURE__ */ new Map()
    }, this.lookAtTrack = null;
  }
}
<<<<<<< HEAD
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
      const l = a;
      return {
        component: l.component,
        entityPath: [...l.entityPath],
        propertyPath: [...l.propertyPath]
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
=======
function arrayChunk(array, every) {
  const N = array.length;
  const ret = [];
  let current = [];
  let remaining = 0;
  for (let i = 0; i < N; i++) {
    const el = array[i];
    if (remaining <= 0) {
      remaining = every;
      current = [];
      ret.push(current);
    }
    current.push(el);
    remaining--;
  }
  return ret;
}
function applyMatrix4(pcRef, v3, m) {
  const e = m.data;
  const w = 1 / (e[3] * v3.x + e[7] * v3.y + e[11] * v3.z + e[15]);
  const _x = (e[0] * v3.x + e[4] * v3.y + e[8] * v3.z + e[12]) * w;
  const _y = (e[1] * v3.x + e[5] * v3.y + e[9] * v3.z + e[13]) * w;
  const _z = (e[2] * v3.x + e[6] * v3.y + e[10] * v3.z + e[14]) * w;
  return new pcRef.Vec3(_x, _y, _z);
}
function cloneAnimTrack(pcRef, origAnimTrack) {
  const inputs = origAnimTrack.inputs.map(
    (input) => new pcRef.AnimData(input.components, input.data)
  );
  const outputs = origAnimTrack.outputs.map(
    (output) => new pcRef.AnimData(output.components, output.data)
  );
  const curves = origAnimTrack.curves.map((curve) => {
    const curvePaths = curve.paths.map((path) => {
      const morphCurvePath = path;
      return {
        component: morphCurvePath.component,
        entityPath: [...morphCurvePath.entityPath],
        propertyPath: [...morphCurvePath.propertyPath]
      };
    });
    return new pcRef.AnimCurve(curvePaths, curve.input, curve.output, curve.interpolation);
  });
  return new pcRef.AnimTrack(origAnimTrack.name, origAnimTrack.duration, inputs, outputs, curves);
}
const POSSIBLE_SPEC_VERSIONS = /* @__PURE__ */ new Set(["1.0", "1.0-draft"]);
class VRMAnimationLoader {
  constructor(pcRef) {
    this.pcRef = pcRef;
  }
  loadVRMA(vrmaAsset) {
    var _a, _b, _c;
    const defGltf = vrmaAsset.resource.data.gltf;
    const defExtensionsUsed = defGltf.extensionsUsed;
    if (defExtensionsUsed == null || defExtensionsUsed.indexOf("VRMC_vrm_animation") == -1) {
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const defExtension = (_a = defGltf.extensions) == null ? void 0 : _a["VRMC_vrm_animation"];
    if (defExtension == null) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const specVersion = defExtension.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
      console.warn(`CreateVRMAnimation: Unknown VRMC_vrm_animation spec version: ${specVersion}`);
      return;
    }
<<<<<<< HEAD
    r === "1.0-draft" && console.warn(
      "CreateVRMAnimation: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file."
    );
    const o = t.resource.data.nodes, a = this._createNodeMap(e, n), l = this._createBoneWorldMatrixMap(o, n), h = (p = (g = n.humanoid) == null ? void 0 : g.humanBones.hips) == null ? void 0 : p.node, c = h != null ? o[h] : null, m = c ? c.getPosition() : new this.pcRef.Vec3();
    return t.resource.data.animations.map((u, x) => {
      const v = e.animations[x], T = this._parseAnimation(u, v, a, l);
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
    const l = (d = e.expressions) == null ? void 0 : d.preset;
    l && Object.entries(l).forEach(([g, p]) => {
      const u = p == null ? void 0 : p.node;
      u != null && r.set(u, g);
    });
    const h = (f = e.expressions) == null ? void 0 : f.custom;
    h && Object.entries(h).forEach(([g, p]) => {
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
        const l = t[a];
        i.set(r, l.getWorldTransform());
        const h = new this.pcRef.Mat4();
        r === "hips" && i.set("hipsParent", ((n = l.parent) == null ? void 0 : n.getWorldTransform()) ?? h);
      }
    }
    return i;
  }
  _parseAnimation(t, e, i, n) {
    const { inputs: r, outputs: o, curves: a } = Yt(this.pcRef, t), l = e.channels, h = new ve(this.pcRef);
    return h.duration = t.duration, l.forEach((c, m) => {
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
            h.humanoidTracks.translation.set(u, S);
          }
        else if (f === "rotation") {
          const T = n.get(u), M = n.get(v), y = T.getEulerAngles(), w = new this.pcRef.Quat();
          w.setFromEulerAngles(y), w.invert();
          const S = M.getEulerAngles(), P = new this.pcRef.Quat();
          P.setFromEulerAngles(S);
          const R = Dt(p.data, 4).flatMap((b) => {
            let E = new this.pcRef.Quat(b[0], b[1], b[2], b[3]);
            return E = E.mul2(P, E).mul(w), [E.x, E.y, E.z, E.w];
          }), k = new Float32Array(R), V = new this.pcRef.AnimData(p.components, k), B = { curve: _, input: g, output: V };
          h.humanoidTracks.rotation.set(u, B);
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
          we.has(x) ? h.expressionTracks.preset.set(
            x,
            T
          ) : h.expressionTracks.custom.set(x, T);
        } else
          throw new Error(`Invalid path "${f}"`);
        return;
      }
      if (d === i.lookAtIndex)
        if (f === "rotation") {
          const v = { curve: _, input: g, output: p };
          h.lookAtTrack = v;
        } else
          throw new Error(`Invalid path "${f}"`);
    }), h;
  }
}
class Se {
  constructor(t, e, i, n, r, o = "v0") {
    this.pcRef = t, this.vrmAnimation = n, this.stateName = e, this.name = i, this.humanoid = r, this.metaVersion = o;
=======
    if (specVersion === "1.0-draft") {
      console.warn(
        "CreateVRMAnimation: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file."
      );
    }
    const pcNodes = vrmaAsset.resource.data.nodes;
    const nodeMap = this._createNodeMap(defGltf, defExtension);
    const worldMatrixMap = this._createBoneWorldMatrixMap(pcNodes, defExtension);
    const hipsNode = (_c = (_b = defExtension.humanoid) == null ? void 0 : _b.humanBones["hips"]) == null ? void 0 : _c.node;
    const hips = hipsNode != null ? pcNodes[hipsNode] : null;
    const restHipsPosition = hips ? hips.getPosition() : new this.pcRef.Vec3();
    const animTracks = vrmaAsset.resource.data.animations;
    const animations = animTracks.map((animTrack, index) => {
      const defAnimation = defGltf.animations[index];
      const animation = this._parseAnimation(animTrack, defAnimation, nodeMap, worldMatrixMap);
      animation.restHipsPosition = restHipsPosition;
      return animation;
    });
    return animations;
  }
  _createNodeMap(defGltf, defExtension) {
    var _a, _b, _c, _d;
    const origNameToHumanoidIndex = /* @__PURE__ */ new Map();
    const humanoidIndexToName = /* @__PURE__ */ new Map();
    const expressionsIndexToName = /* @__PURE__ */ new Map();
    const origNodes = defGltf.nodes;
    if (origNodes) {
      origNodes.forEach((value, index) => {
        if (value.name) {
          origNameToHumanoidIndex.set(value.name, index);
        }
      });
    }
    const humanBones = (_a = defExtension.humanoid) == null ? void 0 : _a.humanBones;
    if (humanBones) {
      Object.entries(humanBones).forEach(([name, bone]) => {
        const node = bone == null ? void 0 : bone.node;
        if (node != null) {
          humanoidIndexToName.set(node, name);
        }
      });
    }
    const preset = (_b = defExtension.expressions) == null ? void 0 : _b.preset;
    if (preset) {
      Object.entries(preset).forEach(([name, expression]) => {
        const node = expression == null ? void 0 : expression.node;
        if (node != null) {
          expressionsIndexToName.set(node, name);
        }
      });
    }
    const custom = (_c = defExtension.expressions) == null ? void 0 : _c.custom;
    if (custom) {
      Object.entries(custom).forEach(([name, expression]) => {
        const { node } = expression;
        expressionsIndexToName.set(node, name);
      });
    }
    const lookAtIndex = ((_d = defExtension.lookAt) == null ? void 0 : _d.node) ?? null;
    return { origNameToHumanoidIndex, humanoidIndexToName, expressionsIndexToName, lookAtIndex };
  }
  //In THREE, it's async
  _createBoneWorldMatrixMap(pcNodes, defExtension) {
    var _a;
    const worldMatrixMap = /* @__PURE__ */ new Map();
    if (defExtension.humanoid == null) {
      return worldMatrixMap;
    }
    for (const [boneName, humanBone] of Object.entries(defExtension.humanoid.humanBones)) {
      const node = humanBone == null ? void 0 : humanBone.node;
      if (node != null) {
        const pcNode = pcNodes[node];
        worldMatrixMap.set(boneName, pcNode.getWorldTransform());
        const MAT4_IDENTITY = new this.pcRef.Mat4();
        if (boneName === "hips") {
          worldMatrixMap.set("hipsParent", ((_a = pcNode.parent) == null ? void 0 : _a.getWorldTransform()) ?? MAT4_IDENTITY);
        }
      }
    }
    return worldMatrixMap;
  }
  _parseAnimation(animTrack, defAnimation, nodeMap, worldMatrixMap) {
    const { inputs, outputs, curves } = cloneAnimTrack(this.pcRef, animTrack);
    const defChannels = defAnimation.channels;
    const result = new VRMAnimation(this.pcRef);
    result.duration = animTrack.duration;
    defChannels.forEach((channel, index) => {
      const { node, path } = channel.target;
      const input = inputs[index];
      const output = outputs[index];
      const curve = curves[index];
      if (node == null) {
        return;
      }
      const boneName = nodeMap.humanoidIndexToName.get(node);
      if (boneName != null) {
        let parentBoneName = VRMHumanBoneParentMap[boneName];
        while (parentBoneName != null && worldMatrixMap.get(parentBoneName) == null) {
          parentBoneName = VRMHumanBoneParentMap[parentBoneName];
        }
        parentBoneName ?? (parentBoneName = "hipsParent");
        curve.paths.forEach((graph) => {
          const morphCurvePath = graph;
          const arrangedEntityPath = morphCurvePath.entityPath.map((path2) => {
            const nodeIndex = nodeMap.origNameToHumanoidIndex.get(path2);
            if (nodeIndex) {
              const _boneName = nodeMap.humanoidIndexToName.get(nodeIndex);
              return _boneName ? _boneName : boneName;
            } else {
              return boneName;
            }
          });
          morphCurvePath.entityPath = arrangedEntityPath;
        });
        if (path === "translation") {
          if (boneName !== "hips") {
            console.warn(
              `The loading animation contains a translation track for ${boneName}, which is not permitted in the VRMC_vrm_animation spec. ignoring the track`
            );
          } else {
            const hipsParentWorldMatrix = worldMatrixMap.get("hipsParent");
            const outputData = arrayChunk(output.data, 3).flatMap((v) => {
              let _vec3 = new this.pcRef.Vec3(v[0], v[1], v[2]);
              _vec3 = applyMatrix4(this.pcRef, _vec3, hipsParentWorldMatrix);
              return [_vec3.x, _vec3.y, _vec3.z];
            });
            const _outputData = new Float32Array(outputData);
            const _output = new this.pcRef.AnimData(output.components, _outputData);
            const vrmaTrack = { curve, input, output: _output };
            result.humanoidTracks.translation.set(boneName, vrmaTrack);
          }
        } else if (path === "rotation") {
          const worldMatrix = worldMatrixMap.get(boneName);
          const parentWorldMatrix = worldMatrixMap.get(parentBoneName);
          const worldMatrixRotation = worldMatrix.getEulerAngles();
          const worldMatrixQuat = new this.pcRef.Quat();
          worldMatrixQuat.setFromEulerAngles(worldMatrixRotation);
          worldMatrixQuat.invert();
          const parentWorldMatrixRotation = parentWorldMatrix.getEulerAngles();
          const parentWorldMatrixQuat = new this.pcRef.Quat();
          parentWorldMatrixQuat.setFromEulerAngles(parentWorldMatrixRotation);
          const outputData = arrayChunk(output.data, 4).flatMap((q) => {
            let _quat = new this.pcRef.Quat(q[0], q[1], q[2], q[3]);
            _quat = _quat.mul2(parentWorldMatrixQuat, _quat).mul(worldMatrixQuat);
            return [_quat.x, _quat.y, _quat.z, _quat.w];
          });
          const _outputData = new Float32Array(outputData);
          const _output = new this.pcRef.AnimData(output.components, _outputData);
          const vrmaTrack = { curve, input, output: _output };
          result.humanoidTracks.rotation.set(boneName, vrmaTrack);
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
        return;
      }
    });
    return result;
  }
}
class VRMAnimationTrack {
  constructor(pcRef, name, vrmAnimation, humanoid, metaVersion = "v0") {
    this.pcRef = pcRef;
    this.vrmAnimation = vrmAnimation;
    this.name = name;
    this.humanoid = humanoid;
    this.metaVersion = metaVersion;
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  get result() {
    return this.createVRMAnimTrack();
  }
  createVRMAnimTrack() {
<<<<<<< HEAD
    const t = [], e = [], i = [], n = [], r = this._createHumanoidTracks();
    n.push(...r.translation.values()), n.push(...r.rotation.values());
    const o = this._createLookAtTracks() ?? this._resetLookAtTrack(n[0].input);
    n.push(...o.values());
    for (let l = 0; l < n.length; l++) {
      t.push(n[l].input), e.push(n[l].output);
      const h = new this.pcRef.AnimCurve(
        n[l].curve.paths,
        l,
        l,
        n[l].curve.interpolation
      );
      i.push(h), n[l].curve.paths.forEach((m) => {
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
        const h = this.vrmAnimation.restHipsPosition.y, d = (((n = this.humanoid.rawHumanBones.hips) == null ? void 0 : n.node.getPosition()) || new this.pcRef.Vec3()).y / h, f = a.output.data.map(
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
        const h = a.output.data.map(
          (f, _) => this.metaVersion === "v0" && _ % 2 === 0 ? -f : f
        ), c = new Float32Array(h), m = new this.pcRef.AnimData(a.output.components, c), d = {
          curve: a.curve,
          input: a.input,
          output: m
        };
        e.set(o, d);
=======
    const inputs = [];
    const outputs = [];
    const curves = [];
    const vrmaTracks = [];
    const humanoidTracks = this._createVRMAnimationHumanoidTracks();
    vrmaTracks.push(...humanoidTracks.translation.values());
    vrmaTracks.push(...humanoidTracks.rotation.values());
    for (let i = 0; i < vrmaTracks.length; i++) {
      inputs.push(vrmaTracks[i].input);
      outputs.push(vrmaTracks[i].output);
      const _curve = new this.pcRef.AnimCurve(
        vrmaTracks[i].curve.paths,
        i,
        i,
        vrmaTracks[i].curve.interpolation
      );
      curves.push(_curve);
      const vrmaCurve = vrmaTracks[i].curve;
      vrmaCurve.paths.forEach((graph) => {
        const morphCurvePath = graph;
        const entityPath = morphCurvePath.entityPath;
        entityPath.unshift("SkeletonRoot");
        const arrangedEntityPath = entityPath.map((path) => {
          var _a;
          const originalRigName = path;
          const vrmBoneName = VRMRigMap[originalRigName];
          const vrmNodeName = (_a = this.humanoid.getRawBoneNode(vrmBoneName)) == null ? void 0 : _a.name;
          if (!vrmBoneName || !vrmNodeName) {
            return path;
          }
          return vrmNodeName;
        });
        if (arrangedEntityPath.length == 1 && arrangedEntityPath[0] == "hips") {
          arrangedEntityPath.unshift("SkeletonRoot");
        }
        morphCurvePath.entityPath = arrangedEntityPath;
      });
    }
    return new this.pcRef.AnimTrack(this.name, this.vrmAnimation.duration, inputs, outputs, curves);
  }
  _createVRMAnimationHumanoidTracks() {
    var _a, _b, _c;
    const translation = /* @__PURE__ */ new Map();
    const rotation = /* @__PURE__ */ new Map();
    for (const [name, origTrack] of this.vrmAnimation.humanoidTracks.translation.entries()) {
      const nodeName = (_a = this.humanoid.getNormalizedBoneNode(name)) == null ? void 0 : _a.name;
      if (nodeName != null) {
        const animationY = this.vrmAnimation.restHipsPosition.y;
        const humanoidHipsPosition = ((_b = this.humanoid.rawHumanBones.hips) == null ? void 0 : _b.node.getPosition()) || new this.pcRef.Vec3();
        const humanoidY = humanoidHipsPosition.y;
        const scale = humanoidY / animationY;
        const outputData = origTrack.output.data.map(
          (v, i) => (this.metaVersion === "v0" && i % 3 !== 1 ? -v : v) * scale
        );
        const _outputData = new Float32Array(outputData);
        const _output = new this.pcRef.AnimData(origTrack.output.components, _outputData);
        const vrmaTrack = {
          curve: origTrack.curve,
          input: origTrack.input,
          output: _output
        };
        translation.set(name, vrmaTrack);
      }
    }
    for (const [name, origTrack] of this.vrmAnimation.humanoidTracks.rotation.entries()) {
      const nodeName = (_c = this.humanoid.getNormalizedBoneNode(name)) == null ? void 0 : _c.name;
      if (nodeName != null) {
        const outputData = origTrack.output.data.map(
          (v, i) => this.metaVersion === "v0" && i % 2 === 0 ? -v : v
        );
        const _outputData = new Float32Array(outputData);
        const _output = new this.pcRef.AnimData(origTrack.output.components, _outputData);
        const vrmaTrack = {
          curve: origTrack.curve,
          input: origTrack.input,
          output: _output
        };
        rotation.set(name, vrmaTrack);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      }
    }
    return { translation, rotation };
  }
  _createLookAtTracks() {
    const t = this.vrmAnimation.lookAtTrack;
    if (!t)
      return null;
    const e = /* @__PURE__ */ new Map(), i = ["leftEye", "rightEye"], n = (h, c) => {
      const m = c % 4, d = t.output.data[c + 3 - m], f = d === 0 ? 1 : d;
      switch (m) {
        case 0:
          return h / f * 0.06;
        case 1:
          return h / f * 0.08;
        default:
          return 1;
      }
    }, r = t.output.data.map((h, c) => (this.metaVersion === "v0" && c % 4 == 0 ? -h : h) * n(h, c)), o = new Float32Array(r), a = new this.pcRef.AnimData(t.output.components, o), l = t.curve;
    return l.paths.forEach((h) => {
      const c = h;
      i.forEach((m) => {
        c.entityPath = [m];
        const d = [{ ...c }], _ = {
          curve: new this.pcRef.AnimCurve(
            d,
            l.input,
            l.output,
            l.interpolation
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
      }, h = {
        curve: new this.pcRef.AnimCurve([{ ...a }], 0, 0, 1),
        input: t,
        output: r
      };
      e.set(o, h);
    }), e;
  }
}
<<<<<<< HEAD
class Pe {
  constructor(t, e, i, n = "v0", r, o) {
    this.pcRef = t, this.animationAsset = e, this.humanoid = i, this.metaVersion = n, this.extraSettings = r, this.origAnimTrack = o;
=======
class VRMViverseAnimationTrack {
  constructor(pcRef, animationAsset, humanoid, metaVersion = "v0", extraSettings, origAnimTrack) {
    this.pcRef = pcRef;
    this.animationAsset = animationAsset;
    this.humanoid = humanoid;
    this.metaVersion = metaVersion;
    this.extraSettings = extraSettings;
    this.origAnimTrack = origAnimTrack;
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  get result() {
    return this.createViverseAnimTrack();
  }
  createViverseAnimTrack() {
<<<<<<< HEAD
    var p;
    const t = ((p = this.humanoid.rawHumanBones.hips) == null ? void 0 : p.node.getPosition()) || new this.pcRef.Vec3(), e = t.y, i = Math.abs(e - 0), n = t.z, r = Math.abs(n - 0), o = {}, a = {};
    let { motionHipsHeight: l, negativeZAnimNames: h } = this.extraSettings;
    h || (h = []);
    const c = Yt(this.pcRef, this.origAnimTrack), d = h.includes(this.origAnimTrack.name) ? "v1" : "v0";
    let f = 0;
    if (this.animationAsset.asset.type === "container") {
      const u = this.animationAsset.asset.resource.data.nodes.find(
        (x) => x.name === F.hips
      );
      u && (f = u.getPosition().y);
    }
    l = l || f || 0.855;
    const _ = i / l;
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
function Ee(s, t, e, i, {
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
=======
    var _a;
    const vrmHipsPosition = ((_a = this.humanoid.rawHumanBones.hips) == null ? void 0 : _a.node.getPosition()) || new this.pcRef.Vec3();
    const vrmHipsY = vrmHipsPosition.y;
    const vrmHipsHeight = Math.abs(vrmHipsY - 0);
    const vrmHipsZ = vrmHipsPosition.z;
    const vrmHipsDeep = Math.abs(vrmHipsZ - 0);
    const hipPositionOutputIndexes = {};
    const scaleOutputIndexes = {};
    let { motionHipsHeight, negativeZAnimNames } = this.extraSettings;
    if (!negativeZAnimNames) {
      negativeZAnimNames = [];
    }
    const animTrack = cloneAnimTrack(this.pcRef, this.origAnimTrack);
    const isNegativeZAxis = negativeZAnimNames.includes(this.origAnimTrack.name);
    const needConvertVersion = isNegativeZAxis ? "v1" : "v0";
    let nodeMotionHipsHeight = 0;
    if (this.animationAsset.asset.type === "container") {
      const motionHipsNode = this.animationAsset.asset.resource.data.nodes.find(
        (node) => node.name === VRMRigMap.hips
      );
      if (motionHipsNode) {
        nodeMotionHipsHeight = motionHipsNode.getPosition().y;
      }
    }
    motionHipsHeight = motionHipsHeight || nodeMotionHipsHeight || 0.855;
    const hipsPositionScaleY = vrmHipsHeight / motionHipsHeight;
    animTrack.curves.forEach((curve) => {
      curve.paths.forEach((graph) => {
        const morphCurvePath = graph;
        const isPosition = morphCurvePath.propertyPath.find((path) => path === "localPosition");
        const isHipsTarget = morphCurvePath.entityPath[morphCurvePath.entityPath.length - 1] === VRMRigMap["hips"];
        if (isPosition && isHipsTarget && !hipPositionOutputIndexes[curve.output]) {
          hipPositionOutputIndexes[curve.output] = true;
        }
      });
    });
    animTrack.curves.forEach((curve) => {
      let isLocalScale = false;
      curve.paths.forEach((graph) => {
        const morphCurvePath = graph;
        const arrangedEntityPath = morphCurvePath.entityPath.map((path) => {
          var _a2;
          const originalRigName = path;
          const vrmBoneName = VRMRigMap[originalRigName];
          const vrmNodeName = (_a2 = this.humanoid.getRawBoneNode(vrmBoneName)) == null ? void 0 : _a2.name;
          if (!vrmBoneName || !vrmNodeName) {
            return path;
          }
          return vrmNodeName;
        });
        morphCurvePath.entityPath = arrangedEntityPath;
        if (morphCurvePath.propertyPath.find((path) => path === "localScale")) {
          isLocalScale = true;
        }
      });
      if (isLocalScale && !scaleOutputIndexes[curve.output]) {
        scaleOutputIndexes[curve.output] = true;
      }
    });
    animTrack.outputs.forEach((output, outputIndex) => {
      const isScaleOutput = scaleOutputIndexes[outputIndex];
      if (output.components === 3) {
        if (!isScaleOutput) {
          const newData = output.data.map((v, index) => {
            let value = v;
            if (this.metaVersion === needConvertVersion && index % 3 !== 1) {
              value *= -1;
            }
            if (hipPositionOutputIndexes[outputIndex] && index % 3 === 1) {
              if (this.animationAsset.removeY) {
                return vrmHipsHeight;
              }
              if (this.animationAsset.removeUpperY && v * hipsPositionScaleY > vrmHipsHeight) {
                return vrmHipsHeight;
              }
            }
            if (hipPositionOutputIndexes[outputIndex] && index % 3 === 2) {
              if (this.animationAsset.removeZ) {
                return vrmHipsDeep;
              }
            }
            return value * hipsPositionScaleY;
          });
          output._data = newData;
        }
      } else if (output.components === 4) {
        const newData = output.data.map((v, index) => {
          if (this.metaVersion === needConvertVersion && index % 2 === 0) {
            return -v;
          } else {
            return v;
          }
        });
        output._data = newData;
      }
    });
    return animTrack;
  }
}
function createVRMAnimation(pcRef, animationAssets, asset, humanoid, {
  motionHipsHeight,
  negativeZAnimNames
} = {}) {
  const extraSettings = { motionHipsHeight, negativeZAnimNames };
  console.warn(
    "Warning: createVRMAnimation is deprecated. Please use createVRMAnimResources instead."
  );
  return createVRMAnimResources(pcRef, animationAssets, asset, humanoid, extraSettings);
}
function createVRMAnimResources(pcRef, animationAssets, vrmAsset, humanoid, extraSettings = {}) {
  var _a, _b;
  if (!vrmAsset) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    console.error('CreateVRMAnimResources: Please provide "vrm asset".');
    return;
  }
  if (!animationAssets) {
    console.error('CreateVRMAnimResources: Please provide "animation assets".');
    return;
  }
  if (!humanoid) {
    console.error('CreateVRMAnimResources: Please provide "humanoid" or "asset and entity".');
    return;
  }
<<<<<<< HEAD
  const r = (c = e.resource.data.gltf.extensions) == null ? void 0 : c.VRMC_vrm, o = (m = e.resource.data.gltf.extensions) == null ? void 0 : m.VRM, a = r ? "v1" : o ? "v0" : null, l = (d, f) => d == "animation" ? !1 : d == "container" ? !!(f && f.includes("VRMC_vrm_animation") && f.indexOf("VRMC_vrm_animation") !== -1) : !1, h = [];
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
      l(_, u) ? g = ke(s, d, i, a) : g = Ce(
        s,
        d,
        i,
        a,
        n
=======
  const isV1Used = (_a = vrmAsset.resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = vrmAsset.resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
  const version = isV1Used ? "v1" : isV0Used ? "v0" : null;
  const checkAnimType = (assetType, extensionsUsed) => {
    if (assetType == "animation") {
      return false;
    } else if (assetType == "container") {
      if (extensionsUsed && extensionsUsed.includes("VRMC_vrm_animation") && extensionsUsed.indexOf("VRMC_vrm_animation") !== -1) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };
  const resources = [];
  animationAssets.forEach((animationAsset) => {
    var _a2;
    const assetResource = animationAsset.asset.resource;
    const assetType = animationAsset.asset.type;
    let resource;
    if (!assetResource) {
      resource = null;
      console.warn(
        `createVRMAnimResources: loadAnimation can't find available resource from ${animationAsset.stateName} asset.`
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      );
    } else {
      const extensionsUsed = (_a2 = assetResource.data) == null ? void 0 : _a2.gltf.extensionsUsed;
      const isVRMA = checkAnimType(assetType, extensionsUsed);
      if (isVRMA) {
        resource = createVRMAResource(pcRef, animationAsset, humanoid, version);
      } else {
        resource = createViverseAnimResource(
          pcRef,
          animationAsset,
          humanoid,
          version,
          extraSettings
        );
      }
    }
    if (resource) {
      resources.push(resource);
    }
<<<<<<< HEAD
    g && h.push(g);
  }), h;
}
const Le = (s, t) => {
  s.anim ? s.anim.assignAnimation(
    t.name,
    t.resource,
    t.setting && t.setting.layerName !== void 0 ? t.setting.layerName : void 0,
    t.setting && t.setting.speed !== void 0 ? t.setting.speed : 1,
    t.setting && t.setting.loop !== void 0 ? t.setting.loop : !0
  ) : console.error("AssignAnimation: Please set the anim component on the entity.");
};
function be(s, t, e) {
  const i = e ?? s;
  i.anim && i.anim.on(`anim-track:${t.name}`, () => {
    var o, a;
    let n = (o = i.anim) == null ? void 0 : o.baseLayer.activeState, r = i.anim.baseLayer._controller._totalTransitionTime ?? 0;
    (a = i.anim) == null || a.layers.forEach((l) => {
      l.name === "upperBodyLayer" && (n = l._controller._activeStateName, r = l._controller._totalTransitionTime);
    }), t.expression ? s.fire("vrma-expression:start", t.expression) : n === t.name && n !== i.anim.lastFrameUpperBodyActiveState && s.fire("vrm-expression:reset", r), i.anim.lastFrameUpperBodyActiveState = n;
  });
}
function ke(s, t, e, i) {
  var a, l, h, c;
  const r = new ye(s).loadVRMA(t.asset);
  let o = (c = (h = (l = (a = t.asset.resource.animations) == null ? void 0 : a[0]) == null ? void 0 : l.resources) == null ? void 0 : h[0]) == null ? void 0 : c.name;
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
    const l = new Pe(
      s,
      t,
      e,
      i,
      n,
      r
    ).result;
    return {
      name: t.stateName,
      resource: l,
      ...t.setting && {
        setting: t.setting
=======
  });
  return resources;
}
const assignAnimation = (entity, resource) => {
  if (entity.anim) {
    entity.anim.assignAnimation(
      resource.name,
      resource.resource,
      resource.setting && resource.setting.layerName !== void 0 ? resource.setting.layerName : void 0,
      resource.setting && resource.setting.speed !== void 0 ? resource.setting.speed : 1,
      resource.setting && resource.setting.loop !== void 0 ? resource.setting.loop : true
    );
  } else {
    console.error("AssignAnimation: Please set the anim component on the entity.");
  }
};
function createVRMAResource(pcRef, animationAsset, humanoid, version) {
  var _a, _b, _c, _d;
  const vrmaLoader = new VRMAnimationLoader(pcRef);
  const vrmAnimations = vrmaLoader.loadVRMA(animationAsset.asset);
  let name = (_d = (_c = (_b = (_a = animationAsset.asset.resource.animations) == null ? void 0 : _a[0]) == null ? void 0 : _b.resources) == null ? void 0 : _c[0]) == null ? void 0 : _d.name;
  if (!name)
    name = "";
  if (vrmAnimations) {
    const animTrack = new VRMAnimationTrack(
      pcRef,
      name,
      vrmAnimations[0],
      humanoid,
      version
    ).result;
    return { name: animationAsset.stateName, resource: animTrack };
  }
  return null;
}
function createViverseAnimResource(pcRef, animationAsset, humanoid, version, extraSettings) {
  var _a, _b;
  const origAnimTrack = animationAsset.asset.type === "container" ? (_b = (_a = animationAsset.asset.resource.animations) == null ? void 0 : _a[0]) == null ? void 0 : _b.resource : animationAsset.asset.resource;
  if (origAnimTrack) {
    const animTrack = new VRMViverseAnimationTrack(
      pcRef,
      animationAsset,
      humanoid,
      version,
      extraSettings,
      origAnimTrack
    ).result;
    const parsedAnimAsset = {
      name: animationAsset.stateName,
      resource: animTrack,
      ...animationAsset.setting && {
        setting: animationAsset.setting
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      }
    };
    return parsedAnimAsset;
  } else {
    console.error(
      `CreateViverseAnimResource: loadAnimation can't find valid resource from ${animationAsset.stateName} asset.`
    );
    return null;
  }
}
<<<<<<< HEAD
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: Le,
  bindVRMAExpression: be,
  createVRMAnimResources: Gt,
  createVRMAnimation: Ee
}, Symbol.toStringTag, { value: "Module" }));
class Z {
  constructor(t) {
    this.name = t, this._timers = {}, this._nextFreeId = 0, this.timer = {}, this.handle = null, this.isPausing = !0;
  }
  add(t, e, i) {
    if (t > 0) {
      this.isPausing = !1;
      const n = { id: this._nextFreeId };
=======
const VrmAnimation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation,
  createVRMAnimResources,
  createVRMAnimation
}, Symbol.toStringTag, { value: "Module" }));
class Timer {
  constructor(name) {
    this.name = name;
    this._timers = {};
    this._nextFreeId = 0;
    this.timer = {};
    this.handle = null;
    this.isPausing = true;
  }
  add(durationSecs, callback, scope) {
    if (durationSecs > 0) {
      this.isPausing = false;
      const handle = { id: this._nextFreeId };
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      this._timers[this._nextFreeId] = {
        secsLeft: durationSecs,
        callback,
        scope
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
  update(dt) {
    for (let property in this._timers) {
      const targetTimer = this._timers[property];
      if (targetTimer.secsLeft !== void 0) {
        targetTimer.secsLeft -= dt;
        if (targetTimer.secsLeft <= 0) {
          delete this._timers[property];
          if (targetTimer.callback)
            targetTimer.callback.call(targetTimer.scope);
        }
      }
    }
  }
}
<<<<<<< HEAD
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
=======
function saturate(value) {
  return Math.max(Math.min(value, 1), 0);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
function fromArray(vec3, array, offset = 0) {
  vec3.x = array[offset];
  vec3.y = array[offset + 1];
  vec3.z = array[offset + 2];
  return vec3;
}
function localToWorld(vector, matrixWorld) {
  return vector.copy(matrixWorld.transformPoint(vector));
}
class Matrix4InverseCache {
  constructor(pcRef, matrix) {
    this._pcRef = pcRef;
    this.matrix = matrix;
    this._inverseCache = new this._pcRef.Mat4();
    this._shouldUpdateInverse = true;
    const handler = {
      // @ts-ignore
      set: (obj, prop, newVal) => {
        this._shouldUpdateInverse = true;
        obj[prop] = newVal;
        return true;
      }
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    };
    this._originalElements = matrix.data;
    this.matrix.set(new Proxy(Array.from(matrix.data), handler));
  }
  /**
   * Inverse of given matrix.
   * Note that it will return its internal private instance.
   * Make sure copying this before mutate this.
   */
  get inverse() {
    if (this._shouldUpdateInverse) {
      this._inverseCache.copy(this.matrix);
      mat4InvertCompat(this._pcRef, this._inverseCache);
      this._shouldUpdateInverse = false;
    }
    return this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
<<<<<<< HEAD
function Zt(s, t) {
  const e = new s.Mat4();
  return t.invert ? t.invert() : t.getInverse(e.copy(t)), t;
}
function Be(s, t, e) {
  let i = t.dot(e) + 1;
  return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (s.x = -t.y, s.y = t.x, s.z = 0, s.w = i) : (s.x = 0, s.y = -t.z, s.z = t.y, s.w = i)) : (s.x = t.y * e.z - t.z * e.y, s.y = t.z * e.x - t.x * e.z, s.z = t.x * e.y - t.y * e.x, s.w = i), s.normalize();
}
class Wt {
=======
function mat4InvertCompat(pcRef, target) {
  const _matA = new pcRef.Mat4();
  if (target.invert) {
    target.invert();
  } else {
    target.getInverse(_matA.copy(target));
  }
  return target;
}
function setFromUnitVectors(quat, vFrom, vTo) {
  let r = vFrom.dot(vTo) + 1;
  if (r < Number.EPSILON) {
    r = 0;
    if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
      quat.x = -vFrom.y;
      quat.y = vFrom.x;
      quat.z = 0;
      quat.w = r;
    } else {
      quat.x = 0;
      quat.y = -vFrom.z;
      quat.z = vFrom.y;
      quat.w = r;
    }
  } else {
    quat.x = vFrom.y * vTo.z - vFrom.z * vTo.y;
    quat.y = vFrom.z * vTo.x - vFrom.x * vTo.z;
    quat.z = vFrom.x * vTo.y - vFrom.y * vTo.x;
    quat.w = r;
  }
  return quat.normalize();
}
class VRMExpressionManager {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  constructor() {
    this.managerName = "expression";
    this.blinkExpressionNames = ["blink", "blinkLeft", "blinkRight"];
    this.lookAtExpressionNames = ["lookLeft", "lookRight", "lookUp", "lookDown"];
    this.mouthExpressionNames = ["aa", "ee", "ih", "oh", "ou"];
    this.emotionExpressionNames = ["neutral", "happy", "angry", "sad", "relaxed", "surprised"];
    this._expressions = [];
    this._expressionMap = {};
    this.talkExpressions = [];
    this.previousTalkName = "";
    this.isBackToBlink = false;
  }
  registerExpression(expression) {
    this._expressions.push(expression);
    this._expressionMap[expression.expressionName] = expression;
  }
  getExpression(name) {
    return this._expressionMap[name] ?? null;
  }
  getTalkingExpression() {
<<<<<<< HEAD
    const t = this.getExpression("aa"), e = this.getExpression("ee"), i = this.getExpression("ih"), n = this.getExpression("oh"), r = this.getExpression("ou");
    return [t, e, i, n, r].filter(
      (o) => o
=======
    const aExpression = this.getExpression("aa");
    const eExpression = this.getExpression("ee");
    const iExpression = this.getExpression("ih");
    const oExpression = this.getExpression("oh");
    const uExpression = this.getExpression("ou");
    return [aExpression, eExpression, iExpression, oExpression, uExpression].filter(
      (expression) => expression
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    );
  }
  setValue(name, weight) {
    const expression = this.getExpression(name);
    if (expression) {
      expression.weight = saturate(weight);
    }
  }
  // Specific expression animations
  startBlink(blinkInterval, config) {
    const blinkConfig = config || {
      times: [0, blinkInterval - 0.2, blinkInterval - 0.1, blinkInterval],
      values: [0, 0, 1, 0]
    };
    const expression = this.getExpression("blink");
    if (!expression)
      return;
    expression.animatedMorph = blinkConfig;
    expression.isPausing = false;
    this.clearAllAppliedWeight(true);
  }
  stopBlink() {
    const expression = this.getExpression("blink");
    if (!expression)
      return;
    expression.stop();
  }
  startEmotion(name, config) {
    const emotionConfig = config || {
      times: [0, 1, 2.5, 3],
      values: [0, 1, 1, 0]
    };
    const expression = this.getExpression(name);
    if (!expression)
      return;
    expression.animatedMorph = emotionConfig;
    expression.isPausing = false;
    this.clearAllAppliedWeight(true);
  }
  stopEmotions(t) {
    t.forEach((e) => {
      this.getExpression(e).stop();
    });
  }
  getNextTalking() {
    if (this.talkExpressions.length === 0)
      return null;
<<<<<<< HEAD
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
=======
    const expressionIndex = getRandomInt(0, this.talkExpressions.length - 1);
    if (this.talkExpressions[expressionIndex].name === this.previousTalkName && this.talkExpressions.length > 1) {
      return this.getNextTalking();
    }
    this.previousTalkName = this.talkExpressions[expressionIndex].expressionName;
    return this.talkExpressions[expressionIndex];
  }
  startTalking(times, values) {
    if (this.talkExpressions.length === 0) {
      this.talkExpressions = this.getTalkingExpression();
    }
    const talkExpression = this.getNextTalking();
    if (!talkExpression)
      return;
    talkExpression.animatedMorph = {
      times,
      values
    };
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  stopTalking() {
    this.talkExpressions.forEach((expression) => {
      if (expression)
        expression.stop();
    });
  }
  updateBlendShape(dt) {
    this._expressions.forEach((expression) => {
      expression.updateBlendShape(dt);
    });
  }
  clearAllAppliedWeight(isAllToZero) {
    this._expressions.forEach((expression) => {
      expression.clearAppliedWeight(isAllToZero);
    });
  }
  update(dt) {
    this.updateBlendShape(dt);
    const weightMultipliers = this._calculateWeightMultipliers();
    this.clearAllAppliedWeight();
    this.isBackToBlink = true;
    this._expressions.forEach((expression) => {
      let multiplier = 1;
      const name = expression.expressionName;
      if (this.blinkExpressionNames.indexOf(name) !== -1) {
        multiplier *= weightMultipliers.blink;
      }
      if (this.lookAtExpressionNames.indexOf(name) !== -1) {
        multiplier *= weightMultipliers.lookAt;
      }
      if (this.mouthExpressionNames.indexOf(name) !== -1) {
        multiplier *= weightMultipliers.mouth;
      }
      expression.applyWeight({ multiplier });
      if (expression.weight !== 0) {
        this.isBackToBlink = false;
      }
    });
  }
  /**
   * Calculate sum of override amounts to see how much we should multiply weights of certain expressions.
   */
  _calculateWeightMultipliers() {
    let blink = 1;
    let lookAt = 1;
    let mouth = 1;
    this._expressions.forEach((expression) => {
      blink -= expression.overrideBlinkAmount;
      lookAt -= expression.overrideLookAtAmount;
      mouth -= expression.overrideMouthAmount;
    });
    blink = Math.max(0, blink);
    lookAt = Math.max(0, lookAt);
    mouth = Math.max(0, mouth);
    return { blink, lookAt, mouth };
  }
}
class VRMExpression {
  constructor(expressionName) {
    this._binds = [];
    this.overrideLookAt = "none";
    this.overrideMouth = "none";
    this.name = `VRMExpression_${expressionName}`;
    this.expressionName = expressionName;
    this.type = "VRMExpression";
    this.isBinary = false;
    this.weight = 0;
    this._animatedMorph = null;
    this.time = 0;
    this.currentValue = 0;
    this.currentTimeIndex = null;
    this.isPausing = false;
    this._binds = [];
    this.overrideBlink = "none";
    this.overrideLookAt = "none";
    this.overrideMouth = "none";
  }
  get animatedMorph() {
    return this._animatedMorph;
  }
  set animatedMorph(input) {
    this.resetAnimatedMorph();
    this._animatedMorph = input;
  }
  addBind(bind) {
    this._binds.push(bind);
  }
  applyWeight({ multiplier }) {
    let actualWeight = this.isBinary ? this.weight <= 0.5 ? 0 : 1 : this.weight;
    actualWeight *= multiplier ?? 1;
    this._binds.forEach((bind) => bind.applyWeight(actualWeight));
  }
  /**
   * Clear previously assigned blend shapes.
   */
  clearAppliedWeight(isAllToZero) {
    if (isAllToZero)
      this.weight = 0;
    this._binds.forEach((bind) => bind.clearAppliedWeight());
  }
  /**
   * A value represents how much it should override blink expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideBlinkAmount() {
    if (this.overrideBlink === "block") {
      return 0 < this.weight ? 1 : 0;
    } else if (this.overrideBlink === "blend") {
      return this.weight;
    } else {
      return 0;
    }
  }
  /**
   * A value represents how much it should override lookAt expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideLookAtAmount() {
    if (this.overrideLookAt === "block") {
      return 0 < this.weight ? 1 : 0;
    } else if (this.overrideLookAt === "blend") {
      return this.weight;
    } else {
      return 0;
    }
  }
  /**
   * A value represents how much it should override mouth expressions.
   * `0.0` == no override at all, `1.0` == completely block the expressions.
   */
  get overrideMouthAmount() {
    if (this.overrideMouth === "block") {
      return 0 < this.weight ? 1 : 0;
    } else if (this.overrideMouth === "blend") {
      return this.weight;
    } else {
      return 0;
    }
  }
  setValue(weight) {
    this.currentValue = weight;
    this.weight = saturate(weight);
  }
  resetAnimatedMorph() {
    this.time = 0;
    this._animatedMorph = null;
    this.currentTimeIndex = null;
  }
  stop() {
    this.resetAnimatedMorph();
  }
  pause() {
    this.isPausing = true;
  }
  play() {
    this.isPausing = false;
  }
  updateBlendShape(dt) {
    if (!this._animatedMorph || this.isPausing)
      return;
    const { times, values } = this._animatedMorph;
    if (this.time === 0 && this.currentTimeIndex === null) {
      const initialValue = values[0];
      this.setValue(initialValue);
    }
    if (this.time >= times[times.length - 1]) {
      this.resetAnimatedMorph();
      const lastValue = values[values.length - 1];
      this.setValue(lastValue);
      return;
    }
<<<<<<< HEAD
    this.time += t;
    const n = this.time < e[1] ? 0 : e.findIndex(
      (r, o) => e[o - 1] < this.time && e[o + 1] > this.time
    );
    if (n !== -1) {
      this.currentTimeIndex !== n && (this.currentValue = i[n]), this.currentTimeIndex = n;
      const r = i[this.currentTimeIndex + 1], o = e[this.currentTimeIndex] - e[this.currentTimeIndex + 1], l = (i[this.currentTimeIndex] - i[this.currentTimeIndex + 1]) / o, h = this.currentValue + l * t;
      l > 0 && h >= r || l < 0 && r >= h ? this.setValue(r) : this.setValue(h);
    }
  }
}
class Ht {
=======
    this.time += dt;
    const timeIndex = this.time < times[1] ? 0 : times.findIndex(
      (_, index) => times[index - 1] < this.time && times[index + 1] > this.time
    );
    if (timeIndex !== -1) {
      if (this.currentTimeIndex !== timeIndex) {
        this.currentValue = values[timeIndex];
      }
      this.currentTimeIndex = timeIndex;
      const targetValue = values[this.currentTimeIndex + 1];
      const duration = times[this.currentTimeIndex] - times[this.currentTimeIndex + 1];
      const valueRange = values[this.currentTimeIndex] - values[this.currentTimeIndex + 1];
      const eachSecondValue = valueRange / duration;
      const newValue = this.currentValue + eachSecondValue * dt;
      if (eachSecondValue > 0 && newValue >= targetValue || eachSecondValue < 0 && targetValue >= newValue) {
        this.setValue(targetValue);
      } else {
        this.setValue(newValue);
      }
    }
  }
}
class VRMExpressionMorphTargetBind {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  constructor({
    primitives,
    targetIndex,
    weight
  }) {
    this.primitives = primitives;
    this.targetIndex = targetIndex;
    this.weight = weight;
  }
  applyWeight(weight) {
    this.primitives.forEach((mesh) => {
      var _a;
      if (((_a = mesh.morphInstance) == null ? void 0 : _a.morph.targets[this.targetIndex]) != null) {
        let currentWeight = mesh.morphInstance.getWeight(this.targetIndex);
        mesh.morphInstance.setWeight(this.targetIndex, currentWeight += this.weight * weight);
      }
    });
  }
  clearAppliedWeight() {
    this.primitives.forEach((mesh) => {
      var _a;
      if (((_a = mesh.morphInstance) == null ? void 0 : _a.morph.targets[this.targetIndex]) != null) {
        mesh.morphInstance.setWeight(this.targetIndex, 0);
      }
    });
  }
}
<<<<<<< HEAD
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
    var l;
    if (!((t == null ? void 0 : t.extensionsUsed.indexOf("VRMC_vrm")) !== -1))
      return null;
    const i = (l = t == null ? void 0 : t.extensions) == null ? void 0 : l.VRMC_vrm;
    if (!i)
=======
class VRMExpressionLoaderPlugin {
  constructor(asset, meshInstances) {
    this.asset = asset;
    this.meshInstances = meshInstances;
  }
  import() {
    const gltf = this.asset.resource.data.gltf;
    const v1Result = this._v1Import(gltf);
    if (v1Result) {
      return v1Result;
    }
    const v0Result = this._v0Import(gltf);
    if (v0Result) {
      return v0Result;
    }
    return null;
  }
  _v1Import(gltf) {
    var _a;
    const isVRMUsed = (gltf == null ? void 0 : gltf.extensionsUsed.indexOf("VRMC_vrm")) !== -1;
    if (!isVRMUsed) {
      return null;
    }
    const extension = (_a = gltf == null ? void 0 : gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
    if (!extension) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      return null;
    }
    const schemaExpressions = extension.expressions;
    if (!schemaExpressions) {
      return null;
<<<<<<< HEAD
    const r = new Set(Object.values(q)), o = /* @__PURE__ */ new Map();
    n.preset != null && Object.entries(n.preset).forEach(([h, c]) => {
      if (c != null) {
        if (!r.has(h)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${h}" detected. Ignoring the expression`
          );
          return;
        }
        o.set(h, c);
      }
    }), n.custom != null && Object.entries(n.custom).forEach(([h, c]) => {
      if (r.has(h)) {
        console.warn(
          `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${h}". Ignoring the expression`
        );
        return;
      }
      o.set(h, c);
    });
    const a = new Wt();
    return Array.from(o.entries()).map(([h, c]) => {
      const m = new Ot(h);
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
    var l, h;
    if (!(((l = t.extensionsUsed) == null ? void 0 : l.indexOf("VRM")) !== -1))
      return null;
    const i = (h = t.extensions) == null ? void 0 : h.VRM;
    if (!i)
=======
    }
    const presetNameSet = new Set(Object.values(VRMExpressionPresetName));
    const nameSchemaExpressionMap = /* @__PURE__ */ new Map();
    if (schemaExpressions.preset != null) {
      Object.entries(schemaExpressions.preset).forEach(([name, schemaExpression]) => {
        if (schemaExpression == null) {
          return;
        }
        if (!presetNameSet.has(name)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Unknown preset name "${name}" detected. Ignoring the expression`
          );
          return;
        }
        nameSchemaExpressionMap.set(name, schemaExpression);
      });
    }
    if (schemaExpressions.custom != null) {
      Object.entries(schemaExpressions.custom).forEach(([name, schemaExpression]) => {
        if (presetNameSet.has(name)) {
          console.warn(
            `VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${name}". Ignoring the expression`
          );
          return;
        }
        nameSchemaExpressionMap.set(name, schemaExpression);
      });
    }
    const manager = new VRMExpressionManager();
    Array.from(nameSchemaExpressionMap.entries()).map(([name, schemaExpression]) => {
      const expression = new VRMExpression(name);
      expression.isBinary = schemaExpression.isBinary ?? false;
      expression.overrideBlink = schemaExpression.overrideBlink ?? "none";
      expression.overrideLookAt = schemaExpression.overrideLookAt ?? "none";
      expression.overrideMouth = schemaExpression.overrideMouth ?? "none";
      if (schemaExpression.morphTargetBinds) {
        schemaExpression.morphTargetBinds.forEach((bind) => {
          if (bind.node === void 0 || bind.index === void 0) {
            return;
          }
          const primitives = this.meshInstances.filter((meshInstance) => {
            return meshInstance.node.tags.has(`node_${bind.node}`);
          });
          const morphTargetIndex = bind.index;
          expression.addBind(
            new VRMExpressionMorphTargetBind({
              primitives,
              targetIndex: morphTargetIndex,
              weight: bind.weight ?? 1
            })
          );
        });
      }
      manager.registerExpression(expression);
    });
    return manager;
  }
  _v0Import(gltf) {
    var _a, _b;
    const isVRMUsed = ((_a = gltf.extensionsUsed) == null ? void 0 : _a.indexOf("VRM")) !== -1;
    if (!isVRMUsed) {
      return null;
    }
    const vrmExt = (_b = gltf.extensions) == null ? void 0 : _b.VRM;
    if (!vrmExt) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      return null;
    }
    const schemaBlendShape = vrmExt.blendShapeMaster;
    if (!schemaBlendShape) {
      return null;
<<<<<<< HEAD
    const r = new Wt(), o = n.blendShapeGroups;
    if (!o)
      return r;
    const a = /* @__PURE__ */ new Set();
    return o.map((c) => {
      const m = c.presetName, f = (m != null && Xt[m] || null) ?? c.name;
      if (f == null) {
=======
    }
    const manager = new VRMExpressionManager();
    const schemaBlendShapeGroups = schemaBlendShape.blendShapeGroups;
    if (!schemaBlendShapeGroups) {
      return manager;
    }
    const blendShapeNameSet = /* @__PURE__ */ new Set();
    schemaBlendShapeGroups.map((schemaGroup) => {
      const v0PresetName = schemaGroup.presetName;
      const v1PresetName = v0PresetName != null && v0v1PresetNameMap[v0PresetName] || null;
      const name = v1PresetName ?? schemaGroup.name;
      if (name == null) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
<<<<<<< HEAD
      if (a.has(f)) {
=======
      if (blendShapeNameSet.has(name)) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${v0PresetName} has duplicated entries. Ignoring the expression`
        );
        return;
      }
<<<<<<< HEAD
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
=======
      blendShapeNameSet.add(name);
      const expression = new VRMExpression(name);
      expression.isBinary = schemaGroup.isBinary ?? false;
      if (schemaGroup.binds) {
        schemaGroup.binds.forEach((bind) => {
          if (bind.mesh === void 0 || bind.index === void 0) {
            return;
          }
          const nodesUsingMesh = [];
          gltf.nodes.forEach((node, index) => {
            if (node.mesh === bind.mesh) {
              nodesUsingMesh.push({ gltfNode: node, index });
            }
          });
          const morphTargetIndex = bind.index;
          nodesUsingMesh.map((node) => {
            const primitives = this.meshInstances.filter((meshInstance) => {
              return meshInstance.node.tags.has(`node_${node.index}`);
            });
            expression.addBind(
              new VRMExpressionMorphTargetBind({
                primitives,
                targetIndex: morphTargetIndex,
                weight: 0.01 * (bind.weight ?? 100)
                // narrowing the range from [ 0.0 - 100.0 ] to [ 0.0 - 1.0 ]
              })
            );
          });
        });
        manager.registerExpression(expression);
      }
    });
    return manager;
  }
}
const collectMeshInstances = (entity) => {
  const meshInstances = [];
  if (entity) {
    const components = entity.findComponents("render");
    for (let i = 0; i < components.length; i++) {
      const render = components[i];
      if (render.meshInstances) {
        for (let m = 0; m < render.meshInstances.length; m++) {
          const meshInstance = render.meshInstances[m];
          meshInstances.push(meshInstance);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        }
      }
    }
  }
  return meshInstances;
};
<<<<<<< HEAD
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
=======
function traverseAncestorsFromRoot(object, callback) {
  const ancestors = [];
  let head = object;
  while (head !== null) {
    ancestors.unshift(head);
    head = head.parent;
  }
  ancestors.forEach((ancestor) => {
    callback(ancestor);
  });
}
const importScript$2 = (pcRef) => {
  class VrmExpression2 extends pcRef.ScriptType {
    constructor() {
      super(...arguments);
      this.previousTalkName = "";
    }
    initialize() {
      const meshInstances = collectMeshInstances(this.entity);
      const loaderPlugin = new VRMExpressionLoaderPlugin(this.asset, meshInstances);
      this.expressionManager = loaderPlugin.import();
      this.blinkTimer = new Timer("blink");
      this.talkTimer = new Timer("talk");
      this.startBlink();
      this.entity.on("vrm-expression:start-emotion", this.startEmotion, this);
      this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this);
      this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this);
        this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      });
    }
    // Specific Expression Animation
    startBlink(config) {
      const randomValue = getRandom(1, 5);
      if (this.expressionManager) {
        this.expressionManager.startBlink(1, config);
        this.blinkTimer.add(randomValue, this.startBlink, this);
      }
    }
<<<<<<< HEAD
    stopBlink(i, n) {
      this.expressionManager && (this.stopExpressionLoop("blink"), this.expressionManager.stopBlink(), n || i && this.blinkTimer.add(i, this.startBlink, this));
=======
    stopBlink(restartSeconds) {
      if (!this.expressionManager)
        return;
      this.stopExpressionLoop("blink");
      this.expressionManager.stopBlink();
      if (restartSeconds) {
        this.blinkTimer.add(restartSeconds, this.startBlink, this);
      }
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    }
    startEmotion(name, config) {
      if (!this.expressionManager)
        return;
<<<<<<< HEAD
      const r = n ? n.times[n.times.length - 1] : 3, o = n ? !!n.loop : !1;
      this.stopBlink(r, o), this.expressionManager.startEmotion(i, n);
=======
      this.expressionManager.startEmotion(name, config);
      const time = config ? config.times[config.times.length - 1] : 3;
      this.stopBlink(time);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    }
    startTalking(speed = 0.25) {
      if (!this.expressionManager)
        return;
<<<<<<< HEAD
      const n = Math.random() * 0.5, r = Math.random() * 0.5 + 0.5, o = N(0.5, 1), a = N(0.4, 0.6) * o, l = N(0.4, 0.6) * o, h = [0, n, 0.5, r, 1].filter((d) => d * i), c = [0, a, o, l, 0], m = N(0.5, 1);
      this.expressionManager.startTalking(h, c), this.talkTimer.add(m, this.startTalking, this);
=======
      const time1 = Math.random() * 0.5;
      const time2 = Math.random() * 0.5 + 0.5;
      const valueMiddle = getRandom(0.5, 1);
      const value1 = getRandom(0.4, 0.6) * valueMiddle;
      const value2 = getRandom(0.4, 0.6) * valueMiddle;
      const times = [0, time1, 0.5, time2, 1].filter((time) => time * speed);
      const values = [0, value1, valueMiddle, value2, 0];
      const timerRandomValue = getRandom(0.5, 1);
      this.expressionManager.startTalking(times, values);
      this.talkTimer.add(timerRandomValue, this.startTalking, this);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    }
    stopTalking(restartSeconds) {
      this.stopExpressionLoop("talk");
      if (restartSeconds) {
        this.talkTimer.add(restartSeconds, this.startTalking, this);
      }
    }
    onIsTalkingChange(state) {
      if (state && (this.talkTimer.isPausing && this.talkTimer.handle || !this.talkTimer.handle)) {
        this.startTalking();
      } else {
        this.stopTalking();
      }
    }
    stopExpressionLoop(timerName) {
      if (timerName === "blink") {
        this.blinkTimer.pause();
      }
      if (timerName === "talk") {
        this.talkTimer.pause();
      }
    }
    pauseAllExpression() {
      this.app.timeScale = 0;
    }
    restartAllExpression() {
      this.app.timeScale = 1;
    }
<<<<<<< HEAD
    update(i) {
      this.expressionManager && (this.expressionManager.update(i), this.blinkTimer.update(i), this.talkTimer.update(i), this.resetEmotionTimer.update(i));
    }
    startVRMAExpression(i) {
      this.expressionManager && this.expressionManager.stopEmotions(this.previousEmotions);
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
=======
    update(dt) {
      if (!this.expressionManager)
        return;
      this.expressionManager.update(dt);
      this.blinkTimer.update(dt);
      this.talkTimer.update(dt);
    }
  }
  pcRef.registerScript(VrmExpression2, "vrmExpression");
  VrmExpression2.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
};
const VrmExpression = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: importScript$2
}, Symbol.toStringTag, { value: "Module" }));
class VRMSpringBoneManager {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  constructor() {
    this._joints = /* @__PURE__ */ new Set();
    this._objectSpringBonesMap = /* @__PURE__ */ new Map();
    this.managerName = "springBone";
    this._joints = /* @__PURE__ */ new Set();
    this._objectSpringBonesMap = /* @__PURE__ */ new Map();
    this.direction = 1;
    this.strength = 0.1;
    this.limitHeight = 0.2;
    this.limitLow = 0;
  }
  get joints() {
    return this._joints;
  }
  addJoint(joint) {
    this._joints.add(joint);
    let objectSet = this._objectSpringBonesMap.get(joint.bone);
    if (objectSet == null) {
      objectSet = /* @__PURE__ */ new Set();
      this._objectSpringBonesMap.set(joint.bone, objectSet);
    }
    objectSet.add(joint);
  }
  setInitState() {
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const objectUpdated = /* @__PURE__ */ new Set();
    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone2) => springBone2.setInitState()
      );
    }
  }
  reset() {
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const objectUpdated = /* @__PURE__ */ new Set();
    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone2) => springBone2.reset()
      );
    }
  }
<<<<<<< HEAD
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
=======
  update(dt, isWalking) {
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const objectUpdated = /* @__PURE__ */ new Set();
    if (isWalking) {
      if (this.strength >= this.limitHeight) {
        this.direction = -0.2;
        this.limitHeight = Math.random() * (0.2 - this.limitLow) + this.limitLow;
      } else if (this.strength <= this.limitLow) {
        this.direction = 0.2;
        this.limitLow = Math.random() * 0.2;
      }
      this.strength += this.direction * dt;
    } else {
      if (this.strength <= 0.5) {
        this.strength += 0.1 * dt;
      }
    }
    for (const springBone of this._joints) {
      this._processSpringBone(
        springBone,
        springBonesTried,
        springBonesDone,
        objectUpdated,
        (springBone2) => {
          springBone2.update(dt, this.strength);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        }
      );
    }
  }
  _processSpringBone(springBone, springBonesTried, springBonesDone, objectUpdated, callback) {
    if (springBonesDone.has(springBone)) {
      return;
    }
    if (springBonesTried.has(springBone)) {
      throw new Error(
        "VRMSpringBoneManager: Circular dependency detected while updating springbones"
      );
<<<<<<< HEAD
    e.add(t);
    const o = this._getDependencies(t);
    for (const a of o)
      De(a, (l) => {
        const h = this._objectSpringBonesMap.get(l);
        if (h)
          for (const c of h)
=======
    }
    springBonesTried.add(springBone);
    const depObjects = this._getDependencies(springBone);
    for (const depObject of depObjects) {
      traverseAncestorsFromRoot(depObject, (depObjectAncestor) => {
        const objectSet = this._objectSpringBonesMap.get(depObjectAncestor);
        if (objectSet) {
          for (const depSpringBone of objectSet) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
            this._processSpringBone(
              depSpringBone,
              springBonesTried,
              springBonesDone,
              objectUpdated,
              callback
            );
<<<<<<< HEAD
        else
          n.has(l) || n.add(l);
=======
          }
        } else if (!objectUpdated.has(depObjectAncestor)) {
          objectUpdated.add(depObjectAncestor);
        }
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      });
    }
    callback(springBone);
    objectUpdated.add(springBone.bone);
    springBonesDone.add(springBone);
  }
  // Return a set of objects that are dependant of given spring bone.
<<<<<<< HEAD
  _getDependencies(t) {
    var n;
    const e = /* @__PURE__ */ new Set(), i = t.bone.parent;
    return i && e.add(i), (n = t.colliderGroups) == null || n.forEach((r) => {
      r.colliders.forEach((o) => {
        e.add(o);
=======
  _getDependencies(springBone) {
    var _a;
    const set = /* @__PURE__ */ new Set();
    const parent = springBone.bone.parent;
    if (parent) {
      set.add(parent);
    }
    (_a = springBone.colliderGroups) == null ? void 0 : _a.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        set.add(collider);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      });
    });
    return set;
  }
}
<<<<<<< HEAD
class Oe {
  constructor(t, e) {
    this.offset = (e == null ? void 0 : e.offset) ?? new t.Vec3(), this.radius = (e == null ? void 0 : e.radius) ?? 0;
=======
class VRMSpringBoneColliderShapeSphere {
  constructor(pcRef, params) {
    this.offset = (params == null ? void 0 : params.offset) ?? new pcRef.Vec3();
    this.radius = (params == null ? void 0 : params.radius) ?? 0;
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  get type() {
    return "sphere";
  }
<<<<<<< HEAD
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
=======
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target) {
    target.copy(this.offset).copy(colliderMatrix.transformPoint(target));
    target.mulScalar(-1).add(objectPosition);
    const radius = objectRadius + this.radius;
    const distance = target.length() - radius;
    target.normalize();
    return distance;
  }
}
const createVRMSpringBoneCollider = (pcRef) => {
  return class VRMSpringBoneCollider extends pcRef.Entity {
    constructor(shape) {
      super();
      this.shape = shape;
    }
  };
};
class VRMSpringBoneColliderShapeCapsule {
  constructor(pcRef, params) {
    this.offset = (params == null ? void 0 : params.offset) ?? new pcRef.Vec3();
    this.tail = (params == null ? void 0 : params.tail) ?? new pcRef.Vec3();
    this.radius = (params == null ? void 0 : params.radius) ?? 0;
    this._v3A = new pcRef.Vec3();
    this._v3B = new pcRef.Vec3();
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  get type() {
    return "capsule";
  }
<<<<<<< HEAD
  calculateCollision(t, e, i, n) {
    this._v3A.copy(this.offset).copy(t.transformPoint(this._v3A)), this._v3B.copy(this.tail).copy(t.transformPoint(this._v3B)), this._v3B.sub(this._v3A);
    const r = this._v3B.lengthSq();
    n.copy(e).sub(this._v3A);
    const o = this._v3B.dot(n);
    o <= 0 || (r <= o ? n.sub(this._v3B) : (this._v3B.mulScalar(o / r), n.sub(this._v3B)));
    const a = i + this.radius, l = n.length() - a;
    return n.normalize(), l;
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
=======
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target) {
    this._v3A.copy(this.offset).copy(colliderMatrix.transformPoint(this._v3A));
    this._v3B.copy(this.tail).copy(colliderMatrix.transformPoint(this._v3B));
    this._v3B.sub(this._v3A);
    const lengthSqCapsule = this._v3B.lengthSq();
    target.copy(objectPosition).sub(this._v3A);
    const dot = this._v3B.dot(target);
    if (dot <= 0)
      ;
    else if (lengthSqCapsule <= dot) {
      target.sub(this._v3B);
    } else {
      this._v3B.mulScalar(dot / lengthSqCapsule);
      target.sub(this._v3B);
    }
    const radius = objectRadius + this.radius;
    const distance = target.length() - radius;
    target.normalize();
    return distance;
  }
}
class VRMSpringBoneJoint {
  constructor(pcRef, bone, child, settings = {}, colliderGroups = []) {
    var _a;
    this._center = null;
    this._worldSpaceBoneLength = 0;
    this._pcRef = pcRef;
    this._v3A = new this._pcRef.Vec3();
    this._v3B = new this._pcRef.Vec3();
    this._nextTail = new this._pcRef.Vec3();
    this._quatA = new this._pcRef.Quat();
    this._matA = new this._pcRef.Mat4();
    this._matB = new this._pcRef.Mat4();
    this._identityMat4 = new this._pcRef.Mat4();
    this._worldSpacePosition = new this._pcRef.Vec3();
    this._centerSpacePosition = new this._pcRef.Vec3();
    this._matrixWorldToCenterTranslation = new this._pcRef.Vec3();
    this._worldSpaceBoneLength = 0;
    this.bone = bone;
    this.child = child;
    this.settings = {
      hitRadius: settings.hitRadius ?? 0,
      stiffness: settings.stiffness ?? 1,
      gravityPower: settings.gravityPower ?? 0,
      gravityDir: ((_a = settings.gravityDir) == null ? void 0 : _a.clone()) ?? new this._pcRef.Vec3(0, -1, 0),
      dragForce: settings.dragForce ?? 0.4
    };
    this.colliderGroups = colliderGroups;
    this._initialLocalMatrix = new this._pcRef.Mat4();
    this._initialLocalRotation = new this._pcRef.Quat();
    this._initialLocalChildPosition = new this._pcRef.Vec3();
    this._currentTail = new this._pcRef.Vec3();
    this._prevTail = new this._pcRef.Vec3();
    this._boneAxis = new this._pcRef.Vec3();
    this._center = null;
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  get center() {
    return this._center;
  }
<<<<<<< HEAD
  set center(t) {
    var e;
    (e = this._center) != null && e.userData.inverseCacheProxy && (this._center.userData.inverseCacheProxy.revert(), delete this._center.userData.inverseCacheProxy), this._center = t, this._center && (this._center.userData || (this._center.userData = {}), this._center.userData.inverseCacheProxy || (this._center.userData.inverseCacheProxy = new Ve(
      this._pcRef,
      this._center.getWorldTransform()
    )));
=======
  set center(center) {
    var _a;
    if ((_a = this._center) == null ? void 0 : _a.userData.inverseCacheProxy) {
      this._center.userData.inverseCacheProxy.revert();
      delete this._center.userData.inverseCacheProxy;
    }
    this._center = center;
    if (this._center) {
      if (!this._center.userData) {
        this._center.userData = {};
      }
      if (!this._center.userData.inverseCacheProxy) {
        this._center.userData.inverseCacheProxy = new Matrix4InverseCache(
          this._pcRef,
          this._center.getWorldTransform()
        );
      }
    }
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  get _parentMatrixWorld() {
    return this.bone.parent ? this.bone.parent.getWorldTransform() : this._identityMat4;
  }
  setInitState() {
<<<<<<< HEAD
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
=======
    this._initialLocalMatrix.copy(this.bone.getLocalTransform());
    this._initialLocalRotation.copy(this.bone.getLocalRotation());
    if (this.child) {
      this._initialLocalChildPosition.copy(this.child.getLocalPosition());
    } else {
      this._initialLocalChildPosition.copy(this.bone.getLocalPosition()).normalize().mulScalar(0.07);
    }
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    this._prevTail.copy(this._currentTail);
    this._boneAxis.copy(this._initialLocalChildPosition).normalize();
    const matrixWorldTranslated = this.bone.getWorldTransform().transformPoint(new this._pcRef.Vec3());
    this._worldSpaceBoneLength = this._v3A.copy(this._initialLocalChildPosition).copy(this.bone.getWorldTransform().transformPoint(this._v3A)).sub(matrixWorldTranslated).length();
  }
  reset() {
    this.bone.setLocalRotation(this._initialLocalRotation);
    const transform = new this._pcRef.Mat4();
    transform.mul2(this._parentMatrixWorld, this.bone.getLocalTransform());
    const position = transform.transformPoint(new this._pcRef.Vec3());
    this.bone.setPosition(position.x, position.y, position.z);
    const matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    this._currentTail.copy(matrixWorldToCenter.transformPoint(this._currentTail));
    this._prevTail.copy(this._currentTail);
  }
  update(dt, strength) {
    if (dt <= 0)
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
<<<<<<< HEAD
    let i = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0), i.getTranslation(this._matrixWorldToCenterTranslation), this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const n = this._quatA.setFromMat4(i), r = this._matB.copy(i).mul(this._parentMatrixWorld), o = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(r.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize(), a = this._v3A.copy(this.settings.gravityDir).copy(n.transformVector(this._v3A)).normalize(), l = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(o).mulScalar(this.settings.stiffness * t)).add(this._v3A.copy(a).mulScalar(this.settings.gravityPower * t)).copy(l.transformPoint(this._nextTail)), this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const h = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, h.y, 0)), this._collision(this._nextTail), i = this._getMatrixWorldToCenter(this._matA), this._prevTail.copy(this._currentTail), this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(i.transformPoint(this._v3A))
=======
    let matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    this._matrixWorldToCenterTranslation.set(0, 0, 0);
    matrixWorldToCenter.getTranslation(this._matrixWorldToCenterTranslation);
    this._centerSpacePosition.copy(this._worldSpacePosition).add(this._matrixWorldToCenterTranslation);
    const quatWorldToCenter = this._quatA.setFromMat4(matrixWorldToCenter);
    const centerSpaceParentMatrix = this._matB.copy(matrixWorldToCenter).mul(this._parentMatrixWorld);
    const centerSpaceBoneAxis = this._v3B.copy(this._boneAxis).copy(this._initialLocalMatrix.transformPoint(this._v3B)).copy(centerSpaceParentMatrix.transformPoint(this._v3B)).sub(this._centerSpacePosition).normalize();
    const centerSpaceGravity = this._v3A.copy(this.settings.gravityDir).copy(quatWorldToCenter.transformVector(this._v3A)).normalize();
    const matrixCenterToWorld = this._getMatrixCenterToWorld(this._matA);
    this._nextTail.copy(this._currentTail).add(
      this._v3A.copy(this._currentTail).sub(this._prevTail).mulScalar(1 - this.settings.dragForce)
    ).add(this._v3A.copy(centerSpaceBoneAxis).mulScalar(this.settings.stiffness * dt)).add(this._v3A.copy(centerSpaceGravity).mulScalar(this.settings.gravityPower * dt)).copy(matrixCenterToWorld.transformPoint(this._nextTail));
    this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    const compareTransform = this._v3A.copy(this._nextTail).sub(this._currentTail).mulScalar(0.2);
    this._nextTail.sub(this._v3A.set(0, compareTransform.y, 0));
    this._collision(this._nextTail);
    matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    this._prevTail.copy(this._currentTail);
    this._currentTail.copy(
      this._v3A.copy(this._nextTail).copy(matrixWorldToCenter.transformPoint(this._v3A))
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    );
    const worldSpaceInitialMatrixInv = mat4InvertCompat(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
<<<<<<< HEAD
    ), m = Be(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(c.transformPoint(this._v3A)).normalize()
    ), d = m.getEulerAngles();
    m.setFromEulerAngles(d.x * e, d.y * e, d.z * e);
    const f = this._initialLocalRotation.clone().mul(m);
    this.bone.setLocalRotation(f);
=======
    );
    const applyRotation = setFromUnitVectors(
      this._quatA,
      this._boneAxis,
      this._v3A.copy(this._nextTail).copy(worldSpaceInitialMatrixInv.transformPoint(this._v3A)).normalize()
    );
    const angles = applyRotation.getEulerAngles();
    applyRotation.setFromEulerAngles(angles.x * strength, angles.y * strength, angles.z * strength);
    const rotation = this._initialLocalRotation.clone().mul(applyRotation);
    this.bone.setLocalRotation(rotation);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  _getMatrixCenterToWorld(target) {
    if (this._center) {
      const worldTransform = this._center.getWorldTransform();
      target.copy(worldTransform);
    } else {
      target.setIdentity();
    }
    return target;
  }
  // Create a matrix that converts world space into center space.
  _getMatrixWorldToCenter(target) {
    if (this._center) {
      target.copy(this._center.userData.inverseCacheProxy.inverse);
    } else {
      target.setIdentity();
    }
    return target;
  }
  _collision(tail) {
    var _a;
    (_a = this.colliderGroups) == null ? void 0 : _a.forEach((colliderGroup) => {
      colliderGroup.colliders.forEach((collider) => {
        const dist = collider.shape.calculateCollision(
          collider.getWorldTransform(),
          tail,
          this.settings.hitRadius,
          this._v3A
        );
        if (dist < 0) {
          tail.add(this._v3A.mulScalar(-dist));
          tail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
        }
      });
    });
  }
}
<<<<<<< HEAD
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
    const l = a.specVersion;
    if (!tt.has(l))
      return console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${I.EXTENSION_NAME} specVersion "${l}"`
      ), null;
    const h = a.colliders, c = h == null ? void 0 : h.map((p, u) => {
      var T;
      const x = (T = this.entity.findByTag(`node_${p.node}`)) == null ? void 0 : T[0], v = p.shape;
      if (!x) {
=======
const _VRMSpringBoneLoaderPlugin = class _VRMSpringBoneLoaderPlugin {
  constructor(pcRef, asset, entity) {
    this.asset = asset;
    this.entity = entity;
    this._pcRef = pcRef;
  }
  import() {
    const gltf = this.asset.resource.data.gltf;
    const data = this.asset.resource.data;
    const v1Result = this._v1Import(gltf, data);
    if (v1Result) {
      return v1Result;
    }
    const v0Result = this._v0Import(gltf, data);
    if (v0Result) {
      return v0Result;
    }
    return null;
  }
  _v1Import(gltf, resourceData) {
    var _a, _b;
    const isSpringBoneUsed = ((_a = gltf.extensionsUsed) == null ? void 0 : _a.indexOf(_VRMSpringBoneLoaderPlugin.EXTENSION_NAME)) !== -1;
    if (!isSpringBoneUsed) {
      return null;
    }
    const isVRMUsed = (gltf == null ? void 0 : gltf.extensionsUsed.indexOf("VRMC_vrm")) !== -1;
    if (!isVRMUsed) {
      return null;
    }
    const manager = new VRMSpringBoneManager();
    const gltfNodes = gltf == null ? void 0 : gltf.nodes;
    const extension = (_b = gltf.extensions) == null ? void 0 : _b[_VRMSpringBoneLoaderPlugin.EXTENSION_NAME];
    if (!extension) {
      return null;
    }
    const specVersion = extension.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS$1.has(specVersion)) {
      console.warn(
        `VRMSpringBoneLoaderPlugin: Unknown ${_VRMSpringBoneLoaderPlugin.EXTENSION_NAME} specVersion "${specVersion}"`
      );
      return null;
    }
    const extensionColliders = extension.colliders;
    const colliders = extensionColliders == null ? void 0 : extensionColliders.map((schemaCollider, iCollider) => {
      var _a2;
      const node = (_a2 = this.entity.findByTag(`node_${schemaCollider.node}`)) == null ? void 0 : _a2[0];
      const schemaShape = schemaCollider.shape;
      if (!node) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
<<<<<<< HEAD
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
=======
      if (schemaShape) {
        if (schemaShape.sphere) {
          return this._importSphereCollider(node, {
            offset: fromArray(new this._pcRef.Vec3(), schemaShape.sphere.offset ?? [0, 0, 0]),
            radius: schemaShape.sphere.radius ?? 0
          });
        } else if (schemaShape.capsule) {
          return this._importCapsuleCollider(node, {
            offset: fromArray(
              new this._pcRef.Vec3(),
              schemaShape.capsule.offset ?? [0, 0, 0]
            ),
            radius: schemaShape.capsule.radius ?? 0,
            tail: fromArray(new this._pcRef.Vec3(), schemaShape.capsule.tail ?? [0, 0, 0])
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
          });
        }
      }
<<<<<<< HEAD
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
          const S = M.node, P = o[S], R = this.entity.findByName(P.name), k = w.node, V = o[k], B = this.entity.findByName(V.name), b = {
            hitRadius: M.hitRadius,
            dragForce: M.dragForce,
            gravityPower: M.gravityPower,
            stiffness: M.stiffness,
            gravityDir: M.gravityDir != null ? W(new this._pcRef.Vec3(), M.gravityDir) : void 0
          }, E = this._importJoint(R, B, b, v);
          T && (E.center = T), r.addJoint(E);
        }
        M = w;
      });
    }), r.setInitState(), r;
  }
  _v0Import(t, e) {
    var h, c, m;
    const i = (h = t.extensions) == null ? void 0 : h.VRM;
    if (!(((c = t.extensionsUsed) == null ? void 0 : c.indexOf("VRM")) !== -1))
=======
      throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${iCollider} has no valid shape`);
    });
    const extensionColliderGroups = extension.colliderGroups;
    const colliderGroups = extensionColliderGroups == null ? void 0 : extensionColliderGroups.map((schemaColliderGroup, iColliderGroup) => {
      const cols = (schemaColliderGroup.colliders ?? []).map((iCollider) => {
        const col = colliders == null ? void 0 : colliders[iCollider];
        if (col == null) {
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The colliderGroup #${iColliderGroup} attempted to use a collider #${iCollider} but not found`
          );
        }
        return col;
      });
      return {
        colliders: cols,
        name: schemaColliderGroup.name
      };
    });
    const extensionSprings = extension.springs;
    extensionSprings.forEach((schemaSpring, iSpring) => {
      var _a2;
      const schemaJoints = schemaSpring.joints;
      const colliderGroupsForSpring = (_a2 = schemaSpring.colliderGroups) == null ? void 0 : _a2.map((iColliderGroup) => {
        const group = colliderGroups == null ? void 0 : colliderGroups[iColliderGroup];
        if (group == null) {
          throw new Error(
            `VRMSpringBoneLoaderPlugin: The spring #${iSpring} attempted to use a colliderGroup ${iColliderGroup} but not found`
          );
        }
        return group;
      });
      const center = schemaSpring.center != null ? resourceData.nodes[schemaSpring.center] : void 0;
      let prevSchemaJoint;
      schemaJoints.forEach((schemaJoint) => {
        if (prevSchemaJoint) {
          const nodeIndex = prevSchemaJoint.node;
          const rootNode = gltfNodes[nodeIndex];
          const node = this.entity.findByName(rootNode.name);
          const childIndex = schemaJoint.node;
          const rootChild = gltfNodes[childIndex];
          const child = this.entity.findByName(rootChild.name);
          const setting = {
            hitRadius: prevSchemaJoint.hitRadius,
            dragForce: prevSchemaJoint.dragForce,
            gravityPower: prevSchemaJoint.gravityPower,
            stiffness: prevSchemaJoint.stiffness,
            gravityDir: prevSchemaJoint.gravityDir != null ? fromArray(new this._pcRef.Vec3(), prevSchemaJoint.gravityDir) : void 0
          };
          const joint = this._importJoint(node, child, setting, colliderGroupsForSpring);
          if (center) {
            joint.center = center;
          }
          manager.addJoint(joint);
        }
        prevSchemaJoint = schemaJoint;
      });
    });
    manager.setInitState();
    return manager;
  }
  _v0Import(gltf, resourceData) {
    var _a, _b, _c;
    const extension = (_a = gltf.extensions) == null ? void 0 : _a.VRM;
    const isVRMUsed = ((_b = gltf.extensionsUsed) == null ? void 0 : _b.indexOf("VRM")) !== -1;
    if (!isVRMUsed) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      return null;
    }
    const schemaSecondaryAnimation = extension == null ? void 0 : extension.secondaryAnimation;
    if (!schemaSecondaryAnimation) {
      return null;
<<<<<<< HEAD
    const o = r == null ? void 0 : r.boneGroups;
    if (!o)
      return null;
    const a = new zt(), l = (m = r.colliderGroups) == null ? void 0 : m.map((d) => {
      var g;
      const f = (g = this.entity.findByTag(`node_${d.node}`)) == null ? void 0 : g[0];
      if (!f) {
=======
    }
    const schemaBoneGroups = schemaSecondaryAnimation == null ? void 0 : schemaSecondaryAnimation.boneGroups;
    if (!schemaBoneGroups) {
      return null;
    }
    const manager = new VRMSpringBoneManager();
    const colliderGroups = (_c = schemaSecondaryAnimation.colliderGroups) == null ? void 0 : _c.map((schemaColliderGroup) => {
      var _a2;
      const node = (_a2 = this.entity.findByTag(`node_${schemaColliderGroup.node}`)) == null ? void 0 : _a2[0];
      if (!node) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
<<<<<<< HEAD
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
=======
      const colliders = (schemaColliderGroup.colliders ?? []).map((schemaCollider) => {
        const offset = new this._pcRef.Vec3(0, 0, 0);
        if (schemaCollider.offset) {
          offset.set(
            schemaCollider.offset.x ?? 0,
            schemaCollider.offset.y ?? 0,
            schemaCollider.offset.z ? -schemaCollider.offset.z : 0
            // z is opposite in VRM0.0
          );
        }
        return this._importSphereCollider(node, {
          offset,
          radius: schemaCollider.radius ?? 0
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
        });
      });
      return { colliders };
    });
<<<<<<< HEAD
    return o == null || o.forEach((d, f) => {
      const _ = d.bones;
      _ && _.forEach((g) => {
        var M, y;
        const p = (M = this.entity.findByTag(`node_${g}`)) == null ? void 0 : M[0];
        if (!p) {
=======
    schemaBoneGroups == null ? void 0 : schemaBoneGroups.forEach((schemaBoneGroup, iBoneGroup) => {
      const rootIndices = schemaBoneGroup.bones;
      if (!rootIndices) {
        return;
      }
      rootIndices.forEach((rootIndex) => {
        var _a2, _b2;
        const root = (_a2 = this.entity.findByTag(`node_${rootIndex}`)) == null ? void 0 : _a2[0];
        if (!root) {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
<<<<<<< HEAD
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
          const S = l == null ? void 0 : l[w];
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
=======
        const gravityDir = new this._pcRef.Vec3();
        if (schemaBoneGroup.gravityDir) {
          gravityDir.set(
            schemaBoneGroup.gravityDir.x ?? 0,
            schemaBoneGroup.gravityDir.y ?? 0,
            schemaBoneGroup.gravityDir.z ?? 0
          );
        } else {
          gravityDir.set(0, -1, 0);
        }
        const center = schemaBoneGroup.center != null ? resourceData.nodes[schemaBoneGroup.center] : void 0;
        const setting = {
          hitRadius: schemaBoneGroup.hitRadius,
          dragForce: schemaBoneGroup.dragForce,
          gravityPower: schemaBoneGroup.gravityPower,
          stiffness: schemaBoneGroup.stiffiness,
          gravityDir
        };
        const colliderGroupsForSpring = (_b2 = schemaBoneGroup.colliderGroups) == null ? void 0 : _b2.map((iColliderGroup) => {
          const group = colliderGroups == null ? void 0 : colliderGroups[iColliderGroup];
          if (group == null) {
            throw new Error(
              `VRMSpringBoneLoaderPlugin: The spring #${iBoneGroup} attempted to use a colliderGroup ${iColliderGroup} but not found`
            );
          }
          return group;
        });
        root.forEach((node) => {
          const child = node.children[0] ?? null;
          const joint = this._importJoint(node, child, setting, colliderGroupsForSpring);
          if (center) {
            joint.center = center;
          }
          manager.addJoint(joint);
        });
      });
    });
    manager.setInitState();
    return manager;
  }
  _importSphereCollider(destination, { offset, radius }) {
    const shape = new VRMSpringBoneColliderShapeSphere(this._pcRef, { offset, radius });
    const VRMSpringBoneCollider = createVRMSpringBoneCollider(this._pcRef);
    const collider = new VRMSpringBoneCollider(shape);
    destination.addChild(collider);
    return collider;
  }
  _importCapsuleCollider(destination, { offset, radius, tail }) {
    const shape = new VRMSpringBoneColliderShapeCapsule(this._pcRef, {
      offset,
      radius,
      tail
    });
    const VRMSpringBoneCollider = createVRMSpringBoneCollider(this._pcRef);
    const collider = new VRMSpringBoneCollider(shape);
    destination.addChild(collider);
    return collider;
  }
  _importJoint(node, child, setting, colliderGroupsForSpring) {
    const springBone = new VRMSpringBoneJoint(
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      this._pcRef,
      node,
      child,
      setting,
      colliderGroupsForSpring
    );
    return springBone;
  }
};
<<<<<<< HEAD
I.EXTENSION_NAME = "VRMC_springBone";
let J = I;
const $e = (s) => {
  class t extends s.ScriptType {
=======
_VRMSpringBoneLoaderPlugin.EXTENSION_NAME = "VRMC_springBone";
let VRMSpringBoneLoaderPlugin = _VRMSpringBoneLoaderPlugin;
const importScript$1 = (pcRef) => {
  class VrmSpringBone2 extends pcRef.ScriptType {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    constructor() {
      super(...arguments);
      this.activeSpringBone = true;
      this.isWalking = false;
    }
    initialize() {
<<<<<<< HEAD
      const i = new J(s, this.asset, this.entity);
      this.springBoneManager = i.import(), this.isWalking = !1, this.entity.on("toggle-spring-bone", this.toggleSpringBone, this), this.entity.on("toggle-is-walking", this.toggleIsWalking, this), this.on("destroy", () => {
        this.entity.off("toggle-spring-bone", this.toggleSpringBone, this), this.entity.on("toggle-is-walking", this.toggleIsWalking, this);
=======
      const springBoneLoader = new VRMSpringBoneLoaderPlugin(pcRef, this.asset, this.entity);
      this.springBoneManager = springBoneLoader.import();
      this.isWalking = false;
      this.entity.on("toggle-spring-bone", this.toggleSpringBone, this);
      this.entity.on("toggle-is-walking", this.toggleIsWalking, this);
      this.on("destroy", () => {
        this.entity.off("toggle-spring-bone", this.toggleSpringBone, this);
        this.entity.on("toggle-is-walking", this.toggleIsWalking, this);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      });
    }
    toggleSpringBone(isActive) {
      this.activeSpringBone = isActive;
    }
    toggleIsWalking(isWalking) {
      this.isWalking = isWalking;
    }
    update(dt) {
      if (!this.springBoneManager || !this.activeSpringBone)
        return;
      this.springBoneManager.update(dt, this.isWalking);
    }
  }
<<<<<<< HEAD
  s.registerScript(t, "vrmSpringBone"), t.attributes.add("activeSpringBone", {
=======
  pcRef.registerScript(VrmSpringBone2, "vrmSpringBone");
  VrmSpringBone2.attributes.add("activeSpringBone", {
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
    type: "boolean",
    default: true
  });
  VrmSpringBone2.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
<<<<<<< HEAD
}, je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: $e
}, Symbol.toStringTag, { value: "Module" })), K = "VRMC_materials_mtoon", Xe = "VRM";
var Jt = /* @__PURE__ */ ((s) => (s[s.Off = 0] = "Off", s[s.Front = 1] = "Front", s[s.Back = 2] = "Back", s))(Jt || {});
const A = (s) => Math.pow(s, 2.2), Ye = (s, t, e) => {
  var st, ot, rt, at, lt, ht, ct, dt, ut, mt, pt, ft, gt, xt, _t, vt, Mt, Tt, wt, yt, St, Pt, Rt, Et, Lt, bt, kt, Ct, At, It, Vt, Bt;
  const i = ((st = t.keywordMap) == null ? void 0 : st._ALPHABLEND_ON) ?? !1, r = ((ot = t.floatProperties) == null ? void 0 : ot._ZWrite) === 1 && i, o = ((rt = t.keywordMap) == null ? void 0 : rt._ALPHATEST_ON) ?? !1, a = i ? "BLEND" : o ? "MASK" : "OPAQUE", l = o ? ((at = t.floatProperties) == null ? void 0 : at._Cutoff) ?? 0.5 : void 0, c = (((lt = t.floatProperties) == null ? void 0 : lt._CullMode) ?? 2) === 0, m = (((ht = t.vectorProperties) == null ? void 0 : ht._Color) ?? [1, 1, 1, 1]).map(
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
  const P = ((vt = t.floatProperties) == null ? void 0 : vt._IndirectLightIntensity) ?? 0.1, R = P ? 1 - P : void 0, k = (Mt = t.textureProperties) == null ? void 0 : Mt._SphereAdd, V = k != null ? [1, 1, 1] : void 0, B = k != null ? {
    index: k
  } : void 0, b = ((Tt = t.floatProperties) == null ? void 0 : Tt._RimLightingMix) ?? 0, E = (wt = t.textureProperties) == null ? void 0 : wt._RimTexture, se = E != null ? {
    index: E
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, oe = (((yt = t.vectorProperties) == null ? void 0 : yt._RimColor) ?? [0, 0, 0, 1]).map(A), re = ((St = t.floatProperties) == null ? void 0 : St._RimFresnelPower) ?? 1, ae = ((Pt = t.floatProperties) == null ? void 0 : Pt._RimLift) ?? 0, le = ["none", "worldCoordinates", "screenCoordinates"][((Rt = t.floatProperties) == null ? void 0 : Rt._OutlineWidthMode) ?? 0];
  let Y = ((Et = t.floatProperties) == null ? void 0 : Et._OutlineWidth) ?? 0;
  Y = 0.01 * Y;
  const it = (Lt = t.textureProperties) == null ? void 0 : Lt._OutlineWidthTexture, he = it != null ? {
    index: it
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0, ce = (((bt = t.vectorProperties) == null ? void 0 : bt._OutlineColor) ?? [0, 0, 0]).map(A), de = (((kt = t.floatProperties) == null ? void 0 : kt._OutlineColorMode) ?? 0) === 1 ? ((Ct = t.floatProperties) == null ? void 0 : Ct._OutlineLightingMix) ?? 1 : 0, nt = (At = t.textureProperties) == null ? void 0 : At._UvAnimMaskTexture, ue = nt != null ? {
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
    alphaCutoff: l,
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
        rimLightingMixFactor: b,
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
=======
};
const VrmSpringBone = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript: importScript$1
}, Symbol.toStringTag, { value: "Module" }));
const gammaEOTF = (e) => {
  return Math.pow(e, 2.2);
};
const updateTextureMatrix = (pcRef, mat3, textureTransform) => {
  if (!textureTransform)
    return;
  const offset = new pcRef.Vec2(0, 0);
  const repeat = new pcRef.Vec2(1, 1);
  const center = new pcRef.Vec2(0, 0);
  let rotation = 0;
  if (textureTransform.offset) {
    offset.x = textureTransform.offset[0];
    offset.y = textureTransform.offset[1];
  }
  if (textureTransform.rotation) {
    rotation = textureTransform.rotation;
  }
  setUvTransform(mat3, offset.x, offset.y, repeat.x, repeat.y, rotation, center.x, center.y);
  return mat3;
};
const setUvTransform = (mat3, tx, ty, sx, sy, rotation, cx, cy) => {
  const c = Math.cos(rotation);
  const s = Math.sin(rotation);
  mat3.set([
    sx * c,
    sx * s,
    -sx * (c * cx + s * cy) + cx + tx,
    -sy * s,
    sy * c,
    -sy * (-s * cx + c * cy) + cy + ty,
    0,
    0,
    1
  ]);
};
<<<<<<< HEAD
const baseVS$1 = (
  /* glsl */
  `
varying vec3 vViewPosition;
varying vec3 vViewDirection;
varying vec3 vNormal;

uniform vec3 view_position;

uniform float outlineWidthFactor;

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif
`
);
const endVS$1 = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
    #ifdef MTOON_USE_UV
       vUv0 = vertex_texCoord0;
    #endif


    // Transform the vertex position to world space
    vec4 mvPosition = matrix_model * vec4(vertex_position, 1.0);
    // Pass the view position to the fragment shader
    vViewPosition = -mvPosition.xyz;


    vec4 worldPosition = mvPosition;
    vViewDirection = view_position - worldPosition.xyz;

    vec3 objectNormal = vertex_normal;
    vec3 transformedNormal = normalize(matrix_normal * objectNormal);
    vNormal = transformedNormal;


    #ifdef OUTLINE
        float outlineTex = 1.0;
        
        #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
            vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv0, 1 ) ).xy;
            outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
        #endif

        #ifdef OUTLINE_WIDTH_WORLD
            float worldNormalLength = length( transformedNormal );
            vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
            gl_Position = matrix_viewProjection * getModelMatrix()  * vec4( outlineOffset + vertex_position, 1.0);
        #endif

        #ifdef OUTLINE_WIDTH_SCREEN
            // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
        #endif

        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
    #endif
`
<<<<<<< HEAD
), Ze = (
=======
);
const basePS$1 = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
    #define RECIPROCAL_PI 0.3183098861837907

    uniform vec3 litFactor;
    uniform float opacity;
    uniform vec3 shadeColorFactor;
    uniform vec3 ambientLightColor;

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

    uniform vec3 outlineColorFactor;
    uniform float outlineLightingMixFactor;

    #ifdef USE_UVANIMATIONMASKTEXTURE
        // TODO:  Wait until an avatar containing this information is found before proceeding with the implementation.
        // uniform sampler2D uvAnimationMaskTexture;
        // uniform mat3 uvAnimationMaskTextureUvTransform;
    #endif

    uniform float uvAnimationScrollXOffset;
    uniform float uvAnimationScrollYOffset;
    uniform float uvAnimationRotationPhase;


    #ifdef USE_MAP
        uniform sampler2D baseColorMap;
        uniform mat3 mapUvTransform;
    #endif

    #ifdef USE_EMISSIVEMAP
        uniform sampler2D emissiveMap;
        uniform mat3 emissiveMapUvTransform;
    #endif

    varying vec3 vViewPosition;

    struct MToonMaterial {
        vec3 diffuseColor;
        vec3 shadeColor;
        float shadingShift;
    };

    struct GeometricContext {
	    vec3 position;
	    vec3 normal;
	    vec3 viewDir;
    };
    
    float linearstep( float a, float b, float t ) {
        return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
    }

    vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
        return RECIPROCAL_PI * diffuseColor;
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

    vec3 getDiffuse(
        const in MToonMaterial material,
        const in float shading,
            in vec3 lightColor
    ) {
        vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );
        return col;
    }


    #ifdef USE_NORMALMAP
        uniform sampler2D normalMap;
        uniform mat3 normalMapUvTransform;
        uniform vec2 normalScale;
    #endif

    uniform mat3 normalMatrix;


    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

        vec3 q0 = dFdx( eye_pos.xyz );
        vec3 q1 = dFdy( eye_pos.xyz );
        vec2 st0 = dFdx( uv.st );
        vec2 st1 = dFdy( uv.st );

        vec3 N = surf_norm;

        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );

        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;

        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

        return mat3( T * scale, B * scale, N );
=======
class VRMMaterialsV0CompatPlugin {
  constructor(pcRef, asset) {
    this._pcRef = pcRef;
    this.asset = asset;
    this._renderQueueMapTransparent = /* @__PURE__ */ new Map();
    this._renderQueueMapTransparentZWrite = /* @__PURE__ */ new Map();
  }
  parseMaterials() {
    var _a, _b, _c;
    const gltf = (_b = (_a = this.asset.resource) == null ? void 0 : _a.data) == null ? void 0 : _b.gltf;
    const v0VRMExtension = (_c = gltf == null ? void 0 : gltf.extensions) == null ? void 0 : _c["VRM"];
    const v0MaterialProperties = v0VRMExtension == null ? void 0 : v0VRMExtension.materialProperties;
    if (!v0MaterialProperties) {
      return;
>>>>>>> 30d0d14 (feat: create vrm-mtoon script & use setting from layer light store)
    }
    this._populateRenderQueueMap(v0MaterialProperties);
    v0MaterialProperties.forEach((materialProperties, materialIndex) => {
      var _a2;
      if (!gltf.materials) {
        console.error("parseMaterials: gltf.materials is undefined");
        return;
      }
      const materialDef = gltf.materials[materialIndex];
      if (!materialDef) {
        console.warn(
          `VRMMaterialsV0CompatPlugin: Attempt to use materials[${materialIndex}] of glTF but the material doesn't exist`
        );
        return;
      }
      if (materialProperties.shader === "VRM/MToon") {
        const material = this._parseV0MToonProperties(materialProperties, materialDef);
        gltf.materials[materialIndex] = material;
      } else if ((_a2 = materialProperties.shader) == null ? void 0 : _a2.startsWith("VRM/Unlit"))
        ;
      else if (materialProperties.shader === "VRM_USE_GLTFSHADER")
        ;
      else {
        console.warn(`parseMaterials: Unknown shader: ${materialProperties.shader}`);
      }
    });
  }
  _parseV0MToonProperties(materialProperties, schemaMaterial) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H;
    if (schemaMaterial.v0Compat)
      return schemaMaterial;
    const isTransparent = ((_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) ?? false;
    const enabledZWrite = ((_b = materialProperties.floatProperties) == null ? void 0 : _b["_ZWrite"]) === 1;
    const transparentWithZWrite = enabledZWrite && isTransparent;
    const renderQueueOffsetNumber = this._v0ParseRenderQueue(materialProperties);
    const isCutoff = ((_c = materialProperties.keywordMap) == null ? void 0 : _c["_ALPHATEST_ON"]) ?? false;
    const alphaMode = isTransparent ? "BLEND" : isCutoff ? "MASK" : "OPAQUE";
    const alphaCutoff = isCutoff ? ((_d = materialProperties.floatProperties) == null ? void 0 : _d["_Cutoff"]) ?? 0.5 : void 0;
    const cullMode = ((_e = materialProperties.floatProperties) == null ? void 0 : _e["_CullMode"]) ?? 2;
    const doubleSided = cullMode === 0;
    const textureTransformExt = this._portTextureTransform(materialProperties);
    const baseColorFactor = (((_f = materialProperties.vectorProperties) == null ? void 0 : _f["_Color"]) ?? [1, 1, 1, 1]).map(
      (v, i) => i === 3 ? v : gammaEOTF(v)
      // alpha channel is stored in linear
    );
    const baseColorTextureIndex = (_g = materialProperties.textureProperties) == null ? void 0 : _g["_MainTex"];
    const baseColorTexture = baseColorTextureIndex != null ? {
      index: baseColorTextureIndex,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    const normalTextureScale = ((_h = materialProperties.floatProperties) == null ? void 0 : _h["_BumpScale"]) ?? 1;
    const normalTextureIndex = (_i = materialProperties.textureProperties) == null ? void 0 : _i["_BumpMap"];
    const normalTexture = normalTextureIndex != null ? {
      index: normalTextureIndex,
      scale: normalTextureScale,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    const emissiveFactor = (_k = (_j = materialProperties.vectorProperties) == null ? void 0 : _j["_EmissionColor"]) == null ? void 0 : _k.map(gammaEOTF);
    const emissiveTextureIndex = (_l = materialProperties.textureProperties) == null ? void 0 : _l["_EmissionMap"];
    const emissiveTexture = emissiveTextureIndex != null ? {
      index: emissiveTextureIndex,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    const shadeColorFactor = (_n = (_m = materialProperties.vectorProperties) == null ? void 0 : _m["_ShadeColor"]) == null ? void 0 : _n.map(gammaEOTF);
    const shadeMultiplyTextureIndex = (_o = materialProperties.textureProperties) == null ? void 0 : _o["_ShadeTexture"];
    const shadeMultiplyTexture = shadeMultiplyTextureIndex != null ? {
      index: shadeMultiplyTextureIndex,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    let shadingShiftFactor = ((_p = materialProperties.floatProperties) == null ? void 0 : _p["_ShadeShift"]) ?? 0;
    let shadingToonyFactor = ((_q = materialProperties.floatProperties) == null ? void 0 : _q["_ShadeToony"]) ?? 0.9;
    shadingToonyFactor = this._pcRef.math.lerp(
      shadingToonyFactor,
      1,
      0.5 + 0.5 * shadingShiftFactor
    );
    shadingShiftFactor = -shadingShiftFactor - (1 - shadingToonyFactor);
    const giIntensityFactor = ((_r = materialProperties.floatProperties) == null ? void 0 : _r["_IndirectLightIntensity"]) ?? 0.1;
    const giEqualizationFactor = giIntensityFactor ? 1 - giIntensityFactor : void 0;
    const matcapTextureIndex = (_s = materialProperties.textureProperties) == null ? void 0 : _s["_SphereAdd"];
    const matcapFactor = matcapTextureIndex != null ? [1, 1, 1] : void 0;
    const matcapTexture = matcapTextureIndex != null ? {
      index: matcapTextureIndex
    } : void 0;
    const rimLightingMixFactor = ((_t = materialProperties.floatProperties) == null ? void 0 : _t["_RimLightingMix"]) ?? 0;
    const rimMultiplyTextureIndex = (_u = materialProperties.textureProperties) == null ? void 0 : _u["_RimTexture"];
    const rimMultiplyTexture = rimMultiplyTextureIndex != null ? {
      index: rimMultiplyTextureIndex,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    const parametricRimColorFactor = (((_v = materialProperties.vectorProperties) == null ? void 0 : _v["_RimColor"]) ?? [0, 0, 0, 1]).map(gammaEOTF);
    const parametricRimFresnelPowerFactor = ((_w = materialProperties.floatProperties) == null ? void 0 : _w["_RimFresnelPower"]) ?? 1;
    const parametricRimLiftFactor = ((_x = materialProperties.floatProperties) == null ? void 0 : _x["_RimLift"]) ?? 0;
    const outlineWidthMode = ["none", "worldCoordinates", "screenCoordinates"][((_y = materialProperties.floatProperties) == null ? void 0 : _y["_OutlineWidthMode"]) ?? 0];
    let outlineWidthFactor = ((_z = materialProperties.floatProperties) == null ? void 0 : _z["_OutlineWidth"]) ?? 0;
    outlineWidthFactor = 0.01 * outlineWidthFactor;
    const outlineWidthMultiplyTextureIndex = (_A = materialProperties.textureProperties) == null ? void 0 : _A["_OutlineWidthTexture"];
    const outlineWidthMultiplyTexture = outlineWidthMultiplyTextureIndex != null ? {
      index: outlineWidthMultiplyTextureIndex,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    const outlineColorFactor = (((_B = materialProperties.vectorProperties) == null ? void 0 : _B["_OutlineColor"]) ?? [0, 0, 0]).map(gammaEOTF);
    const outlineColorMode = ((_C = materialProperties.floatProperties) == null ? void 0 : _C["_OutlineColorMode"]) ?? 0;
    const outlineLightingMixFactor = outlineColorMode === 1 ? ((_D = materialProperties.floatProperties) == null ? void 0 : _D["_OutlineLightingMix"]) ?? 1 : 0;
    const uvAnimationMaskTextureIndex = (_E = materialProperties.textureProperties) == null ? void 0 : _E["_UvAnimMaskTexture"];
    const uvAnimationMaskTexture = uvAnimationMaskTextureIndex != null ? {
      index: uvAnimationMaskTextureIndex,
      extensions: {
        ...textureTransformExt
      }
    } : void 0;
    const uvAnimationScrollXSpeedFactor = ((_F = materialProperties.floatProperties) == null ? void 0 : _F["_UvAnimScrollX"]) ?? 0;
    let uvAnimationScrollYSpeedFactor = ((_G = materialProperties.floatProperties) == null ? void 0 : _G["_UvAnimScrollY"]) ?? 0;
    if (uvAnimationScrollYSpeedFactor != null) {
      uvAnimationScrollYSpeedFactor = -uvAnimationScrollYSpeedFactor;
    }
    const uvAnimationRotationSpeedFactor = ((_H = materialProperties.floatProperties) == null ? void 0 : _H["_UvAnimRotation"]) ?? 0;
    const mtoonExtension = {
      specVersion: "1.0",
      transparentWithZWrite,
      renderQueueOffsetNumber,
      shadeColorFactor,
      shadeMultiplyTexture,
      shadingShiftFactor,
      shadingToonyFactor,
      giEqualizationFactor,
      matcapFactor,
      matcapTexture,
      rimLightingMixFactor,
      rimMultiplyTexture,
      parametricRimColorFactor,
      parametricRimFresnelPowerFactor,
      parametricRimLiftFactor,
      outlineWidthMode,
      outlineWidthFactor,
      outlineWidthMultiplyTexture,
      outlineColorFactor,
      outlineLightingMixFactor,
      uvAnimationMaskTexture,
      uvAnimationScrollXSpeedFactor,
      uvAnimationScrollYSpeedFactor,
      uvAnimationRotationSpeedFactor
    };
    schemaMaterial.v0Compat = true;
    return {
      ...schemaMaterial,
      pbrMetallicRoughness: {
        baseColorFactor,
        baseColorTexture
      },
      normalTexture,
      emissiveTexture,
      emissiveFactor,
      alphaMode,
      alphaCutoff,
      doubleSided,
      extensions: {
        VRMC_materials_mtoon: mtoonExtension
      }
    };
  }
  _portTextureTransform(materialProperties) {
    var _a;
    const textureTransform = (_a = materialProperties.vectorProperties) == null ? void 0 : _a["_MainTex"];
    if (textureTransform == null) {
      return {};
    }
    const offset = [(textureTransform == null ? void 0 : textureTransform[0]) ?? 0, (textureTransform == null ? void 0 : textureTransform[1]) ?? 0];
    const scale = [(textureTransform == null ? void 0 : textureTransform[2]) ?? 1, (textureTransform == null ? void 0 : textureTransform[3]) ?? 1];
    offset[1] = 1 - scale[1] - offset[1];
    return {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      KHR_texture_transform: { offset, scale }
    };
  }
  /**
   * Convert v0 render order into v1 render order.
   * This uses a map from v0 render queue to v1 compliant render queue offset which is generated in {@link _populateRenderQueueMap}.
   */
  _v0ParseRenderQueue(materialProperties) {
    var _a, _b;
    const isTransparent = ((_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) ?? false;
    const enabledZWrite = ((_b = materialProperties.floatProperties) == null ? void 0 : _b["_ZWrite"]) === 1;
    let offset = 0;
    if (isTransparent) {
      const v0Queue = materialProperties.renderQueue;
      if (v0Queue != null) {
        if (enabledZWrite) {
          offset = this._renderQueueMapTransparentZWrite.get(v0Queue);
        } else {
          offset = this._renderQueueMapTransparent.get(v0Queue);
        }
      }
    }
    return offset;
  }
  /**
   * Create a map which maps v0 render queue to v1 compliant render queue offset.
   * This lists up all render queues the model use and creates a map to new render queue offsets in the same order.
   */
  _populateRenderQueueMap(materialPropertiesList) {
    const renderQueuesTransparent = /* @__PURE__ */ new Set();
    const renderQueuesTransparentZWrite = /* @__PURE__ */ new Set();
    materialPropertiesList.forEach((materialProperties) => {
      var _a, _b;
      const isTransparent = ((_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) ?? false;
      const enabledZWrite = ((_b = materialProperties.floatProperties) == null ? void 0 : _b["_ZWrite"]) === 1;
      if (isTransparent) {
        const v0Queue = materialProperties.renderQueue;
        if (v0Queue != null) {
          if (enabledZWrite) {
            renderQueuesTransparentZWrite.add(v0Queue);
          } else {
            renderQueuesTransparent.add(v0Queue);
          }
        }
      }
    });
    if (renderQueuesTransparent.size > 10) {
      console.warn(
        `VRMMaterialsV0CompatPlugin: This VRM uses ${renderQueuesTransparent.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`
      );
    }
    if (renderQueuesTransparentZWrite.size > 10) {
      console.warn(
        `VRMMaterialsV0CompatPlugin: This VRM uses ${renderQueuesTransparentZWrite.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`
      );
    }
    Array.from(renderQueuesTransparent).sort().forEach((queue, i) => {
      const newQueueOffset = Math.min(Math.max(i - renderQueuesTransparent.size + 1, -9), 0);
      this._renderQueueMapTransparent.set(queue, newQueueOffset);
    });
    Array.from(renderQueuesTransparentZWrite).sort().forEach((queue, i) => {
      const newQueueOffset = Math.min(Math.max(i, 0), 9);
      this._renderQueueMapTransparentZWrite.set(queue, newQueueOffset);
    });
  }
}
class RenderStates {
  constructor(pcRef) {
    this._pcRef = pcRef;
    this._app = null;
    this.lightStateInfo = null;
    this.defaultInfoSetting = {
      directionalLight: {
        direction: new pc.Vec3(0, 0, 0),
        color: new pc.Color(0, 0, 0)
      },
      spotLight: {
        position: new pc.Vec3(0, 0, 0),
        direction: new pc.Vec3(0, 0, 0),
        color: new pc.Color(0, 0, 0),
        distance: 0,
        decay: 0,
        coneCos: 0,
        penumbraCos: 0
      },
      pointLight: {
        position: new pc.Vec3(0, 0, 0),
        color: new pc.Color(0, 0, 0),
        distance: 0,
        decay: 0
      }
    };
  }
  _updateMaterialUniforms(lights) {
    this.lightStateInfo = this.convertLightStateInfo(lights);
  }
  setApp(app) {
    if (this._app)
      return;
    this._app = app;
    this.update();
    this._app.on("update", this.update, this);
  }
  convertLightStateInfo(lights) {
    const directionalLights = lights[this._pcRef.LIGHTTYPE_DIRECTIONAL];
    const spotLights = lights[this._pcRef.LIGHTTYPE_SPOT];
    const pointLights = lights[this._pcRef.LIGHTTYPE_POINT];
    const info = {
      directionalLights: [],
      spotLights: [],
      pointLights: [],
      ...this._app && {
        scene: {
          envAtlas: this._app.scene.envAtlas || null,
          ambientLight: this._app.scene.ambientLight
        }
      }
    };
    info.directionalLights = directionalLights.map((light2) => {
      if (light2._node === null) {
        return this.defaultInfoSetting.directionalLight;
      }
      const component = light2._node.light;
      return {
        direction: light2._direction,
        color: component.color
      };
    });
    info.spotLights = spotLights.map((light2) => {
      if (light2._node === null) {
        return this.defaultInfoSetting.spotLight;
      }
      const component = light2._node.light;
      return {
        position: light2._node.getPosition(),
        direction: light2._node.forward,
        color: component.color,
        distance: component.range,
        decay: light2.falloffMode === this._pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2,
        coneCos: Math.cos(component.innerConeAngle),
        penumbraCos: Math.cos(component.outerConeAngle)
      };
    });
    info.pointLights = pointLights.map((light2) => {
      if (light2._node === null) {
        return this.defaultInfoSetting.pointLight;
      }
      const component = light2._node.light;
      return {
        position: light2._node.getPosition(),
        color: component.color,
        distance: component.range,
        decay: light2.falloffMode === this._pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2
      };
    });
    return info;
  }
  destroy() {
    if (this._app) {
      this._app.off("update", this.update, this);
    }
  }
  update() {
    if (!this._app)
      return;
    const worldLayer = this._app.scene.layers.getLayerById(this._pcRef.LAYERID_WORLD);
    if (worldLayer) {
      const lights = worldLayer.splitLights;
      this._updateMaterialUniforms(lights);
    }
  }
}
const EXTENSION_VRMC_MATERIALS_MTOON = "VRMC_materials_mtoon";
const MToonMaterialOutlineWidthMode = {
  None: "none",
  WorldCoordinates: "worldCoordinates",
  ScreenCoordinates: "screenCoordinates"
};
const baseVS$1 = (
  /* glsl */
  `
varying vec3 vViewPosition;
varying vec3 vViewDirection;
varying vec3 vNormal;

uniform vec3 view_position;

uniform float outlineWidthFactor;

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif
`
);
const endVS$1 = (
  /* glsl */
  `
    #ifdef MTOON_USE_UV
       vUv0 = vertex_texCoord0;
    #endif


    // Transform the vertex position to world space
    vec4 mvPosition = matrix_model * vec4(vertex_position, 1.0);
    // Pass the view position to the fragment shader
    vViewPosition = -mvPosition.xyz;


    vec4 worldPosition = mvPosition;
    vViewDirection = view_position - worldPosition.xyz;

    vec3 objectNormal = vertex_normal;
    vec3 transformedNormal = normalize(matrix_normal * objectNormal);
    vNormal = transformedNormal;


    #ifdef OUTLINE
        float outlineTex = 1.0;
        
        #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
            vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv0, 1 ) ).xy;
            outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
        #endif

        #ifdef OUTLINE_WIDTH_WORLD
            float worldNormalLength = length( transformedNormal );
            vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
            gl_Position = matrix_viewProjection * getModelMatrix()  * vec4( outlineOffset + vertex_position, 1.0);
        #endif

        #ifdef OUTLINE_WIDTH_SCREEN
            // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
        #endif

        gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
    #endif
`
);
const basePS$1 = (
  /* glsl */
  `
    #define RECIPROCAL_PI 0.3183098861837907

    uniform vec3 litFactor;
    uniform float opacity;
    uniform vec3 shadeColorFactor;
    uniform vec3 ambientLightColor;

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

    uniform vec3 outlineColorFactor;
    uniform float outlineLightingMixFactor;

    #ifdef USE_UVANIMATIONMASKTEXTURE
        // TODO:  Wait until an avatar containing this information is found before proceeding with the implementation.
        // uniform sampler2D uvAnimationMaskTexture;
        // uniform mat3 uvAnimationMaskTextureUvTransform;
    #endif

    uniform float uvAnimationScrollXOffset;
    uniform float uvAnimationScrollYOffset;
    uniform float uvAnimationRotationPhase;


    #ifdef USE_MAP
        uniform sampler2D baseColorMap;
        uniform mat3 mapUvTransform;
    #endif

    #ifdef USE_EMISSIVEMAP
        uniform sampler2D emissiveMap;
        uniform mat3 emissiveMapUvTransform;
    #endif

    varying vec3 vViewPosition;

    struct MToonMaterial {
        vec3 diffuseColor;
        vec3 shadeColor;
        float shadingShift;
    };

    struct GeometricContext {
	    vec3 position;
	    vec3 normal;
	    vec3 viewDir;
    };
    
    float linearstep( float a, float b, float t ) {
        return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
    }

    vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
        return RECIPROCAL_PI * diffuseColor;
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

    vec3 getDiffuse(
        const in MToonMaterial material,
        const in float shading,
            in vec3 lightColor
    ) {
        vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );
        return col;
    }


    #ifdef USE_NORMALMAP
        uniform sampler2D normalMap;
        uniform mat3 normalMapUvTransform;
        uniform vec2 normalScale;
    #endif

    uniform mat3 normalMatrix;


    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

        vec3 q0 = dFdx( eye_pos.xyz );
        vec3 q1 = dFdy( eye_pos.xyz );
        vec2 st0 = dFdx( uv.st );
        vec2 st1 = dFdy( uv.st );

        vec3 N = surf_norm;

        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );

        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;

        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

        return mat3( T * scale, B * scale, N );
    }


    struct ReflectedLight {
	    vec3 directDiffuse;
	    vec3 directSpecular;
	    vec3 indirectDiffuse;
	    vec3 indirectSpecular;
    };

    struct IncidentLight {
	    vec3 color;
	    vec3 direction;
	    bool visible;
    };


    void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight, const in float shrinkNum ) {
        float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
        vec3 irradiance = directLight.color;

        // directSpecular will be used for rim lighting, not an actual specular
        reflectedLight.directSpecular += irradiance;

        irradiance *= dotNL;

        float shading = getShading( dotNL, shadow, material.shadingShift );

        // Note: Shrink the light intensity to prevent the color from becoming too bright
        float shrink = 1.0 / shrinkNum; 
        // toon shaded diffuse
        reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color ) * shrink;
    }

    void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
        // indirect diffuse will use diffuseColor, no shadeColor involved
        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

        // directSpecular will be used for rim lighting, not an actual specular
        reflectedLight.directSpecular += irradiance;
    }

    #define RE_Direct RE_Direct_MToon
    #define RE_IndirectDiffuse RE_IndirectDiffuse_MToon

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
        vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
        vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
        vec2 st0 = dFdx( uv.st );
        vec2 st1 = dFdy( uv.st );

        vec3 N = normalize( surf_norm );

        vec3 q1perp = cross( q1, N );
        vec3 q0perp = cross( N, q0 );

        vec3 T = q1perp * st0.x + q0perp * st1.x;
        vec3 B = q1perp * st0.y + q0perp * st1.y;

        // From three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
        // TODO: Is this still required? Or shall I make a PR about it?
        if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
          return surf_norm;
        }

        float det = max( dot( T, T ), dot( B, B ) );
        float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

        return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
    }

    varying vec3 vNormal;
    varying vec3 vViewDirection;
`
<<<<<<< HEAD
), Je = (
=======
);
const endPS$1 = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
    vec2 uv = vec2(0.5, 0.5);

    #if (defined(MTOON_USE_UV))
        #if !defined(MTOON_UVS_VERTEX_ONLY)
            uv = vUv0;

            float uvAnimMask = 1.0;
            #ifdef USE_UVANIMATIONMASKTEXTURE
                // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
            #endif

            uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
            float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
            float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
            uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
        #endif
    #endif

    vec4 diffuseColor = vec4( litFactor, opacity );
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    vec3 totalEmissiveRadiance = emissive;

    #ifdef USE_MAP
        vec2 colorMapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
        vec4 sampledDiffuseColor = texture2D( baseColorMap, colorMapUv );
        diffuseColor *= sampledDiffuseColor;
    #endif

    float faceDirection = gl_FrontFacing ? 1.0 : -1.0;
    vec3 normal = normalize( vNormal );
    normal *= faceDirection;

    #ifdef OUTLINE
        normal *= -1.0;
    #endif

    #ifdef USE_NORMALMAP
        vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

        #ifdef SHADERDEF_TANGENTS
            mat3 tbn = mat3( normalize( vTangentW ), normalize( vBinormalW ), normal );
        #else
            mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );
        #endif

        // #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
        //   tbn[0] *= faceDirection;
        //   tbn[1] *= faceDirection;
        // #endif

        vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
        mapN.xy *= normalScale;

        #if defined(SHADERDEF_TANGENTS)
            normal = normalize( tbn * mapN );
        #else
            normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );
        #endif
    #endif

    #ifdef USE_EMISSIVEMAP
        vec2 emissiveMapUv = (emissiveMapUvTransform * vec3( uv, 1 )).xy;
        totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
    #endif

    // -- MToon: lighting --------------------------------------------------------
    MToonMaterial material;
    material.diffuseColor = diffuseColor.rgb;
    material.shadeColor = shadeColorFactor;

    #ifdef USE_SHADEMULTIPLYTEXTURE
        vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
        material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
    #endif

    material.shadingShift = shadingShiftFactor;
    #ifdef USE_SHADINGSHIFTTEXTURE
        vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
        material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
    #endif
    

    GeometricContext geometry;
    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = normalize( vViewPosition );

    IncidentLight directLight;
    // since these variables will be used in unrolled loop, we have to define in prior
    float shadow = 1.0;

    #ifdef USE_POINT_LIGHTS
        PointLight pointLight;
        shadow = 1.0; 

        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
            pointLight = pointLights[ i ];
            getPointLightInfo( pointLight, geometry, directLight );
            RE_Direct( directLight, geometry, material, shadow, reflectedLight, 1.0 );
        }
        #pragma unroll_loop_end
    #endif
    

    #if USE_SPOT_LIGHTS
        SpotLight spotLight;
        shadow = 1.0; 

        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
            spotLight = spotLights[ i ];
            getSpotLightInfo( spotLight, geometry, directLight );
            RE_Direct( directLight, geometry, material, shadow, reflectedLight, 1.0 );
        }
        #pragma unroll_loop_end
    #endif

    #if USE_DIR_LIGHTS
        DirectionalLight directionalLight;
        shadow = 1.0; 

        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
            directionalLight = directionalLights[0];
            getDirectionalLightInfo( directionalLight, directLight );  
            RE_Direct( directLight, geometry, material, shadow, reflectedLight, float(NUM_DIR_LIGHTS) );
        }
        #pragma unroll_loop_end
    #endif 

    // -- MToon: Ambient --------------------------------------------------------
    vec3 iblIrradiance = vec3( 0.0 );
    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );


    // From three.js #include <lights_fragment_maps>
    // -- MToon: Environment --------------------------------------------------------
	#ifdef USE_ENV_LIGHTS
		vec3 dir = normalize(cubeMapRotate(vNormal) * vec3(-1.0, 1.0, 1.0));
        vec2 envuv = mapUv(toSphericalUv(dir), vec4(128.0, 256.0 + 128.0, 64.0, 32.0) / atlasSize);
        vec4 raw = texture2D(texture_envAtlas, envuv);
        vec3 linear = decodeLinear(raw);

        float shrinkEnvLightRatio = 0.75;

        #ifdef USE_DIR_LIGHTS
            shrinkEnvLightRatio = 0.25;
        #endif

        irradiance += getIBLIrradiance(linear) * shrinkEnvLightRatio;
	#endif


    // From three.js #include <lights_fragment_end>
    RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
    

    // force the color lighter
    float lighter = 2.5;
    vec3 col = lighter * reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

    // -- MToon: rim lighting -----------------------------------------
    vec3 viewDir = normalize( vViewDirection );
    vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );
    vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

    #ifdef USE_MATCAPTEXTURE
        {
          vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
          vec3 y = cross( viewDir, x ); // guaranteed to be normalized
          vec2 sphereUv = vec2(dot(x, normal), dot(y, normal)) * 0.5 + 0.5;
          sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
          vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
          rim += matcapFactor * matcap;
        }
    #endif


    #ifdef USE_RIMMULTIPLYTEXTURE
        vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
        rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
    #endif

    col += rimMix * rim;

    // -- MToon: Emission --------------------------------------------------------
    // Note: Look wired, but this is the implemention from three-vrm.
    // Remove it temporarily.
    // col += totalEmissiveRadiance;

    // -- MToon: Outline --------------------------------------------------------
    #if defined( OUTLINE )
        col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
    #endif

    #ifdef OPAQUE
        diffuseColor.a = 1.0;
    #endif

    gl_FragColor = vec4( col, 1.0 );
`
);
const light = (
  /* glsl */
  `
    float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	    return smoothstep( coneCosine, penumbraCosine, angleCosine );
    }

    float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {
            distanceFalloff *= pow( saturate( 1.0 - pow( lightDistance / cutoffDistance, 4.0 ) ), 2.0 );
		};

		return distanceFalloff;
    }

	vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
		vec3 irradiance = ambientLightColor;
		return irradiance;
	}
	vec3 getIBLIrradiance( const in vec3 envMapColor ) {
		return 3.141592653589793 * envMapColor.rgb;
	}

    #if USE_POINT_LIGHTS
        struct PointLight {
            vec3 position;
            vec3 color;
            float distance;
            float decay;
        };

        uniform PointLight pointLights[NUM_POINT_LIGHTS];

	    void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		    vec3 lVector = pointLight.position - geometry.position;

		    light.direction = normalize( lVector );

		    float lightDistance = length( lVector );

		    light.color = pointLight.color;
		    light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		    light.visible = ( light.color != vec3( 0.0 ) );
	    }
    #endif

    #if USE_SPOT_LIGHTS
    	struct SpotLight {
		    vec3 position;
		    vec3 direction;
		    vec3 color;
		    float distance;
		    float decay;
		    float coneCos;
		    float penumbraCos;
	    };

        uniform SpotLight spotLights[NUM_SPOT_LIGHTS];

        void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		    vec3 lVector = spotLight.position - geometry.position;

		    light.direction = normalize( lVector );

		    float angleCos = dot( light.direction, spotLight.direction );

		    float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		    if ( spotAttenuation > 0.0 ) {

			    float lightDistance = length( lVector );

			    light.color = spotLight.color * spotAttenuation;
			    light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			    light.visible = ( light.color != vec3( 0.0 ) );

		    } else {

			    light.color = vec3( 0.0 );
			    light.visible = false;

		    }
	    }
    #endif

    #if USE_DIR_LIGHTS
        struct DirectionalLight {
            vec3 direction;
            vec3 color;
        };

        uniform DirectionalLight directionalLights[NUM_DIR_LIGHTS];

        void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
            light.color = directionalLight.color;
            light.direction = directionalLight.direction;
            light.visible = true;
        }
    #endif
`
<<<<<<< HEAD
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
=======
);
const shaderChunksMtoon = {
  baseVS: baseVS$1,
  endVS: endVS$1,
  basePS: basePS$1,
  endPS: endPS$1,
  light
};
const textureTransformExtensionName = "KHR_texture_transform";
const createVRMCMtoonMaterial = (pcRef) => {
  return class VRMCMtoonMaterial extends pcRef.StandardMaterial {
    constructor(asset) {
      super();
      this.litFactor = new pcRef.Color(1, 1, 1, 1);
      this.alphaTest = 0;
      this.baseColorMap = null;
      this.mapUvTransform = new pcRef.Mat3();
      this.normalMapUvTransform = new pcRef.Mat3();
      this.normalScale = new pcRef.Vec2(1, 1);
      this.emissiveMapUvTransform = new pcRef.Mat3();
      this.shadeColorFactor = new pcRef.Color(0, 0, 0, 1);
      this.shadeMultiplyTexture = null;
      this.shadeMultiplyTextureUvTransform = new pcRef.Mat3();
      this.shadingShiftFactor = 0;
      this.shadingShiftTexture = null;
      this.shadingShiftTextureUvTransform = new pcRef.Mat3();
      this.shadingShiftTextureScale = 1;
      this.shadingToonyFactor = 0.9;
      this.giEqualizationFactor = 0;
      this.matcapFactor = new pcRef.Color(1, 1, 1, 1);
      this.matcapTexture = null;
      this.matcapTextureUvTransform = new pcRef.Mat3();
      this.parametricRimColorFactor = new pcRef.Color(0, 0, 0, 1);
      this.rimMultiplyTexture = null;
      this.rimMultiplyTextureUvTransform = new pcRef.Mat3();
      this.rimLightingMixFactor = 0;
      this.parametricRimFresnelPowerFactor = 5;
      this.parametricRimLiftFactor = 0;
      this.uvAnimationMaskTexture = null;
      this.uvAnimationMaskTextureUvTransform = new pcRef.Mat3();
      this.uvAnimationScrollXOffset = 0;
      this.uvAnimationScrollYOffset = 0;
      this.uvAnimationRotationPhase = 0;
      this.isOutline = false;
      this.outlineWidthMode = MToonMaterialOutlineWidthMode.None;
      this.outlineWidthMultiplyTexture = null;
      this.outlineWidthMultiplyTextureUvTransform = new pcRef.Mat3();
      this.outlineWidthFactor = 0.02;
      this.outlineColorFactor = new pcRef.Color(1, 0.5, 0, 1);
      this.outlineLightingMixFactor = 0;
      this.useLighting = false;
      this._asset = asset;
      this._vec3A = new pcRef.Vec3();
    }
    parse(gltfMaterial) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
      this.litFactor = this.diffuse;
      if (gltfMaterial.hasOwnProperty("alphaMode")) {
        switch (gltfMaterial.alphaMode) {
          case "MASK":
            this.blendType = pcRef.BLEND_NONE;
            if (gltfMaterial.hasOwnProperty("alphaCutoff") && gltfMaterial.alphaCutoff !== void 0) {
              this.alphaTest = gltfMaterial.alphaCutoff;
            } else {
              this.alphaTest = 0.5;
            }
            break;
          case "BLEND":
            this.blendType = pcRef.BLEND_NORMAL;
            this.depthWrite = false;
            break;
          default:
          case "OPAQUE":
            this.blendType = pcRef.BLEND_NONE;
            break;
        }
      } else {
        this.blendType = pcRef.BLEND_NONE;
      }
      this.baseColorMap = this.diffuseMap || this.emissiveMap;
      if (this.baseColorMap) {
        updateTextureMatrix(pcRef, this.mapUvTransform, {
          offset: [this.diffuseMapOffset.x, this.diffuseMapOffset.y],
          rotation: this.diffuseMapRotation
        });
      }
      if (this.normalMap) {
        this.normalScale.set(this.bumpiness, this.bumpiness);
        updateTextureMatrix(pcRef, this.normalMapUvTransform, {
          offset: [this.normalDetailMapOffset.x, this.normalDetailMapOffset.y],
          rotation: this.normalMapRotation
        });
      }
      if (this.emissiveMap) {
        updateTextureMatrix(pcRef, this.normalMapUvTransform, {
          offset: [this.emissiveMapOffset.x, this.emissiveMapOffset.y],
          rotation: this.emissiveMapRotation
        });
      }
      if (gltfMaterial.emissiveFactor) {
        const emissiveFactor = gltfMaterial.emissiveFactor;
        this.emissive = new pcRef.Color(
          emissiveFactor[0],
          emissiveFactor[1],
          emissiveFactor[2],
          1
        );
      }
      if ((_a = gltfMaterial.pbrMetallicRoughness) == null ? void 0 : _a.baseColorFactor) {
        const baseColorFactor = gltfMaterial.pbrMetallicRoughness.baseColorFactor;
        this.diffuse = new pcRef.Color(
          Math.pow(baseColorFactor[0], 1 / 2.2),
          Math.pow(baseColorFactor[1], 1 / 2.2),
          Math.pow(baseColorFactor[2], 1 / 2.2),
          baseColorFactor[3]
        );
      }
      const extension = (_b = gltfMaterial == null ? void 0 : gltfMaterial.extensions) == null ? void 0 : _b[EXTENSION_VRMC_MATERIALS_MTOON];
      const {
        shadeColorFactor,
        shadeMultiplyTexture: shadeMultiplyTextureInfo,
        shadingShiftFactor,
        shadingToonyFactor,
        parametricRimColorFactor,
        rimLightingMixFactor,
        parametricRimFresnelPowerFactor,
        parametricRimLiftFactor,
        outlineWidthFactor,
        outlineColorFactor,
        outlineLightingMixFactor,
        shadingShiftTexture: shadingShiftTextureInfo,
        giEqualizationFactor,
        rimMultiplyTexture: rimMultiplyTextureInfo,
        matcapTexture: matcapTextureInfo,
        matcapFactor,
        uvAnimationMaskTexture,
        outlineWidthMode,
        outlineWidthMultiplyTexture: outlineWidthMultiplyTextureInfo
      } = extension;
      if (giEqualizationFactor !== void 0) {
        this.giEqualizationFactor = giEqualizationFactor;
      }
      if (shadeColorFactor) {
        this.shadeColorFactor = new pcRef.Color(
          Math.pow(shadeColorFactor[0], 1 / 2.2),
          Math.pow(shadeColorFactor[1], 1 / 2.2),
          Math.pow(shadeColorFactor[2], 1 / 2.2),
          1
        );
      }
      if (shadeMultiplyTextureInfo !== void 0) {
        const texture = (_e = (_d = (_c = this._asset.resource) == null ? void 0 : _c.textures) == null ? void 0 : _d[shadeMultiplyTextureInfo.index]) == null ? void 0 : _e.resource;
        if (texture) {
          this.shadeMultiplyTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.shadeMultiplyTextureUvTransform,
            (_f = shadeMultiplyTextureInfo.extensions) == null ? void 0 : _f[textureTransformExtensionName]
          );
        }
      }
      if (rimMultiplyTextureInfo !== void 0) {
        const texture = (_i = (_h = (_g = this._asset.resource) == null ? void 0 : _g.textures) == null ? void 0 : _h[rimMultiplyTextureInfo.index]) == null ? void 0 : _i.resource;
        if (texture) {
          this.rimMultiplyTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.rimMultiplyTextureUvTransform,
            (_j = rimMultiplyTextureInfo.extensions) == null ? void 0 : _j[textureTransformExtensionName]
          );
        }
      }
      if (matcapTextureInfo !== void 0) {
        const texture = (_m = (_l = (_k = this._asset.resource) == null ? void 0 : _k.textures) == null ? void 0 : _l[matcapTextureInfo.index]) == null ? void 0 : _m.resource;
        if (texture) {
          this.matcapTexture = texture;
        }
      }
      if (shadingShiftTextureInfo !== void 0) {
        const texture = (_p = (_o = (_n = this._asset.resource) == null ? void 0 : _n.textures) == null ? void 0 : _o[shadingShiftTextureInfo.index]) == null ? void 0 : _p.resource;
        if (texture) {
          this.shadingShiftTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.shadingShiftTextureUvTransform,
            (_q = shadingShiftTextureInfo.extensions) == null ? void 0 : _q[textureTransformExtensionName]
          );
        }
        if (shadingShiftTextureInfo.scale !== void 0) {
          this.shadingShiftTextureScale = shadingShiftTextureInfo.scale;
        }
      }
      if (matcapFactor) {
        this.matcapFactor = new pcRef.Color(
          Math.pow(matcapFactor[0], 1 / 2.2),
          Math.pow(matcapFactor[1], 1 / 2.2),
          Math.pow(matcapFactor[2], 1 / 2.2),
          1
        );
      }
      this.shadingShiftFactor = shadingShiftFactor;
      this.shadingToonyFactor = shadingToonyFactor;
      if (parametricRimColorFactor) {
        this.parametricRimColorFactor = new pcRef.Color(
          Math.pow(parametricRimColorFactor[0], 1 / 2.2),
          Math.pow(parametricRimColorFactor[1], 1 / 2.2),
          Math.pow(parametricRimColorFactor[2], 1 / 2.2),
          1
        );
      }
      this.rimLightingMixFactor = rimLightingMixFactor;
      this.parametricRimFresnelPowerFactor = parametricRimFresnelPowerFactor;
      this.parametricRimLiftFactor = parametricRimLiftFactor;
      this.outlineWidthFactor = outlineWidthFactor;
      if (outlineColorFactor) {
        this.outlineColorFactor = new pcRef.Color(
          Math.pow(outlineColorFactor[0], 1 / 2.2),
          Math.pow(outlineColorFactor[1], 1 / 2.2),
          Math.pow(outlineColorFactor[2], 1 / 2.2),
          1
        );
      }
      if (outlineWidthMode) {
        this.outlineWidthMode = outlineWidthMode;
      }
      if (outlineWidthMultiplyTextureInfo !== void 0) {
        const texture = (_t = (_s = (_r = this._asset.resource) == null ? void 0 : _r.textures) == null ? void 0 : _s[outlineWidthMultiplyTextureInfo.index]) == null ? void 0 : _t.resource;
        if (texture) {
          this.outlineWidthMultiplyTexture = texture;
          updateTextureMatrix(
            pcRef,
            this.outlineWidthMultiplyTextureUvTransform,
            (_u = outlineWidthMultiplyTextureInfo.extensions) == null ? void 0 : _u[textureTransformExtensionName]
          );
        }
      }
      this.outlineLightingMixFactor = outlineLightingMixFactor;
      if (this.isOutline)
        this.cull = pcRef.CULLFACE_FRONT;
      this.setShaderChunks();
      this.setShaderUniforms();
    }
    setShaderChunks() {
      this.chunks.APIVersion = pcRef.CHUNKAPI_1_70;
      const pcShaderChunks = pcRef.shaderChunks;
      this.chunks.baseVS = pcShaderChunks.baseVS;
      this.chunks.endVS = pcShaderChunks.endVS;
      this.chunks.basePS = pcShaderChunks.basePS;
      this.chunks.endPS = pcShaderChunks.endPS;
      if (this.shadeMultiplyTexture) {
        this.chunks.basePS += "#define USE_SHADEMULTIPLYTEXTURE\n";
      }
      if (this.emissiveMap) {
        this.chunks.basePS += "#define USE_EMISSIVEMAP\n";
      }
      if (this.baseColorMap) {
        this.chunks.basePS += "#define USE_MAP\n";
      }
      if (this.normalMap) {
        this.chunks.basePS += "#define USE_NORMALMAP\n";
      }
      if (this.cull === pcRef.CULLFACE_NONE) {
        this.chunks.basePS += "#define DOUBLE_SIDED\n";
      }
      if (this.matcapTexture) {
        this.chunks.basePS += "#define USE_MATCAPTEXTURE\n";
      }
      const useUvInVert = this.outlineWidthMultiplyTexture !== null;
      const useUvInFrag = this.diffuseMap !== null || this.normalMap !== null || this.emissiveMap !== null || this.shadeMultiplyTexture !== null || this.shadingShiftTexture !== null || this.rimMultiplyTexture !== null || this.uvAnimationMaskTexture !== null;
      if (useUvInVert || useUvInFrag) {
        this.chunks.basePS += "#define MTOON_USE_UV\n";
      }
      if (useUvInVert && !useUvInFrag) {
        console.log("Adding MTOON_UVS_VERTEX_ONLY");
        this.chunks.basePS += "#define MTOON_UVS_VERTEX_ONLY\n";
      }
      const USE_RIMMULTIPLYTEXTURE = this.rimMultiplyTexture;
      if (USE_RIMMULTIPLYTEXTURE) {
        this.chunks.basePS += "#define USE_RIMMULTIPLYTEXTURE\n";
      }
      const USE_UVANIMATIONMASKTEXTURE = this.uvAnimationMaskTexture !== null;
      if (USE_UVANIMATIONMASKTEXTURE) {
        this.chunks.basePS += "#define USE_UVANIMATIONMASKTEXTURE\n";
      }
      const OPAQUE = this.blendType === pcRef.BLEND_NONE;
      if (OPAQUE) {
        this.chunks.basePS += "#define OPAQUE\n";
      }
      const USE_OUTLINEWIDTHMULTIPLYTEXTURE = this.outlineWidthMultiplyTexture !== null;
      if (USE_OUTLINEWIDTHMULTIPLYTEXTURE) {
        this.chunks.baseVS += "#define USE_OUTLINEWIDTHMULTIPLYTEXTURE\n";
      }
      const OUTLINE_WIDTH_WORLD = this.outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates;
      if (OUTLINE_WIDTH_WORLD) {
        this.chunks.baseVS += "#define OUTLINE_WIDTH_WORLD\n";
      }
      const OUTLINE_WIDTH_SCREEN = this.outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates;
      if (OUTLINE_WIDTH_SCREEN) {
        this.chunks.baseVS += "#define OUTLINE_WIDTH_SCREEN\n";
      }
      if (this.isOutline) {
        this.chunks.basePS += "#define OUTLINE\n";
        this.chunks.baseVS += "#define OUTLINE\n";
      }
      this.chunks.basePS += "#define NUM_DIR_LIGHTS 0\n";
      this.chunks.basePS += "#define NUM_SPOT_LIGHTS 0\n";
      this.chunks.basePS += "#define NUM_POINT_LIGHTS 0\n";
      this.chunks.baseVS += shaderChunksMtoon.baseVS;
      this.chunks.endVS += shaderChunksMtoon.endVS;
      this.chunks.basePS += shaderChunksMtoon.basePS;
      this.chunks.basePS += shaderChunksMtoon.light;
      this.chunks.endPS += shaderChunksMtoon.endPS;
    }
    setShaderUniforms() {
      this.setParameter("litFactor", [this.litFactor.r, this.litFactor.g, this.litFactor.b]);
      this.setParameter("opacity", this.opacity);
      this.setParameters("giEqualizationFactor", this.giEqualizationFactor);
      this.setParameter("shadeColorFactor", [
        this.shadeColorFactor.r,
        this.shadeColorFactor.g,
        this.shadeColorFactor.b
      ]);
      if (this.shadeMultiplyTexture) {
        this.setParameter("shadeMultiplyTexture", this.shadeMultiplyTexture);
      }
      if (this.matcapTexture) {
        this.setParameter("matcapTexture", this.matcapTexture);
      }
      this.setParameter("matcapTextureUvTransform", this.matcapTextureUvTransform.data);
      this.setParameter("matcapFactor", [
        this.matcapFactor.r,
        this.matcapFactor.g,
        this.matcapFactor.b
      ]);
      this.setParameter(
        "shadeMultiplyTextureUvTransform",
        this.shadeMultiplyTextureUvTransform.data
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      );
      if (this.shadingShiftTexture) {
        this.setParameter("shadingShiftTexture", this.shadingShiftTexture);
      }
      this.setParameter("shadingShiftTextureUvTransform", this.shadingShiftTextureUvTransform.data);
      if (this.baseColorMap) {
        this.setParameter("baseColorMap", this.baseColorMap);
        this.setParameter("mapUvTransform", this.mapUvTransform.data);
      }
      this.setParameter("shadingShiftFactor", this.shadingShiftFactor);
      this.setParameter("shadingToonyFactor", this.shadingToonyFactor);
      if (this.emissive) {
        this.setParameter("emissive", [this.emissive.r, this.emissive.g, this.emissive.b]);
      }
      if (this.emissiveIntensity) {
        this.setParameter("emissiveIntensity", this.emissiveIntensity);
      }
      this.setParameter("parametricRimColorFactor", [
        this.parametricRimColorFactor.r,
        this.parametricRimColorFactor.g,
        this.parametricRimColorFactor.b
      ]);
      this.setParameter("rimLightingMixFactor", this.rimLightingMixFactor);
      this.setParameter("parametricRimFresnelPowerFactor", this.parametricRimFresnelPowerFactor);
      this.setParameter("parametricRimLiftFactor", this.parametricRimLiftFactor);
      if (this.normalMap) {
        this.setParameter("normalMap", this.normalMap);
      }
      this.setParameter("normalMapUvTransform", this.normalMapUvTransform.data);
      this.setParameter("emissiveMapUvTransform", this.emissiveMapUvTransform.data);
      if (this.emissiveMap) {
        this.setParameter("emissiveMap", this.emissiveMap);
      }
      this.setParameter("shadingShiftTextureScale", this.shadingShiftTextureScale);
      if (this.matcapTexture) {
        this.setParameter("matcapTexture", this.matcapTexture);
      }
      if (this.rimMultiplyTexture) {
        this.setParameter("rimMultiplyTexture", this.rimMultiplyTexture);
        this.setParameter("rimMultiplyTextureUvTransform", this.rimMultiplyTextureUvTransform.data);
      }
      if (this.outlineWidthMultiplyTexture) {
        this.setParameter("outlineWidthMultiplyTexture", this.outlineWidthMultiplyTexture);
      }
      this.setParameter("outlineWidthFactor", this.outlineWidthFactor);
      this.setParameter("outlineLightingMixFactor", this.outlineLightingMixFactor);
      this.setParameter("outlineColorFactor", [
        this.outlineColorFactor.r,
        this.outlineColorFactor.g,
        this.outlineColorFactor.b
      ]);
    }
    updateLightUniforms(lightStateInfo) {
      const { directionalLights, spotLights, pointLights, scene } = lightStateInfo;
      this.updateIndirectLightUniforms(scene);
      this.replaceLightNumbers(directionalLights.length, spotLights.length, pointLights.length);
      directionalLights.forEach((info, i) => {
        const direction = info.direction;
        this._vec3A.copy(direction);
        this._vec3A.mulScalar(-1);
        this._vec3A.normalize();
        const color = info.color;
        this.setParameter(`directionalLights[${i}].color`, [color.r, color.g, color.b]);
        this.setParameter(`directionalLights[${i}].direction`, [
          this._vec3A.x,
          this._vec3A.y,
          this._vec3A.z
        ]);
      });
      spotLights.forEach((info, i) => {
        const position = info.position;
        const direction = info.direction;
        const color = info.color;
        const distance = info.distance;
        const decay = info.decay;
        const coneCos = info.coneCos;
        const penumbraCos = info.penumbraCos;
        this.setParameter(`spotLights[${i}].position`, [position.x, position.y, position.z]);
        this.setParameter(`spotLights[${i}].direction`, [direction.x, direction.y, direction.z]);
        this.setParameter(`spotLights[${i}].color`, [color.r, color.g, color.b]);
        this.setParameter(`spotLights[${i}].distance`, distance);
        this.setParameter(`spotLights[${i}].decay`, decay);
        this.setParameter(`spotLights[${i}].coneCos`, coneCos);
        this.setParameter(`spotLights[${i}].penumbraCos`, penumbraCos);
      });
      pointLights.forEach((info, i) => {
        const position = info.position;
        const color = info.color;
        const distance = info.distance;
        const decay = info.decay;
        this.setParameter(`pointLights[${i}].position`, [position.x, position.y, position.z]);
        this.setParameter(`pointLights[${i}].color`, [color.r, color.g, color.b]);
        this.setParameter(`pointLights[${i}].distance`, distance);
        this.setParameter(`pointLights[${i}].decay`, decay);
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.litFactor = this.diffuse, this.baseColorMap = this.diffuseMap || this.opacityMap;
    const {
      version: r,
      shadeColorFactor: o,
      shadeMultiplyTexture: a,
      shadingShiftFactor: l,
      shadingToonyFactor: h,
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
    )), this.shadeMultiplyTexture = a, this.shadingShiftFactor = l, this.shadingToonyFactor = h, c && (this.parametricRimColorFactor = new s.Color(
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
=======
    setLightColor(color) {
      this.setParameter("lightColor", [color.r, color.g, color.b]);
=======
=======
    updateIndirectLightUniforms(scene) {
      if (!scene)
        return;
      if (!this.envAtlas && scene.envAtlas) {
        this.envAtlas = scene.envAtlas;
      }
      if (this.envAtlas) {
        this.setParameter("ambientLightColor", [0, 0, 0]);
      } else {
        this.ambient.copy(scene.ambientLight);
        this.setParameter("ambientLightColor", [this.ambient.r, this.ambient.g, this.ambient.b]);
      }
    }
>>>>>>> 2cf8b80 (feat: add indirectDiffuse env map light and ambient color)
    replaceLightNumbers(dirNum, spotNum, pointNum) {
      let chunk = this.chunks.basePS;
      chunk = chunk.replace(/#define USE_DIR_LIGHTS\n/g, "").replace(/#define USE_SPOT_LIGHTS\n/g, "").replace(/#define USE_POINT_LIGHTS\n/g, "").replace(/#define USE_ENV_LIGHTS\n/g, "");
      if (dirNum > 0) {
        chunk = `#define USE_DIR_LIGHTS
${chunk}`;
        chunk = chunk.replace(/#define NUM_DIR_LIGHTS \d+/, `#define NUM_DIR_LIGHTS ${dirNum}`);
      }
      if (spotNum > 0) {
        chunk = `#define USE_SPOT_LIGHTS
${chunk}`;
        chunk = chunk.replace(/#define NUM_SPOT_LIGHTS \d+/, `#define NUM_SPOT_LIGHTS ${spotNum}`);
      }
      if (pointNum > 0) {
        chunk = `#define USE_POINT_LIGHTS
${chunk}`;
        chunk = chunk.replace(
          /#define NUM_POINT_LIGHTS \d+/,
          `#define NUM_POINT_LIGHTS ${pointNum}`
        );
      }
      if (this.envAtlas) {
        chunk = `#define USE_ENV_LIGHTS
${chunk}`;
      }
      this.chunks.basePS = chunk;
    }
<<<<<<< HEAD
    destroy() {
      super.destroy();
      this._renderStates.removeMaterial(this);
>>>>>>> 825be66 (feat: add render state to handle multiple lights & mtoon support point and spot)
    }
=======
>>>>>>> 30d0d14 (feat: create vrm-mtoon script & use setting from layer light store)
  };
};
const baseVS = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
uniform float outlineWidthFactor;

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif
`
<<<<<<< HEAD
), ti = (
=======
);
const endVS = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
    vUv0 = vertex_texCoord0;

    vec3 objectNormal = vertex_normal;

    // we need this to compute the outline properly
    objectNormal = normalize( objectNormal );
    vec3 transformedNormal = objectNormal;

    float outlineTex = 1.0;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
        vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv0, 1 ) ).xy;
        outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
    #endif
    
    #ifdef OUTLINE_WIDTH_WORLD
        float worldNormalLength = length( transformedNormal );
        vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
        gl_Position = matrix_viewProjection * getModelMatrix()  * vec4( outlineOffset + vertex_position, 1.0);
    #endif

    
    #ifdef OUTLINE_WIDTH_SCREEN
        // TODO: Wait until an avatar containing this information is found before proceeding with the implementation.
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
`
<<<<<<< HEAD
), ei = (
=======
);
const basePS = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
uniform sampler2D baseColorMap;
uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;
`
<<<<<<< HEAD
), ii = (
=======
);
const endPS = (
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  /* glsl */
  `
    vec4 color = texture2D(baseColorMap, vUv0);
    color.rgb = outlineColorFactor.rgb * mix( vec3( 1.0 ), color.rgb, outlineLightingMixFactor );
    gl_FragColor = color;
`
<<<<<<< HEAD
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
        outlineLightingMixFactor: l
        // outlineWidthMultiplyTexture,
      } = r;
      o && this.setOutlineColorFactor(
        new s.Color(
          Math.pow(o[0], 1 / 2.2),
          Math.pow(o[1], 1 / 2.2),
          Math.pow(o[2], 1 / 2.2)
        )
      ), a && this.setOutlineWidthFactor(a), l && this.setOutlineLightingMixFactor(l);
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
=======
);
const shaderChunksOutline = {
  baseVS,
  endVS,
  basePS,
  endPS
};
const createVRMCOutlineMaterial = (pcRef) => {
  return class VRMCOutlineMaterial extends pcRef.StandardMaterial {
    constructor(asset) {
      super();
      this.baseColorMap = null;
      this.outlineWidthMode = MToonMaterialOutlineWidthMode.None;
      this.outlineWidthMultiplyTexture = null;
      this._asset = asset;
    }
    parseGLTFAttrs(gltfMaterial) {
      var _a, _b, _c, _d;
      if (gltfMaterial.hasOwnProperty("alphaMode")) {
        switch (gltfMaterial.alphaMode) {
          case "MASK":
            this.blendType = pcRef.BLEND_NONE;
            if (gltfMaterial.hasOwnProperty("alphaCutoff")) {
              this.alphaTest = gltfMaterial.alphaCutoff;
            } else {
              this.alphaTest = 0.5;
            }
            break;
          case "BLEND":
            this.blendType = pcRef.BLEND_NORMAL;
            this.depthWrite = false;
            break;
          default:
          case "OPAQUE":
            this.blendType = pcRef.BLEND_NONE;
            break;
        }
      } else {
        this.blendType = pcRef.BLEND_NONE;
      }
      const extension = (_a = gltfMaterial == null ? void 0 : gltfMaterial.extensions) == null ? void 0 : _a[EXTENSION_VRMC_MATERIALS_MTOON];
      if (extension) {
        const {
          outlineColorFactor,
          outlineWidthFactor,
          outlineLightingMixFactor,
          outlineWidthMode,
          outlineWidthMultiplyTexture: outlineWidthMultiplyTextureInfo
        } = extension;
        if (outlineWidthMode) {
          this.outlineWidthMode = outlineWidthMode;
        }
        if (outlineWidthMultiplyTextureInfo !== void 0) {
          const texture = (_d = (_c = (_b = this._asset.resource) == null ? void 0 : _b.textures) == null ? void 0 : _c[outlineWidthMultiplyTextureInfo.index]) == null ? void 0 : _d.resource;
          if (texture) {
            this.outlineWidthMultiplyTexture = texture;
            this.setOutlineWidthMultiplyTexture(texture);
          }
        }
        if (outlineColorFactor) {
          this.setOutlineColorFactor(
            new pcRef.Color(
              Math.pow(outlineColorFactor[0], 1 / 2.2),
              Math.pow(outlineColorFactor[1], 1 / 2.2),
              Math.pow(outlineColorFactor[2], 1 / 2.2)
            )
          );
        }
        if (outlineWidthFactor) {
          this.setOutlineWidthFactor(outlineWidthFactor);
        }
        if (outlineLightingMixFactor) {
          this.setOutlineLightingMixFactor(outlineLightingMixFactor);
        }
      }
      this.cull = pcRef.CULLFACE_FRONT;
      this.setShaderChunks();
      this.baseColorMap = this.diffuseMap || this.opacityMap;
      if (this.baseColorMap) {
        this.setParameter("baseColorMap", this.baseColorMap);
      }
    }
    setShaderChunks() {
      this.chunks.APIVersion = pcRef.CHUNKAPI_1_70;
      let pcShaderChunks = pcRef.shaderChunks;
      this.chunks.baseVS = pcShaderChunks.baseVS;
      this.setShaderDefines();
      this.chunks.endVS = pcShaderChunks.endVS;
      this.chunks.basePS = pcShaderChunks.basePS;
      this.chunks.endPS = pcShaderChunks.endPS;
      this.chunks.baseVS += shaderChunksOutline.baseVS;
      this.chunks.endVS += shaderChunksOutline.endVS;
      this.chunks.basePS += shaderChunksOutline.basePS;
      this.chunks.endPS += shaderChunksOutline.endPS;
    }
    setShaderDefines() {
      let defines = ``;
      const USE_OUTLINEWIDTHMULTIPLYTEXTURE = this.outlineWidthMultiplyTexture !== null;
      if (USE_OUTLINEWIDTHMULTIPLYTEXTURE) {
        defines += "#define USE_OUTLINEWIDTHMULTIPLYTEXTURE\n";
      }
      const OUTLINE_WIDTH_WORLD = this.outlineWidthMode === MToonMaterialOutlineWidthMode.WorldCoordinates;
      if (OUTLINE_WIDTH_WORLD) {
        defines += "#define OUTLINE_WIDTH_WORLD\n";
      }
      const OUTLINE_WIDTH_SCREEN = this.outlineWidthMode === MToonMaterialOutlineWidthMode.ScreenCoordinates;
      if (OUTLINE_WIDTH_SCREEN) {
        defines += "#define OUTLINE_WIDTH_SCREEN\n";
      }
      this.chunks.baseVS += defines;
    }
    setOutlineWidthFactor(outlineWidthFactor) {
      this.setParameter("outlineWidthFactor", outlineWidthFactor);
    }
    setOutlineLightingMixFactor(outlineLightingMixFactor) {
      this.setParameter("outlineLightingMixFactor", outlineLightingMixFactor);
    }
    setOutlineColorFactor(outlineColorFactor) {
      this.setParameter("outlineColorFactor", [
        outlineColorFactor.r,
        outlineColorFactor.g,
        outlineColorFactor.b
      ]);
    }
    setOutlineWidthMultiplyTexture(texture) {
      this.setParameter("outlineWidthMultiplyTexture", texture);
      const mat3 = new pcRef.Mat3();
      this.setParameter("outlineWidthMultiplyTextureUvTransform", mat3.data);
    }
  };
};
class VRMMtoonLoader {
  constructor(pcRef, asset) {
    this._pcRef = pcRef;
    this.asset = asset;
  }
  instantiated(entity) {
    var _a, _b;
    if (!((_b = (_a = this.asset.resource) == null ? void 0 : _a.data) == null ? void 0 : _b.gltf)) {
      console.error("applyMaterialMtoon: gltf is undefined");
      return;
    }
    const gltf = this.asset.resource.data.gltf;
    const outlineMaterials = this._applyVRMCOutlineShader(entity, gltf);
    const mtoonMaterials = this._applyVRMCMtoonShader(entity, gltf);
    return [...outlineMaterials.values(), ...mtoonMaterials.values()];
  }
  _applyVRMCOutlineShader(entity, gltf) {
    const renders = entity.findComponents("render");
    const outlineShaderMaterials = /* @__PURE__ */ new Map();
    renders.forEach((renderComponent) => {
      const render = renderComponent;
      const meshInstances = render.meshInstances;
      const VRMCOutlineMaterial = createVRMCOutlineMaterial(this._pcRef);
      meshInstances.forEach((meshInstance) => {
        var _a, _b;
        const material = meshInstance.material;
        let shaderMaterial = outlineShaderMaterials.get(material);
        if (!shaderMaterial) {
          const index = ((_a = material.userId.split("_")) == null ? void 0 : _a[1]) ?? -1;
          const parsedIndex = parseInt(index);
          if (parsedIndex === -1) {
            return;
          }
          const gltfMaterial = (_b = gltf.materials) == null ? void 0 : _b[parsedIndex];
          if (!gltfMaterial) {
            console.error("applyVRMCOutlineShader: gltfMaterial is undefined");
            return;
          }
          shaderMaterial = new VRMCOutlineMaterial(this.asset);
          shaderMaterial.copy(material);
          shaderMaterial.name = material.name + "_outline";
          shaderMaterial.parseGLTFAttrs(gltfMaterial);
          shaderMaterial.update();
          outlineShaderMaterials.set(material, shaderMaterial);
        }
        const shaderMeshInstance = new this._pcRef.MeshInstance(
          meshInstance.mesh,
          shaderMaterial,
          render.entity
        );
        meshInstances.push(shaderMeshInstance);
      });
    });
    return outlineShaderMaterials;
  }
  _applyVRMCMtoonShader(entity, gltf) {
    const VRMCMtoonMaterial = createVRMCMtoonMaterial(this._pcRef);
    const shaderMaterials = /* @__PURE__ */ new Map();
    const renders = entity.findComponents("render");
    renders.forEach((renderComponent) => {
      const render = renderComponent;
      const meshInstances = render.meshInstances;
      meshInstances.forEach((meshInstance) => {
        var _a, _b;
        const material = meshInstance.material;
        let shaderMaterial = shaderMaterials.get(material);
        const index = ((_a = material.userId.split("_")) == null ? void 0 : _a[1]) ?? -1;
        const parsedIndex = parseInt(index);
        if (parsedIndex === -1) {
          return;
        }
        const gltfMaterial = (_b = gltf.materials) == null ? void 0 : _b[parsedIndex];
        if (!gltfMaterial) {
          console.error("applyVRMCMtoonShader: gltfMaterial is undefined");
          return;
        }
        if (!shaderMaterial) {
          shaderMaterial = new VRMCMtoonMaterial(this.asset);
          shaderMaterials.set(material, shaderMaterial);
        }
        shaderMaterial.copy(material);
        shaderMaterial.parse(gltfMaterial);
        meshInstance.material = shaderMaterial;
        shaderMaterial.update();
      });
    });
    return shaderMaterials;
  }
}
const convertVRMMtoonMaterials = (pcRef, asset) => {
  var _a, _b, _c;
  const v0CompatPlugin = new VRMMaterialsV0CompatPlugin(pcRef, asset);
  v0CompatPlugin.parseMaterials();
  (_c = (_b = (_a = asset.resource) == null ? void 0 : _a.data) == null ? void 0 : _b.materials) == null ? void 0 : _c.forEach((material, index) => {
    material.userId = `material_${index}`;
  });
};
const importScript = (pcRef) => {
  const renderStates = new RenderStates(pcRef);
  class VrmMtoon2 extends pcRef.ScriptType {
    initialize() {
      renderStates.setApp(this.app);
      this.renderStates = renderStates;
      const mtoonLoader = new VRMMtoonLoader(pcRef, this.asset);
      this.shaderMaterials = mtoonLoader.instantiated(this.entity) || [];
      this.on("destroy", () => {
        this.shaderMaterials.forEach((material) => {
          material.destroy();
        });
        this.shaderMaterials = [];
      });
    }
    update() {
      const lightStateInfo = this.renderStates.lightStateInfo;
      if (!lightStateInfo)
        return;
      this.shaderMaterials.forEach((material) => {
        if (material.updateLightUniforms) {
          material.updateLightUniforms(lightStateInfo);
          material.update();
        }
      });
    }
  }
  pcRef.registerScript(VrmMtoon2, "vrmMtoon");
  VrmMtoon2.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
};
const VrmMtoon = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
<<<<<<< HEAD
  EXTENSION_VRM,
  EXTENSION_VRMC_MATERIALS_MTOON,
  MToonMaterialCullMode,
  MToonMaterialOutlineWidthMode,
  VRMMtoonLoader,
  createVRMCMtoonMaterial,
  createVRMCOutlineMaterial,
  gammaEOTF,
  setUvTransform,
  updateTextureMatrix
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
=======
  convertVRMMtoonMaterials,
  importScript
>>>>>>> 30d0d14 (feat: create vrm-mtoon script & use setting from layer light store)
}, Symbol.toStringTag, { value: "Module" }));
class VRMRig {
  constructor(humanBones) {
    this.humanBones = humanBones;
  }
  /**
   * Return a bone bound to a specified {@link VRMHumanBoneName}, as a {@link VRMHumanBone}.
   *
   * @param name Name of the bone you want
   */
  getBone(name) {
    return this.humanBones[name] ?? void 0;
  }
  getBoneNode(name) {
    var _a;
    return ((_a = this.humanBones[name]) == null ? void 0 : _a.node) ?? null;
  }
}
<<<<<<< HEAD
class et extends Kt {
  static _setupTransforms(t, e) {
    const i = new t.Entity();
    i.name = "VRMHumanoidRig";
    const n = {}, r = {}, o = {};
    z.forEach((l) => {
      const h = e.getBoneNode(l);
      if (h) {
        n[l] = h.getPosition().clone(), h.getRotation().clone(), r[l] = h.getLocalRotation().clone();
        const c = new t.Quat();
        h.parent && c.copy(h.parent.getRotation()), o[l] = c;
      }
    });
    const a = {};
    return z.forEach((l) => {
      var c;
      const h = e.getBoneNode(l);
      if (h) {
        const m = n[l];
        let d = l, f;
        for (; f == null && (d = $[d], d != null); )
          f = n[d];
        const _ = new t.Entity();
        _.name = h.name, (d ? (c = a[d]) == null ? void 0 : c.node : i).addChild(_);
        const p = new t.Vec3().copy(m);
        f && p.sub(f), _.setLocalPosition(p), a[l] = { node: _ };
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
          const l = this._vec3A.copy(i.getPosition()), h = this._mat4A.copy(e.parent.getWorldTransform()), c = this.applyMatrix4(l, h.invert());
          e.setLocalPosition(c);
=======
class VRMHumanoidRig extends VRMRig {
  // private _vec3A: pc.Vec3;
  // private _mat4A: pc.Mat4;
  static _setupTransforms(pcRef, modelRig) {
    const root = new pcRef.Entity();
    root.name = "VRMHumanoidRig";
    const boneWorldPositions = {};
    const boneRotations = {};
    const parentWorldRotations = {};
    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = modelRig.getBoneNode(boneName);
      if (boneNode) {
        boneWorldPositions[boneName] = boneNode.getPosition().clone();
        boneNode.getRotation().clone();
        boneRotations[boneName] = boneNode.getLocalRotation().clone();
        const parentWorldRotation = new pcRef.Quat();
        if (boneNode.parent) {
          parentWorldRotation.copy(boneNode.parent.getRotation());
        }
        parentWorldRotations[boneName] = parentWorldRotation;
      }
    });
    const rigBones = {};
    VRMHumanBoneList.forEach((boneName) => {
      var _a;
      const boneNode = modelRig.getBoneNode(boneName);
      if (boneNode) {
        const boneWorldPosition = boneWorldPositions[boneName];
        let currentBoneName = boneName;
        let parentBoneWorldPosition;
        while (parentBoneWorldPosition == null) {
          currentBoneName = VRMHumanBoneParentMap[currentBoneName];
          if (currentBoneName == null) {
            break;
          }
          parentBoneWorldPosition = boneWorldPositions[currentBoneName];
        }
        const rigBoneNode = new pcRef.Entity();
        rigBoneNode.name = boneNode.name;
        const parentRigBoneNode = currentBoneName ? (_a = rigBones[currentBoneName]) == null ? void 0 : _a.node : root;
        parentRigBoneNode.addChild(rigBoneNode);
        const localPosition = new pcRef.Vec3().copy(boneWorldPosition);
        if (parentBoneWorldPosition) {
          localPosition.sub(parentBoneWorldPosition);
        }
        rigBoneNode.setLocalPosition(localPosition);
        rigBones[boneName] = { node: rigBoneNode };
      }
    });
    return {
      rigBones,
      root,
      parentWorldRotations,
      boneRotations
    };
  }
  constructor(pcRef, humanoid) {
    const { rigBones, root, parentWorldRotations, boneRotations } = VRMHumanoidRig._setupTransforms(
      pcRef,
      humanoid
    );
    super(rigBones);
    this.pcRef = pcRef;
    this.original = humanoid;
    this.root = root;
    this._parentWorldRotations = parentWorldRotations;
    this._boneRotations = boneRotations;
    this._quatA = new pcRef.Quat();
    this._quatB = new pcRef.Quat();
    const app = pcRef.Application.getApplication();
    if (app)
      app.root.addChild(root);
  }
  applyMatrix4(position, m) {
    const x = position.x, y = position.y, z = position.z;
    const e = m.data;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
    position.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    position.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    position.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
    return position;
  }
  update() {
    VRMHumanBoneList.forEach((boneName) => {
      var _a;
      const boneNode = (_a = this.original.humanBones[boneName]) == null ? void 0 : _a.entity;
      const rigBoneNode = this.getBoneNode(boneName);
      if (boneNode != null && rigBoneNode) {
        const parentWorldRotation = this._parentWorldRotations[boneName];
        const invParentWorldRotation = this._quatB.copy(parentWorldRotation).invert();
        const boneRotation = this._boneRotations[boneName];
        this._quatA.copy(rigBoneNode.getLocalRotation());
        this._quatA.mul(parentWorldRotation);
        this._quatA.copy(invParentWorldRotation.mul(this._quatA));
        this._quatA.mul(boneRotation);
        boneNode.setLocalRotation(this._quatA);
        if (boneName === "hips") {
<<<<<<< HEAD
          const boneWorldPosition = this._vec3A.copy(rigBoneNode.getPosition());
          const parentWorldMatrix = this._mat4A.copy(boneNode.parent.getWorldTransform());
          const localPosition = this.applyMatrix4(boneWorldPosition, parentWorldMatrix.invert());
          boneNode.setLocalPosition(localPosition);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
=======
          const boneLocalPosition = rigBoneNode.getLocalPosition();
          boneNode.setLocalPosition(boneLocalPosition);
>>>>>>> 9cd4cbf (fix: v1 normalized bone animation transform use local position)
        }
      }
    });
  }
}
<<<<<<< HEAD
class oi {
  constructor(t, e, i) {
    this.autoUpdateHumanBones = (i == null ? void 0 : i.autoUpdateHumanBones) ?? !0, this._rawHumanBones = new Kt(e), this._normalizedHumanBones = new et(t, this._rawHumanBones);
=======
class VRMHumanoid {
  constructor(pcRef, humanBones, options) {
    this.autoUpdateHumanBones = (options == null ? void 0 : options.autoUpdateHumanBones) ?? true;
    this._rawHumanBones = new VRMRig(humanBones);
    this._normalizedHumanBones = new VRMHumanoidRig(pcRef, this._rawHumanBones);
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
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
  getRawBone(name) {
    return this._rawHumanBones.getBone(name);
  }
  /**
   * Return a normalized {@link VRMHumanBone} bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBone(name) {
    return this._normalizedHumanBones.getBone(name);
  }
  /**
   * Return a raw bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getRawBoneNode(name) {
    return this._rawHumanBones.getBoneNode(name);
  }
  /**
   * Return a normalized bone as a `THREE.Object3D` bound to a specified {@link VRMHumanBoneName}.
   *
   * @param name Name of the bone you want
   */
  getNormalizedBoneNode(name) {
    return this._normalizedHumanBones.getBoneNode(name);
  }
  getBoneEntity(name) {
    var _a;
    return ((_a = this._rawHumanBones.humanBones[name]) == null ? void 0 : _a.entity) || null;
  }
  /**
   * Update the humanoid component.
   *
   * If {@link autoUpdateHumanBones} is `true`, it transfers the pose of normalized human bones to raw human bones.
   */
  update() {
    if (this.autoUpdateHumanBones) {
      this._normalizedHumanBones.update();
    }
  }
}
<<<<<<< HEAD
function ri(s, t, e) {
  const i = s.humanBones, n = {};
  return s.humanBones != null && Object.entries(i).map(([, r]) => {
    var h;
    let o = r.bone;
    const a = r.node;
    if (o == null || a == null)
      return;
    const l = t.resource.data.nodes[a];
    if (l == null) {
      console.warn(
        `A glTF node bound to the humanoid bone ${o} (index = ${a}) does not exist`
      );
      return;
    }
    n[o] = {
      node: l,
      entity: ((h = e.findByTag(`node_${a}`)) == null ? void 0 : h[0]) || null
    };
  }), n;
}
function ai(s, t, e) {
  var r;
  const i = {}, n = s.humanBones.leftThumbIntermediate != null || s.humanBones.rightThumbIntermediate != null;
  if (s.humanBones)
    for (const o in s.humanBones) {
      let a = o;
      const l = s.humanBones[o].node, h = t.resource.data.nodes[l];
      if (n) {
        const c = jt[a];
        c != null && (a = c);
      }
      if (h == null)
        return console.warn(
          `A glTF node bound to the humanoid bone ${a} (index = ${l}) does not exist`
        ), null;
      i[a] = {
        node: h,
        entity: ((r = e.findByTag(`node_${l}`)) == null ? void 0 : r[0]) || null
=======
function createVRMHumanBones(schemaHumanoid, glbAsset, entity) {
  const schemaHumanBones = schemaHumanoid.humanBones;
  const humanBones = {};
  if (schemaHumanoid.humanBones != null) {
    Object.entries(schemaHumanBones).map(([, schemaHumanBone]) => {
      var _a;
      let boneName = schemaHumanBone.bone;
      const index = schemaHumanBone.node;
      if (boneName == null || index == null) {
        return;
      }
      const node = glbAsset.resource.data.nodes[index];
      if (node == null) {
        console.warn(
          `A glTF node bound to the humanoid bone ${boneName} (index = ${index}) does not exist`
        );
        return;
      }
      humanBones[boneName] = {
        node,
        entity: ((_a = entity.findByTag(`node_${index}`)) == null ? void 0 : _a[0]) || null
      };
    });
  }
  return humanBones;
}
function createVRMCHumanBones(schemaHumanoid, glbAsset, entity) {
  var _a;
  const humanBones = {};
  const existsPreviousThumbName = schemaHumanoid.humanBones.leftThumbIntermediate != null || schemaHumanoid.humanBones.rightThumbIntermediate != null;
  if (schemaHumanoid.humanBones) {
    for (const property in schemaHumanoid.humanBones) {
      let boneName = property;
      const index = schemaHumanoid.humanBones[property].node;
      const node = glbAsset.resource.data.nodes[index];
      if (existsPreviousThumbName) {
        const thumbBoneName = thumbBoneNameMap[boneName];
        if (thumbBoneName != null) {
          boneName = thumbBoneName;
        }
      }
      if (node == null) {
        console.warn(
          `A glTF node bound to the humanoid bone ${boneName} (index = ${index}) does not exist`
        );
        return null;
      }
      humanBones[boneName] = {
        node,
        entity: ((_a = entity.findByTag(`node_${index}`)) == null ? void 0 : _a[0]) || null
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      };
    }
  }
  return humanBones;
}
<<<<<<< HEAD
function li(s, t, e, i) {
  var a, l, h, c, m, d, f, _, g, p;
  const n = (l = (a = t.resource.data.gltf) == null ? void 0 : a.extensions) == null ? void 0 : l.VRM, r = (c = (h = t.resource.data.gltf) == null ? void 0 : h.extensions) == null ? void 0 : c.VRMC_vrm;
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
  const a = function(l) {
    const h = new Blob([l.resource]), c = URL.createObjectURL(h);
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
  const a = i, l = {
    url: t,
    filename: a
  }, h = new s.Asset(a, "container", l, void 0, e);
  return h.once("load", function(c) {
    if (n) {
      const m = c.resource.animations;
      if (m.length == 1)
        m[0].name = i;
      else if (m.length > 1)
        for (let d = 0; d < m.length; ++d)
          m[d].name = i + " " + d.toString();
      n(null, c);
    }
  }), o.assets.add(h), o.assets.load(h), h;
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
var L, j, ie, X, ne;
class ci {
  constructor(t, e) {
    U(this, j);
    U(this, X);
    U(this, L, void 0);
    Ft(this, L, /* @__PURE__ */ new Map()), this.loading = !1, this._pcRef = t, this.app = e;
  }
  async parse(t, e = "Model", i = void 0, n = {}, r = !0) {
    const o = [];
    return new Promise(
      (a, l) => {
        const h = (c, m) => {
          c && (this.loading = !1, l(`GLTFLoader Error: ${c}`)), C(this, L).forEach((g) => {
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
        t || l("GLTFLoader Error: Please pass the asset or url to parse."), this.loading = !0, t instanceof this._pcRef.Asset ? t.type === "container" ? t.loaded ? h(null, t) : (t.once("load", () => {
          h(null, t);
        }), this.app.assets.get(t.id) || this.app.assets.add(t), this.app.assets.load(t)) : t.type === "binary" ? hi(
          this._pcRef,
          t,
          i,
          e,
          h.bind(this),
          this.app
        ) : l("GLTFLoader Error: Please pass available asset or url to parse.") : qt(
          this._pcRef,
          t,
          i,
          e,
          h.bind(this),
          this.app
        );
=======
function createFormattedVRMHumanoid(pcRef, vrmAsset, renderEntity, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const VRM = (_b = (_a = vrmAsset.resource.data.gltf) == null ? void 0 : _a.extensions) == null ? void 0 : _b.VRM;
  const VRMC_vrm = (_d = (_c = vrmAsset.resource.data.gltf) == null ? void 0 : _c.extensions) == null ? void 0 : _d.VRMC_vrm;
  if (!VRM && !VRMC_vrm) {
    console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar.");
    return null;
  }
  let humanBones = null;
  if (VRM) {
    const schemaHumanoid = (_g = (_f = (_e = vrmAsset.resource.data.gltf) == null ? void 0 : _e.extensions) == null ? void 0 : _f.VRM) == null ? void 0 : _g.humanoid;
    humanBones = createVRMHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  } else if (VRMC_vrm) {
    const specVersion = VRMC_vrm.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS$1.has(specVersion)) {
      console.warn(`Unknown VRMC_vrm specVersion "${specVersion}"`);
      return null;
    }
    const schemaHumanoid = (_j = (_i = (_h = vrmAsset.resource.data.gltf) == null ? void 0 : _h.extensions) == null ? void 0 : _i.VRMC_vrm) == null ? void 0 : _j.humanoid;
    humanBones = createVRMCHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  }
  if (humanBones) {
    const autoUpdateHumanBones = !!(options == null ? void 0 : options.autoUpdateHumanBones);
    const humanoid = new VRMHumanoid(pcRef, humanBones, { autoUpdateHumanBones });
    return humanoid;
  }
  return null;
}
const loadGlbContainerFromAsset = function(pcRef, glbBinAsset, options, assetName, callback, assignApp) {
  const app = assignApp;
  if (!app) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const onAssetReady = function(asset) {
    const blob = new Blob([asset.resource]);
    const data = URL.createObjectURL(blob);
    return loadGlbContainerFromUrl(
      pcRef,
      data,
      options,
      assetName,
      function(error, asset2) {
        callback(error, asset2);
        URL.revokeObjectURL(data);
      },
      app
    );
  };
  if (!glbBinAsset.loaded) {
    glbBinAsset.ready(onAssetReady);
    app.assets.load(glbBinAsset);
  } else {
    onAssetReady(glbBinAsset);
  }
};
const loadGlbContainerFromUrl = function(pcRef, url, options, assetName, callback, assignApp) {
  const app = assignApp;
  if (!app) {
    console.error("loadGlbContainerFromAsset: Can not find app.");
    return;
  }
  const filename = assetName;
  const file = {
    url,
    filename
  };
  const asset = new pcRef.Asset(filename, "container", file, void 0, options);
  asset.once("load", function(containerAsset) {
    if (callback) {
      const animations = containerAsset.resource.animations;
      if (animations.length == 1) {
        animations[0].name = assetName;
      } else if (animations.length > 1) {
        for (let i = 0; i < animations.length; ++i) {
          animations[i].name = assetName + " " + i.toString();
        }
      }
      callback(null, containerAsset);
    }
  });
  app.assets.add(asset);
  app.assets.load(asset);
  return asset;
};
const addIndexToNodeTags = (asset) => {
  if (!asset.resource) {
    console.error("addIndexToNodeTags Error: asset.resource is not available");
    return;
  }
  if (!(asset.resource.data && asset.resource.data.gltf)) {
    console.error("addIndexToNodeTags Error: asset.resource.data.gltf is not available");
    return;
  }
  const assetData = asset.resource.data;
  const nodes = assetData.nodes;
  nodes.forEach((node, index) => {
    node.tags.add(`node_${index}`);
  });
};
const getVersion = (asset) => {
  var _a, _b;
  const isV1Used = (_a = asset.resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = asset.resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
  return isV1Used ? "v1" : isV0Used ? "v0" : null;
};
class GLTFLoader {
  constructor(pcRef, app) {
    __privateAdd(this, _setExtensionsToNodes);
    __privateAdd(this, _addEssentialTags);
    __privateAdd(this, _pluginsCallbacks, void 0);
    __privateSet(this, _pluginsCallbacks, /* @__PURE__ */ new Map());
    this.loading = false;
    this._pcRef = pcRef;
    this.app = app;
  }
  async parse(source, name = "Model", options = void 0, setting = {}, needAddTags = true) {
    const plugins = [];
    return new Promise(
      (resolve, reject) => {
        const parsedCallBack = (err, asset) => {
          if (err) {
            this.loading = false;
            reject(`GLTFLoader Error: ${err}`);
          }
          __privateGet(this, _pluginsCallbacks).forEach((createPlugin) => {
            const plugin = createPlugin(asset);
            plugins.push(plugin);
          });
          if (needAddTags) {
            __privateMethod(this, _addEssentialTags, addEssentialTags_fn).call(this, asset);
          }
          const renderEntity = asset.resource.instantiateRenderEntity(setting);
          const rootEntity = new this._pcRef.Entity(name, this.app);
          rootEntity.addChild(renderEntity);
          plugins.forEach((plugin) => {
            if (plugin.instantiated)
              plugin.instantiated(rootEntity);
          });
          this.loading = false;
          const version = getVersion(asset);
          resolve({ entity: rootEntity, asset, version });
        };
        if (!source) {
          reject("GLTFLoader Error: Please pass the asset or url to parse.");
        }
        this.loading = true;
        if (source instanceof this._pcRef.Asset) {
          if (source.type === "container") {
            if (source.loaded) {
              parsedCallBack(null, source);
            } else {
              source.once("load", () => {
                parsedCallBack(null, source);
              });
              if (!this.app.assets.get(source.id))
                this.app.assets.add(source);
              this.app.assets.load(source);
            }
          } else if (source.type === "binary") {
            loadGlbContainerFromAsset(
              this._pcRef,
              source,
              options,
              name,
              parsedCallBack.bind(this),
              this.app
            );
          } else {
            reject("GLTFLoader Error: Please pass available asset or url to parse.");
          }
        } else {
          loadGlbContainerFromUrl(
            this._pcRef,
            source,
            options,
            name,
            parsedCallBack.bind(this),
            this.app
          );
        }
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
      }
    );
  }
  // Register Plugin to loader
<<<<<<< HEAD
  register(t, e) {
    C(this, L).has(t) || C(this, L).set(t, e);
  }
  // Deregister Plugin to loader
  deregister(t) {
    C(this, L).has(t) && C(this, L).delete(t);
=======
  register(name, callback) {
    if (!__privateGet(this, _pluginsCallbacks).has(name)) {
      __privateGet(this, _pluginsCallbacks).set(name, callback);
    }
  }
  // Deregister Plugin to loader
  deregister(name) {
    if (__privateGet(this, _pluginsCallbacks).has(name)) {
      __privateGet(this, _pluginsCallbacks).delete(name);
    }
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
  }
  static registerAnimation(entity, animations, { useResourceName, defaultPlayIndex } = {
    useResourceName: false,
    defaultPlayIndex: 0
  }) {
<<<<<<< HEAD
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
L = new WeakMap(), j = new WeakSet(), ie = function(t, e) {
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
=======
    if (animations.length === 0) {
      return;
    }
    entity.addComponent("anim", {
      activate: true
    });
    animations.forEach((ani, i) => {
      const resourceName = ani.resource.name.replace(".", "_");
      if (entity.anim) {
        entity.anim.assignAnimation(
          useResourceName ? resourceName : `ANIMATION_${i}`,
          ani.resource
        );
      }
    });
    if (defaultPlayIndex !== null) {
      const defaultAnimationName = useResourceName ? animations[defaultPlayIndex].resource.name : `ANIMATION_${defaultPlayIndex}`;
      if (entity.anim && entity.anim.baseLayer.states.find((state) => state === defaultAnimationName)) {
        entity.anim.baseLayer.transition(defaultAnimationName);
      }
    }
  }
}
_pluginsCallbacks = new WeakMap();
_setExtensionsToNodes = new WeakSet();
setExtensionsToNodes_fn = function(nodes, gltfNodes) {
  nodes.forEach((node, index) => {
    const gltfNodeExtensions = gltfNodes[index].extensions;
    if (gltfNodeExtensions) {
      node.extensions = gltfNodeExtensions;
    }
  });
};
_addEssentialTags = new WeakSet();
addEssentialTags_fn = function(asset) {
  const gltfNodes = asset.resource.data.gltf.nodes;
  const nodes = asset.resource.data.nodes;
  __privateMethod(this, _setExtensionsToNodes, setExtensionsToNodes_fn).call(this, nodes, gltfNodes);
  addIndexToNodeTags(asset);
};
window.VRMLoader = {
  VrmAnimation,
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  VrmMtoon,
  createFormattedVRMHumanoid,
  addIndexToNodeTags,
  getVersion
};
window.GLTFLoader = GLTFLoader;
export {
  GLTFLoader,
  RenderStates,
  VrmAnimation,
  VrmExpression,
  VrmMapList,
  VrmMtoon,
  VrmSpringBone,
  addIndexToNodeTags,
  createFormattedVRMHumanoid,
  getVersion
>>>>>>> dbe474c (feat: change apply mtoon function to lib to mtoonLoader & add some uniforms implement)
};
