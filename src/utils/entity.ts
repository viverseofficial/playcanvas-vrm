import * as pc from 'playcanvas';

export const collectMeshInstances = (entity: pc.Entity) => {
  const meshInstances = [];
  if (entity) {
    const components = entity.findComponents('render');

    for (let i = 0; i < components.length; i++) {
      const render = components[i] as pc.RenderComponent;
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
