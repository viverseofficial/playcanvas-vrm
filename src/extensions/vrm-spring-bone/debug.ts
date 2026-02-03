import * as pc from 'playcanvas';
import { VRMSpringBoneManager } from './VRMSpringBoneManager';
import { VRMSpringBoneColliderType } from './VRMSpringBoneCollider';

export function addColliderDebugVisualization(
  pcRef: typeof pc,
  collider: VRMSpringBoneColliderType,
): void {
  const child = new pcRef.Entity();
  collider.addChild(child);

  const radius = collider.shape.radius * 2;
  child.setLocalScale(radius, radius, radius);

  const material = new pcRef.StandardMaterial();
  material.emissive = new pcRef.Color(1, 0, 0);
  material.diffuse = new pcRef.Color(1, 0, 0);
  material.emissiveIntensity = 0.5;
  material.update();

  child.addComponent('render', {
    type: 'sphere',
    castShadows: false,
    receiveShadows: false,
    material,
  });
}

export function addJointDebugVisualization(pcRef: typeof pc, manager: VRMSpringBoneManager): void {
  for (const springBone of manager.joints) {
    const debug = new pcRef.Entity();
    springBone.bone.addChild(debug);
    debug.setLocalScale(0.02, 0.02, 0.02);

    const material = new pcRef.StandardMaterial();
    material.emissive = new pcRef.Color(0, 1, 0);
    material.diffuse = new pcRef.Color(0, 1, 0);
    material.emissiveIntensity = 0.5;
    material.update();
    debug.addComponent('render', {
      type: 'sphere',
      castShadows: false,
      receiveShadows: false,
      material,
    });
  }
}
