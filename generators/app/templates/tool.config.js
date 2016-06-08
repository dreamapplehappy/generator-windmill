/*
 % 所有工具的配置文件
 */

var root = './src/client';
var path = require('path');

function resolveToClient(glob) {
    if(glob) {
        return path.join(root, glob);
    }
    else {
        return path.join(root, '');
    }
}

module.exports = {
    gulpConfig: {
        // 配置前端服务根目录
        root: root,
        port: process.env.PORT || 8001,
        // 配置所有相关文件的路径
        paths: {
            css: resolveToClient('**/*.css'),
            html: [
                resolveToClient('**/*.html'),
                path.join(root, 'index.html')
            ],
            entry: path.join(__dirname, root, 'app.js'),
            output: root
        }
    },
    webpackConfig: {
        template: root + '/index.html'
    },
    serverConfig: {
        server: './src/server/',
        nodeArgs: '--debug=5858'
    },
    workFile: {
        dist: './dist/',
        public: '../../public/home',
        delPublic: '../../public/home'
    }
};