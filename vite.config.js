import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Modern-Art-Gallery---SCSS-/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        location: 'location.html',
      },
    },
  },
});