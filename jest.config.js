module.exports = {
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '.*\\.js$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
