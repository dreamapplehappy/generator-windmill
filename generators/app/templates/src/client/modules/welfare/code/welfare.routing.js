/*
 % 这里是我们这个模块的路由部分
 */

'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('welfare-detail', {
            url: '/welfare-detail/:id/:association_id',
            template: require('./views/welfare-detail.html'),
            controller: 'WelfareDetailController as vm',
            resolve: {
                loadWelfareDetailController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/welfare-detail.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular
    .module('welfare.routing', [])
    .config(homeRouting)
    .name;
