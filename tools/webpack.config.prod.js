var path = require('path');
var webpack = require('webpack');
var webpack_module = require('./webpack.module')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var root_path = path.join(__dirname, '..')
var view_src = path.join(root_path, 'view')

module.exports = {
  entry: {
    client: path.join(view_src, 'client.jsx'),
  },
  output: {
    path: path.join(root_path, 'public'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: webpack_module,
  resolve: {
    extensions: ['.js', '.jsx', '']
  }
};