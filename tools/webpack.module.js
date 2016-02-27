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
      loaders: ["style", "css", "sass?indentedSyntax"]
    }, {
      test: /\.s?css$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    }, {
      test: /\.jpg$/,
      loader: "file-loader"
    }]
  }