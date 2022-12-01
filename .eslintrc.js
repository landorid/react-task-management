module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'sonarjs', '@typescript-eslint'],
  rules: {},
};
