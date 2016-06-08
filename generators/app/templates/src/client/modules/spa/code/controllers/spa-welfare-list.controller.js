/*
 % 这里面是模块控制器,每一个控制器都相当于[ES6]的一个类
 % 关于[ES6]的类需要我们去学习JavaScript的新语法
 */

// 尽量使用严格模式
'use strict';

import '../styles/spa-welfare-list.less';
import Http from '../../../../common-services/http';
import $ from 'jquery';

class SpaWelfareListController {

    constructor($timeout, $stateParams, $q, HttpService, $sce, $location, $state, $rootScope) {
        $rootScope.global.docTitle = '社群福利';

        this._Timeout = $timeout;
        this._StateParams = $stateParams;
        this._Q = $q;
        this._HttpService = HttpService;
        this._Sce = $sce;
        this._Location = $location;
        this._State = $state;

        this.show_toast = false;
        this.show_alert_dialog = false;

        this.welfaresPage = 1;
        this.welfaresPageSize = 3;
        this.welfaresParams = {
            page: this.welfaresPage,
            page_size: this.welfaresPageSize
        };

        this.btnText = '点击加载更多';
        this.PVS = [];

        const promises = [
            this._HttpService.communityWelfare(this.welfaresParams).then(res => {
                this.welfaresMsg = res.data;
                this.welfares = res.data.data;
                this.welfaresTotalPages = this.welfaresMsg.last_page;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            for(let i = 0; i < this.welfares.length; i++) {
                this.PVS.push(this.getPV('wechat/welfare-detail/' + this.welfares[i].id + '/' + this.welfares[i].association_id));
            }
        });
    }

    getActivities() {
        if(this.welfaresPage < this.welfaresTotalPages) {
            this.welfaresPage++;
            this.welfaresParams = {
                page: this.welfaresPage,
                page_size: this.welfaresPageSize
            };
            return this._HttpService.communityWelfare(this.welfaresParams).then(res => {
                this.welfares = this.welfares.concat(res.data.data);
                this.PVS = [];
                for(let i = 0; i < this.welfares.length; i++) {
                    this.PVS.push(this.getPV('wechat/welfare-detail/' + this.welfares[i].id + '/' + this.welfares[i].association_id));
                }
            });
        }
        else {
            this.btnStatus = false;
            this.btnText = '没有更多了';
        }
    }

    getPV(url) {
        console.log(url);
        this.pv = $.ajax ({
            type: 'post',
            url: "http://data.i-yizhan.com/api/get-pv-total",
            crossDomain: true,
            data: {"url": url},
            dataType: 'json',
            async : false,
            success: function (data) {
            }
        }).responseText;
        return this.pv;
    }

    showToast(msg, sec) {
        this.toast_info = msg;
        this.show_toast = true;
        this._Timeout(() => {
            this.show_toast = false;
            // 跳转
        }, sec);
    }

    showAlertDialog(title, content, btnText) {
        this.alert_dialog_title = title;
        this.alert_dialog_content = content;
        this.alert_dialog_btn_text = btnText;
        this.show_alert_dialog = true;
    }

    alertDialogAction() {
        this.show_alert_dialog = false;
    }

}

SpaWelfareListController.$inject = ['$timeout', '$stateParams', '$q', 'HttpService', '$sce', '$location', '$state', '$rootScope'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('spa-welfare-list.controller', [Http])
    .controller('SpaWelfareListController', SpaWelfareListController)