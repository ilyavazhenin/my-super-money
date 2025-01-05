/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  plugins: [
    '@stylistic'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier',
  ],
  rules: {
    'semi': "error",
    '@stylistic/no-trailing-spaces': "error",
},
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
