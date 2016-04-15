var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');
var toolConfig = require('./tool.config');

var webpackConfig = {
    devtool: 'sourcemap',
    publicPath: '/home/',
    entry: {},
    //resolve: { // 可能以后会用到
    //},
    module: {
        preLoaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'eslint'}
        ],
        loaders: [
            { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel'}, //有一些需要注意的地方
            { test: /\.html$/, loader: 'html' },  // 里面含有引入的image图片等等
            { test: /\.css$/, loader: 'style!css!postcss-loader'},
            { test: /\.less$/, loader: 'style!css!postcss-loader!less'},
            { test: /\.scss$/, loader: 'style!css!postcss-loader!sass'},
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader'},
            { test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    postcss: function () {
        return [stylelint, precss]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: toolConfig.webpackConfig.template,
            inject: 'body',
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.[id].[hash].js',
            minChunks: function (module, count) {
                return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
            }
        })
    ]
};

module.exports = webpackConfig;