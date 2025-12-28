import { defineConfig } from 'tsdown';

// export default defineConfig({
//   entry: {
//     index: './src/index.ts',
//     cli: './src/cli.ts',
//   },
//   format: ['esm'],
//   dts: {
//     // 关键：告诉 tsdown 递归构建引用项目
//     build: true,
//   },
//   clean: true,
//   extension: '.js',
//   banner: ({ entry }) => {
//     if (entry === 'cli') {
//       return '#!/usr/bin/env node';
//     }
//   },
// });

export default defineConfig([
  {
    entry: 'src/cli.ts',
    platform: 'node',
    format: ['esm'],
    dts: false,
    clean: true,
  },
  {
    entry: 'src/index.ts',
    platform: 'browser',
    format: ['esm'],
    dts: {
      build: true,
    },
    clean: true,
  },
]);
