'use strict';

import '../styles/user-update-phone.scss';
import Http from '../../../../common-services/http';

class UserUpdatePhoneController {
    constructor($q, HttpService, $state, $timeout) {
        this._Q = $q;
        this._HttpService = HttpService;
        this._State = $state;
        this._Timeout = $timeout;

        this.redirect = false;

        this.types = [
            {name: '+86', value: '+86'},
            {name: '+80', value: '+80'},
            {name: '+84', value: '+84'},
            {name: '+87', value: '+87'}
        ];
        this.pre = this.types[0].value;

        this.show_toast = false;
        this.show_alert_dialog = false;
        this.btn_disabled = false;
        this.btn_text = '验证';
        this.default_sec = 10;
        this.sec = this.default_sec;

        const promises = [
            this._HttpService.visitorStatus(false).then(res => {
                this.userInfo = res.data;
            })
        ];
        // 相当于以前的控制器中的active()函数
        this._Q.all(promises).then(() => {

        });
    }

    clearUserMsg() {
        this.phone = null;
    }

    showToast(msg, sec) {
        this.toast_info = msg;
        this.show_toast = true;
        this._Timeout(() => {
            this.show_toast = false;
            if(this.redirect) {
                this._State.go('user-detial');
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

    getVerificationCode() {
        if(!this.btn_disabled) {
            const data = {
                from: 'iyz-app',
                phone: this.phone
            };
            return this._HttpService.getVerificationCode(data).then(res => {
                if(1 === res.status) {
                    this.timer();
                    this.btn_disabled = true;
                    this.showToast('验证码已发送', 2000);
                }
                else {
                    this.showAlertDialog('错误', res.error_msg, '确定');
                }
            })
        }
    }

    updateUserPhone() {
        const data = {
            from: 'iyz-app',
            phone: this.phone,
            code: this.code
        };
        if('' == this.phone || undefined == this.phone){
            this.showAlertDialog('错误', '手机号码不能为空', '确定');
        }
        else{
            return this._HttpService.checkVerificationCode(data).then(res => {
                if(1 === res.status){
                    this.redirect = true;
                    this.showToast('更换手机成功', 2000);
                }
                else {
                    // 错误信息
                    this.showAlertDialog('错误', res.error_msg, '确定');
                }
            });
        }
    }

    timer() {
        if(this.sec >= 0){
            this._Timeout(() => {
                this.btn_text = this.sec + 's';
                this.sec--;
                this.timer();
            }, 1000);
        }
        else{
            this.btn_disabled = false;
            this.btn_text = '验证';
            this.sec = this.default_sec;
        }
    }
}


UserUpdatePhoneController.$inject = ['$q', 'HttpService', '$state', '$timeout'];

export default angular
    .module('user.update-phone.controller', [Http])
    .controller('UserUpdatePhoneController', UserUpdatePhoneController);