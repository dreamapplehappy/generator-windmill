'use strict';

import angular from 'angular';
import DemoService from '../../../../common-services/demo.service';
import GlobalService from '../../../../common-services/global';
import DemoService1 from '../services/demo.service';

// 类中公用的服务,方法
const _Q = new WeakMap();
const _RandomNames = new WeakMap();
const _UpdateGlobal = new WeakMap();
const _DemoServiceDemo = new WeakMap();
const _Scope = new WeakMap();


class DemoController {
    constructor($q, $scope, randomNames, UpdateGlobal, DemoServiceDemo) {

        _Q.set(this, $q);
        _Scope.set(this, $scope);
        _RandomNames.set(this, randomNames);
        _UpdateGlobal.set(this, UpdateGlobal);
        _DemoServiceDemo.set(this, DemoServiceDemo);

        const promises = [
            _DemoServiceDemo.get(this).people().then(res => {
                this.res = res;
            }),
            _DemoServiceDemo.get(this).people().then(res => {
                this.q = res;
            })
        ];
        // 相当于以前的控制器中的active()函数
        _Q.get(this).all(promises).then(() => {
            // 做一些初始化后的工作
        });

        _UpdateGlobal.get(this).setDocTitle('初始化标题');
        this.count = 1;
        this.name = 'dreamapple';

        // 如何使用$watch服务
        // 注意引用angular以及为什么要使用angular.bind()
        _Scope.get(this).$watch(angular.bind(this, () => {
            return this.count;
        }), this.watchNumber);
    }

    // 这里不可以使用静态方法
    watchNumber(newValue, oldValue) {
        // 在这里处理变化前后的值
        console.log(newValue, oldValue);
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    changeName() {
        this.name = _RandomNames.get(this).getName();
    }

    updateDocTitle() {
        _UpdateGlobal.get(this).setDocTitle('title');
    }
}

DemoController.$inject = ['$q', '$scope', 'randomNames', 'UpdateGlobal', 'DemoServiceDemo'];

export default angular
    .module('demo.controller', [DemoService, GlobalService, DemoService1])
    .controller('DemoController', DemoController)
    .name;