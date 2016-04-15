//var require =   module.require('es6-require')(module);
var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var toolConfig = require('./tool.config');

config.output = {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'client'),
    chunkFilename: '[id].chunk.js'
};

config.plugins = config.plugins.concat([
    // 也许需要 主语字母拼写 webpack 2.0 把字母更改了
    new webpack.optimize.OccurenceOrderPlugin(),

    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin(),
    // 也许需要
    new webpack.NoErrorsPlugin()
]);

module.exports = config;
