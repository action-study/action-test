module.exports = {
  env: {
    jest: true,
  },
  plugins: [
    'react',
    'jest',
    '@babel',
  ],
  globals: {
    document: false,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
