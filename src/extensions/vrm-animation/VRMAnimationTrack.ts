import * as pc from 'playcanvas';
import { VRMHumanoid } from '../vrm-humanoid/VRMHumanoid';
import { VRMHumanBoneName } from '../vrm-humanoid/vrm-humanoid';
import { VRMRigMap } from '../vrm-map-list';
import { VRMAnimation, IVrmaTrack, IMorphCurvePath } from './VRMAnimation';
// import { VRMLookAtQuaternionProxy } from './VRMLookAtQuaternionProxy';

/**
 * Create a playcanvas AnimTrack out of the given VRMAnimation and the VRM.
 *
 * @param vrmAnimation A {@link VRMAnimation}.
 * @returns An AnimationClip
 */

export class VRMAnimationTrack {
  private pcRef: typeof pc;
  public name: string;
  private vrmAnimation: VRMAnimation;
  private humanoid: VRMHumanoid;
  private metaVersion: 'v0' | 'v1' | null;

  constructor(
    pcRef: typeof pc,
    name: string,
    vrmAnimation: VRMAnimation,
    humanoid: VRMHumanoid,
    metaVersion: 'v0' | 'v1' | null = 'v0',
  ) {
    this.pcRef = pcRef;
    this.vrmAnimation = vrmAnimation;
    this.name = name;
    this.humanoid = humanoid;
    this.metaVersion = metaVersion;
  }

  get result(): pc.AnimTrack {
    return this.createVRMAnimTrack();
  }

  createVRMAnimTrack(): pc.AnimTrack {
    const inputs: pc.AnimData[] = [];
    const outputs: pc.AnimData[] = [];
    const curves: pc.AnimCurve[] = [];
    const vrmaTracks: IVrmaTrack[] = [];

    // Humanoid Tracks
    const humanoidTracks = this._createVRMAnimationHumanoidTracks();
    vrmaTracks.push(...humanoidTracks.translation.values());
    vrmaTracks.push(...humanoidTracks.rotation.values());

    for (let i = 0; i < vrmaTracks.length; i++) {
      inputs.push(vrmaTracks[i].input);
      outputs.push(vrmaTracks[i].output);

      // Reassign the curve.input & curve.output to match the curve index
      const _curve = new this.pcRef.AnimCurve(
        vrmaTracks[i].curve.paths,
        i,
        i,
        vrmaTracks[i].curve.interpolation,
      );
      curves.push(_curve);

      const vrmaCurve = vrmaTracks[i].curve;
      vrmaCurve.paths.forEach((graph) => {
        const morphCurvePath = graph as unknown as IMorphCurvePath;

        /**
         * Add 'SkeletonRoot' to 'hips'
         *
         * In Playcanvas, the 'SkeletonRoot' is automaticaly assigned to an 'animation' asset.
         * However, vrma file is defined as a 'container' asset, thus, the 'SkeltonRoot' needs to be assigned manually
         */
        const entityPath = morphCurvePath.entityPath;
        if (entityPath.length == 1 && entityPath[0] == 'hips') {
          entityPath.unshift('SkeletonRoot');
        }

        // Revise bone name to vrm model bone name
        const arrangedEntityPath = entityPath.map((path) => {
          const originalRigName = path;
          const vrmBoneName = VRMRigMap[originalRigName];
          const vrmNodeName = this.humanoid.getRawBoneNode(vrmBoneName)?.name;

          if (!vrmBoneName || !vrmNodeName) {
            return path;
          }
          return vrmNodeName;
        });

        if (arrangedEntityPath.length == 1 && arrangedEntityPath[0] == 'hips') {
          arrangedEntityPath.unshift('SkeletonRoot');
        }
        morphCurvePath.entityPath = arrangedEntityPath;
      });
    }

    /*     if (vrm.expressionManager != null) {
            const expressionTracks = createVRMAnimationExpressionTracks(vrmAnimation, vrm.expressionManager);
            tracks.push(...expressionTracks.preset.values());
            tracks.push(...expressionTracks.custom.values());
          }
        
          if (vrm.lookAt != null) {
            // search VRMLookAtQuaternionProxy
            let proxy = vrm.scene.children.find((obj) => obj instanceof VRMLookAtQuaternionProxy);
        
            if (proxy == null) {
              // if not found, create a new one
              console.warn(
                'createVRMAnimationClip: VRMLookAtQuaternionProxy is not found. Creating a new one automatically. To suppress this warning, create a VRMLookAtQuaternionProxy manually',
              );
        
              proxy = new VRMLookAtQuaternionProxy(vrm.lookAt);
              proxy.name = 'VRMLookAtQuaternionProxy';
              vrm.scene.add(proxy);
            } else if (proxy.name == null) {
              // if found but name is not set, set the name automatically
              console.warn(
                'createVRMAnimationClip: VRMLookAtQuaternionProxy is found but its name is not set. Setting the name automatically. To suppress this warning, set the name manually',
              );
        
              proxy.name = 'VRMLookAtQuaternionProxy';
            }
        
            // create a track
            const track = createVRMAnimationLookAtTrack(vrmAnimation, `${proxy.name}.quaternion`);
            if (track != null) {
              tracks.push(track);
            }
          } */

    return new this.pcRef.AnimTrack(this.name, this.vrmAnimation.duration, inputs, outputs, curves);
  }

  private _createVRMAnimationHumanoidTracks(): {
    translation: Map<'hips', IVrmaTrack>;
    rotation: Map<VRMHumanBoneName, IVrmaTrack>;
  } {
    const translation = new Map<'hips', IVrmaTrack>();
    const rotation = new Map<VRMHumanBoneName, IVrmaTrack>();

    for (const [name, origTrack] of this.vrmAnimation.humanoidTracks.translation.entries()) {
      const nodeName = this.humanoid.getNormalizedBoneNode(name)?.name;

      if (nodeName != null) {
        // Scale animation to match the humanoid
        const animationY = this.vrmAnimation.restHipsPosition.y;
        const humanoidHipsPosition =
          this.humanoid.rawHumanBones.hips?.node.getPosition() || new this.pcRef.Vec3();
        const humanoidY = humanoidHipsPosition.y;
        const scale = humanoidY / animationY;
        const outputData = origTrack.output.data.map(
          (v, i) => (this.metaVersion === 'v0' && i % 3 !== 1 ? -v : v) * scale,
        );

        // Update output data
        const _outputData = new Float32Array(outputData);
        const _output = new this.pcRef.AnimData(origTrack.output.components, _outputData);

        // Create keyframe track
        const vrmaTrack: IVrmaTrack = {
          curve: origTrack.curve,
          input: origTrack.input,
          output: _output,
        };

        translation.set(name, vrmaTrack);
      }
    }

    for (const [name, origTrack] of this.vrmAnimation.humanoidTracks.rotation.entries()) {
      const nodeName = this.humanoid.getNormalizedBoneNode(name)?.name;

      if (nodeName != null) {
        const outputData = origTrack.output.data.map((v, i) =>
          this.metaVersion === 'v0' && i % 2 === 0 ? -v : v,
        );
        const _outputData = new Float32Array(outputData);
        const _output = new this.pcRef.AnimData(origTrack.output.components, _outputData);

        const vrmaTrack: IVrmaTrack = {
          curve: origTrack.curve,
          input: origTrack.input,
          output: _output,
        };

        rotation.set(name, vrmaTrack);
      }
    }

    return { translation, rotation };
  }
}
