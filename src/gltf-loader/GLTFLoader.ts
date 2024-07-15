import * as pc from 'playcanvas';
import { loadGlbContainerFromAsset, loadGlbContainerFromUrl } from './glb-util';

export class GLTFLoader {
  #pluginsCallbacks;

  public app: pc.Application;
  public loading: boolean;
  private _pcRef: typeof pc;

  constructor(pcRef: typeof pc, app: pc.Application) {
    this.#pluginsCallbacks = new Map<string, (asset: pc.Asset) => any>();
    this.loading = false;
    this._pcRef = pcRef;
    this.app = app;
  }

  async parse(
    source: pc.Asset | string,
    name = 'Model',
    options = undefined,
    setting = {},
    needAddTags = true,
  ) {
    const plugins: any[] = [];

    return new Promise<{ entity: pc.Entity; asset: pc.Asset; version: 'v0' | 'v1' | null }>(
      (resolve, reject) => {
        const parsedCallBack = (err: Error | null, asset: pc.Asset) => {
          if (err) {
            this.loading = false;
            reject(`GLTFLoader Error: ${err}`);
          }

          // Pass parsed asset to create plugins
          this.#pluginsCallbacks.forEach((createPlugin) => {
            const plugin = createPlugin(asset);
            plugins.push(plugin);
          });

          const assetData = asset.resource.data;

          if (needAddTags) {
            this.#addEssentialTags(assetData, plugins);
          }

          const renderEntity = asset.resource.instantiateRenderEntity(setting);
          const rootEntity = new this._pcRef.Entity(name, this.app);
          rootEntity.addChild(renderEntity);
          plugins.forEach((plugin) => {
            if (plugin.instantiated) plugin.instantiated(rootEntity);
          });

          this.loading = false;

          const isV1Used = asset.resource.data.gltf.extensions?.VRMC_vrm;
          const isV0Used = asset.resource.data.gltf.extensions?.VRM;
          const version = isV1Used ? 'v1' : isV0Used ? 'v0' : null;

          resolve({ entity: rootEntity, asset, version });
        };

        if (!source) {
          reject('GLTFLoader Error: Please pass the asset or url to parse.');
        }

        this.loading = true;
        if (source instanceof this._pcRef.Asset) {
          if (source.type === 'container') {
            if (source.loaded) {
              parsedCallBack(null, source);
            } else {
              source.once('load', () => {
                parsedCallBack(null, source);
              });

              if (!this.app.assets.get(source.id)) this.app.assets.add(source);
              this.app.assets.load(source);
            }
          } else if (source.type === 'binary') {
            loadGlbContainerFromAsset(
              this._pcRef,
              source,
              options,
              name,
              parsedCallBack.bind(this),
              this.app,
            );
          } else {
            reject('GLTFLoader Error: Please pass available asset or url to parse.');
          }
        } else {
          loadGlbContainerFromUrl(
            this._pcRef,
            source,
            options,
            name,
            parsedCallBack.bind(this),
            this.app,
          );
        }
      },
    );
  }

  // Register Plugin to loader
  register(name: string, callback: (asset:any) => void) {
    if (!this.#pluginsCallbacks.has(name)) {
      this.#pluginsCallbacks.set(name, callback);
    }
  }

  // Deregister Plugin to loader
  deregister(name: string) {
    if (this.#pluginsCallbacks.has(name)) {
      this.#pluginsCallbacks.delete(name);
    }
  }

  #setExtensionsToNodes<T extends { extensions?: any }>(
    nodes: (pc.GraphNode & { extensions: T })[],
    gltfNodes: T[],
  ) {
    nodes.forEach((node, index) => {
      const gltfNodeExtensions = gltfNodes[index].extensions;

      if (gltfNodeExtensions) {
        node.extensions = gltfNodeExtensions;
      }
    });
  }

  #addEssentialTags(assetData: any, plugins: any[]) {
    // Tags Init: Node extension (from gltfNodes extension)
    // Node's index will same as gltfNode's index, so we can map them together
    const gltfNodes = assetData.gltf.nodes;
    const nodes = assetData.nodes;

    this.#setExtensionsToNodes(nodes, gltfNodes);

    assetData.scenes.forEach((scene: pc.GraphNode) => {
      const addedNodeSet = new Set<number>([]);

      scene.forEach((node) => {
        let isAdded = false;
        let targetNodes: number[] = [];

        // Check if there are multiple node with same name and on the same hierarchy (They will have same path)
        assetData.nodes.forEach((originNode: { path: string }, index: number) => {
          if (node.path === originNode.path) {
            targetNodes.push(index);
          }
        });

        targetNodes.forEach((targetIndex) => {
          if (!addedNodeSet.has(targetIndex) && !isAdded) {
            // Add node index
            node.tags.add(`node_${targetIndex}`);

            const extensions = assetData.nodes[targetIndex].extensions;

            plugins.forEach((plugin) => {
              if (plugin.parsedNodeAddTags) plugin.parsedNodeAddTags(node, extensions);
            });

            addedNodeSet.add(targetIndex);
            isAdded = true;
          }
        });
      });
    });
  }

  static registerAnimation(
    entity: pc.Entity,
    animations: pc.Asset[],
    { useResourceName, defaultPlayIndex } = {
      useResourceName: false,
      defaultPlayIndex: 0,
    },
  ) {
    if (animations.length === 0) {
      return;
    }

    entity.addComponent('anim', {
      activate: true,
    });

    animations.forEach((ani: pc.Asset, i: number) => {
      const resourceName = ani.resource.name.replace('.', '_');
      if (entity.anim) {
        entity.anim.assignAnimation(
          useResourceName ? resourceName : `ANIMATION_${i}`,
          ani.resource,
        );
      }
    });

    if (defaultPlayIndex !== null) {
      const defaultAnimationName = useResourceName
        ? animations[defaultPlayIndex].resource.name
        : `ANIMATION_${defaultPlayIndex}`;

      if (
        entity.anim &&
        entity.anim.baseLayer.states.find((state: string) => state === defaultAnimationName)
      ) {
        entity.anim.baseLayer.transition(defaultAnimationName);
      }
    }
  }
}
