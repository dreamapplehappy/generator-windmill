import angular from 'angular';

//const _Http = new WeakMap();
//const _RootScope = new WeakMap();

function success(response) {
    return response.data;
}

function fail(e) {
    console.log(e);
}

class HttpService {
    constructor($http, $rootScope, $cookies, $q, $timeout) {
        this._Http = $http;
        this._RootScope = $rootScope;
        this._Cookies = $cookies;
        this._Q = $q;
        this._Timeout = $timeout;

        this.config = this._RootScope.global.config;

    }
    // spa 活动的数据
    spaActivityList(params) {
        return this._Http.get(this.config.apiPre + '/home/activity', {params: params})
            .then(success)
            .catch(fail)
    }
    // spa 活动点赞
    spaUserLike(id) {
        return this._Http.post(this.config.apiPre + '/home/activity/'+ id +'/like')
            .then(success)
            .catch(fail)
    }
    // spa 活动取消赞
    spaUserUnlike(id) {
        return this._Http.delete(this.config.apiPre + '/home/activity/'+ id +'/unlike')
            .then(success)
            .catch(fail)
    }

    getWXMsg(params) {
        return this._Http.get(this.config.apiPre + '/home/wechat', {params: params})
            .then(success)
            .catch(fail)
    }

    visitorStatus(params) {
        //if(!params) {
        //    // 使用$q
        //    return this._Q((resolve, reject) => {
        //        this._Timeout(() => {
        //            if(this._Cookies.getObject('currentUser')) {
        //                resolve(this._Cookies.getObject('currentUser'));
        //            }
        //            else{
        //                reject('nothing!');
        //            }
        //        }, 10);
        //    })
        //}
        //else {
        //    return this._Http.get(this.config.apiPre + '/home/user/current-user')
        //        .then((res) => {
        //            this._Cookies.remove('currentUser');
        //            this._Cookies.putObject('currentUser', res.data);
        //            return res.data;
        //        })
        //        .catch(fail)
        //}
        return this._Http.get(this.config.apiPre + '/home/user/current-user')
            .then((res) => {
                return res.data;
            })
            .catch(fail)
    }

    generateUserProfile() {
        return this._Http.post(this.config.apiPre + '/home/user/default-profile')
            .then(success)
            .catch(fail)
    }

    getVerificationCode(data) {
        return this._Http.post(this.config.apiPre + '/common/sms/send', data)
            .then(success)
            .catch(fail)
    }

    checkVerificationCode(data) {
        return this._Http.post(this.config.apiPre + '/common/sms/check', data)
            .then(success)
            .catch(fail)
    }
    //**** 关于评论
        // 评论列表
    commentsList(params) {
        return this._Http.get(this.config.apiPre + '/home/comment', {params: params})
            .then(success)
            .catch(fail)
    }
        // 添加评论
    createComment(data) {
        return this._Http.post(this.config.apiPre + '/home/comment', data)
            .then(success)
            .catch(fail)
    }

    //**** 用户信息的修改
        // 修改用户信息
    updateUserInfo(data) {
        return this._Http.put(this.config.apiPre + '/home/user', data)
            .then(success)
            .catch(fail)
    }

    //**** 首页的一些接口
        // 推荐活动
    recommendActivities(params) {
        return this._Http.get(this.config.apiPre + '/home/activity', {params: params})
            .then(success)
            .catch(fail)
    }
        // 社群福利
    communityWelfare(params) {
        return this._Http.get(this.config.apiPre + '/home/benefit', {params: params})
            .then(success)
            .catch(fail)
    }

    //**** 社群福利部分
        // 加入社群
    joinCommunity(id, params) {
        return this._Http.post(this.config.apiPre + '/home/association/' + id + '/subscriber', {params: params})
            .then(success)
            .catch(fail)
    }
        // 社群详细信息
    communityDetail(id, params) {
        return this._Http.get(this.config.apiPre + '/home/association/' + id, {params: params})
            .then(success)
            .catch(fail)
    }
        // 社群福利详情
    welfareDetail(id, params) {
        return this._Http.get(this.config.apiPre + '/home/benefit/' + id, {params: params})
            .then(success)
            .catch(fail)
    }
        // 发布评论
    welfarePostComment(data) {
        return this._Http.get(this.config.apiPre + '/', {params: params})
            .then(success)
            .catch(fail)
    }
        // 获取评论
    welfareComments() {
        return this._Http.get(this.config.apiPre + '/', {params: params})
            .then(success)
            .catch(fail)
    }

    //**** 卡包的一些接口
        // 用户的卡包统计信息
    userPacketsInfo() {
        return this._Http.get(this.config.apiPre + '/home/benefit/mine')
            .then(success)
            .catch(fail)
    }
        // 红包的统计信息
    userRedPacketsInfo(params) {
        return this._Http.get(this.config.apiPre + '/home/benefit/red-packet', {params: params})
            .then(success)
            .catch(fail)
    }
        // 优惠券的统计信息
    userCouponsInfo(params) {
        return this._Http.get(this.config.apiPre + '/home/benefit/coupon', {params: params})
            .then(success)
            .catch(fail)
    }
        // 优惠券的详细信息
    couponDetail(id, params) {
        return this._Http.get(this.config.apiPre + '/home/benefit/coupon/' + id, {params: params})
            .then(success)
            .catch(fail)
    }
    // 红包的详细信息
    redPacketsDetail(id, params) {
        return this._Http.get(this.config.apiPre + '/home/benefit/red-packet/' + id, {params: params})
            .then(success)
            .catch(fail)
    }

}

HttpService.$inject = ['$http', '$rootScope', '$cookies', '$q', '$timeout'];

export default angular.module('service.http', [])
    .service('HttpService', HttpService)
    .name;