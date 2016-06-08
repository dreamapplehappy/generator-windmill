
import template from './demo.html';

const moduleName='directive.demo';
const _Q = new WeakMap();

class Demo {
    constructor($q){
        this.restrict = 'AE';
        this.template = template;

        _Q.set(this, $q);
    }

    link(scope, elem, attrs){
        scope.name = 'dreamapple';
    }

    static directiveFactory($q){
        Demo.instance = new Demo($q);
        return Demo.instance;
    }
}

Demo.directiveFactory.$inject = ['$q'];

angular.module(moduleName, [])
    .directive('showDemo', Demo.directiveFactory);

export default moduleName;