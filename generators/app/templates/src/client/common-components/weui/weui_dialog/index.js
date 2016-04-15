import angular from 'angular';

import {AlertDialogComponent, ConfirmDialogComponent} from './config';

export default angular.module('component.weui_dialog', [])
    .component('weuiAlertDialog', AlertDialogComponent)
    .component('weuiConfirmDialog', ConfirmDialogComponent)
    .name;