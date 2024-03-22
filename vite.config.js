import { defineConfig } from 'vite';
import { resolve } from 'path';
import mkcert from 'vite-plugin-mkcert';
import dts from 'vite-plugin-dts';

export default defineConfig({
  server: { https: true },
  plugins: [
    mkcert(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'playcanvas-vrm',
      fileName: 'playcanvas-vrm',
      formats: ['es'],
    },
    minify: false,
  },
});
