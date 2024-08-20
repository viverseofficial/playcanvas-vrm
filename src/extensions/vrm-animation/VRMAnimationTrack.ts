import * as pc from 'playcanvas';
import { VRMHumanoid } from '../vrm-humanoid/VRMHumanoid';
import { VRMHumanBoneName } from '../vrm-humanoid/vrm-humanoid';
import { VRMRigMap } from '../vrm-map-list';
import { VRMAnimation } from './VRMAnimation';
import { IVrmaTrack, IMorphCurvePath } from './vrm-animation-interfaces';

/**
 * Create a playcanvas AnimTrack out of the given VRMAnimation and the VRM.
 *
 * @param vrmAnimation A {@link VRMAnimation}.
 * @returns An AnimationClip
 */

export class VRMAnimationTrack {
  private pcRef: typeof pc;
  private stateName: string;
  public name: string;
  private vrmAnimation: VRMAnimation;
  private humanoid: VRMHumanoid;
  private metaVersion: 'v0' | 'v1' | null;

  constructor(
    pcRef: typeof pc,
    stateName: string,
    name: string,
    vrmAnimation: VRMAnimation,
    humanoid: VRMHumanoid,
    metaVersion: 'v0' | 'v1' | null = 'v0',
  ) {
    this.pcRef = pcRef;
    this.vrmAnimation = vrmAnimation;
    this.stateName = stateName;
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
    const humanoidTracks = this._createHumanoidTracks();
    vrmaTracks.push(...humanoidTracks.translation.values());
    vrmaTracks.push(...humanoidTracks.rotation.values());

    // Look At Tracks
    const lookAtTracks = this._createLookAtTracks() ?? this._resetLookAtTrack(vrmaTracks[0].input);
    vrmaTracks.push(...lookAtTracks.values());

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
         * Add 'SkeletonRoot'
         *
         * In Playcanvas, the 'SkeletonRoot' is automaticaly assigned to an 'animation' asset.
         * However, vrma file is defined as a 'container' asset, thus, the 'SkeltonRoot' needs to be assigned manually
         */
        const entityPath = morphCurvePath.entityPath;
        entityPath.unshift('SkeletonRoot');

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

        morphCurvePath.entityPath = arrangedEntityPath;
      });
    }

    // Fire expression
    const events = new this.pcRef.AnimEvents([{ name: `vrma: ${this.stateName}`, time: 0 }]);

    return new this.pcRef.AnimTrack(
      this.name,
      this.vrmAnimation.duration,
      inputs,
      outputs,
      curves,
      events,
    );
  }

  private _createHumanoidTracks(): {
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

  private _createLookAtTracks(): Map<VRMHumanBoneName, IVrmaTrack> | null {
    const origTrack: IVrmaTrack | null = this.vrmAnimation.lookAtTrack;

    if (!origTrack) return null;

    const Tracks: Map<VRMHumanBoneName, IVrmaTrack> = new Map();
    const eyes: VRMHumanBoneName[] = ['leftEye', 'rightEye'];

    const lookAtScale = (src: number, index: number) => {
      const indexOrder = index % 4;
      const w = origTrack.output.data[index + 3 - indexOrder];
      const _w = w === 0 ? 1 : w;

      switch (indexOrder) {
        case 0:
          return (src / _w) * 0.06; // pitch
        case 1:
          return (src / _w) * 0.08; // yaw
        default:
          return 1;
      }
    };

    const outputData = origTrack.output.data.map((v, i) => {
      // if (i === 4) {
      //   v = 1;
      // }
      // !!! Test Required !!! Look up or down vrma
      const _v = (this.metaVersion === 'v0' && i % 4 == 0 ? -v : v) * lookAtScale(v, i);
      return _v;
    });

    // Update output data
    const _outputData = new Float32Array(outputData);
    const _output = new this.pcRef.AnimData(origTrack.output.components, _outputData);

    const vrmaCurve = origTrack.curve;

    vrmaCurve.paths.forEach((graph) => {
      const morphCurvePath = graph as unknown as IMorphCurvePath;

      eyes.forEach((eye) => {
        morphCurvePath.entityPath = [eye];
        const paths = [{ ...morphCurvePath }];

        const _curve = new this.pcRef.AnimCurve(
          paths as any,
          vrmaCurve.input,
          vrmaCurve.output,
          vrmaCurve.interpolation,
        );

        const vrmaTrack: IVrmaTrack = {
          curve: _curve,
          input: origTrack.input,
          output: _output,
        };
        Tracks.set(eye, vrmaTrack);
      });
    });

    return Tracks;
  }
  private _resetLookAtTrack(input: pc.AnimData): Map<VRMHumanBoneName, IVrmaTrack> {
    const Tracks: Map<VRMHumanBoneName, IVrmaTrack> = new Map();
    const eyes: VRMHumanBoneName[] = ['leftEye', 'rightEye'];
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
        component: 'graph',
        propertyPath: ['localRotation'],
      } as unknown as IMorphCurvePath;
      const _curve = new this.pcRef.AnimCurve([{ ...path }] as any, 0, 0, 1);
      const vrmaTrack = {
        curve: _curve,
        input: input,
        output: _output,
      };
      Tracks.set(eye, vrmaTrack);
    });

    return Tracks;
  }
}
