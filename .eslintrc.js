module.exports = {
  plugins: [
    'react',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
