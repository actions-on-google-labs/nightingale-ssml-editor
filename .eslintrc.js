module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2017,
    },
    env: {
      es6: true,
      browser: true,
    },
    plugins: [
      '@typescript-eslint',
      'polymer',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'google',
      'plugin:polymer/polymer-3',
    ],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      // SSML tag modules may have empty onOpen function
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'error',
      // document.getElementById returns nullable HTML element,
      // which requires an assertion that the element exists
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-var-requires': 'error',
      'arrow-parens': 'warn',
      'comma-dangle': 'error',
      'comma-spacing': 'error',
      'eol-last': 'error',
      'key-spacing': 'warn',
      'indent': 'warn',
      'max-len': 'warn',
      'no-case-declarations': 'off',
      'no-undef': 'warn',
      'object-curly-spacing': 'off',
      'quotes': 'error',
      'require-jsdoc': 'off',
      'semi': 'off'
    }
  };