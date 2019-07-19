module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "comma-dangle": 0,
    "consistent-return": 0,
    "function-paren-newline": ["error", "never"],
    "implicit-arrow-linebreak": ["off"],
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "no-shadow": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "no-unused-expressions": 0,
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],    
    "linebreak-style": 0
  },
};
