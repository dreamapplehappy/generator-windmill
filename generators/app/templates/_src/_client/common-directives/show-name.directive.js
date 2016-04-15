import angular from 'angular';

function showName() {
    return {
        restrict: 'AE',
        scope: {
            name: '='
        },
        template: require('./templates/show-name.html')
    }
}

export default angular.module('directive.show-name', [])
    .directive('showName', showName)
    .name;
