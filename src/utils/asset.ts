export const addIndexToNodeTags = (asset: pc.Asset) => {
  if (!asset.resource) {
    console.error('addIndexToNodeTags Error: asset.resource is not available');
    return;
  }

  const resource = asset.resource as { data: { gltf: any; nodes: pc.GraphNode[] } };
  if (!(resource.data && resource.data.gltf)) {
    console.error('addIndexToNodeTags Error: asset.resource.data.gltf is not available');
    return;
  }

  const assetData = resource.data;
  const nodes = assetData.nodes;

  nodes.forEach((node: pc.GraphNode, index: number) => {
    node.tags.add(`node_${index}`);
  });
};

export const getVersion = (asset: pc.Asset) => {
  const resource = asset.resource as { data: { gltf: any } };
  const isV1Used = resource.data.gltf.extensions?.VRMC_vrm;
  const isV0Used = resource.data.gltf.extensions?.VRM;
  return isV1Used ? 'v1' : isV0Used ? 'v0' : null;
};
