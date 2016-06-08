/*
 % 这里是我们这个模块的路由部分
 */

'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('spa-activity-list', {
            url: '/spa-activity-list',
            template: require('./views/spa-activity-list.html'),
            controller: 'SpaActivityListController as vm',
            resolve: {
                loadSpaActivityListController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/spa-activity-list.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('spa-welfare-list', {
            url: '/spa-welfare-list',
            template: require('./views/spa-welfare-list.html'),
            controller: 'SpaWelfareListController as vm',
            resolve: {
                loadSpaWelfareListController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/spa-welfare-list.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
}

export default angular
    .module('spa.routing', [])
    .config(homeRouting)
    .name;
