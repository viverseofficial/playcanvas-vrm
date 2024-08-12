import * as pc from 'playcanvas';
import { IMorphCurvePath } from '../vrm-animation-interfaces';

export function cloneAnimTrack(pcRef: typeof pc, origAnimTrack: pc.AnimTrack): pc.AnimTrack {
  const inputs = origAnimTrack.inputs.map(
    (input) => new pcRef.AnimData(input.components, input.data),
  );
  const outputs = origAnimTrack.outputs.map(
    (output) => new pcRef.AnimData(output.components, output.data),
  );
  const curves = origAnimTrack.curves.map((curve) => {
    const curvePaths = curve.paths.map((path) => {
      const morphCurvePath = path as unknown as IMorphCurvePath;
      return {
        component: morphCurvePath.component,
        entityPath: [...morphCurvePath.entityPath],
        propertyPath: [...morphCurvePath.propertyPath],
      };
    });

    return new pcRef.AnimCurve(curvePaths as any, curve.input, curve.output, curve.interpolation);
  });

  return new pcRef.AnimTrack(origAnimTrack.name, origAnimTrack.duration, inputs, outputs, curves);
}
