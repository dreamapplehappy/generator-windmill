'use strict';

function fourZeroFourRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('404', {
            url: '/404',
            template: require('./views/404.html'),
            controller: 'FourZeroFourController as fourZeroFour',
            resolve: {
                loadFOFController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./404');
                            $ocLazyLoad.load({name: 'fourZeroFour'});
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular
    .module('fourZeroFour.routing', [])
    .config(fourZeroFourRouting)
    .name;
