import litUserDeclarationVS from './vert/litUserDeclarationVS.glsl';
import litUserMainEndVS from './vert/litUserMainEndVS.glsl';
import litUserDeclarationPS from './frag/litUserDeclarationPS.glsl';
import lightPS from './includes/light.glsl';
import litUserMainEndPS from './frag/litUserMainEndPS.glsl';

export const shaderChunksMtoon = {
  litUserDeclarationVS,
  litUserMainEndVS,
  litUserDeclarationPS: litUserDeclarationPS,
  litUserCodePS: lightPS,
  litUserMainEndPS,
};
