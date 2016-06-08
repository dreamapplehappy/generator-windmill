'use strict';

import '../styles/home.scss';
import Http from '../../../../common-services/http';
import $ from 'jquery';

class HomeController {
  constructor(HttpService, $q, $location) {
    this.show = false;
    this._HttpService = HttpService;
    this._Q = $q;
    this._Location = $location;
    this.PVS = [];

    this.btnStatus = true;
    this.btnText = '更多';

    this.activitiesPage = 1;
    this.activitiesPageSize = 3;
    this.activitiesParams = {
      page: this.activitiesPage,
      page_size: this.activitiesPageSize
    };

    this.welfaresPage = 1;
    this.welfaresPageSize = 2;
    this.welfaresParams = {
      page: this.welfaresPage,
      page_size: this.welfaresPageSize
    };

    const promises = [
      this._HttpService.visitorStatus(true).then(res => {
        this.userInfo = res.data;
        console.log(this.userInfo, 'home-user-info');
      }),
      this._HttpService.recommendActivities(this.activitiesParams).then(res => {
        this.activitiesMsg = res.data;
        this.activities = res.data.data;
      }),
      this._HttpService.communityWelfare(this.welfaresParams).then(res => {
        this.welfaresMsg = res.data;
        this.welfares = res.data.data;
        this.welfaresTotalPages = this.welfaresMsg.last_page;
      })
    ];
    // 相当于以前的控制器中的active()函数
    this._Q.all(promises).then(() => {
      // 做一些初始化后的工作
      if($.fn.fullpage) {
        $.fn.fullpage.destroy('all');
      }

      for(let i = 0; i < this.welfares.length; i++) {
        this.PVS.push(this.getPV('wechat/welfare-detail/' + this.welfares[i].id + '/' + this.welfares[i].association_id));
      }

      console.log(this.PVS);
    });
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

  getActivities() {
    if(this.welfaresPage < this.welfaresTotalPages) {
      this.welfaresPage++;
      this.welfaresParams = {
        page: this.welfaresPage,
        page_size: this.welfaresPageSize
      };
      return this._HttpService.communityWelfare(this.welfaresParams).then(res => {
        this.welfares = this.welfares.concat(res.data.data);
      });
    }
    else {
      this.btnStatus = false;
      this.btnText = '没有更多了';
    }
  }
}

HomeController.$inject = ['HttpService', '$q', '$location'];

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
