import angular from 'angular';
import $ from 'jquery';
import './mobiscroll.css';
require('imports?jQuery=jquery!./mobiscroll.js');

function windmillDate() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs){
            require.ensure([], function(require) {
                var currYear = (new Date()).getFullYear();
                var opt={};
                opt.date = {preset : 'date'};
                opt.datetime = {preset : 'datetime'};
                opt.time = {preset : 'time'};
                opt.default = {
                    theme: 'android-ics light', //皮肤样式
                    display: 'modal', //显示方式
                    mode: 'scroller', //日期选择模式
                    dateFormat: 'yyyy-mm-dd',
                    lang: 'zh',
                    showNow: true,
                    // nowText: "今天",
                    startYear: currYear - 100, //开始年份
                    endYear: currYear + 100 //结束年份
                };

                $("#date").mobiscroll($.extend(opt['date'], opt['default']));

                //$('.dwb').click(function() {
                //    alert(123);
                //});

                //var optDateTime = $.extend(opt['datetime'], opt['default']);
                //var optTime = $.extend(opt['time'], opt['default']);
                //$("#appDateTime").mobiscroll(optDateTime).datetime(optDateTime);
                //$("#appTime").mobiscroll(optTime).time(optTime);
            });
        }
    }
}

export default angular.module('directive.windmill-date', [])
    .directive('windmillDate', windmillDate)
