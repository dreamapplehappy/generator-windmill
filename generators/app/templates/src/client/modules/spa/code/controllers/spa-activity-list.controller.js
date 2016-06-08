/*
 % 这里面是模块控制器,每一个控制器都相当于[ES6]的一个类
 % 关于[ES6]的类需要我们去学习JavaScript的新语法
 */

// 尽量使用严格模式
'use strict';

var Moment = require('moment');
import '../styles/spa-activity-list.less';
import Http from '../../../../common-services/http';
import $ from 'jquery';

class SpaActivityListController {

    constructor($timeout, $stateParams, $q, HttpService, $sce, $location, $scope, $rootScope) {
        $rootScope.global.docTitle = '推荐活动';

        this._Timeout = $timeout;
        this._StateParams = $stateParams;
        this._Q = $q;
        this._HttpService = HttpService;
        this._Sce = $sce;
        this._Location = $location;

        this.show_toast = false;
        this.show_alert_dialog = false;

        this.activitiesPage = 1;
        this.activitiesPageSize = 3;
        this.activitiesParams = {
            page: this.activitiesPage,
            page_size: this.activitiesPageSize
        };

        this.btnText = '点击加载更多';
        this.PVS = [];
        this.iBtnsStatus = [];
        this.iLikeCount = [];
        this.activityDates = [];

        const promises = [
            this._HttpService.spaActivityList(this.activitiesParams).then(res => {
                this.activitiesMsg = res.data;
                this.activities = res.data.data;
                this.activitiesTotalPages = this.activitiesMsg.last_page;
                for(let i = 0; i < this.activities.length; i++) {
                    this.iBtnsStatus[i] = this.activities[i].like.i_like;
                    this.iLikeCount[i] = this.activities[i].like.count;
                    this.activityDates[i] = Moment(this.activities[i].start_at).format('YYYY年MM月DD日');
                }
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            for(let i = 0; i < this.activities.length; i++) {
                this.PVS.push(this.getPV(this.activities[i].url));
            }
        });
    }
    // 点赞
    iLikeIt(index, id) {
        if(this.iBtnsStatus[index] > 0) {
            return this._HttpService.spaUserUnlike(id)
                .then((res) => {
                    if(1 == res.status) {
                        this.iBtnsStatus[index] = 0;
                        this.iLikeCount[index]--;
                        console.log('取消赞成功,当前状态: ', this.iBtnsStatus[index], this.iLikeCount[index]);
                    }
                    else {
                        // TODO
                        console.log('取消赞,失败', res);
                    }
                })
        }
        else {
            return this._HttpService.spaUserLike(id)
            .then((res) => {
                if(1 == res.status) {
                    this.iBtnsStatus[index] = 1;
                    this.iLikeCount[index]++;
                    console.log('点赞成功,当前状态: ', this.iBtnsStatus[index], this.iLikeCount[index]);
                }
                else {
                    // TODO
                    console.log('点赞,失败', res);
                }
            })
        }
    }

    getActivities() {
        if(this.activitiesPage < this.activitiesTotalPages) {
            this.activitiesPage++;
            this.activitiesParams = {
                page: this.activitiesPage,
                page_size: this.activitiesPageSize
            };
            return this._HttpService.spaActivityList(this.activitiesParams).then(res => {
                this.activities = this.activities.concat(res.data.data);
                for(let i = 0; i < this.activities.length; i++) {
                    this.iBtnsStatus[i] = this.activities[i].like.i_like;
                    this.iLikeCount[i] = this.activities[i].like.count;
                    this.activityDates[i] = Moment(this.activities[i].start_at).format('YYYY年MM月DD日');
                    this.PVS = [];
                    this.PVS.push(this.getPV(this.activities[i].url));
                }
            });
        }
        else {
            this.btnStatus = false;
            this.btnText = '没有更多了';
        }
    }

    getPV(url) {
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

SpaActivityListController.$inject = ['$timeout', '$stateParams', '$q', 'HttpService', '$sce', '$location', '$scope', '$rootScope'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('spa-activity-list.controller', [Http])
    .controller('SpaActivityListController', SpaActivityListController)