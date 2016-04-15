'use strict';

import '../styles/user-update-birthday.scss';
import Http from '../../../../common-services/http';
import $ from 'jquery';

class UserUpdateBirthdayController {
    constructor($q, HttpService, $state, $timeout) {
        this._Q = $q;
        this._HttpService = HttpService;
        this._State = $state;
        this._Timeout = $timeout;

        this.show_toast = false;
        this.show_alert_dialog = false;

        this.redirect = false;

        const promises = [
            this._HttpService.visitorStatus(false).then(res => {
                this.userInfo = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {

        });
    }

    updateUserInfo() {
        const data = {
            base_birth: $('#date').val()
        };
        if('' == $('#date').val() || undefined == $('#date').val()){
            this.showAlertDialog('错误', '您的生日不能为空', '确定');
        }
        else{
            return this._HttpService.updateUserInfo(data).then(res => {
                if(1 == res.status) {
                    this.redirect = true;
                    this.showToast('修改生日成功', 2000);
                }
                else {
                    this.showAlertDialog('错误', res.error_msg, '确定');
                }
            });
        }
    }

    showToast(msg, sec) {
        this.toast_info = msg;
        this.show_toast = true;
        this._Timeout(() => {
            this.show_toast = false;
            if(this.redirect) {
                this._State.go('user-detail');
            }
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


UserUpdateBirthdayController.$inject = ['$q', 'HttpService', '$state', '$timeout'];

export default angular
    .module('user.update-birthday.controller', [Http])
    .controller('UserUpdateBirthdayController', UserUpdateBirthdayController);