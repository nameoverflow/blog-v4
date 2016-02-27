var path = require('path');
var webpack = require('webpack');
var module = require('./webpack.module')

module.exports = {
  entry: {
    client: path.join(__dirname, 'view') + 'client',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  module
};