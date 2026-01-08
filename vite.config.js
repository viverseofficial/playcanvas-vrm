import { defineConfig } from 'vite';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';
import banner from 'vite-plugin-banner';
import pkg from './package.json';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dts from 'vite-plugin-dts';

export default defineConfig(() => {
  const isMinify = process.env.MINIFY_MODE === 'true';
  const fileName = isMinify ? 'playcanvas-vrm.min' : 'playcanvas-vrm';

  return {
    server: { https: true },
    assetsInclude: ['**/*.dds'],
    plugins: [
      !isMinify &&
        dts({
          entryRoot: './src',
          outDir: './dist',
          exclude: ['examples', 'dist', 'node_modules'],
          rollupTypes: false,
          copyDtsFiles: true,
        }),
      mkcert(),
      banner(`/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n */`),
      viteStaticCopy({
        targets: [
          {
            src: 'dist/playcanvas-vrm.js',
            dest: '../examples/project/public',
          },
        ],
      }),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: !isMinify,
      minify: isMinify,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'playcanvas-vrm',
        fileName: () => `${fileName}.js`,
        formats: ['es'],
      },
    },
  };
});
