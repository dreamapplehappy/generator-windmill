/*
 % 这里是我们这个模块的路由部分
 */

'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('manage', {
            url: '/manage',
            template: require('./views/manage.html'), // 这里使用了[webpack]的[require]部分
            controller: 'ManageController as manage', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {                                // 使用[$ocLazyLoad]服务对整个模块进行按需加载
                loadManageController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./manage'); // 加载整个模块
                            $ocLazyLoad.load({name: 'manage'});
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular
    .module('manage.routing', [])
    .config(homeRouting)
    .name;
