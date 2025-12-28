import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.js'],
      fileName: () => `sw-mock.js`,
      name: 'swMock',
      formats: ['es'],
    },
  },
});
