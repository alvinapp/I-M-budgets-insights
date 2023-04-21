const config = {
  verbose: true,
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
    '^client/(.*)': '<rootDir>/src/client/$1',
    '^server/(.*)': '<rootDir>/src/server/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*_test.[jt]s?(x)'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  setupFiles: ['<rootDir>/__tests__/setupTests.js'],
  globals: {
    AppConfig: {
      TOKEN: '',
      IDENTIFIER: '',
    },
  },
};

module.exports = config;
