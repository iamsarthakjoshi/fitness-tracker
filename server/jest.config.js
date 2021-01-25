module.exports = {
  roots: ['./src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // for tsconfig-paths (should put "baseUrl": "./" & "paths": { "src/*": ["src/*"],} in tsconfig.json's compinerOptions obj before hand)
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1'
  }
};
