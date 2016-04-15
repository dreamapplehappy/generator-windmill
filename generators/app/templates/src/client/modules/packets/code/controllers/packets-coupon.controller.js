'use strict';

import '../styles/packets-coupon.scss';
import Http from '../../../../common-services/http';

class PacketsCouponController {
    constructor($q, HttpService) {
        this._Q = $q;
        this._HttpService = HttpService;

        this.leftActive = true;

        this.couponsParams = {
            status: 'unused'
        };

        const promises = [
            this._HttpService.userCouponsInfo(this.couponsParams).then(res => {
                this.coupons = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            console.log(this.coupons);
        });
    }

    getCouponsInfo(status) {
        if('unused' == status) {
            this.leftActive = true;
        }
        else{
            this.leftActive = false;
        }
        this.couponsParams = {
            status: status
        };
        return this._HttpService.userCouponsInfo(this.couponsParams).then(res => {
            this.coupons = res.data;
        })
    }
}

PacketsCouponController.$inject = ['$q', 'HttpService'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('packets-coupon.controller', [Http])
    .controller('PacketsCouponController', PacketsCouponController);