import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  // define: {
  //   global: {},
  //   'process.env': {},
  // },
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
  // build: {
  //   target: 'esnext',
  //   minify: true,
  // },
  // esbuild: {
  //   treeShaking: true,
  // },
});
