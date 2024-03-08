module.exports = {
  plugins: [
    'react',
    'jest',
    '@babel',
  ],
  globals: {
    document: false,
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
