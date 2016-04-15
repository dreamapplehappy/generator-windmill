import angular from 'angular';

class RandomNames {
    constructor() {
        this.names = ['a', 'b', 'c', 'd'];
    }

    getName() {
        const nameLength = this.names.length;
        const rand = Math.floor(Math.random() * nameLength);
        return this.names[rand];
    }
}

export default angular.module('service.demo', [])
    .service('randomNames', RandomNames)
    .name;