var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var dev_config = require('./webpack.config.dev')

process.env.NODE_ENV = 'webpack'
require('./starter')
new WebpackDevServer(webpack(dev_config), {
  publicPath: dev_config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: {
      "/": "http://127.0.0.1:4000",
      "/archives": "http://127.0.0.1:4000",
      "/lab": "http://127.0.0.1:4000",
      "/about": "http://127.0.0.1:4000",
      "/article*": "http://127.0.0.1:4000",
      "/api*": "http://127.0.0.1:4000",
      "/static/img*": "http://127.0.0.1:4000"
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('WebpackDevServer Listening at localhost:3000');
});