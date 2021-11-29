import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

const PACKAGE_ROOT = __dirname;
const SRC_PATH = `${path.resolve(PACKAGE_ROOT, 'src')}`;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@universe/client': SRC_PATH,
    },
  },
  plugins: [react()],
  esbuild: {
    target: 'safari14',
  },
});
