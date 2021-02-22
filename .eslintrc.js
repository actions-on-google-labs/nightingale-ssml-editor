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
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      'arrow-parens': 'warn',
      'comma-dangle': 'warn',
      'comma-spacing': 'warn',
      'eol-last': 'warn',
      'key-spacing': 'warn',
      'indent': 'warn',
      'max-len': 'warn',
      'no-case-declarations': 'off',
      'no-undef': 'warn',
      'object-curly-spacing': 'off',
      'quotes': 'warn',
      'require-jsdoc': 'off',
      'semi': 'off'
    }
  };