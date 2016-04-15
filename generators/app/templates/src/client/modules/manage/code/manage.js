/*
 % 在这个文件中,我们把这个模块中所有的控制器当做[manage]模块的依赖模块来进行加载
 */

'use strict';

/*
 % 下面部分是我们这个模块的样式
 */

import './styles/common.scss'; // 共用部分的样式
import './styles/tabs.less';
import daTabsComponent from './../../../common-components/tabs';
import demoDirective from './../../../common-directives/demo';

export default angular
    .module('manage', [
        daTabsComponent,
        demoDirective,
        require('./controllers/manage.controller')
    ]);
