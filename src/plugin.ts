import { execSync } from 'node:child_process';
export function mockswPlugin(path = 'public') {
  return {
    name: 'vite-plugin-mocksw',
    enforce: 'pre',
    buildStart() {
      execSync(`npx mocksw init ${path}`, { stdio: 'inherit' });
    },
  };
}
