
import angular from 'angular';

import {tabComponent, paneComponent} from './component.config';

export default angular.module('component.demo', [])
    .component('daTabs', tabComponent)
    .component('daPane', paneComponent)
    .name;