import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import pluginOxlint from 'eslint-plugin-oxlint';

export default defineConfig(
  // 1. 设置忽略目录
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  // 2. 基础 JS 推荐规则
  eslint.configs.recommended,
  // 3. TS 推荐规则（这里不需要解构，defineConfig 会自动处理数组）
  ...tseslint.configs.recommended,
  // 4. 针对 TS 文件的特定规则
  {
    files: ['**/*.{ts,mts,tsx,js,mjs,cjs}'],
    rules: {
      'no-unused-vars': 'off', // 关闭原生规则
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-undef': 'off', // TS 环境下不需要此规则
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // 5. Oxlint 推荐配置（放在最后以确保性能优化覆盖）
  ...pluginOxlint.configs['flat/recommended'],
);
