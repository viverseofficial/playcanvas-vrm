/**
 * name: playcanvas-vrm
 * version: v1.5.4
 */
const VRMHumanBoneList = [
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
];
const VRMHumanBoneParentMap = {
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
};
const v0v1PresetNameMap = {
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
};
const VRMExpressionPresetName = {
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
};
const POSSIBLE_SPEC_VERSIONS$1 = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
const v0ExpressionMaterialColorMap = {
  _Color: "color",
  _EmissionColor: "emissionColor",
  _ShadeColor: "shadeColor",
  _RimColor: "rimColor",
  _OutlineColor: "outlineColor"
};
const expressionMateriaPropertyNameMapMap = {
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
  constructor(pcRef) {
    this.duration = 0;
    this.restHipsPosition = new pcRef.Vec3();
    this.humanoidTracks = {
      translation: /* @__PURE__ */ new Map(),
      rotation: /* @__PURE__ */ new Map()
    };
    this.expressionTracks = {
      preset: /* @__PURE__ */ new Map(),
      custom: /* @__PURE__ */ new Map()
    };
    this.lookAtTrack = null;
  }
}
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
function applyMatrix4$1(pcRef, v3, m) {
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
const vrmExpressionPresetNameSet = new Set(Object.values(VRMExpressionPresetName));
class VRMAnimationLoader {
  constructor(pcRef) {
    this.pcRef = pcRef;
  }
  loadVRMA(vrmaAsset) {
    var _a, _b, _c;
    const resource = vrmaAsset.resource;
    const defGltf = resource.data.gltf;
    const defExtensionsUsed = defGltf.extensionsUsed;
    if (defExtensionsUsed == null || defExtensionsUsed.indexOf("VRMC_vrm_animation") == -1) {
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const defExtension = (_a = defGltf.extensions) == null ? void 0 : _a["VRMC_vrm_animation"];
    if (defExtension == null) {
      console.warn("CreateVRMAnimation: Please check. It is not a vrma.");
      return;
    }
    const specVersion = defExtension.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
      console.warn(`CreateVRMAnimation: Unknown VRMC_vrm_animation spec version: ${specVersion}`);
      return;
    }
    if (specVersion === "1.0-draft") {
      console.warn(
        "CreateVRMAnimation: Using a draft spec version: 1.0-draft. Some behaviors may be different. Consider updating the animation file."
      );
    }
    const pcNodes = resource.data.nodes;
    const nodeMap = this._createNodeMap(defGltf, defExtension);
    const worldMatrixMap = this._createBoneWorldMatrixMap(pcNodes, defExtension);
    const hipsNode = (_c = (_b = defExtension.humanoid) == null ? void 0 : _b.humanBones["hips"]) == null ? void 0 : _c.node;
    const hips = hipsNode != null ? pcNodes[hipsNode] : null;
    const restHipsPosition = hips ? hips.getPosition() : new this.pcRef.Vec3();
    const animTracks = resource.data.animations;
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
      const curve = curves[index];
      const input = inputs[curve.input];
      const output = outputs[curve.output];
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
              _vec3 = applyMatrix4$1(this.pcRef, _vec3, hipsParentWorldMatrix);
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
          const worldMatrixQuat = new this.pcRef.Quat();
          worldMatrixQuat.setFromMat4(worldMatrix);
          worldMatrixQuat.invert();
          const parentWorldMatrixQuat = new this.pcRef.Quat();
          parentWorldMatrixQuat.setFromMat4(parentWorldMatrix);
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
      const expressionName = nodeMap.expressionsIndexToName.get(node);
      if (expressionName != null) {
        if (path === "translation") {
          const values = new Float32Array(output.data.length / 3);
          for (let i = 0; i < values.length; i++) {
            values[i] = output.data[3 * i];
          }
          const expressionConfig = {
            times: input.data,
            values,
            loop: true
          };
          if (vrmExpressionPresetNameSet.has(expressionName)) {
            result.expressionTracks.preset.set(
              expressionName,
              expressionConfig
            );
          } else {
            result.expressionTracks.custom.set(expressionName, expressionConfig);
          }
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
        return;
      }
      if (node === nodeMap.lookAtIndex) {
        if (path === "rotation") {
          const lookAtTrack = { curve, input, output };
          result.lookAtTrack = lookAtTrack;
        } else {
          throw new Error(`Invalid path "${path}"`);
        }
      }
    });
    return result;
  }
}
class VRMAnimationTrack {
  constructor(pcRef, stateName, name, vrmAnimation, humanoid, metaVersion = "v0") {
    this.pcRef = pcRef;
    this.vrmAnimation = vrmAnimation;
    this.stateName = stateName;
    this.name = name;
    this.humanoid = humanoid;
    this.metaVersion = metaVersion;
  }
  get result() {
    return this.createVRMAnimTrack();
  }
  createVRMAnimTrack() {
    const inputs = [];
    const outputs = [];
    const curves = [];
    const vrmaTracks = [];
    const humanoidTracks = this._createHumanoidTracks();
    vrmaTracks.push(...humanoidTracks.translation.values());
    vrmaTracks.push(...humanoidTracks.rotation.values());
    const lookAtTracks = this._createLookAtTracks() ?? this._resetLookAtTrack(vrmaTracks[0].input);
    vrmaTracks.push(...lookAtTracks.values());
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
        morphCurvePath.entityPath = arrangedEntityPath;
      });
    }
    const events = new this.pcRef.AnimEvents([{ name: `anim-track:${this.stateName}`, time: 0 }]);
    return new this.pcRef.AnimTrack(
      this.name,
      this.vrmAnimation.duration,
      inputs,
      outputs,
      curves,
      events
    );
  }
  _createHumanoidTracks() {
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
      }
    }
    return { translation, rotation };
  }
  _createLookAtTracks() {
    const origTrack = this.vrmAnimation.lookAtTrack;
    if (!origTrack)
      return null;
    const Tracks = /* @__PURE__ */ new Map();
    const eyes = ["leftEye", "rightEye"];
    const lookAtScale = (src, index) => {
      const indexOrder = index % 4;
      const w = origTrack.output.data[index + 3 - indexOrder];
      const _w = w === 0 ? 1 : w;
      switch (indexOrder) {
        case 0:
          return src / _w * 0.06;
        case 1:
          return src / _w * 0.08;
        default:
          return 1;
      }
    };
    const outputData = origTrack.output.data.map((v, i) => {
      const _v = (this.metaVersion === "v0" && i % 4 == 0 ? -v : v) * lookAtScale(v, i);
      return _v;
    });
    const _outputData = new Float32Array(outputData);
    const _output = new this.pcRef.AnimData(origTrack.output.components, _outputData);
    const vrmaCurve = origTrack.curve;
    vrmaCurve.paths.forEach((graph) => {
      const morphCurvePath = graph;
      eyes.forEach((eye) => {
        morphCurvePath.entityPath = [eye];
        const paths = [{ ...morphCurvePath }];
        const _curve = new this.pcRef.AnimCurve(
          paths,
          vrmaCurve.input,
          vrmaCurve.output,
          vrmaCurve.interpolation
        );
        const vrmaTrack = {
          curve: _curve,
          input: origTrack.input,
          output: _output
        };
        Tracks.set(eye, vrmaTrack);
      });
    });
    return Tracks;
  }
  _resetLookAtTrack(input) {
    const Tracks = /* @__PURE__ */ new Map();
    const eyes = ["leftEye", "rightEye"];
    const _outputData = new Float32Array(input.data.length * 4);
    for (let i = 0; i < _outputData.length; i++) {
      if (i % 4 === 3) {
        _outputData[i] = 1;
      }
    }
    const _output = new this.pcRef.AnimData(4, _outputData);
    eyes.forEach((eye) => {
      const path = {
        entityPath: [eye],
        component: "graph",
        propertyPath: ["localRotation"]
      };
      const _curve = new this.pcRef.AnimCurve([{ ...path }], 0, 0, 1);
      const vrmaTrack = {
        curve: _curve,
        input,
        output: _output
      };
      Tracks.set(eye, vrmaTrack);
    });
    return Tracks;
  }
}
class VRMViverseAnimationTrack {
  constructor(pcRef, animationAsset, humanoid, metaVersion = "v0", extraSettings, origAnimTrack) {
    this.pcRef = pcRef;
    this.animationAsset = animationAsset;
    this.humanoid = humanoid;
    this.metaVersion = metaVersion;
    this.extraSettings = extraSettings;
    this.origAnimTrack = origAnimTrack;
  }
  get result() {
    return this.createViverseAnimTrack();
  }
  createViverseAnimTrack() {
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
      const resource = this.animationAsset.asset.resource;
      const motionHipsNode = resource.data.nodes.find(
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
    const events = new this.pcRef.AnimEvents([
      { name: `anim-track:${this.animationAsset.stateName}`, time: 0 }
    ]);
    animTrack.events = events;
    return animTrack;
  }
}
class VRMAExpression {
  constructor(vrmAnimation) {
    this.preset = vrmAnimation.expressionTracks.preset;
    this.custom = vrmAnimation.expressionTracks.custom;
  }
  createCustomExpression() {
    console.log(this.custom);
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
  const resource = vrmAsset.resource;
  const isV1Used = (_a = resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
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
    let resource2;
    if (!assetResource) {
      resource2 = null;
      console.warn(
        `createVRMAnimResources: loadAnimation can't find available resource from ${animationAsset.stateName} asset.`
      );
    } else {
      const extensionsUsed = (_a2 = assetResource.data) == null ? void 0 : _a2.gltf.extensionsUsed;
      const isVRMA = checkAnimType(assetType, extensionsUsed);
      if (isVRMA) {
        resource2 = createVRMAResource(pcRef, animationAsset, humanoid, version);
      } else {
        resource2 = createViverseAnimResource(
          pcRef,
          animationAsset,
          humanoid,
          version,
          extraSettings
        );
      }
    }
    if (resource2) {
      resources.push(resource2);
    }
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
function bindVRMAExpression(entity, resource, animEntity) {
  const listenerEntity = animEntity ?? entity;
  if (listenerEntity.anim) {
    listenerEntity.anim.on(`anim-track:${resource.name}`, () => {
      var _a, _b, _c;
      let upperBodyActiveState = (_b = (_a = listenerEntity.anim) == null ? void 0 : _a.baseLayer) == null ? void 0 : _b.activeState;
      let transitionInterval = listenerEntity.anim.baseLayer._controller._totalTransitionTime ?? 0;
      (_c = listenerEntity.anim) == null ? void 0 : _c.layers.forEach((layer) => {
        if (layer.name === "upperBodyLayer") {
          upperBodyActiveState = layer._controller._activeStateName;
          transitionInterval = layer._controller._totalTransitionTime;
        }
      });
      if (resource.expression) {
        entity.fire(`vrma-expression:start`, resource.expression);
      } else if (upperBodyActiveState === resource.name && upperBodyActiveState !== listenerEntity.anim.lastFrameUpperBodyActiveState) {
        entity.fire(`vrm-expression:reset`, transitionInterval);
      }
      listenerEntity.anim.lastFrameUpperBodyActiveState = upperBodyActiveState;
    });
  }
}
function createVRMAResource(pcRef, animationAsset, humanoid, version) {
  var _a, _b, _c, _d;
  const vrmaLoader = new VRMAnimationLoader(pcRef);
  const vrmAnimations = vrmaLoader.loadVRMA(animationAsset.asset);
  const resource = animationAsset.asset.resource;
  let name = (_d = (_c = (_b = (_a = resource.data.gltf.animations) == null ? void 0 : _a[0]) == null ? void 0 : _b.resources) == null ? void 0 : _c[0]) == null ? void 0 : _d.name;
  if (!name)
    name = "";
  if (vrmAnimations) {
    const animTrack = new VRMAnimationTrack(
      pcRef,
      animationAsset.stateName,
      name,
      vrmAnimations[0],
      humanoid,
      version
    ).result;
    const expression = new VRMAExpression(vrmAnimations[0]);
    return {
      name: animationAsset.stateName,
      resource: animTrack,
      expression,
      ...animationAsset.setting && { setting: animationAsset.setting }
    };
  }
  return null;
}
function createViverseAnimResource(pcRef, animationAsset, humanoid, version, extraSettings) {
  var _a, _b;
  const resource = animationAsset.asset.resource;
  const origAnimTrack = animationAsset.asset.type === "container" ? (_b = (_a = resource.animations) == null ? void 0 : _a[0]) == null ? void 0 : _b.resource : animationAsset.asset.resource;
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
const VrmAnimation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation,
  bindVRMAExpression,
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
function applyMatrix4(vector, matrixWorld) {
  const x = vector.x, y = vector.y, z = vector.z;
  const e = matrixWorld.data;
  const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);
  vector.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
  vector.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
  vector.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;
  return vector;
}
function localToWorld(vector, matrixWorld) {
  return applyMatrix4(vector, matrixWorld);
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
      mat4InvertCompat(this._inverseCache);
      this._shouldUpdateInverse = false;
    }
    return this._inverseCache;
  }
  revert() {
    this.matrix.set(Array.from(this._originalElements));
  }
}
function mat4InvertCompat(target) {
  target.invert();
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
function transformDirection(vec3, m) {
  const x = vec3.x, y = vec3.y, z = vec3.z;
  const e = m.data;
  vec3.x = e[0] * x + e[4] * y + e[8] * z;
  vec3.y = e[1] * x + e[5] * y + e[9] * z;
  vec3.z = e[2] * x + e[6] * y + e[10] * z;
  return vec3.normalize();
}
class VRMExpressionManager {
  constructor() {
    this.managerName = "expression";
    this.blinkExpressionNames = /* @__PURE__ */ new Set(["blink", "blinkLeft", "blinkRight"]);
    this.lookAtExpressionNames = /* @__PURE__ */ new Set(["lookLeft", "lookRight", "lookUp", "lookDown"]);
    this.mouthExpressionNames = /* @__PURE__ */ new Set(["aa", "ee", "ih", "oh", "ou"]);
    this.emotionExpressionNames = /* @__PURE__ */ new Set([
      "neutral",
      "happy",
      "angry",
      "sad",
      "relaxed",
      "surprised"
    ]);
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
    const aExpression = this.getExpression("aa");
    const eExpression = this.getExpression("ee");
    const iExpression = this.getExpression("ih");
    const oExpression = this.getExpression("oh");
    const uExpression = this.getExpression("ou");
    return [aExpression, eExpression, iExpression, oExpression, uExpression].filter(
      (expression) => expression
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
  stopEmotions(names) {
    names.forEach((name) => {
      const expression = this.getExpression(name);
      if (expression)
        expression.stop();
    });
  }
  getNextTalking() {
    if (this.talkExpressions.length === 0)
      return null;
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
  }
  stopTalking() {
    this.talkExpressions.forEach((expression) => {
      if (expression)
        expression.stop();
    });
  }
  clearAllAppliedWeight(isAllToZero) {
    for (const expression of this._expressions) {
      expression.clearAppliedWeight(isAllToZero);
    }
  }
  update(dt) {
    for (const expression of this._expressions) {
      expression.updateBlendShape(dt);
    }
    const weightMultipliers = this._calculateWeightMultipliers();
    this.clearAllAppliedWeight();
    this.isBackToBlink = true;
    for (const expression of this._expressions) {
      let multiplier = 1;
      const name = expression.expressionName;
      if (this.blinkExpressionNames.has(name)) {
        multiplier *= weightMultipliers.blink;
      }
      if (this.lookAtExpressionNames.has(name)) {
        multiplier *= weightMultipliers.lookAt;
      }
      if (this.mouthExpressionNames.has(name)) {
        multiplier *= weightMultipliers.mouth;
      }
      expression.applyWeight({ multiplier });
      if (expression.weight !== 0) {
        this.isBackToBlink = false;
      }
    }
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
  _findTimeIndex(time, times) {
    if (time < times[1])
      return 0;
    for (let i = 1; i < times.length - 1; i++) {
      if (times[i - 1] < time && times[i + 1] > time) {
        return i;
      }
    }
    return -1;
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
    this.time += dt;
    const timeIndex = this._findTimeIndex(this.time, times);
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
class VRMExpressionLoaderPlugin {
  constructor(asset, meshInstances) {
    this.asset = asset;
    this.meshInstances = meshInstances;
  }
  import() {
    const resource = this.asset.resource;
    const gltf = resource.data.gltf;
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
      return null;
    }
    const schemaExpressions = extension.expressions;
    if (!schemaExpressions) {
      return null;
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
      return null;
    }
    const schemaBlendShape = vrmExt.blendShapeMaster;
    if (!schemaBlendShape) {
      return null;
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
        console.warn(
          "VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression"
        );
        return;
      }
      if (blendShapeNameSet.has(name)) {
        console.warn(
          `VRMExpressionLoaderPlugin: An expression preset ${v0PresetName} has duplicated entries. Ignoring the expression`
        );
        return;
      }
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
        }
      }
    }
  }
  return meshInstances;
};
const importScript$1 = (pcRef) => {
  class VrmExpression2 extends pcRef.ScriptType {
    constructor() {
      super(...arguments);
      this.previousTalkName = "";
      this.previousEmotions = [];
      this.vrmaEmotionWasPlaying = false;
    }
    initialize() {
      const meshInstances = collectMeshInstances(this.entity);
      const loaderPlugin = new VRMExpressionLoaderPlugin(this.asset, meshInstances);
      this.expressionManager = loaderPlugin.import();
      this.blinkTimer = new Timer("blink");
      this.talkTimer = new Timer("talk");
      this.resetEmotionTimer = new Timer("resetEmotion");
      this.startBlink();
      this.entity.on("vrm-expression:start-emotion", this.startEmotion, this);
      this.entity.on("audio:is-talking-change", this.onIsTalkingChange, this);
      this.entity.on(`vrma-expression:start`, this.startVRMAExpression, this);
      this.on("destroy", () => {
        this.entity.off("vrm-expression:start-emotion", this.startEmotion, this);
        this.entity.off("audio:is-talking-change", this.onIsTalkingChange, this);
        this.entity.off(`vrma-expression:start`, this.startVRMAExpression, this);
        this.entity.off(`vrm-expression:reset`, this.resetExpression, this);
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
    stopBlink(restartSeconds, loop) {
      if (!this.expressionManager)
        return;
      this.stopExpressionLoop("blink");
      this.expressionManager.stopBlink();
      if (!loop) {
        if (restartSeconds) {
          this.blinkTimer.add(restartSeconds, this.startBlink, this);
        }
      }
    }
    startEmotion(name, config, skipStopBlink = false) {
      if (!this.expressionManager)
        return;
      const time = config ? config.times[config.times.length - 1] : 3;
      const loop = config ? !!config.loop : false;
      if (!skipStopBlink) {
        this.stopBlink(time, loop);
      }
      this.expressionManager.startEmotion(name, config);
    }
    startTalking(speed = 0.25) {
      if (!this.expressionManager)
        return;
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
    update(dt) {
      if (!this.expressionManager)
        return;
      this.expressionManager.update(dt);
      this.blinkTimer.update(dt);
      this.talkTimer.update(dt);
      this.resetEmotionTimer.update(dt);
    }
    startVRMAExpression(vrmaExpression) {
      if (this.expressionManager) {
        this.expressionManager.stopEmotions(this.previousEmotions);
      }
      const blinkExpressions = [...vrmaExpression.preset].filter((preset) => {
        const name = preset[0];
        return name === "blink" || name === "blinkLeft" || name === "blinkRight";
      });
      const blinkExpressionIncluded = blinkExpressions.length > 0;
      if (blinkExpressionIncluded) {
        blinkExpressions.sort((presetA, presetB) => {
          const timeA = presetA[1].times.length;
          const timeB = presetB[1].times.length;
          return timeB - timeA;
        });
        const [, config] = blinkExpressions[0];
        const time = config ? config.times[config.times.length - 1] : 3;
        const loop = config ? !!config.loop : false;
        this.stopBlink(time, loop);
      }
      for (const [name, config] of vrmaExpression.preset.entries()) {
        this.startEmotion(name, config, !!blinkExpressionIncluded);
      }
      if (this.previousEmotions.length === 0) {
        this.previousEmotions = Array.from(vrmaExpression.preset.keys());
      }
      this.vrmaEmotionWasPlaying = true;
      if (!this.entity.hasEvent(`vrm-expression:reset`)) {
        this.entity.on(`vrm-expression:reset`, this.resetExpression, this);
      }
    }
    resetExpression(transitionInterval) {
      if (this.vrmaEmotionWasPlaying) {
        const reset = () => {
          if (this.expressionManager) {
            this.expressionManager.stopEmotions(this.previousEmotions);
          }
          this.startBlink();
          this.previousEmotions = [];
          this.vrmaEmotionWasPlaying = false;
        };
        if (transitionInterval) {
          this.resetEmotionTimer.add(transitionInterval, reset, this);
        } else {
          reset();
        }
      }
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
  importScript: importScript$1
}, Symbol.toStringTag, { value: "Module" }));
function lowestCommonAncestor(objects) {
  const sharedAncestors = /* @__PURE__ */ new Map();
  for (const object of objects) {
    let current = object;
    do {
      const newValue = (sharedAncestors.get(current) ?? 0) + 1;
      if (newValue === objects.size) {
        return current;
      }
      sharedAncestors.set(current, newValue);
      current = current.parent;
    } while (current !== null);
  }
  return null;
}
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
function traverseChildrenUntilConditionMet(object, callback) {
  object.children.forEach((child) => {
    const result = callback(child);
    if (!result) {
      traverseChildrenUntilConditionMet(child, callback);
    }
  });
}
class VRMSpringBoneManager {
  constructor() {
    this.managerName = "springBone";
    this._joints = /* @__PURE__ */ new Set();
    this._hasWarnedCircularDependency = false;
    this._sortedJoints = [];
    this._limitedStrength = 0.3;
    this._normalStrength = 1;
    this._ancestors = [];
    this._objectSpringBonesMap = /* @__PURE__ */ new Map();
    this._isSortedJointsDirty = false;
    this._relevantChildrenUpdated = this._relevantChildrenUpdated.bind(this);
  }
  get joints() {
    return this._joints;
  }
  get limitedStrength() {
    return this._limitedStrength;
  }
  get normalStrength() {
    return this._normalStrength;
  }
  get colliderGroups() {
    const set = /* @__PURE__ */ new Set();
    this._joints.forEach((springBone) => {
      springBone.colliderGroups.forEach((colliderGroup) => {
        set.add(colliderGroup);
      });
    });
    return Array.from(set);
  }
  _relevantChildrenUpdated(object) {
    var _a;
    if ((((_a = this._objectSpringBonesMap.get(object)) == null ? void 0 : _a.size) ?? 0) > 0) {
      return true;
    }
    const colliderObject = object;
    if (colliderObject.updateWorldMatrix) {
      colliderObject.updateWorldMatrix();
    }
    return false;
  }
  addJoint(joint) {
    this._joints.add(joint);
    let objectSet = this._objectSpringBonesMap.get(joint.bone);
    if (objectSet == null) {
      objectSet = /* @__PURE__ */ new Set();
      this._objectSpringBonesMap.set(joint.bone, objectSet);
    }
    objectSet.add(joint);
    this._isSortedJointsDirty = true;
  }
  setInitState() {
    this._sortJoints();
    for (let i = 0; i < this._sortedJoints.length; i++) {
      const springBone = this._sortedJoints[i];
      springBone.setInitState();
    }
  }
  reset() {
    this._sortJoints();
    for (let i = 0; i < this._sortedJoints.length; i++) {
      const springBone = this._sortedJoints[i];
      springBone.reset();
    }
  }
  /**
   * Sorts the joints ensuring they are updated in the correct order taking dependencies into account.
   *
   * This method updates {@link _sortedJoints} and {@link _ancestors}.
   * Make sure to call this before using them.
   */
  _sortJoints() {
    if (!this._isSortedJointsDirty) {
      return;
    }
    const springBoneOrder = [];
    const springBonesTried = /* @__PURE__ */ new Set();
    const springBonesDone = /* @__PURE__ */ new Set();
    const ancestors = /* @__PURE__ */ new Set();
    for (const springBone of this._joints) {
      this._insertJointSort(
        springBone,
        springBonesTried,
        springBonesDone,
        springBoneOrder,
        ancestors
      );
    }
    this._sortedJoints = springBoneOrder;
    const lca = lowestCommonAncestor(ancestors);
    this._ancestors = [];
    if (lca) {
      this._ancestors.push(lca);
      traverseChildrenUntilConditionMet(lca, (object) => {
        var _a;
        if ((((_a = this._objectSpringBonesMap.get(object)) == null ? void 0 : _a.size) ?? 0) > 0) {
          return true;
        }
        this._ancestors.push(object);
        return false;
      });
    }
    this._isSortedJointsDirty = false;
  }
  _insertJointSort(springBone, springBonesTried, springBonesDone, springBoneOrder, ancestors) {
    if (springBonesDone.has(springBone)) {
      return;
    }
    if (springBonesTried.has(springBone)) {
      if (!this._hasWarnedCircularDependency) {
        console.warn("VRMSpringBoneManager: Circular dependency detected");
        this._hasWarnedCircularDependency = true;
      }
      return;
    }
    springBonesTried.add(springBone);
    const depObjects = springBone.dependencies;
    for (const depObject of depObjects) {
      let encounteredSpringBone = false;
      let ancestor = null;
      traverseAncestorsFromRoot(depObject, (depObjectAncestor) => {
        const objectSet = this._objectSpringBonesMap.get(depObjectAncestor);
        if (objectSet) {
          for (const depSpringBone of objectSet) {
            encounteredSpringBone = true;
            this._insertJointSort(
              depSpringBone,
              springBonesTried,
              springBonesDone,
              springBoneOrder,
              ancestors
            );
          }
        } else if (!encounteredSpringBone) {
          ancestor = depObjectAncestor;
        }
      });
      if (ancestor) {
        ancestors.add(ancestor);
      }
    }
    springBoneOrder.push(springBone);
    springBonesDone.add(springBone);
  }
  update(delta, isLimited = false) {
    this._sortJoints();
    const currentStrength = isLimited ? this._limitedStrength : this._normalStrength;
    for (let i = 0; i < this._sortedJoints.length; i++) {
      const springBone = this._sortedJoints[i];
      springBone.update(delta, currentStrength);
      traverseChildrenUntilConditionMet(springBone.bone, this._relevantChildrenUpdated);
    }
  }
}
class VRMSpringBoneColliderShapeSphere {
  constructor(pcRef, params) {
    this.offset = (params == null ? void 0 : params.offset) ?? new pcRef.Vec3();
    this.radius = (params == null ? void 0 : params.radius) ?? 0;
    this.inside = (params == null ? void 0 : params.inside) ?? false;
  }
  get type() {
    return "sphere";
  }
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target, reference) {
    target.sub2(objectPosition, colliderMatrix.getTranslation(reference));
    const length = target.length();
    const distance = this.inside ? this.radius - objectRadius - length : length - objectRadius - this.radius;
    if (distance < 0) {
      target.mulScalar(1 / length);
      if (this.inside) {
        target.mulScalar(-1);
      }
    }
    return distance;
  }
}
class VRMSpringBoneColliderShapeCapsule {
  constructor(pcRef, params = {}) {
    this.offset = (params == null ? void 0 : params.offset) ?? new pcRef.Vec3();
    this.tail = (params == null ? void 0 : params.tail) ?? new pcRef.Vec3();
    this.radius = (params == null ? void 0 : params.radius) ?? 0;
    this._v3A = new pcRef.Vec3();
    this._v3B = new pcRef.Vec3();
    this.inside = (params == null ? void 0 : params.inside) ?? false;
  }
  get type() {
    return "capsule";
  }
  calculateCollision(colliderMatrix, objectPosition, objectRadius, target, reference) {
    this._v3A.copy(colliderMatrix.getTranslation(reference));
    colliderMatrix.transformPoint(reference.sub2(this.tail, this.offset), this._v3B);
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
    const length = target.length();
    const distance = this.inside ? this.radius - objectRadius - length : length - objectRadius - this.radius;
    if (distance < 0) {
      target.mulScalar(1 / length);
      if (this.inside) {
        target.mulScalar(-1);
      }
    }
    return distance;
  }
}
class VRMSpringBoneJoint {
  constructor(pcRef, bone, child, settings = {}, colliderGroups = []) {
    var _a;
    this.id = crypto.randomUUID();
    this._center = null;
    this._worldSpaceBoneLength = 0;
    this._pcRef = pcRef;
    this._v3A = new this._pcRef.Vec3();
    this._v3B = new this._pcRef.Vec3();
    this._nextTail = new this._pcRef.Vec3();
    this._quatA = new this._pcRef.Quat();
    this._quatB = new this._pcRef.Quat();
    this._quatC = new this._pcRef.Quat();
    this._quatD = new this._pcRef.Quat();
    this._matA = new this._pcRef.Mat4();
    this._matB = new this._pcRef.Mat4();
    this._identityMat4 = new this._pcRef.Mat4();
    this._worldSpacePosition = new this._pcRef.Vec3();
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
  }
  get center() {
    return this._center;
  }
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
  }
  get _parentMatrixWorld() {
    return this.bone.parent ? this.bone.parent.getWorldTransform() : this._identityMat4;
  }
  /**
   * Set of dependencies that need to be updated before this joint.
   */
  get dependencies() {
    const set = /* @__PURE__ */ new Set();
    const parent = this.bone.parent;
    if (parent) {
      set.add(parent);
    }
    for (let cg = 0; cg < this.colliderGroups.length; cg++) {
      for (let c = 0; c < this.colliderGroups[cg].colliders.length; c++) {
        set.add(this.colliderGroups[cg].colliders[c]);
      }
    }
    return set;
  }
  _calcWorldSpaceBoneLength() {
    const matrixWorld = this.bone.getWorldTransform();
    matrixWorld.getTranslation(this._v3A);
    if (this.child) {
      const childMatrixWorld = this.child.getWorldTransform();
      childMatrixWorld.getTranslation(this._v3B);
    } else {
      this._v3B.copy(this._initialLocalChildPosition);
      applyMatrix4(this._v3B, matrixWorld);
    }
    this._worldSpaceBoneLength = this._v3A.sub(this._v3B).length();
  }
  setInitState() {
    this._initialLocalMatrix.copy(this.bone.getLocalTransform());
    this._initialLocalRotation.copy(this.bone.getLocalRotation());
    if (this.child) {
      this._initialLocalChildPosition.copy(this.child.getLocalPosition());
    } else {
      this._initialLocalChildPosition.copy(this.bone.getLocalPosition()).normalize().mulScalar(0.07);
    }
    const matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    applyMatrix4(this._currentTail, matrixWorldToCenter);
    this._prevTail.copy(this._currentTail);
    this._boneAxis.copy(this._initialLocalChildPosition).normalize();
  }
  reset() {
    this.bone.setLocalRotation(this._initialLocalRotation);
    const transform = new this._pcRef.Mat4();
    transform.mul2(this._parentMatrixWorld, this.bone.getLocalTransform());
    const position = transform.getTranslation();
    this.bone.setPosition(position.x, position.y, position.z);
    const matrixWorldToCenter = this._getMatrixWorldToCenter(this._matA);
    const worldTransform = this.bone.getWorldTransform();
    localToWorld(this._currentTail.copy(this._initialLocalChildPosition), worldTransform);
    applyMatrix4(this._currentTail, matrixWorldToCenter);
    this._prevTail.copy(this._currentTail);
  }
  update(dt, strength = 1) {
    if (dt <= 0)
      return;
    this._calcWorldSpaceBoneLength();
    const worldSpaceBoneAxis = this._v3A.copy(this._boneAxis);
    transformDirection(worldSpaceBoneAxis, this._initialLocalMatrix);
    transformDirection(worldSpaceBoneAxis, this._parentMatrixWorld);
    this._nextTail.copy(this._currentTail).add(
      this._v3B.sub2(this._currentTail, this._prevTail).mulScalar(1 - this.settings.dragForce)
    );
    applyMatrix4(this._nextTail, this._getMatrixCenterToWorld(this._matA));
    this._nextTail.add(this._v3B.copy(worldSpaceBoneAxis).mulScalar(this.settings.stiffness * dt));
    this._nextTail.add(
      this._v3B.copy(this.settings.gravityDir).mulScalar(this.settings.gravityPower * dt)
    );
    const matrixWorld = this.bone.getWorldTransform();
    matrixWorld.getTranslation(this._worldSpacePosition);
    this._nextTail.sub(this._worldSpacePosition).normalize().mulScalar(this._worldSpaceBoneLength).add(this._worldSpacePosition);
    this._collision(this._nextTail);
    this._prevTail.copy(this._currentTail);
    this._currentTail.copy(this._nextTail);
    applyMatrix4(this._currentTail, this._getMatrixWorldToCenter(this._matB));
    const worldSpaceInitialMatrixInv = this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix).invert();
    const to = this._v3A.copy(this._nextTail);
    applyMatrix4(to, worldSpaceInitialMatrixInv);
    to.normalize();
    const applyRotation = setFromUnitVectors(this._quatA, this._boneAxis, to);
    if (strength !== 1) {
      const identityQuat = this._quatC.set(0, 0, 0, 1);
      const tempQuat = this._quatD.copy(applyRotation);
      applyRotation.slerp(identityQuat, tempQuat, strength);
    }
    const rotation = this._quatB.copy(this._initialLocalRotation).mul(applyRotation);
    this.bone.setLocalRotation(rotation);
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
    if (!this.colliderGroups)
      return;
    for (let i = 0; i < this.colliderGroups.length; i++) {
      const colliderGroup = this.colliderGroups[i];
      const colliders = colliderGroup.colliders;
      for (let j = 0; j < colliders.length; j++) {
        const collider = colliders[j];
        const dist = collider.shape.calculateCollision(
          collider.colliderMatrix,
          tail,
          this.settings.hitRadius,
          this._v3A,
          this._v3B
        );
        if (dist < 0) {
          tail.add(this._v3A.mulScalar(-dist));
          tail.sub(this._worldSpacePosition);
          const length = tail.length();
          tail.mulScalar(this._worldSpaceBoneLength / length).add(this._worldSpacePosition);
        }
      }
    }
  }
}
function createVRMSpringBoneCollider(pcRef, shape) {
  const collider = new pcRef.Entity();
  collider.shape = shape;
  collider.colliderMatrix = new pcRef.Mat4();
  collider.updateWorldMatrix = function() {
    const matrixWorld = this.getWorldTransform();
    updateColliderMatrix(this.colliderMatrix, matrixWorld, this.shape.offset);
  };
  return collider;
}
function updateColliderMatrix(colliderMatrix, matrixWorld, offset) {
  const me = matrixWorld.data;
  colliderMatrix.copy(matrixWorld);
  if (offset) {
    colliderMatrix.data[12] = me[0] * offset.x + me[4] * offset.y + me[8] * offset.z + me[12];
    colliderMatrix.data[13] = me[1] * offset.x + me[5] * offset.y + me[9] * offset.z + me[13];
    colliderMatrix.data[14] = me[2] * offset.x + me[6] * offset.y + me[10] * offset.z + me[14];
  }
}
const _VRMSpringBoneLoaderPlugin = class _VRMSpringBoneLoaderPlugin {
  constructor(pcRef, asset, entity) {
    this.asset = asset;
    this.entity = entity;
    this._pcRef = pcRef;
  }
  import() {
    const resource = this.asset.resource;
    const gltf = resource.data.gltf;
    const data = resource.data;
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
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
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
          });
        }
      }
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
      return null;
    }
    const schemaSecondaryAnimation = extension == null ? void 0 : extension.secondaryAnimation;
    if (!schemaSecondaryAnimation) {
      return null;
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
        console.error(
          "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
        );
        return;
      }
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
        });
      });
      return { colliders };
    });
    schemaBoneGroups == null ? void 0 : schemaBoneGroups.forEach((schemaBoneGroup, iBoneGroup) => {
      const rootIndices = schemaBoneGroup.bones;
      if (!rootIndices) {
        return;
      }
      rootIndices.forEach((rootIndex) => {
        var _a2, _b2;
        const root = (_a2 = this.entity.findByTag(`node_${rootIndex}`)) == null ? void 0 : _a2[0];
        if (!root) {
          console.error(
            "VRMSpringBoneLoaderPlugin Error: Did not find the node map to schemaColliderGroup"
          );
          return;
        }
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
    const collider = createVRMSpringBoneCollider(this._pcRef, shape);
    destination.addChild(collider);
    return collider;
  }
  _importCapsuleCollider(destination, { offset, radius, tail }) {
    const shape = new VRMSpringBoneColliderShapeCapsule(this._pcRef, {
      offset,
      radius,
      tail
    });
    const collider = createVRMSpringBoneCollider(this._pcRef, shape);
    destination.addChild(collider);
    return collider;
  }
  _importJoint(node, child, setting, colliderGroupsForSpring) {
    const springBone = new VRMSpringBoneJoint(
      this._pcRef,
      node,
      child,
      setting,
      colliderGroupsForSpring
    );
    return springBone;
  }
};
_VRMSpringBoneLoaderPlugin.EXTENSION_NAME = "VRMC_springBone";
let VRMSpringBoneLoaderPlugin = _VRMSpringBoneLoaderPlugin;
const importScript = (pcRef) => {
  class VrmSpringBone2 extends pcRef.ScriptType {
    constructor() {
      super(...arguments);
      this.activeSpringBone = true;
      this.isLimitedStrength = false;
      this.updateInterval = 1 / 60;
      this.timeSinceLastUpdate = 0;
    }
    initialize() {
      const springBoneLoader = new VRMSpringBoneLoaderPlugin(pcRef, this.asset, this.entity);
      this.springBoneManager = springBoneLoader.import();
      this.isLimitedStrength = false;
      this.entity.on("toggle-spring-bone", this.toggleSpringBone, this);
      this.entity.on("toggle-strength-limit", this.toggleStrengthLimit, this);
      this.on("destroy", () => {
        this.entity.off("toggle-spring-bone", this.toggleSpringBone, this);
        this.entity.off("toggle-strength-limit", this.toggleStrengthLimit, this);
      });
    }
    toggleSpringBone(isActive) {
      this.activeSpringBone = isActive;
    }
    toggleStrengthLimit(isLimited) {
      this.isLimitedStrength = isLimited;
    }
    update(dt) {
      if (!this.springBoneManager || !this.activeSpringBone)
        return;
      this.timeSinceLastUpdate += dt;
      if (this.timeSinceLastUpdate < this.updateInterval)
        return;
      this.springBoneManager.update(dt, this.isLimitedStrength);
      this.timeSinceLastUpdate = 0;
    }
  }
  pcRef.registerScript(VrmSpringBone2, "vrmSpringBone");
  VrmSpringBone2.attributes.add("activeSpringBone", {
    type: "boolean",
    default: true
  });
  VrmSpringBone2.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
  VrmSpringBone2.attributes.add("updateInterval", {
    type: "number",
    default: 1 / 60
    // 60 FPS
  });
};
const VrmSpringBone = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript
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
class VRMHumanoidRig extends VRMRig {
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
    this._vec3A = new pcRef.Vec3();
    this._mat4A = new pcRef.Mat4();
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
          const boneWorldPosition = this._vec3A.copy(rigBoneNode.getPosition());
          const parentWorldMatrix = this._mat4A.copy(boneNode.parent.getWorldTransform());
          const localPosition = this.applyMatrix4(boneWorldPosition, parentWorldMatrix.invert());
          boneNode.setLocalPosition(localPosition);
        }
      }
    });
  }
}
class VRMHumanoid {
  constructor(pcRef, humanBones, options) {
    this.autoUpdateHumanBones = (options == null ? void 0 : options.autoUpdateHumanBones) ?? true;
    this._rawHumanBones = new VRMRig(humanBones);
    this._normalizedHumanBones = new VRMHumanoidRig(pcRef, this._rawHumanBones);
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
      const resource = glbAsset.resource;
      const node = resource.data.nodes[index];
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
      const resource = glbAsset.resource;
      const node = resource.data.nodes[index];
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
      };
    }
  }
  return humanBones;
}
function createFormattedVRMHumanoid(pcRef, vrmAsset, renderEntity, options) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const resource = vrmAsset.resource;
  const VRM = (_b = (_a = resource.data.gltf) == null ? void 0 : _a.extensions) == null ? void 0 : _b.VRM;
  const VRMC_vrm = (_d = (_c = resource.data.gltf) == null ? void 0 : _c.extensions) == null ? void 0 : _d.VRMC_vrm;
  if (!VRM && !VRMC_vrm) {
    console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar.");
    return null;
  }
  let humanBones = null;
  if (VRM) {
    const schemaHumanoid = (_g = (_f = (_e = resource.data.gltf) == null ? void 0 : _e.extensions) == null ? void 0 : _f.VRM) == null ? void 0 : _g.humanoid;
    humanBones = createVRMHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  } else if (VRMC_vrm) {
    const specVersion = VRMC_vrm.specVersion;
    if (!POSSIBLE_SPEC_VERSIONS$1.has(specVersion)) {
      console.warn(`Unknown VRMC_vrm specVersion "${specVersion}"`);
      return null;
    }
    const schemaHumanoid = (_j = (_i = (_h = resource.data.gltf) == null ? void 0 : _h.extensions) == null ? void 0 : _i.VRMC_vrm) == null ? void 0 : _j.humanoid;
    humanBones = createVRMCHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  }
  if (humanBones) {
    const autoUpdateHumanBones = !!(options == null ? void 0 : options.autoUpdateHumanBones);
    const humanoid = new VRMHumanoid(pcRef, humanBones, { autoUpdateHumanBones });
    if (VRMC_vrm) {
      renderEntity.addChild(humanoid.normalizedHumanBonesRoot);
    }
    return humanoid;
  }
  return null;
}
const addIndexToNodeTags = (asset) => {
  if (!asset.resource) {
    console.error("addIndexToNodeTags Error: asset.resource is not available");
    return;
  }
  const resource = asset.resource;
  if (!(resource.data && resource.data.gltf)) {
    console.error("addIndexToNodeTags Error: asset.resource.data.gltf is not available");
    return;
  }
  const assetData = resource.data;
  const nodes = assetData.nodes;
  nodes.forEach((node, index) => {
    node.tags.add(`node_${index}`);
  });
};
const getVersion = (asset) => {
  var _a, _b;
  const resource = asset.resource;
  const isV1Used = (_a = resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
  return isV1Used ? "v1" : isV0Used ? "v0" : null;
};
class RenderStates {
  constructor(pcRef) {
    this._pcRef = pcRef;
    this._app = null;
    this.lightStateInfo = null;
    this.defaultInfoSetting = {
      directionalLight: {
        direction: new pcRef.Vec3(0, 0, 0),
        color: new pcRef.Color(0, 0, 0)
      },
      spotLight: {
        position: new pcRef.Vec3(0, 0, 0),
        direction: new pcRef.Vec3(0, 0, 0),
        color: new pcRef.Color(0, 0, 0),
        distance: 0,
        decay: 0,
        coneCos: 0,
        penumbraCos: 0
      },
      pointLight: {
        position: new pcRef.Vec3(0, 0, 0),
        color: new pcRef.Color(0, 0, 0),
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
    info.directionalLights = directionalLights.map((light) => {
      if (light._node === null) {
        return this.defaultInfoSetting.directionalLight;
      }
      const component = light._node.light;
      return {
        direction: light._direction,
        color: component.color
      };
    });
    info.spotLights = spotLights.map((light) => {
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
        penumbraCos: Math.cos(component.outerConeAngle)
      };
    });
    info.pointLights = pointLights.map((light) => {
      if (light._node === null) {
        return this.defaultInfoSetting.pointLight;
      }
      const component = light._node.light;
      return {
        position: light._node.getPosition(),
        color: component.color,
        distance: component.range,
        decay: light.falloffMode === this._pcRef.LIGHTFALLOFF_LINEAR ? 1 : 2
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
window.VRMLoader = {
  VrmAnimation,
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  createFormattedVRMHumanoid,
  addIndexToNodeTags,
  getVersion
};
export {
  RenderStates,
  VRMExpressionManager,
  VRMHumanoid,
  VRMSpringBoneManager,
  VrmAnimation,
  VrmExpression,
  VrmMapList,
  VrmSpringBone,
  addIndexToNodeTags,
  createFormattedVRMHumanoid,
  getVersion
};
