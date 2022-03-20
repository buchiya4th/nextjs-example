const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(mdx)$": "<rootDir>/.jest/__mocks__/mdx.ts"
  },
}

module.exports = createJestConfig(customJestConfig)
