module.exports = {
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/src/components/**/*.spec.{js,jsx}',
    '**/src/utils/**/*.spec.js',
  ],
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>/src/mocks/styles.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.*\\.scss$',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/mocks/',
    '<rootDir>/src/constants/',
    '<rootDir>/src/wordings/',
  ],
};
