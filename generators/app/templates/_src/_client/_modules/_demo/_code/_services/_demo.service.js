import angular from 'angular';

const _Http = new WeakMap();
const _RootScope = new WeakMap();

class DemoService {
    constructor($http, $rootScope) {
        _Http.set(this, $http);
        _RootScope.set(this, $rootScope);
    }

    people() {
        return _Http.get(this).get('/api/people').then(function(res) {
            // 返回的是后端的数据
            return res.data;
        })
    }
}

DemoService.$inject = ['$http', '$rootScope'];

export default angular.module('demo.service.demo', [])
    .service('DemoServiceDemo', DemoService)
    .name;