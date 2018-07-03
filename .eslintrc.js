module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/base', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  rules: {
    'no-console': ['off'],
  },
};
