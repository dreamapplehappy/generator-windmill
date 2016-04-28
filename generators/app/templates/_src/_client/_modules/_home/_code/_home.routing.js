'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./views/home.html'), // include small templates into routing configuration
      controller: 'HomeController as vm',
      resolve: {
        loadHomeController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              // load whole module
              let module = require('./controllers/home.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            });
          });
        }
      }
    })
}

export default angular
  .module('home.routing', [])
  .config(homeRouting)
  .name;
