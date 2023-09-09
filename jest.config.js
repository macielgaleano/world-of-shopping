module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.spec.{js,jsx}',
    '<rootDir>/src/utils/**/*.spec.js',
    '!<rootDir>/src/mocks/**',
    '!**/node_modules/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>/src/mocks/styles.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.*\\.scss$',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/mocks/',
    '<rootDir>/src/constants/',
    '<rootDir>/src/wordings/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/mocks/',
    '<rootDir>/src/constants/',
    '<rootDir>/src/wordings/',
  ],
};
