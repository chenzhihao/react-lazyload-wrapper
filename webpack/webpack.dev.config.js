var config = require('./webpack.base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var specificConfig = require('./specificConfig');

config.entry = [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, '../example/index.js')
  ];

// https://github.com/webpack/webpack/issues/2393
// For in conjunction with webpack-dev-server --hot --inline:
config.output = {
    filename: '[name].js'
},

config.devtool = 'eval-source-map';
config.debug = true;

config.module.loaders = config.module.loaders.concat(
  {
    test: /\.png|gif/, loader: 'url-loader'
  },
  {
    test: /\.jpg/, loader: 'url-loader'
  },
  {
    test: /\.s?css$/,
    loader: specificConfig.useCssModules
      ? 'style-loader!css-loader?modules&importLoaders=1&localIdentName=__[local]__[hash:base64:5]!postcss-loader'
      : 'style-loader!css-loader!postcss-loader'
  }
);

config.module.preLoaders = [
  {
    test: /\.jsx?$/,
    loader: 'eslint-loader',
    exclude: [/node_modules/],
  }
];

config.eslint = {
  fix: false,
},

config.plugins = config.plugins.concat(
  new HtmlWebpackPlugin({
    title: 'react lazyload warpper',
    template: 'indexTemplate.html',
    filename: 'index.html',
    inject: true,
  })
);

module.exports = config;
