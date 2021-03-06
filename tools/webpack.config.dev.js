var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')


var root_path = path.join(__dirname, '..')
var view_src = path.join(root_path, 'view')

var babel_loader = 'babel?presets[]=react,presets[]=es2015,plugins[]=transform-async-to-generator,plugins[]=transform-decorators-legacy'

module.exports = {
  devtool: 'eval',
  entry: {
    client: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(view_src, 'client.jsx')
    ],
    admin: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(view_src, 'admin.jsx')
    ]
  },
  output: {
    path: path.join(root_path, 'public'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
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
      loaders: ["style", "css", "sass?indentedSyntax"]
    }, {
      test: /\.s?css$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.png$/,
      loader: "url?limit=100000"
    }, {
      test: /\.(jpg|svg)$/,
      loader: "file?name=[name].[ext]"
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '']
  }
}