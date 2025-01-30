import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*',
          dest: 'src/assets',
        },
      ],
    }),
    tsconfigPaths(),
    react(),
  ],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
