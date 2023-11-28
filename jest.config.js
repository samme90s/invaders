/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
      preset: 'ts-jest',
      testEnvironment: 'node',
      // Coverage configuration
      // collectCoverage: true,
      // Remove coverage for .d.ts files and index.ts files
      // collectCoverageFrom: ['./src/**/*.ts', '!**/*.d.ts', '!**/index.ts'],
      coverageThreshold: {
            global: {
                  lines: 90,
            },
      },
}
