import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.coverage/**',
    // Plain JS config files. eslint-config-next routes .js files through
    // next's vendored @babel/eslint-parser, whose bundled scope analysis
    // predates ESLint 10's `scopeManager.addGlobals` API and crashes the
    // linter (only .ts/.tsx get the compatible typescript-eslint parser).
    // Still the case as of eslint-config-next 16.3.2.
    'eslint.config.js',
    '.textlintrc.js',
    '.lintstagedrc.js',
    '.commitlintrc.js',
    '.prettierrc.js',
  ]),
]);
