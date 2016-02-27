var path = require('path');
var webpack = require('webpack');
var module = require('./webpack.module')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    client: path.join(__dirname, 'view') + 'client',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
      new ExtractTextPlugin('bundle.css')
  ],
  module
};