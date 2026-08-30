import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],

  test: {
    globals: true,

    include: ['tests/**/*.{spec,test,e2e}.ts'],

    coverage: {
      provider: 'v8',
      reporter: ['lcov', 'text', 'json', 'html'],
      include: ['src/**/*.ts'],

      thresholds: {
        lines: 100,
        statements: 100,
        branches: 100,
        functions: 100,
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
