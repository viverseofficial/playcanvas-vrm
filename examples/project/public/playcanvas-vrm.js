/**
 * name: playcanvas-vrm
 * version: v1.2.0
 */
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
const createAnimTrack = (pcRef, animTrack) => {
  const inputs = animTrack.inputs.map((input) => new pcRef.AnimData(input.components, input.data));
  const outputs = animTrack.outputs.map(
    (output) => new pcRef.AnimData(output.components, output.data)
  );
  const curves = animTrack.curves.map((curve) => {
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
  return new pcRef.AnimTrack(animTrack.name, animTrack.duration, inputs, outputs, curves);
};
const loadAnimation = (pcRef, animationAssets, humanoid, {
  vrmHipsHeight,
  vrmHipsDeep,
  motionHipsHeight,
  version = "v0",
  negativeZAnimNames = []
}) => {
  const hipPositionOutputIndexes = {};
  const scaleOutputIndexes = {};
  return animationAssets.map((animationAsset) => {
    var _a, _b;
    const resource = animationAsset.asset.resource && animationAsset.asset.type === "container" ? (_b = (_a = animationAsset.asset.resource.animations) == null ? void 0 : _a[0]) == null ? void 0 : _b.resource : animationAsset.asset.resource;
    if (resource) {
      const animTrack = createAnimTrack(pcRef, resource);
      const isNegativeZAxis = negativeZAnimNames.includes(resource.name);
      const needConvertVersion = isNegativeZAxis ? "v1" : "v0";
      let nodeMotionHipsHeight = 0;
      if (animationAsset.asset.type === "container") {
        const motionHipsNode = animationAsset.asset.resource.data.nodes.find(
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
            const vrmNodeName = (_a2 = humanoid.getRawBoneNode(vrmBoneName)) == null ? void 0 : _a2.name;
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
              if (version === needConvertVersion && index % 3 !== 1) {
                value *= -1;
              }
              if (hipPositionOutputIndexes[outputIndex] && index % 3 === 1) {
                if (animationAsset.removeY) {
                  return vrmHipsHeight;
                }
                if (animationAsset.removeUpperY && v * hipsPositionScaleY > vrmHipsHeight) {
                  return vrmHipsHeight;
                }
              }
              if (hipPositionOutputIndexes[outputIndex] && index % 3 === 2) {
                if (animationAsset.removeZ) {
                  return vrmHipsDeep;
                }
              }
              return value * hipsPositionScaleY;
            });
            output._data = newData;
          }
        } else if (output.components === 4) {
          const newData = output.data.map((v, index) => {
            if (version === needConvertVersion && index % 2 === 0) {
              return -v;
            } else {
              return v;
            }
          });
          output._data = newData;
        }
      });
      return {
        name: animationAsset.stateName,
        resource: animTrack,
        ...animationAsset.setting && {
          setting: animationAsset.setting
        }
      };
    } else {
      console.error(
        `AddVrmAnimation: loadAnimation can't find available resource from ${animationAsset.stateName} asset.`
      );
      return null;
    }
  }).filter((animationAsset) => animationAsset);
};
const createVRMAnimation = (pcRef, animationAssets, asset, humanoid, {
  motionHipsHeight,
  negativeZAnimNames
} = {}) => {
  var _a, _b, _c;
  if (!humanoid) {
    console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".');
    return null;
  }
  const isV1Used = (_a = asset.resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = asset.resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
  const version = isV1Used ? "v1" : isV0Used ? "v0" : null;
  const vrmHipsPosition = ((_c = humanoid.rawHumanBones.hips) == null ? void 0 : _c.node.getPosition()) || new pcRef.Vec3();
  const vrmHipsY = vrmHipsPosition.y;
  const vrmHipsHeight = Math.abs(vrmHipsY - 0);
  const vrmHipsZ = vrmHipsPosition.z;
  const vrmHipsDeep = Math.abs(vrmHipsZ - 0);
  return loadAnimation(pcRef, animationAssets, humanoid, {
    vrmHipsHeight,
    vrmHipsDeep,
    ...motionHipsHeight && { motionHipsHeight },
    ...version && { version },
    ...negativeZAnimNames && { negativeZAnimNames }
  });
};
const assignAnimation$1 = (entity, {
  name,
  resource,
  setting
}) => {
  if (entity.anim) {
    entity.anim.assignAnimation(
      name,
      resource,
      setting && setting.layerName !== void 0 ? setting.layerName : void 0,
      setting && setting.speed !== void 0 ? setting.speed : 1,
      setting && setting.loop !== void 0 ? setting.loop : true
    );
  } else {
    console.error("assignAnimation: Please set the anim component on the entity.");
  }
};
const VrmAnimation = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation: assignAnimation$1,
  createVRMAnimation
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
      translation: /* @__PURE__ */ new Map(),
      rotation: /* @__PURE__ */ new Map()
    };
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
function applyMatrix4(pcRef, v3, m) {
  const e = m.data;
  const w = 1 / (e[3] * v3.x + e[7] * v3.y + e[11] * v3.z + e[15]);
  const _x = (e[0] * v3.x + e[4] * v3.y + e[8] * v3.z + e[12]) * w;
  const _y = (e[1] * v3.x + e[5] * v3.y + e[9] * v3.z + e[13]) * w;
  const _z = (e[2] * v3.x + e[6] * v3.y + e[10] * v3.z + e[14]) * w;
  return new pcRef.Vec3(_x, _y, _z);
}
const POSSIBLE_SPEC_VERSIONS = /* @__PURE__ */ new Set(["1.0", "1.0-draft"]);
function createVRMA(pcRef, vrmaAsset) {
  var _a, _b, _c;
  const defGltf = vrmaAsset.resource.data.gltf;
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
  const pcNodes = vrmaAsset.resource.data.nodes;
  const nodeMap = _createNodeMap(defGltf, defExtension);
  const worldMatrixMap = _createBoneWorldMatrixMap(pcRef, pcNodes, defExtension);
  const hipsNode = (_c = (_b = defExtension.humanoid) == null ? void 0 : _b.humanBones["hips"]) == null ? void 0 : _c.node;
  const hips = hipsNode != null ? pcNodes[hipsNode] : null;
  const restHipsPosition = hips == null ? void 0 : hips.getPosition();
  const animTracks = vrmaAsset.resource.data.animations;
  const animations = animTracks.map((animTrack, index) => {
    const defAnimation = defGltf.animations[index];
    const animation = _parseAnimation(pcRef, animTrack, defAnimation, nodeMap, worldMatrixMap);
    animation.restHipsPosition = restHipsPosition;
    return animation;
  });
  return animations;
}
function _createNodeMap(defGltf, defExtension) {
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
function _createBoneWorldMatrixMap(pcRef, pcNodes, defExtension) {
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
      const MAT4_IDENTITY = new pcRef.Mat4();
      if (boneName === "hips") {
        worldMatrixMap.set("hipsParent", ((_a = pcNode.parent) == null ? void 0 : _a.getWorldTransform()) ?? MAT4_IDENTITY);
      }
    }
  }
  return worldMatrixMap;
}
function _parseAnimation(pcRef, animTrack, defAnimation, nodeMap, worldMatrixMap) {
  const inputs = animTrack.inputs.map((input) => new pcRef.AnimData(input.components, input.data));
  const outputs = animTrack.outputs.map(
    // the outputs represent values that are correspond to the keyframe times
    (output) => new pcRef.AnimData(output.components, output.data)
  );
  const curves = animTrack.curves.map((curve) => {
    const curvePaths = curve.paths.map((graph) => {
      const morphCurvePath = graph;
      return {
        component: morphCurvePath.component,
        entityPath: [...morphCurvePath.entityPath],
        propertyPath: [...morphCurvePath.propertyPath]
      };
    });
    return new pcRef.AnimCurve(curvePaths, curve.input, curve.output, curve.interpolation);
  });
  const defChannels = defAnimation.channels;
  const result = new VRMAnimation(pcRef);
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
            let _vec3 = new pcRef.Vec3(v[0], v[1], v[2]);
            _vec3 = applyMatrix4(pcRef, _vec3, hipsParentWorldMatrix);
            return [_vec3.x, _vec3.y, _vec3.z];
          });
          const _outputData = new Float32Array(outputData);
          const _output = new pcRef.AnimData(output.components, _outputData);
          const vrmaTrack = { curve, input, output: _output };
          result.humanoidTracks.translation.set(boneName, vrmaTrack);
        }
      } else if (path === "rotation") {
        const worldMatrix = worldMatrixMap.get(boneName);
        const parentWorldMatrix = worldMatrixMap.get(parentBoneName);
        const worldMatrixRotation = worldMatrix.getEulerAngles();
        const worldMatrixQuat = new pcRef.Quat();
        worldMatrixQuat.setFromEulerAngles(worldMatrixRotation);
        worldMatrixQuat.invert();
        const parentWorldMatrixRotation = parentWorldMatrix.getEulerAngles();
        const parentWorldMatrixQuat = new pcRef.Quat();
        parentWorldMatrixQuat.setFromEulerAngles(parentWorldMatrixRotation);
        const outputData = arrayChunk(output.data, 4).flatMap((q) => {
          let _quat = new pcRef.Quat(q[0], q[1], q[2], q[3]);
          _quat = _quat.mul2(parentWorldMatrixQuat, _quat).mul(worldMatrixQuat);
          return [_quat.x, _quat.y, _quat.z, _quat.w];
        });
        const _outputData = new Float32Array(outputData);
        const _output = new pcRef.AnimData(output.components, _outputData);
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
function createVRMAnimTrack(pcRef, name, vrmAnimation, humanoid, metaVersion = "v0") {
  const inputs = [];
  const outputs = [];
  const curves = [];
  const vrmaTracks = [];
  const humanoidTracks = createVRMAnimationHumanoidTracks(pcRef, vrmAnimation, humanoid, metaVersion);
  vrmaTracks.push(...humanoidTracks.translation.values());
  vrmaTracks.push(...humanoidTracks.rotation.values());
  for (let i = 0; i < vrmaTracks.length; i++) {
    inputs.push(vrmaTracks[i].input);
    outputs.push(vrmaTracks[i].output);
    const _curve = new pcRef.AnimCurve(vrmaTracks[i].curve.paths, i, i, vrmaTracks[i].curve.interpolation);
    curves.push(_curve);
    const vrmaCurve = vrmaTracks[i].curve;
    vrmaCurve.paths.forEach((graph) => {
      const morphCurvePath = graph;
      const entityPath = morphCurvePath.entityPath;
      if (entityPath.length == 1 && entityPath[0] == "hips") {
        entityPath.unshift("SkeletonRoot");
      }
      const arrangedEntityPath = entityPath.map((path) => {
        var _a;
        const originalRigName = path;
        const vrmBoneName = VRMRigMap[originalRigName];
        const vrmNodeName = (_a = humanoid.getRawBoneNode(vrmBoneName)) == null ? void 0 : _a.name;
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
  return new pcRef.AnimTrack(name, vrmAnimation.duration, inputs, outputs, curves);
}
function createVRMAnimationHumanoidTracks(pcRef, vrmAnimation, humanoid, metaVersion) {
  var _a, _b, _c;
  const translation = /* @__PURE__ */ new Map();
  const rotation = /* @__PURE__ */ new Map();
  for (const [name, origTrack] of vrmAnimation.humanoidTracks.translation.entries()) {
    const nodeName = (_a = humanoid.getNormalizedBoneNode(name)) == null ? void 0 : _a.name;
    if (nodeName != null) {
      const animationY = vrmAnimation.restHipsPosition.y;
      const humanoidHipsPosition = ((_b = humanoid.rawHumanBones.hips) == null ? void 0 : _b.node.getPosition()) || new pcRef.Vec3();
      const humanoidY = humanoidHipsPosition.y;
      const scale = humanoidY / animationY;
      const outputData = origTrack.output.data.map((v, i) => (metaVersion === "v0" && i % 3 !== 1 ? -v : v) * scale);
      const _outputData = new Float32Array(outputData);
      const _output = new pcRef.AnimData(origTrack.output.components, _outputData);
      const vrmaTrack = { curve: origTrack.curve, input: origTrack.input, output: _output };
      translation.set(name, vrmaTrack);
    }
  }
  for (const [name, origTrack] of vrmAnimation.humanoidTracks.rotation.entries()) {
    const nodeName = (_c = humanoid.getNormalizedBoneNode(name)) == null ? void 0 : _c.name;
    if (nodeName != null) {
      const outputData = origTrack.output.data.map((v, i) => metaVersion === "v0" && i % 2 === 0 ? -v : v);
      const _outputData = new Float32Array(outputData);
      const _output = new pcRef.AnimData(origTrack.output.components, _outputData);
      const vrmaTrack = { curve: origTrack.curve, input: origTrack.input, output: _output };
      rotation.set(name, vrmaTrack);
    }
  }
  return { translation, rotation };
}
function createVRMAResources(pcRef, vrmAsset, vrmaAssets, humanoid) {
  var _a, _b;
  const isV1Used = (_a = vrmAsset.resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = vrmAsset.resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
  const version = isV1Used ? "v1" : isV0Used ? "v0" : null;
  const rescources = [];
  vrmaAssets.forEach((vrmaAsset) => {
    const vrmAnimations = createVRMA(pcRef, vrmaAsset.asset);
    if (vrmAnimations) {
      const animTrack = createVRMAnimTrack(pcRef, vrmaAsset.stateName, vrmAnimations[0], humanoid, version);
      rescources.push({ stateName: vrmaAsset.stateName, animTrack });
    }
  });
  return rescources;
}
const assignAnimation = (entity, resource) => {
  if (entity.anim) {
    entity.anim.assignAnimation(
      resource.stateName,
      resource.animTrack,
      resource.setting && resource.setting.layerName !== void 0 ? resource.setting.layerName : void 0,
      resource.setting && resource.setting.speed !== void 0 ? resource.setting.speed : 1,
      resource.setting && resource.setting.loop !== void 0 ? resource.setting.loop : true
    );
  } else {
    console.error("assignAnimation: Please set the anim component on the entity.");
  }
};
const VrmAnimation2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignAnimation,
  createVRMAResources
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
const importScript$1 = (pcRef) => {
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
    stopBlink(restartSeconds) {
      if (!this.expressionManager)
        return;
      this.stopExpressionLoop("blink");
      this.expressionManager.stopBlink();
      if (restartSeconds) {
        this.blinkTimer.add(restartSeconds, this.startBlink, this);
      }
    }
    startEmotion(name, config) {
      if (!this.expressionManager)
        return;
      this.expressionManager.startEmotion(name, config);
      const time = config ? config.times[config.times.length - 1] : 3;
      this.stopBlink(time);
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
class VRMSpringBoneManager {
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
    }
    springBonesTried.add(springBone);
    const depObjects = this._getDependencies(springBone);
    for (const depObject of depObjects) {
      traverseAncestorsFromRoot(depObject, (depObjectAncestor) => {
        const objectSet = this._objectSpringBonesMap.get(depObjectAncestor);
        if (objectSet) {
          for (const depSpringBone of objectSet) {
            this._processSpringBone(
              depSpringBone,
              springBonesTried,
              springBonesDone,
              objectUpdated,
              callback
            );
          }
        } else if (!objectUpdated.has(depObjectAncestor)) {
          objectUpdated.add(depObjectAncestor);
        }
      });
    }
    callback(springBone);
    objectUpdated.add(springBone.bone);
    springBonesDone.add(springBone);
  }
  // Return a set of objects that are dependant of given spring bone.
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
      });
    });
    return set;
  }
}
class VRMSpringBoneColliderShapeSphere {
  constructor(pcRef, params) {
    this.offset = (params == null ? void 0 : params.offset) ?? new pcRef.Vec3();
    this.radius = (params == null ? void 0 : params.radius) ?? 0;
  }
  get type() {
    return "sphere";
  }
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
  }
  get type() {
    return "capsule";
  }
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
  setInitState() {
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
      return;
    this._worldSpacePosition.copy(
      this.bone.getWorldTransform().getTranslation(new this._pcRef.Vec3())
    );
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
    );
    const worldSpaceInitialMatrixInv = mat4InvertCompat(
      this._pcRef,
      this._matA.copy(this._parentMatrixWorld).mul(this._initialLocalMatrix)
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
      this.isWalking = false;
    }
    initialize() {
      const springBoneLoader = new VRMSpringBoneLoaderPlugin(pcRef, this.asset, this.entity);
      this.springBoneManager = springBoneLoader.import();
      this.isWalking = false;
      this.entity.on("toggle-spring-bone", this.toggleSpringBone, this);
      this.entity.on("toggle-is-walking", this.toggleIsWalking, this);
      this.on("destroy", () => {
        this.entity.off("toggle-spring-bone", this.toggleSpringBone, this);
        this.entity.on("toggle-is-walking", this.toggleIsWalking, this);
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
  pcRef.registerScript(VrmSpringBone2, "vrmSpringBone");
  VrmSpringBone2.attributes.add("activeSpringBone", {
    type: "boolean",
    default: true
  });
  VrmSpringBone2.attributes.add("asset", {
    type: "asset",
    description: "Set the container asset loaded from vrm avatar."
  });
};
const VrmSpringBone = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  importScript
}, Symbol.toStringTag, { value: "Module" }));
const EXTENSION_VRMC_MATERIALS_MTOON = "VRMC_materials_mtoon";
const EXTENSION_VRM = "VRM";
var MToonMaterialCullMode = /* @__PURE__ */ ((MToonMaterialCullMode2) => {
  MToonMaterialCullMode2[MToonMaterialCullMode2["Off"] = 0] = "Off";
  MToonMaterialCullMode2[MToonMaterialCullMode2["Front"] = 1] = "Front";
  MToonMaterialCullMode2[MToonMaterialCullMode2["Back"] = 2] = "Back";
  return MToonMaterialCullMode2;
})(MToonMaterialCullMode || {});
const gammaEOTF = (e) => {
  return Math.pow(e, 2.2);
};
const parseV0MToonProperties = (pcRef, materialProperties, schemaMaterial) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
  const isTransparent = ((_a = materialProperties.keywordMap) == null ? void 0 : _a["_ALPHABLEND_ON"]) ?? false;
  const enabledZWrite = ((_b = materialProperties.floatProperties) == null ? void 0 : _b["_ZWrite"]) === 1;
  const transparentWithZWrite = enabledZWrite && isTransparent;
  const isCutoff = ((_c = materialProperties.keywordMap) == null ? void 0 : _c["_ALPHATEST_ON"]) ?? false;
  const alphaMode = isTransparent ? "BLEND" : isCutoff ? "MASK" : "OPAQUE";
  const alphaCutoff = isCutoff ? ((_d = materialProperties.floatProperties) == null ? void 0 : _d["_Cutoff"]) ?? 0.5 : void 0;
  const cullMode = ((_e = materialProperties.floatProperties) == null ? void 0 : _e["_CullMode"]) ?? 2;
  const doubleSided = cullMode === 0;
  const baseColorFactor = (((_f = materialProperties.vectorProperties) == null ? void 0 : _f["_Color"]) ?? [1, 1, 1, 1]).map(
    (v, i) => i === 3 ? v : gammaEOTF(v)
    // alpha channel is stored in linear
  );
  const baseColorTextureIndex = (_g = materialProperties.textureProperties) == null ? void 0 : _g["_MainTex"];
  const baseColorTexture = baseColorTextureIndex != null ? {
    index: baseColorTextureIndex
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  const normalTextureScale = ((_h = materialProperties.floatProperties) == null ? void 0 : _h["_BumpScale"]) ?? 1;
  const normalTextureIndex = (_i = materialProperties.textureProperties) == null ? void 0 : _i["_BumpMap"];
  const normalTexture = normalTextureIndex != null ? {
    index: normalTextureIndex,
    scale: normalTextureScale
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  const emissiveFactor = (((_j = materialProperties.vectorProperties) == null ? void 0 : _j["_EmissionColor"]) ?? [0, 0, 0, 1]).map(gammaEOTF);
  const emissiveTextureIndex = (_k = materialProperties.textureProperties) == null ? void 0 : _k["_EmissionMap"];
  const emissiveTexture = emissiveTextureIndex != null ? {
    index: emissiveTextureIndex
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  const shadeColorFactor = (((_l = materialProperties.vectorProperties) == null ? void 0 : _l["_ShadeColor"]) ?? [0.97, 0.81, 0.86, 1]).map(gammaEOTF);
  const shadeMultiplyTextureIndex = (_m = materialProperties.textureProperties) == null ? void 0 : _m["_ShadeTexture"];
  const shadeMultiplyTexture = shadeMultiplyTextureIndex != null ? {
    index: shadeMultiplyTextureIndex
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  let shadingShiftFactor = ((_n = materialProperties.floatProperties) == null ? void 0 : _n["_ShadeShift"]) ?? 0;
  let shadingToonyFactor = ((_o = materialProperties.floatProperties) == null ? void 0 : _o["_ShadeToony"]) ?? 0.9;
  shadingToonyFactor = pcRef.math.lerp(shadingToonyFactor, 1, 0.5 + 0.5 * shadingShiftFactor);
  shadingShiftFactor = -shadingShiftFactor - (1 - shadingToonyFactor);
  const giIntensityFactor = ((_p = materialProperties.floatProperties) == null ? void 0 : _p["_IndirectLightIntensity"]) ?? 0.1;
  const giEqualizationFactor = giIntensityFactor ? 1 - giIntensityFactor : void 0;
  const matcapTextureIndex = (_q = materialProperties.textureProperties) == null ? void 0 : _q["_SphereAdd"];
  const matcapFactor = matcapTextureIndex != null ? [1, 1, 1] : void 0;
  const matcapTexture = matcapTextureIndex != null ? {
    index: matcapTextureIndex
  } : void 0;
  const rimLightingMixFactor = ((_r = materialProperties.floatProperties) == null ? void 0 : _r["_RimLightingMix"]) ?? 0;
  const rimMultiplyTextureIndex = (_s = materialProperties.textureProperties) == null ? void 0 : _s["_RimTexture"];
  const rimMultiplyTexture = rimMultiplyTextureIndex != null ? {
    index: rimMultiplyTextureIndex
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  const parametricRimColorFactor = (((_t = materialProperties.vectorProperties) == null ? void 0 : _t["_RimColor"]) ?? [0, 0, 0, 1]).map(gammaEOTF);
  const parametricRimFresnelPowerFactor = ((_u = materialProperties.floatProperties) == null ? void 0 : _u["_RimFresnelPower"]) ?? 1;
  const parametricRimLiftFactor = ((_v = materialProperties.floatProperties) == null ? void 0 : _v["_RimLift"]) ?? 0;
  const outlineWidthMode = ["none", "worldCoordinates", "screenCoordinates"][((_w = materialProperties.floatProperties) == null ? void 0 : _w["_OutlineWidthMode"]) ?? 0];
  let outlineWidthFactor = ((_x = materialProperties.floatProperties) == null ? void 0 : _x["_OutlineWidth"]) ?? 0;
  outlineWidthFactor = 0.01 * outlineWidthFactor;
  const outlineWidthMultiplyTextureIndex = (_y = materialProperties.textureProperties) == null ? void 0 : _y["_OutlineWidthTexture"];
  const outlineWidthMultiplyTexture = outlineWidthMultiplyTextureIndex != null ? {
    index: outlineWidthMultiplyTextureIndex
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  const outlineColorFactor = (((_z = materialProperties.vectorProperties) == null ? void 0 : _z["_OutlineColor"]) ?? [0, 0, 0]).map(gammaEOTF);
  const outlineColorMode = ((_A = materialProperties.floatProperties) == null ? void 0 : _A["_OutlineColorMode"]) ?? 0;
  const outlineLightingMixFactor = outlineColorMode === 1 ? ((_B = materialProperties.floatProperties) == null ? void 0 : _B["_OutlineLightingMix"]) ?? 1 : 0;
  const uvAnimationMaskTextureIndex = (_C = materialProperties.textureProperties) == null ? void 0 : _C["_UvAnimMaskTexture"];
  const uvAnimationMaskTexture = uvAnimationMaskTextureIndex != null ? {
    index: uvAnimationMaskTextureIndex
    // extensions: {
    //   ...textureTransformExt,
    // },
  } : void 0;
  const uvAnimationScrollXSpeedFactor = ((_D = materialProperties.floatProperties) == null ? void 0 : _D["_UvAnimScrollX"]) ?? 0;
  let uvAnimationScrollYSpeedFactor = ((_E = materialProperties.floatProperties) == null ? void 0 : _E["_UvAnimScrollY"]) ?? 0;
  if (uvAnimationScrollYSpeedFactor != null) {
    uvAnimationScrollYSpeedFactor = -uvAnimationScrollYSpeedFactor;
  }
  const uvAnimationRotationSpeedFactor = ((_F = materialProperties.floatProperties) == null ? void 0 : _F["_UvAnimRotation"]) ?? 0;
  const mtoonExtension = {
    specVersion: "1.0",
    transparentWithZWrite,
    // renderQueueOffsetNumber,
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
      // eslint-disable-next-line @typescript-eslint/naming-convention
      VRMC_materials_mtoon: mtoonExtension
    }
  };
};
const baseVS$1 = (
  /* glsl */
  `
varying vec3 vViewPosition;
`
);
const endVS$1 = (
  /* glsl */
  `
    // Transform the vertex position to world space
    vec4 worldPosition = matrix_model * vec4(vertex_position, 1.0);

    // Transform the world position to view space
    // vec4 viewPosition = matrix_viewProjection * worldPosition;

    // Pass the view position to the fragment shader
    vViewPosition = -worldPosition.xyz;
`
);
const basePS$1 = (
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
);
const endPS$1 = (
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
);
const shaderChunksMtoon = {
  baseVS: baseVS$1,
  endVS: endVS$1,
  basePS: basePS$1,
  endPS: endPS$1
};
const createVRMCMtoonMaterial = (pcRef) => {
  return class VRMCMtoonMaterial extends pcRef.StandardMaterial {
    constructor() {
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
      this.outlineWidthMultiplyTexture = null;
      this.outlineWidthMultiplyTextureUvTransform = new pcRef.Mat3();
      this.outlineWidthFactor = 0.02;
      this.outlineColorFactor = new pcRef.Color(1, 0.5, 0, 1);
      this.outlineLightingMixFactor = 0;
      this.uvAnimationMaskTexture = null;
      this.uvAnimationMaskTextureUvTransform = new pcRef.Mat3();
      this.uvAnimationScrollXOffset = 0;
      this.uvAnimationScrollYOffset = 0;
      this.uvAnimationRotationPhase = 0;
      this.useLighting = false;
      this.useSkybox = false;
    }
    parseGLTFAttrs(gltfMaterial, _, attrs) {
      var _a;
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
      if (gltfMaterial == null ? void 0 : gltfMaterial.emissiveFactor) {
        const emissiveFactor = gltfMaterial.emissiveFactor;
        this.emissive = new pcRef.Color(
          Math.pow(emissiveFactor[0], 1 / 2.2),
          Math.pow(emissiveFactor[1], 1 / 2.2),
          Math.pow(emissiveFactor[2], 1 / 2.2),
          1
        );
      }
      if ((_a = gltfMaterial == null ? void 0 : gltfMaterial.pbrMetallicRoughness) == null ? void 0 : _a.baseColorFactor) {
        const baseColorFactor = gltfMaterial.pbrMetallicRoughness.baseColorFactor;
        this.diffuse = new pcRef.Color(
          Math.pow(baseColorFactor[0], 1 / 2.2),
          Math.pow(baseColorFactor[1], 1 / 2.2),
          Math.pow(baseColorFactor[2], 1 / 2.2),
          baseColorFactor[3]
        );
      }
      this.litFactor = this.diffuse;
      this.baseColorMap = this.diffuseMap || this.opacityMap;
      const {
        version,
        shadeColorFactor,
        shadeMultiplyTexture,
        shadingShiftFactor,
        shadingToonyFactor,
        parametricRimColorFactor,
        rimLightingMixFactor,
        parametricRimFresnelPowerFactor,
        parametricRimLiftFactor,
        outlineWidthFactor,
        outlineColorFactor,
        outlineLightingMixFactor
      } = attrs;
      if (version == "0.0") {
        this.emissiveIntensity = 0;
      }
      if (shadeColorFactor) {
        this.shadeColorFactor = new pcRef.Color(
          Math.pow(shadeColorFactor[0], 1 / 2.2),
          Math.pow(shadeColorFactor[1], 1 / 2.2),
          Math.pow(shadeColorFactor[2], 1 / 2.2),
          1
        );
      }
      this.shadeMultiplyTexture = shadeMultiplyTexture;
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
      this.outlineLightingMixFactor = outlineLightingMixFactor;
      this.cull = pcRef.CULLFACE_NONE;
      this.setShaderChunks();
      this.setShaderParameters();
    }
    setShaderChunks() {
      this.chunks.APIVersion = pcRef.CHUNKAPI_1_70;
      const pcShaderChunks = pcRef.shaderChunks;
      this.chunks.baseVS = pcShaderChunks.baseVS;
      this.chunks.endVS = pcShaderChunks.endVS;
      this.chunks.basePS = pcShaderChunks.basePS;
      this.chunks.endPS = pcShaderChunks.endPS;
      if (this.shadeMultiplyTexture) {
        this.chunks.basePS += `
        #define USE_SHADEMULTIPLYTEXTURE
        `;
      }
      if (this.emissiveMap) {
        this.chunks.basePS += `
        #define USE_EMISSIVEMAP
        `;
      }
      if (this.cull == pcRef.CULLFACE_NONE) {
        this.chunks.basePS += `
        #define DOUBLE_SIDED
        `;
      }
      this.chunks.baseVS += shaderChunksMtoon.baseVS;
      this.chunks.endVS += shaderChunksMtoon.endVS;
      this.chunks.basePS += shaderChunksMtoon.basePS;
      this.chunks.endPS += shaderChunksMtoon.endPS;
    }
    setShaderParameters() {
      this.setParameter("opacity", this.opacity);
      this.setParameter("litFactor", [this.litFactor.r, this.litFactor.g, this.litFactor.b]);
      if (this.baseColorMap) {
        this.setParameter("baseColorMap", this.baseColorMap);
      }
      this.setParameter("shadeColorFactor", [
        this.shadeColorFactor.r,
        this.shadeColorFactor.g,
        this.shadeColorFactor.b
      ]);
      if (this.shadeMultiplyTexture) {
        this.setParameter("shadeMultiplyTexture", this.shadeMultiplyTexture);
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
      if (this.emissiveMap) {
        this.setParameter("emissiveMap", this.emissiveMap);
      }
    }
    setLightDirection(direction) {
      this.setParameter("lightDirection", [direction.x, direction.y, direction.z]);
    }
    setLightColor(color) {
      this.setParameter("lightColor", [color.r, color.g, color.b]);
    }
  };
};
const baseVS = (
  /* glsl */
  `
uniform float outlineWidthFactor;
`
);
const endVS = (
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
);
const basePS = (
  /* glsl */
  `
uniform sampler2D baseColorMap;
uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;
`
);
const endPS = (
  /* glsl */
  `
    vec4 color = texture2D(baseColorMap, vUv0);
    color.rgb = outlineColorFactor.rgb * mix( vec3( 1.0 ), color.rgb, outlineLightingMixFactor );
    gl_FragColor = color;
`
);
const shaderChunksOutline = {
  baseVS,
  endVS,
  basePS,
  endPS
};
const createVRMCOutlineMaterial = (pcRef) => {
  return class VRMCOutlineMaterial extends pcRef.StandardMaterial {
    parseGLTFAttrs(gltfMaterial) {
      var _a, _b;
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
      if ((_a = gltfMaterial == null ? void 0 : gltfMaterial.extensions) == null ? void 0 : _a[EXTENSION_VRMC_MATERIALS_MTOON]) {
        const extension = (_b = gltfMaterial == null ? void 0 : gltfMaterial.extensions) == null ? void 0 : _b[EXTENSION_VRMC_MATERIALS_MTOON];
        const {
          outlineColorFactor,
          outlineWidthFactor,
          outlineLightingMixFactor
          // outlineWidthMultiplyTexture,
        } = extension;
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
    }
    setShaderChunks() {
      this.chunks.APIVersion = pcRef.CHUNKAPI_1_70;
      const pcShaderChunks = pcRef.shaderChunks;
      this.chunks.baseVS = pcShaderChunks.baseVS;
      this.chunks.endVS = pcShaderChunks.endVS;
      this.chunks.basePS = pcShaderChunks.basePS;
      this.chunks.endPS = pcShaderChunks.endPS;
      this.chunks.baseVS += shaderChunksOutline.baseVS;
      this.chunks.endVS += shaderChunksOutline.endVS;
      this.chunks.basePS += shaderChunksOutline.basePS;
      this.chunks.endPS += shaderChunksOutline.endPS;
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
    setBaseColorMap(texture) {
      if (!texture)
        return;
      this.setParameter("baseColorMap", texture);
    }
  };
};
const VrmcMaterialsMtoon = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EXTENSION_VRM,
  EXTENSION_VRMC_MATERIALS_MTOON,
  MToonMaterialCullMode,
  createVRMCMtoonMaterial,
  createVRMCOutlineMaterial,
  gammaEOTF,
  parseV0MToonProperties
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
      };
    }
  }
  return humanBones;
}
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
          var _a, _b;
          if (err) {
            this.loading = false;
            reject(`GLTFLoader Error: ${err}`);
          }
          __privateGet(this, _pluginsCallbacks).forEach((createPlugin) => {
            const plugin = createPlugin(asset);
            plugins.push(plugin);
          });
          const assetData = asset.resource.data;
          if (needAddTags) {
            __privateMethod(this, _addEssentialTags, addEssentialTags_fn).call(this, assetData, plugins);
          }
          const renderEntity = asset.resource.instantiateRenderEntity(setting);
          const rootEntity = new this._pcRef.Entity(name, this.app);
          rootEntity.addChild(renderEntity);
          plugins.forEach((plugin) => {
            if (plugin.instantiated)
              plugin.instantiated(rootEntity);
          });
          this.loading = false;
          const isV1Used = (_a = asset.resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
          const isV0Used = (_b = asset.resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
          const version = isV1Used ? "v1" : isV0Used ? "v0" : null;
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
      }
    );
  }
  // Register Plugin to loader
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
  }
  static registerAnimation(entity, animations, { useResourceName, defaultPlayIndex } = {
    useResourceName: false,
    defaultPlayIndex: 0
  }) {
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
addEssentialTags_fn = function(assetData, plugins) {
  const gltfNodes = assetData.gltf.nodes;
  const nodes = assetData.nodes;
  __privateMethod(this, _setExtensionsToNodes, setExtensionsToNodes_fn).call(this, nodes, gltfNodes);
  assetData.scenes.forEach((scene) => {
    const addedNodeSet = /* @__PURE__ */ new Set([]);
    scene.forEach((node) => {
      let isAdded = false;
      let targetNodes = [];
      assetData.nodes.forEach((originNode, index) => {
        if (node.path === originNode.path) {
          targetNodes.push(index);
        }
      });
      targetNodes.forEach((targetIndex) => {
        if (!addedNodeSet.has(targetIndex) && !isAdded) {
          node.tags.add(`node_${targetIndex}`);
          const extensions = assetData.nodes[targetIndex].extensions;
          plugins.forEach((plugin) => {
            if (plugin.parsedNodeAddTags)
              plugin.parsedNodeAddTags(node, extensions);
          });
          addedNodeSet.add(targetIndex);
          isAdded = true;
        }
      });
    });
  });
};
window.VRMLoader = {
  VrmAnimation,
  VrmAnimation2,
  //temp
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  VrmcMaterialsMtoon,
  createFormattedVRMHumanoid
};
window.GLTFLoader = GLTFLoader;
export {
  GLTFLoader,
  VrmAnimation,
  VrmAnimation2,
  VrmExpression,
  VrmMapList,
  VrmSpringBone,
  VrmcMaterialsMtoon,
  createFormattedVRMHumanoid
};
