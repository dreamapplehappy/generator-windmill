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
   .state('home-guide', {
      url: '/home-guide',
      template: require('./views/home-guide.html'), // include small templates into routing configuration
      controller: 'HomeGuideController as vm',
      resolve: {
          loadHomeController: ($q, $ocLazyLoad) => {
              return $q((resolve) => {
                  require.ensure([], () => {
                      // load whole module
                      let module = require('./controllers/home-guide.controller');
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
