'use strict';

function replaceDetail($sce) {
    return function(str){
        const regR = /_R_/g;
        const regN = /_N_/g;
        if(str) {
            str = str.replace(regR,'<br/>').replace(regN, '<br/>');
            str = $sce.trustAsHtml(str);
        }
        return str;
    }
}

replaceDetail.$inject = ['$sce'];

export default angular
    .module('filter.replace-detail', [])
    .filter('replaceDetail', replaceDetail)
    .name;