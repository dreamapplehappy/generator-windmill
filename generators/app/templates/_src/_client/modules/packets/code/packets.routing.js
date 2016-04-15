/*
 % 这里是我们这个模块的路由部分
 */

'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('packets', {
            url: '/packets',
            template: require('./views/packets.html'), // 这里使用了[webpack]的[require]部分
            controller: 'PacketsController as vm', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {
                loadRedPacketController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/packets.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                },
                loadPacketsNameFilterController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./filters/packets-name.filter');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.filter);
                        });
                    });
                }
            }
        })
        .state('packets-detail', {
            url: '/packets-detail/:id',
            template: require('./views/packets-detail.html'), // 这里使用了[webpack]的[require]部分
            controller: 'PacketsDetailController as vm', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {
                loadRedPacketController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/packets-detail.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('packets-red-packet', {
            url: '/packets-red-packet/:id',
            template: require('./views/packets-red-packet.html'), // 这里使用了[webpack]的[require]部分
            controller: 'PacketsRedPacketController as vm', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {
                loadPacketsRedPacketController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/packets-red-packet.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('packets-coupon', {
            url: '/packets-coupon/:id',
            template: require('./views/packets-coupon.html'), // 这里使用了[webpack]的[require]部分
            controller: 'PacketsCouponController as vm', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {
                loadPacketsCouponController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/packets-coupon.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('packets-detail-red-packet', {
            url: '/packets-detail-red-packet/:id',
            template: require('./views/packets-detail-red-packet.html'), // 这里使用了[webpack]的[require]部分
            controller: 'PacketsDetailRedPacketController as vm', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {
                loadPacketsDetailRedPacketController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/packets-detail-red-packet.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('packets-detail-coupon', {
            url: '/packets-detail-coupon/:id',
            template: require('./views/packets-detail-coupon.html'), // 这里使用了[webpack]的[require]部分
            controller: 'PacketsDetailCouponController as vm', // 这里使用[controller as]语法,在模板中使用[as]后面的单词来代表当前作用域
            resolve: {
                loadPacketsDetailCouponController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/packets-detail-coupon.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
}

export default angular
    .module('packets.routing', [])
    .config(homeRouting)
    .name;
