var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        browsers:   ['Chrome'],
        frameworks: ['jasmine'],
        reporters:  ['mocha'],

        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: false,
        colors: true,
        port: 9876,

        basePath: './',
        files: ['./src/test/unit/webpack.karma.context.js'],
        preprocessors: { './src/test/unit/webpack.karma.context.js': ['webpack'] },
        exclude: [],
        webpack: {
            devtool: 'eval',
            module: {
                loaders: [
                    { test: /\.js$/, exclude: [/\.spec.js$/, /node_modules/], loader: 'ng-annotate!babel'}, //有一些需要注意的地方
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
            plugins: [
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                })
            ]
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};