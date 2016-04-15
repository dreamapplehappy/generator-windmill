/*
 % 这里面是模块控制器,每一个控制器都相当于[ES6]的一个类
 % 关于[ES6]的类需要我们去学习JavaScript的新语法
 */

// 尽量使用严格模式
'use strict';

import '../styles/welfare-detail.scss';
import Http from '../../../../common-services/http';
import $ from 'jquery';

class WelfareDetailController {

    constructor($timeout, $stateParams, $q, HttpService, $sce, $location) {

        this._Timeout = $timeout;
        this._StateParams = $stateParams;
        this._Q = $q;
        this._HttpService = HttpService;
        this._Sce = $sce;
        this._Location = $location;

        this.show_toast = false;
        this.show_alert_dialog = false;

        this.welfareDetailParams = {
            //source: 0
        };

        this.loadingText = '点击加载更多';
        this.commentsPage = 1;
        this.commentsPageSize = 3;
        this.commentListParams = {
            source_type: 'benefit',
            source_id: this._StateParams.id,
            page: this.commentsPage,
            page_size: this.commentsPageSize
        };
        this.communityParams = {

        };
        this.joinCommunityParams = {

        };

        const promises = [
            this.generatePUV(),
            this.getUV(),
            this._HttpService.welfareDetail(this._StateParams.id, this.welfareDetailParams).then(res => {
                this.welfareInfo = res.data;
            }),
            this._HttpService.commentsList(this.commentListParams).then(res => {
                this.commentsListMsg = res.data;
                this.commentsList = res.data.data;
                this.commentsTotalPages = this.commentsListMsg.total;
            }),
            this._HttpService.visitorStatus(false).then(res => {
                this.userInfo = res.data;
            }),
            this._HttpService.communityDetail(this._StateParams.association_id, this.communityParams).then(res => {
                this.communityInfo = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {
            // 做一些初始化后的工作
            console.log(this.uv);
        });
    }

    generatePUV() {
        const url = 'wechat/welfare-detail/' + this._StateParams.id + '/' + this._StateParams.association_id;
        console.log(url, 'generatePUV');
        return $.ajax ({
            type: 'post',
            url: "http://data.i-yizhan.com/api/add-data",
            crossDomain: true,
            data: {"url": url},
            dataType: 'json',
            success: function (json) {
            },
            error: function () {
            }
        });
    }

    getUV() {
        const url = 'wechat/welfare-detail/' + this._StateParams.id + '/' + this._StateParams.association_id;
        console.log(url, 'getUV');
        this.uv = $.ajax ({
            type: 'post',
            url: "http://data.i-yizhan.com/api/get-uv-total",
            crossDomain: true,
            data: {"url": url},
            dataType: 'json',
            async : false,
            success: function (data) {
            }
        }).responseText;
    }

    replaceDetail(str) {
        const regR = /_R_/g;
        const regN = /_N_/g;
        if(str) {
            str = str.replace(regR,'<br/>').replace(regN, '<br/>');
        }
        return this._Sce.trustAsHtml(str);
    }

    // 加入社群
    joinCommunity() {
        return this._HttpService.joinCommunity(this._StateParams.id, this.joinCommunityParams).then(res => {
            if(1 === res.status) {
                this.showToast('加入社群成功', 2000);
            }
            else {
                this.showAlertDialog('错误', res.error_msg, '确定');
            }
        })
    }

    createComment() {
        this.createCommentData = {
            source_type: 'benefit',
            source_id: this._StateParams.id,
            content: this.content,
            parent_id: null
        };
        return this._HttpService.createComment(this.createCommentData).then(res => {
            if(1 == res.status) {
                this.showToast('发表评论成功', 2000);
                this.content = '';
                return this._HttpService.commentsList(this.commentListParams).then(res => {
                    this.commentsListMsg = res.data;
                    this.commentsList = res.data.data;
                    this.commentsTotalPages = this.commentsListMsg.total;
                });
            }
            else {
                this.showAlertDialog('错误', res.error_msg, '确定');
            }
        })
    }

    getMoreComments() {
        if(this.commentsPage < this.commentsTotalPages) {
            this.commentsPage++;
            this.commentListParams.page = this.commentsPage;
            return this._HttpService.commentsList(this.commentListParams).then(res => {
                this.commentsList = this.commentsList.concat(res.data.data);
            });
        }
        else {
            this.loadingText = '没有更多了';
        }
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

WelfareDetailController.$inject = ['$timeout', '$stateParams', '$q', 'HttpService', '$sce', '$location'];

// 在这里,我们将控制器作为一个模块导出
export default angular
    .module('welfare.detail.controller', [Http])
    .controller('WelfareDetailController', WelfareDetailController)