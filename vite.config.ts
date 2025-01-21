import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import StylelintPlugin from 'vite-plugin-stylelint';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    StylelintPlugin({
      fix: true,
      cache: false,
      include: ['src/**/*.scss'],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
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
