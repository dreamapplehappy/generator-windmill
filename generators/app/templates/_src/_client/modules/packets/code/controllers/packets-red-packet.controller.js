'use strict';

import '../styles/packets-red-packet.scss';
import Http from '../../../../common-services/http';

class PacketsRedPacketController {
    constructor($timeout, $stateParams, $q, HttpService) {
        this._Timeout = $timeout;
        this._Q = $q;
        this._HttpService = HttpService;

        this.leftActive = true;

        this.redPacketParams = {
            status: 'unused'
        };

        const promises = [
            this._HttpService.userRedPacketsInfo(this.redPacketParams).then(res => {
                this.redPackets = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
        });
    }

    getRedPacketsInfo(status) {
        if('unused' == status) {
            this.leftActive = true;
        }
        else{
            this.leftActive = false;
        }
        this.redPacketParams = {
            status: status
        };
        return this._HttpService.userRedPacketsInfo(this.redPacketParams).then(res => {
            this.redPackets = res.data;
        })
    }
}

PacketsRedPacketController.$inject = ['$timeout', '$stateParams', '$q', 'HttpService'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('packets-red-packet.controller', [Http])
    .controller('PacketsRedPacketController', PacketsRedPacketController);