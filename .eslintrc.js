module.exports = {
  plugins: [
    'react',
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
