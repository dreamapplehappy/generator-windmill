'use strict';

function userRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('user-register', {
            url: '/user-register',
            template: require('./views/user-register.html'),
            controller: 'UserRegisterController as vm',
            resolve: {
                loadUserManageController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/user-register.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('user-detail', {
            url: '/user-detail',
            template: require('./views/user-detail.html'),
            controller: 'UserDetailController as vm',
            resolve: {
                loadUserDetailController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/user-detail.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('update-user-phone', {
            url: '/update-user-phone',
            template: require('./views/user-update-phone.html'),
            controller: 'UserUpdatePhoneController as vm',
            resolve: {
                loadUserUpdatePhoneController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/user-update-phone.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('update-user-username', {
            url: '/update-user-username',
            template: require('./views/user-update-username.html'),
            controller: 'UserUpdateUserNameController as vm',
            resolve: {
                loadUserUpdateUserNameController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/user-update-username.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('update-user-city', {
            url: '/update-user-city',
            template: require('./views/user-update-city.html'),
            controller: 'UserUpdateCityController as vm',
            resolve: {
                loadUserUpdateUserNameController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/user-update-city.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                }
            }
        })
        .state('update-user-birthday', {
            url: '/update-user-birthday',
            template: require('./views/user-update-birthday.html'),
            controller: 'UserUpdateBirthdayController as vm',
            resolve: {
                loadUserUpdateBirthdayController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./controllers/user-update-birthday.controller');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.controller);
                        });
                    });
                },
                loadDirective: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('../../../common-directives/windmill-date');
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.directive);
                        });
                    });
                }
            }
        })
}

export default angular
    .module('user.routing', [])
    .config(userRouting)
    .name;
