//var require =   module.require('es6-require')(module);
//var argv = require('yargs').argv;

var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');
var toolConfig = require('./tool.config');

config.output = {
    filename: 'js/[name].[id].[hash].js',
    publicPath: '/iyzapp/home/',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'js/chunks/chunk.[name].[id].[chunkHash].js'
};

config.module.loaders = [
    // 有一些需要注意的地方
    { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'},
    // 使用html加载这个模板,可以在提取出来其中的图片
    { test: /\.html$/, loader: 'html' },
    { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
    { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
    { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
    // ?name=fonts/[name].[ext]设置了生成文件的路径
    { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader?name=fonts/[name].[ext]'},
    { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=images/[name].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
];

config.module.postcss = function () {
    return [stylelint, precss, autoprefixer]
};

config.plugins = config.plugins.concat([

    // Reduces bundles total size
    new webpack.optimize.UglifyJsPlugin({
        mangle: {

            // You can specify all variables that should not be mangled.
            // For example if your vendor dependency doesn't use modules
            // and relies on global variables. Most of angular modules relies on
            // angular global variable, so we should keep it unchanged
            except: ['$super', '$', 'exports', 'require', 'angular']
        }
    }),
    new ExtractTextPlugin("styles/[hash].css")
]);

module.exports = config;
