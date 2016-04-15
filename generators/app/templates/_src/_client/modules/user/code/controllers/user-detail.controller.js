'use strict';

import '../styles/user-detail.scss';
import $ from 'jquery';
import Http from '../../../../common-services/http';

class UserDetailController {
    constructor($q, HttpService, $timeout) {

        this._Q =  $q;
        this._HttpService = HttpService;
        this._Timeout = $timeout;

        this.show_toast = false;
        this.show_alert_dialog = false;

        this.userInfo = {
            base_sex: 1
        };
        this.types = [
            {name: '男', value: 1},
            {name: '女', value: 0}
        ];
        this.userInfo.base_sex = this.types[0].value;

        const promises = [
            this._HttpService.visitorStatus(true).then(res => {
                this.userInfo = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {

        });
    }

    updateUserInfo() {
        const data = {
            base_sex: this.userInfo.base_sex
        };
        return this._HttpService.updateUserInfo(data).then(res => {
            if(1 == res.status) {
                this.showToast('修改性别成功', 2000);
            }
            else {
                this.showAlertDialog('错误', res.error_msg, '确定');
            }
        })
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


UserDetailController.$inject = ['$q', 'HttpService', '$timeout'];

export default angular
    .module('user.detail.controller', [Http])
    .controller('UserDetailController', UserDetailController);