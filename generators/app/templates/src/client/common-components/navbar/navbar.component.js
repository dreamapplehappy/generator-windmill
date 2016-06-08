import template from './templates/navbar.html';
import controller from './controllers/navbar.controller';

// 只是一个配置,所以导出对象是比较合适的
let navbarComponent = {
    bindings: {
    },
    template: template,
    controller: controller
};

export default navbarComponent;