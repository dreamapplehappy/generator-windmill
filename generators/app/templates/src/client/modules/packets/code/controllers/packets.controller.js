'use strict';

import '../styles/packets.scss';

import Http from '../../../../common-services/http';

class PacketsController {
    constructor($q, HttpService) {
        this._Q = $q;
        this._HttpService = HttpService;

        const promises = [
            this._HttpService.userPacketsInfo().then(res => {
                this.packetsDetail = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
        });
    }
}

PacketsController.$inject = ['$q', 'HttpService'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('packets.controller', [Http])
    .controller('PacketsController', PacketsController);