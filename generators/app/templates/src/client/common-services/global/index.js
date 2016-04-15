import angular from 'angular';

//const _RootScope = new WeakMap();

class UpdateGlobal {
    constructor($rootScope) {
        this._RootScope = $rootScope;
    }

    getDocTitle() {
        return this._RootScope.global.docTitle;
    }

    setDocTitle(docTitle) {
        this._RootScope.global.docTitle = docTitle;
    }

    getFullPagesStatus() {
        return this._RootScope.global.fullPagesStatus;
    }

    setFullPagesStatus(status) {
        this._RootScope.global.fullPagesStatus = status;
    }
}

UpdateGlobal.$inject = ['$rootScope'];

export default angular.module('service.global', [])
    .service('UpdateGlobal', UpdateGlobal)
    .name;