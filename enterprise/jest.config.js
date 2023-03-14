module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  setupFilesAfterEnv: ['jest-styled-components'],
  coveragePathIgnorePatterns: [
    'index.js',
    'index.jsx',
    'index.ts',
    'types.ts',
    'rootReducer.ts',
    'assets',
  ],
};
