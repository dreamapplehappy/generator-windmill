'use strict';

import '../styles/packets-detail.scss';
import Http from '../../../../common-services/http';

class PacketsDetailCouponController {
    constructor($q, HttpService, $stateParams, $rootScope, $sce) {
        this._Q = $q;
        this._HttpService = HttpService;
        this._StateParams = $stateParams;
        this._RootScope = $rootScope;
        this._Sce = $sce;

        this.couponDetailParams = {

        };

        const promises = [
            this._HttpService.couponDetail(this._StateParams.id, this.couponDetailParams).then(res => {
                this.coupon = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            let id = this.coupon.business_id;
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
            id + '&type=coupon&no=' + no;
        return window.encodeURIComponent(url);
    }
}

PacketsDetailCouponController.$inject = ['$q', 'HttpService', '$stateParams', '$rootScope', '$sce'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('packets-detail-coupon.controller', [Http])
    .controller('PacketsDetailCouponController', PacketsDetailCouponController);