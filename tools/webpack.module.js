var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path');
var babel_loader = 'babel?presets[]=react,presets[]=es2015,plugins[]=transform-async-to-generator,plugins[]=transform-decorators-legacy'
module.exports = {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', babel_loader],
      include: path.join(__dirname, '../view')
    }, {
      test: /\.js$/,
      loaders: [babel_loader],
      include: path.join(__dirname, '../view')
    }, {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract("style", ["css", "sass?indentedSyntax"])
    }, {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract("style", ["css", "sass"])
    }, {
      test: /\.png$/,
      loader: "url?limit=100000"
    }, {
      test: /\.(jpg|svg)$/,
      loader: "file?name=[name].[ext]"
    }]
  }