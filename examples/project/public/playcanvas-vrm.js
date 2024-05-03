/**
 * name: playcanvas-vrm
 * version: v1.0.3
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
const POSSIBLE_SPEC_VERSIONS = /* @__PURE__ */ new Set(["1.0", "1.0-beta"]);
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
  POSSIBLE_SPEC_VERSIONS,
  VRMExpressionPresetName,
  VRMHumanBoneList,
  VRMHumanBoneParentMap,
  VRMRigMap,
  expressionMateriaPropertyNameMapMap,
  thumbBoneNameMap,
  v0ExpressionMaterialColorMap,
  v0v1PresetNameMap
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
    const rigBones = {};
    const boneWorldPositions = {};
    const boneWorldRotations = {};
    const root = new pcRef.Entity();
    root.name = "VRMHumanoidRig";
    VRMHumanBoneList.forEach((boneName) => {
      const boneNode = modelRig.getBoneNode(boneName);
      if (boneNode) {
        const boneWorldPosition = new pcRef.Vec3();
        const boneWorldRotation = new pcRef.Quat();
        const worldTransform = boneNode.getWorldTransform();
        worldTransform.getTranslation(boneWorldPosition);
        const eulers = worldTransform.getEulerAngles();
        boneWorldRotation.setFromEulerAngles(eulers);
        boneWorldPositions[boneName] = boneWorldPosition;
        boneWorldRotations[boneName] = boneWorldRotation;
        boneNode.getLocalRotation().clone();
      }
    });
    VRMHumanBoneList.forEach((boneName) => {
      var _a;
      const boneNode = modelRig.getBoneNode(boneName);
      const boneWorldPosition = boneWorldPositions[boneName];
      if (boneNode && boneWorldPosition) {
        let currentBoneName = boneName;
        let parentWorldPosition;
        let parentWorldRotation;
        while (parentWorldPosition == null) {
          currentBoneName = VRMHumanBoneParentMap[currentBoneName];
          if (currentBoneName == null) {
            break;
          }
          parentWorldPosition = boneWorldPositions[currentBoneName];
          parentWorldRotation = boneWorldRotations[currentBoneName];
        }
        const rigBoneNode = new pcRef.Entity();
        rigBoneNode.name = boneNode.name;
        const parentRigBoneNode = currentBoneName ? (_a = rigBones[currentBoneName]) == null ? void 0 : _a.node : root;
        (parentRigBoneNode || root).addChild(rigBoneNode);
        rigBoneNode.setLocalPosition(boneWorldPosition);
        if (parentWorldPosition) {
          const localPosition = rigBoneNode.getLocalPosition().clone();
          localPosition.sub(parentWorldPosition);
          rigBoneNode.setLocalPosition(localPosition);
        }
        rigBones[boneName] = { node: rigBoneNode };
        parentWorldRotation ?? new pcRef.Quat();
      }
    });
    return {
      rigBones,
      root
    };
  }
  constructor(pcRef, humanoid) {
    const { rigBones, root } = VRMHumanoidRig._setupTransforms(pcRef, humanoid);
    super(rigBones);
    this.root = root;
  }
}
class VRMHumanoid {
  constructor(pcRef, humanBones) {
    this._humanBones = humanBones;
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
    return ((_a = this._humanBones[name]) == null ? void 0 : _a.entity) || null;
  }
}
function createVRMHumanBones(schemaHumanoid, glbAsset, entity) {
  const schemaHumanBones = schemaHumanoid.humanBones;
  const existsPreviousThumbName = schemaHumanBones.findIndex((humanBone) => {
    return humanBone.bone === "leftThumbIntermediate" || humanBone.bone === "rightThumbIntermediate";
  });
  const humanBones = {};
  if (schemaHumanoid.humanBones != null) {
    Object.entries(schemaHumanBones).map(([, schemaHumanBone]) => {
      var _a;
      let boneName = schemaHumanBone.bone;
      const index = schemaHumanBone.node;
      if (existsPreviousThumbName !== -1) {
        const thumbBoneName = thumbBoneNameMap[boneName];
        if (thumbBoneName != null) {
          boneName = thumbBoneName;
        }
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
  if (schemaHumanoid.humanBones) {
    for (const property in schemaHumanoid.humanBones) {
      let boneName = property;
      const index = schemaHumanoid.humanBones[property].node;
      const node = glbAsset.resource.data.nodes[index];
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
function createFormattedVRMHumanoid(pcRef, vrmAsset, renderEntity) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const VRM = (_b = (_a = vrmAsset.resource.data.gltf) == null ? void 0 : _a.extensions) == null ? void 0 : _b.VRM;
  const VRMC_vrm = (_d = (_c = vrmAsset.resource.data.gltf) == null ? void 0 : _c.extensions) == null ? void 0 : _d.VRMC_vrm;
  if (!VRM && !VRMC_vrm) {
    console.warn("CreateFormattedVRMHumanoid: Please check. It is not a vrm avatar.");
    return null;
  }
  let humanBones = {};
  if (VRM) {
    const schemaHumanoid = (_g = (_f = (_e = vrmAsset.resource.data.gltf) == null ? void 0 : _e.extensions) == null ? void 0 : _f.VRM) == null ? void 0 : _g.humanoid;
    humanBones = createVRMHumanBones(schemaHumanoid, vrmAsset, renderEntity);
  } else if (VRMC_vrm) {
    const schemaHumanoid = (_j = (_i = (_h = vrmAsset.resource.data.gltf) == null ? void 0 : _h.extensions) == null ? void 0 : _i.VRMC_vrm) == null ? void 0 : _j.humanoid;
    const VRMCHumanBones = createVRMCHumanBones(schemaHumanoid, vrmAsset, renderEntity);
    if (VRMCHumanBones)
      humanBones = VRMCHumanBones;
  }
  const humanoid = new VRMHumanoid(pcRef, humanBones);
  return humanoid;
}
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
const loadAnimation = (pcRef, animationAssets, entity, humanoid, {
  vrmHipsHeight,
  vrmHipsDeep,
  motionHipsHeight,
  version = "v0"
}) => {
  const hipPositionOutputIndexes = {};
  const scaleOutputIndexes = {};
  const calcQuat = new pcRef.Quat();
  return animationAssets.map((animationAsset) => {
    var _a;
    const resource = animationAsset.asset.type === "container" ? (_a = animationAsset.asset.resource.animations[0]) == null ? void 0 : _a.resource : animationAsset.asset.resource;
    if (resource) {
      const animTrack = createAnimTrack(pcRef, resource);
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
            const vrmNodeName = (_a2 = humanoid.getNormalizedBoneNode(vrmBoneName)) == null ? void 0 : _a2.name;
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
        var _a2;
        const isScaleOutput = scaleOutputIndexes[outputIndex];
        const outputCurve = animTrack.curves.find((curve) => curve.output === outputIndex);
        let entityPath = "";
        if (outputCurve) {
          const path = outputCurve.paths[0];
          const entityPaths = path.entityPath;
          entityPath = entityPaths[entityPaths.length - 1];
        }
        if (output.components === 3) {
          if (!isScaleOutput) {
            const newData = output.data.map((v, index) => {
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
              return v * hipsPositionScaleY;
            });
            output._data = newData;
          }
        } else if (version === "v1") {
          const newData = [...output.data];
          const mixamoRigNode = entity.findByName(entityPath);
          const restRotationInverse = mixamoRigNode == null ? void 0 : mixamoRigNode.getRotation().invert();
          const parentRestWorldRotation = (_a2 = mixamoRigNode == null ? void 0 : mixamoRigNode.parent) == null ? void 0 : _a2.getRotation();
          if (restRotationInverse && parentRestWorldRotation) {
            for (let i = 0; i < newData.length; i += 4) {
              const flatQuaternion = newData.slice(i, i + 4);
              const _quatA = new pcRef.Quat(flatQuaternion);
              const calParentRestWorldRotation = calcQuat.copy(parentRestWorldRotation);
              _quatA.copy(calParentRestWorldRotation.mul(_quatA));
              _quatA.mul(restRotationInverse);
              flatQuaternion[0] = _quatA.x;
              flatQuaternion[1] = _quatA.y;
              flatQuaternion[2] = _quatA.z;
              flatQuaternion[3] = _quatA.w;
              flatQuaternion.forEach((v, index) => {
                newData[index + i] = v;
              });
            }
          }
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
const createVRMAnimation = (pcRef, animationAssets, asset, entity, humanoid, motionHipsHeight) => {
  var _a, _b, _c;
  let humanoidResult = null;
  if (humanoid) {
    humanoidResult = humanoid;
  } else if (asset && entity) {
    humanoidResult = createFormattedVRMHumanoid(pcRef, asset, entity);
  }
  if (!humanoidResult) {
    console.error('CreateAnimation: Please provide "humanoid" or "asset and entity".');
    return null;
  }
  const isV1Used = (_a = asset.resource.data.gltf.extensions) == null ? void 0 : _a.VRMC_vrm;
  const isV0Used = (_b = asset.resource.data.gltf.extensions) == null ? void 0 : _b.VRM;
  const version = isV1Used ? "v1" : isV0Used ? "v0" : null;
  const vrmHipsPosition = ((_c = humanoidResult.rawHumanBones.hips) == null ? void 0 : _c.node.getPosition()) || new pcRef.Vec3();
  const vrmHipsY = vrmHipsPosition.y;
  const vrmHipsHeight = Math.abs(vrmHipsY - 0);
  const vrmHipsZ = vrmHipsPosition.z;
  const vrmHipsDeep = Math.abs(vrmHipsZ - 0);
  return loadAnimation(pcRef, animationAssets, entity, humanoidResult, {
    vrmHipsHeight,
    vrmHipsDeep,
    ...motionHipsHeight && { motionHipsHeight },
    ...version && { version }
  });
};
const assignAnimation = (entity, {
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
  assignAnimation,
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
    if (!POSSIBLE_SPEC_VERSIONS.has(specVersion)) {
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
    return new Promise((resolve, reject) => {
      const parsedCallBack = (err, asset) => {
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
        if (renderEntity.name !== "Room Objects" && name === "Objects") {
          const rootObjectEntity = new this._pcRef.Entity("Room Objects");
          rootObjectEntity.addChild(renderEntity);
          rootEntity.addChild(rootObjectEntity);
        } else {
          rootEntity.addChild(renderEntity);
        }
        plugins.forEach((plugin) => {
          if (plugin.instantiated)
            plugin.instantiated(rootEntity);
        });
        this.loading = false;
        resolve({ entity: rootEntity, asset });
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
    });
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
  VrmExpression,
  VrmSpringBone,
  VrmMapList,
  createFormattedVRMHumanoid
};
window.GLTFLoader = GLTFLoader;
export {
  GLTFLoader,
  VrmAnimation,
  VrmExpression,
  VrmMapList,
  VrmSpringBone,
  createFormattedVRMHumanoid
};
