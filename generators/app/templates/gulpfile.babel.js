'use strict';

//let require =   module.require('es6-require')(module); 以后研究
import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';  // 暂时还未用到 按照顺序执行gulp任务
import rename   from 'gulp-rename';   // 暂时还未用到 给文件重命名
import template from 'gulp-template'; // 模板文件
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import browserSync    from 'browser-sync';
import gulpNodemon    from 'gulp-nodemon';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpackHotMiddelware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback'; // 以后可能不会使用
import $ from 'gulp-load-plugins';

const del = require('del');
import toolConfig from './tool.config';


function log(msg) {
    if (typeof(msg) === 'object') {
        for (let item in msg) {
            if (msg.hasOwnProperty(item)) {
                console.log(msg[item]);
            }
        }
    } else {
        console.log(msg);
    }
}

function startWebPack() {
    if (browserSync.active) {
        return;
    }
    const config = require('./webpack.dev.config');
    config.entry.app = [
        'webpack-hot-middleware/client?reload=true',/* 使用webpack-hot-middleware热加载 */
        toolConfig.gulpConfig.paths.entry           /* 应用的入口文件 */
    ];

    var compiler = webpack(config);

    return browserSync.init({
        proxy: {
            target: 'localhost:' + toolConfig.gulpConfig.port,
            middleware: [
                webpackDevMiddelware(compiler, {
                    stats: {
                        colors: colorsSupported,
                        chunks: false,
                        modules: false
                    },
                    publicPath: config.output.publicPath
                }),
                webpackHotMiddelware(compiler)
            ]
        },
        port: 3000,
        /* 打开外部的连接 */
        //open: 'local',
        open: 'external',
        startPath: "/",
        file:[
            toolConfig.gulpConfig.root + '/**/*.*',
            toolConfig.gulpConfig.root + '/*.*'
        ],
        //middleware: [
        //    webpackDevMiddelware(compiler, {
        //        stats: {
        //            colors: colorsSupported,
        //            chunks: false,
        //            modules: false
        //        },
        //        publicPath: config.output.publicPath
        //    }),
        //    webpackHotMiddelware(compiler)
        //]
    });
}

gulp.task('serve', () => {
    return $({lazy: true}).nodemon({
            script: toolConfig.serverConfig.server + 'app.js',
            delayTime: 1,
            env: {
                PORT: toolConfig.gulpConfig.port,
                NODE_ENV: 'dev'
            },
            watch: [toolConfig.serverConfig.server],
            nodeArgs: toolConfig.serverConfig.nodeArgs,
            legacyWatch: true
        })
        .on('restart', function(ev) {
            log('[windmill] Nodemon restarted...');
            log('[windmill] Files changed:\n' + ev);
            setTimeout(function() {
                browserSync.notify('[windmill] Reloading now...');
                browserSync.reload({stream: false});
            }, 1000);
        })
        .on('start', [], function() {
            log('[windmill] Start...');
            startWebPack();
        })
        .on('crash', function () {
            log('[windmill] Nodemon crashed: script crashed for some reason');
        })
        .on('exit', function () {
            log('[windmill] Nodemon exited cleanly');
        });
});


gulp.task ('serve-backend', () => {
    return $({lazy: true}).nodemon({
            script: toolConfig.serverConfig.server + 'app.js',
            delayTime: 1,
            env: {
                PORT: toolConfig.gulpConfig.port,
                NODE_ENV: 'dev'
            },
            watch: [toolConfig.serverConfig.server],
            nodeArgs: toolConfig.serverConfig.nodeArgs,
            legacyWatch: true,
            tasks: []
        })
        .on('restart', function(ev) {
            log('[windmill] Nodemon restarted');
            log('[windmill] Files changed:\n' + ev);
            setTimeout(function() {
                browserSync.notify('Reloading now ...');
                browserSync.reload({stream: false});
            }, 1000);
        })
});

// gulp任务
gulp.task('serve-frontend', () => {
    startWebPack();
});

// gulp任务打包文件
gulp.task('build', (cb) => {
    const config = require('./webpack.dist.config');
    config.entry.app = toolConfig.gulpConfig.paths.entry;

    del([toolConfig.workFile.dist])
        .then(function() {
            log('[windmill] Delete old dist files! Waiting for webpack task...');
            webpack(config, (err, stats) => {
                if(err)  {
                    throw new gutil.PluginError("webpack", err);
                }

                gutil.log("[webpack]", stats.toString({
                    colors: colorsSupported,
                    chunks: false,
                    errorDetails: true
                }));
                cb();
            });
        });
});

gulp.task('deploy', function() {
    log('[windmill] Deleting the old files, please wait for a moment...');
    del([toolConfig.workFile.delPublic],{force: true}).then(function() {
        log('[windmill] Deleted the old public files, start copy files to public...');
        gulp.src(toolConfig.workFile.dist + '**')
            .pipe(gulp.dest(toolConfig.workFile.public));
    });
});
