import * as pc from 'playcanvas';
import { loadGlbContainerFromAsset, loadGlbContainerFromUrl } from './utils/glb-utils';
import { addIndexToNodeTags, getVersion } from './utils/asset-utils';

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

          if (needAddTags) {
            this.#addEssentialTags(asset);
          }

          const renderEntity = asset.resource.instantiateRenderEntity(setting);
          const rootEntity = new this._pcRef.Entity(name, this.app);
          rootEntity.addChild(renderEntity);
          plugins.forEach((plugin) => {
            if (plugin.instantiated) plugin.instantiated(rootEntity);
          });

          this.loading = false;
          const version = getVersion(asset);

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
  register(name: string, callback: (asset: any) => void) {
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

  #addEssentialTags(asset: pc.Asset) {
    const gltfNodes = asset.resource.data.gltf.nodes;
    const nodes = asset.resource.data.nodes;
    this.#setExtensionsToNodes(nodes, gltfNodes);
    addIndexToNodeTags(asset);
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
