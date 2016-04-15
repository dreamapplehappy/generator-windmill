import angular from 'angular';

import {ProgressComponent} from './config';

export default angular.module('component.weui_progress', [])
    .component('weuiProgress', ProgressComponent)
    .name;