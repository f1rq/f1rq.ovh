import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
	plugins: [
    sveltekit(),
    copy({
      targets: [
        {
          src: 'node_modules/simple-icons-font/font/simple-icons.css',
          dest: 'static/_app' // Copy to static/_app folder
        }
      ]
    })
  ],
  optimizeDeps: {
    exclude: [
      'framesync',
      'popmotion',
      'style-value-types',
      'hey-listen',
      'tslib'
    ],
  },
  css: {
    postcss: './postcss.config.cjs' // Explicit path to config
  },
	root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['chunk-RRHJ23S2']
    }
  },
  publicDir: 'public'
});
