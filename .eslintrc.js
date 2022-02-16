module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:testing-library/react',
    // 'plugin:jest-dom/recommended',
    // 'plugin:cypress/recommended',
    'standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'cypress',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-use-before-define': ['off'],
    'comma-dangle': ['error', 'always-multiline'],
    'react-hooks/exhaustive-deps': ['off'],
    'no-console': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-function': ['off'],
  },
}
