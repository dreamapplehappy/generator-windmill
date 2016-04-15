/*
 % 这里面是模块控制器,每一个控制器都相当于[ES6]的一个类
 % 关于[ES6]的类需要我们去学习JavaScript的新语法
 */

// 尽量使用严格模式
'use strict';

// [HomeController]是我们的类名
class ManageController {
    // 我们这个类的构造函数,用于类的初始化
    constructor() {
        // 这里面用来定义我们这个控制器里面的初始变量
        // 使用 this.[变量名]替代 var vm = this

        // 定义一个变量
        this.name = 'dreamapple';
    }

    // 控制器的函数直接写在构造函数的下面,前面不需要带上[function]
    sayHello() {
        this.name = 'dreamapple' + Math.random(1);
    }
}

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('manage.controller', []) // 这里需要注意,我们是把这个控制器作为一个模块的控制器导出
    .controller('ManageController', ManageController)
    .name; // 这里需要注意一下,我们导出模块的[.name]