import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const srcPath = fileURLToPath(new URL('./src', import.meta.url));
const assetsPath = fileURLToPath(new URL('./src/assets', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcPath,
      '@assets': assetsPath,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Only tokens and mixins are injected into every SCSS module —
        // global styles (reset, base, text) are imported once in main.tsx.
        additionalData: `
          @import '@/assets/scss/common/colors';
          @import '@/assets/scss/common/variables';
        `,
      },
    },
  },
});
