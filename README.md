======1.关于安装只使用npm install 不使用bower install
2.关于模块的选择weui, tab, 
3.package.json
4.那些包是不需要的
5.css类名的命名方法
6.删除bootstrap
7.使用多种方式书写样式文件
8.关于方法的演示,$q的使用,
9.如何书写指令,等各种部分的书写
10.
------
# generate-windmill

## 一个结合`Angular 1.5.x`,`ES6`,`Webpack`,`Gulp`,`ocLazyLoad`的脚手架工具,帮助快速开发你的NG应用

## 脚手架特色
+ 使用了[`webpack`](https://webpack.github.io/)这个当下十分火热的前端打包工具
+ 使用了`ES6`的许多新的特性,让我们可以更舒服的书写我们的代码,尤其是带来了模块化开发的便利
+ 使用了`express`作为我们的后端模拟数据,让我们专注与前端的逻辑与事件的处理
+ 使用了`browserSync`,让我们可以实时预览我们的应用
+ 使用了`ocLazyLoad`,配合`Webpack`让我们的应用可以进行按需加载,提升了用户体验
+ 可以使用`Sass`,`Less`,或者`CSS`来书写我们的样式,甚至可以使用别的样式预处理语言来书写

## 使用前的准备
+ 全局安装`Node`开发环境,就是`Node.js`的安装,自行`google`
+ 全局安装`yo`,具体的方法可以参考这个链接[yeoman](http://yeoman.io/)
+ 全局安装`generator-windmill`:

```
// Mac
sudo npm i generator-windmill -g
// windows
npm i generator-windmill -g
```

## 开始使用
+ 在你项目的根目录内运行命令`yo windmill`(好比是,在`app`文件夹内运行)
+ 运行`gulp serve`进行预览
+ 运行`gulp build`进行打包
+ 运行`gulp deploy`进行部署

## 具体的说明
