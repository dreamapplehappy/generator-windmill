import angular from 'angular';

import {SearchBarComponent} from './config';

export default angular.module('component.weui_search-bar', [])
    .component('weuiSearchBar', SearchBarComponent)
    .name;