module.exports = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    'babel-preset-es2015',
    'babel-preset-es2017',
    'babel-preset-react',
    'babel-preset-stage-0'
  ].map(require.resolve),
  plugins: [
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-decorators-legacy',
  ].map(require.resolve).concat([
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }]
  ])
};