import * as pc from 'playcanvas';

/**
 * @name utils#loadGlbContainerFromAsset
 * @function
 * @description Load a GLB container from a binary asset that is a GLB. If the asset is not loaded yet, it will load the asset.
 * @param {pc.Asset} glbBinAsset The binary asset that is the GLB.
 * @param {Object} options Optional. Extra options to do extra processing on the GLB.
 * @param {String} assetName. Name of the asset.
 * @param {Function} callback The callback function for loading the asset. Signature is `function(string:error, asset:containerAsset)`.
 * If `error` is null, then the load is successful.
 * @returns {pc.Asset} The asset that is created for the container resource.
 */
export const loadGlbContainerFromAsset = function (
  pcRef: typeof pc,
  glbBinAsset: pc.Asset,
  options:
    | {
        crossOrigin?: 'anonymous' | 'use-credentials' | null;
      }
    | undefined,
  assetName: string,
  callback: (error: Error | null, asset: pc.Asset) => void,
  assignApp?: pc.Application | pc.AppBase,
) {
  const app = assignApp || pc.Application.getApplication('application-canvas');

  if (!app) {
    console.error('loadGlbContainerFromAsset: Can not find app.');
    return;
  }

  const onAssetReady = function (asset: pc.Asset) {
    const blob = new Blob([asset.resource]);
    const data = URL.createObjectURL(blob);
    return loadGlbContainerFromUrl(
      pcRef,
      data,
      options,
      assetName,
      function (error: Error | null, asset: pc.Asset) {
        callback(error, asset);
        URL.revokeObjectURL(data);
      },
      app,
    );
  };

  if (!glbBinAsset.loaded) {
    glbBinAsset.ready(onAssetReady);
    app.assets.load(glbBinAsset);
  } else {
    onAssetReady(glbBinAsset);
  }
};

/**
 * @name utils#loadGlbContainerFromUrl
 * @function
 * @description Load a GLB container from a URL that returns a `model/gltf-binary` as a GLB.
 * @param {String} url The URL for the GLB
 * @param {Object} options Optional. Extra options to do extra processing on the GLB.
 * @param {String} assetName. Name of the asset.
 * @param {Function} callback The callback function for loading the asset. Signature is `function(string:error, asset:containerAsset)`.
 * If `error` is null, then the load is successful.
 * @returns {pc.Asset} The asset that is created for the container resource.
 */
export const loadGlbContainerFromUrl = function (
  pcRef: typeof pc,
  url: string,
  options:
    | {
        crossOrigin?: 'anonymous' | 'use-credentials' | null;
      }
    | undefined,
  assetName: string,
  callback: (error: Error | null, asset: pc.Asset) => void,
  assignApp?: pc.Application | pc.AppBase,
) {
  const app = assignApp || pc.Application.getApplication('application-canvas');

  if (!app) {
    console.error('loadGlbContainerFromAsset: Can not find app.');
    return;
  }

  // VivePort Notice: Find that if you add .glb, it will make objects.gltf model failed to load
  // const filename = assetName + ".glb";
  const filename = assetName;
  const file = {
    url: url,
    filename: filename,
  };

  const asset = new pcRef.Asset(filename, 'container', file, undefined, options);
  asset.once('load', function (containerAsset) {
    if (callback) {
      // As we play animations by name, if we have only one animation, keep it the same name as
      // the original container otherwise, postfix it with a number
      const animations = containerAsset.resource.animations;
      if (animations.length == 1) {
        animations[0].name = assetName;
      } else if (animations.length > 1) {
        for (let i = 0; i < animations.length; ++i) {
          animations[i].name = assetName + ' ' + i.toString();
        }
      }

      callback(null, containerAsset);
    }
  });

  app.assets.add(asset);
  app.assets.load(asset);

  return asset;
};
