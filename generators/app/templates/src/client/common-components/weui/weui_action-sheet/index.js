import angular from 'angular';

import {ActionSheetComponent} from './config';

export default angular.module('component.weui_action-sheet', [])
    .component('weuiActionSheet', ActionSheetComponent)
    .name;