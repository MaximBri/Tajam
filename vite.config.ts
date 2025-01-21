import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import StylelintPlugin from 'vite-plugin-stylelint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    StylelintPlugin({
      fix: true,
      cache: false,
      include: ['src/**/*.scss'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/Tajam/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/app/styles/_variables.scss" as *;
          @use "@/app/styles/_mixins.scss" as *;
        `,
      },
    },
  },
});
