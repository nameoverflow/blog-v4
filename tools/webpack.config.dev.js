var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')


var webpack_module = require('./webpack.module')
var root_path = path.join(__dirname, '..')
var view_src = path.join(root_path, 'view')

module.exports = {
  devtool: 'eval',
  entry: {
    client: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(view_src, 'client.jsx')
    ]
  },
  output: {
    path: path.join(root_path, 'public'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  module: webpack_module,
  resolve: {
    extensions: ['.js', '.jsx', '']
  }
}