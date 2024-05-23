import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: { https: true, port: 8080 },
  plugins: [mkcert()],
  assetsDir: 'public',
});
