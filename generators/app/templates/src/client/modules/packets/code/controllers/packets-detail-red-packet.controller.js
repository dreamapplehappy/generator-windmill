'use strict';

import '../styles/packets-detail.scss';
import Http from '../../../../common-services/http';

class PacketsDetailRedPacketController {
    constructor($q, HttpService, $stateParams, $rootScope, $sce) {
        this._Q = $q;
        this._HttpService = HttpService;
        this._StateParams = $stateParams;
        this._RootScope = $rootScope;
        this._Sce = $sce;

        this.redPacketDetailParams = {

        };

        const promises = [
            this._HttpService.redPacketsDetail(this._StateParams.id, this.redPacketDetailParams).then(res => {
                this.redPacket = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            console.log(2,this.redPacket);
            let id = this.redPacket.business_id;
            let params = {
                business_id: id,
                association_id: null
            };
            return this._HttpService.getWXMsg(params).then(res => {
                this.wx = res.data;
            });
        });
    }

    replaceDetail(str) {
        const regR = /_R_/g;
        const regN = /_N_/g;
        if(str) {
            str = str.replace(regR,'<br/>').replace(regN, '<br/>');
        }
        return this._Sce.trustAsHtml(str);
    }

    toUrl(id, no) {
        let url = this._RootScope.global.config.host + '/business/mobile/qrcode-use?template_id=' +
            id + '&type=red-packet&no=' + no;
        return window.encodeURIComponent(url);
    }
}

PacketsDetailRedPacketController.$inject = ['$q', 'HttpService', '$stateParams', '$rootScope', '$sce'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('packets-detail-red-packet.controller', [Http])
    .controller('PacketsDetailRedPacketController', PacketsDetailRedPacketController);