var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'assets',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: '/.html$/',
        loader: 'html-loader'
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    publicPath: '/assets'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
