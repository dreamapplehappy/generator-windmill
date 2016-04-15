'use strict';

class PaneController {
    constructor() {
        this.$onInit = () => {
            this.tabsCtrl.addPane(this);
        }
    }
}

PaneController.$inject = [];

export default PaneController;