'use strict';

function demoRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('demo', {
            url: '/demo',
            template: require('./views/demo.html'), // include small templates into routing configuration
            controller: 'DemoController as demo',
            resolve: {
                loadDemoController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./demo');
                            $ocLazyLoad.load({name: 'demo'});
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular
    .module('demo.routing', [])
    .config(demoRouting)
    .name;
