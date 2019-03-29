module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['warn'],
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    complexity: ['warn', 5],
    'max-statements': ['warn', {max: 10}],
    'max-statements-per-line': ['warn', {max: 1}],
    'max-nested-callbacks': ['warn', {max: 2}],
    'max-depth': ['warn', {max: 2}],
    eqeqeq: ['warn', 'always'],
    'no-return-assign': ['warn', 'always'],
    'max-lines': ['warn', {max: 50, skipComments: true}],
    'max-len': ['warn', 80, {ignoreUrls: true}],
    'no-param-reassign': 'warn',
    'max-params': ['warn', 3],
  },
  globals: {
    describe: true,
    expect: true,
    it: true,
    jest: true,
  },
  env: {
    es6: true,
    jest: true,
    node: true,
  },
};
