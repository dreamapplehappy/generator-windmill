import template from './navbar.html';
import controller from './navbar.controller';

// 只是一个配置,所以导出对象是比较合适的
let navbarComponent = {
    bindings: {
    },
    template: template,
    controller: controller
};

export default navbarComponent;