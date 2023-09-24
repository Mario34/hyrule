const path = require('path')

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './src/main.tsx',
  },
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  builtins: {
    html: [
      {
        template: './index.html',
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
}
