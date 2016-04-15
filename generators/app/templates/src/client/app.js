
import angular from 'angular';

import '../../node_modules/weui/dist/style/weui.min.css';
import Http from './common-services/http';

import './app.scss';
import * as config from './app.config';

angular.module('myApp', [
    require('angular-cookies'),
    require('angular-ui-router'),
    require('./base.controller'),
    require('oclazyload'),
    require('./common-components/weui'),
    require('./modules/404/code/404.routing'),
    require('./modules/home/code/home.routing'),
    require('./modules/user/code/user.routing'),
    require('./modules/welfare/code/welfare.routing'),
    require('./modules/packets/code/packets.routing')
    ]
)
    .config(config.routing)
    .run(config.initGlobal);
