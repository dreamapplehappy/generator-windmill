import angular from 'angular';

import {ToastComponent, LoadingToastComponent} from './config';

export default angular.module('component.weui_toast', [])
    .component('weuiToast', ToastComponent)
    .component('weuiLoadingToast', LoadingToastComponent)
    .name;