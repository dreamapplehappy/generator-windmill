import tabHtml from './templates/tab.html';
import paneHtml from './templates/pane.html';
import tabController from './controllers/tab.controller.js';
import paneController from './controllers/pane.controller.js';

const tabComponent = {
    transclude: true,
    controller: tabController,
    template: tabHtml
};

const paneComponent = {
    transclude: true,
    require: {
        tabsCtrl: '^daTabs'
    },
    bindings: {
        title: '@'
    },
    controller: paneController,
    template: paneHtml
};

export {tabComponent, paneComponent};

