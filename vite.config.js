import { defineConfig } from 'vite';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';
import banner from 'vite-plugin-banner'
import pkg from './package.json'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// For npm typescript version
// import dts from 'vite-plugin-dts';

const isDevMode = process.env.DEV_MODE === 'true'

export default defineConfig({
  server: { https: true },
  plugins: [
    mkcert(),
    banner(
      `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n */`
    ),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/playcanvas-vrm.js',
          dest: '../examples/project/public'
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'playcanvas-vrm',
      fileName: 'playcanvas-vrm',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['playcanvas'], 
    },
    minify: !isDevMode,
  },
  assetsInclude: ['**/*.dds'],
});
