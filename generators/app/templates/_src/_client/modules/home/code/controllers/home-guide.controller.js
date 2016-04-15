'use strict';

import '../../../../../../node_modules/fullpage.js/jquery.fullPage.scss';
import '../styles/home-guide.scss';
import $ from 'jquery';
import GlobalService from '../../../../common-services/global';
import Http from '../../../../common-services/http';

class HomeGuideController {
  constructor(UpdateGlobal, $rootScope, HttpService, $q, $state, $timeout) {

    this._UpdateGlobal = UpdateGlobal;
    this._RootScope = $rootScope;
    this._HttpService = HttpService;
    this._State = $state;
    this._Q = $q;
    this._Timeout = $timeout;

    const promises = [
      this._HttpService.visitorStatus().then(res => {
        this.userInfo = res.data;
      })
    ];
    // 相当于以前的控制器中的active()函数
    this._Q.all(promises).then(() => {
      // 做一些初始化后的工作
      console.log(this.userInfo, 'home-guide');
    });

    // fullPages action
    require.ensure(['../../../../../../node_modules/fullpage.js/jquery.fullPage.js'], function(require) {
      const fullpage = require('../../../../../../node_modules/fullpage.js/jquery.fullPage.js');

      $(document).ready(function() {

        // hack fullPages
        if($('html').hasClass('fp-enabled')){
          $.fn.fullpage.destroy('all');
        }
        // hack
        $timeout(function() {
          $('#fullpage').fullpage({
            //Design
            controlArrows: false,
            sectionsColor : ['#fff'],
            paddingTop: '0em',
            paddingBottom: '0px',
            responsiveWidth: 0,
            responsiveHeight: 0,
            //Navigation
            navigation: false, // 禁止右侧导航
            showActiveTooltip: false,
            slidesNavigation: true, // slides导航
            slidesNavPosition: 'bottom',
            //Scrolling
            css3: true,
            loopHorizontal: false
          });
        }, 10);
      });
    });
  }

  nextStep() {
    if(angular.equals(null, this.userInfo.phone) || angular.equals(undefined, this.userInfo.phone)){
      console.log('user do not has phone!');
      this._State.go('user-register');
    }
    else {
      return this._HttpService.generateUserProfile().then(res => {
        if(1 === res.status) {
          console.log('user has phone!');
          this._State.go('home');
        }
      })
    }
  }
}


HomeGuideController.$inject = ['UpdateGlobal', '$rootScope', 'HttpService', '$q', '$state', '$timeout'];

export default angular
    .module('home.guide.controller', [GlobalService, Http])
    .controller('HomeGuideController', HomeGuideController);
