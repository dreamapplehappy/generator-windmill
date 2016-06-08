'use strict';

import Http from './common-services/http';

class BaseController {
    constructor(HttpService, $q, $state, $rootScope) {

        this._HttpService = HttpService;
        this._Q = $q;
        this._State = $state;

        const promises = [
            this._HttpService.visitorStatus(true).then(res => {
                this.userInfo = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            if(angular.equals(null, this.userInfo.user_profile)) {
                this._State.go('home-guide');
                if(window.loading_screen) {
                    window.loading_screen.finish();
                }
            }
            else{
                // TODO
                if(window.loading_screen) {
                    console.log('finish loading_screen!');
                    window.loading_screen.finish();
                }
            }
        });

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if('home' == toState.name){
                $rootScope.whiteBgc = false;
                return HttpService.visitorStatus(true).then(res => {
                    let userInfo = res.data;
                    if(angular.equals(null, userInfo.user_profile)) {
                        $state.go('home-guide');
                    }
                })
            }
            else {
                $rootScope.whiteBgc = false;
                if('spa-welfare-list' == toState.name || 'spa-activity-list' == toState.name) {
                    $rootScope.whiteBgc = true;
                }
            }
            //else{
            //    $state.go(toState.name,toParams);
            //    return true;
            //}
            //return HttpService.visitorStatus(true).then(res => {
            //    let userInfo = res.data;
            //    if('home' === toState.name) {
            //        if(angular.equals(null, userInfo.user_profile)) {
            //            $state.go('home-guide');
            //        }
            //    }
            //    else{
            //        $state.go(toState.name,toParams);
            //        return true;
            //    }
            //})
        })
    }
}

BaseController.$inject = ['HttpService', '$q', '$state', '$rootScope'];

export default angular
    .module('base.controller', [Http])
    .controller('BaseController', BaseController)
.name;