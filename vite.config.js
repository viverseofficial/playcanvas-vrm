import { defineConfig } from 'vite';
import { resolve } from 'path'
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: { https: true },
  plugins: [mkcert()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'playcanvas-vrm',
      fileName: 'playcanvas-vrm',
    }
  }
});
