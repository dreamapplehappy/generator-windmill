'use strict';

class TabsController {
    constructor() {
        this.title = 'opopo';
        this.panes = [];
    }

    addPane(pane) {
        if (this.panes.length === 0) {
            this.select(pane);
        }
        this.panes.push(pane);
    }

    select(pane) {
        angular.forEach(this.panes, (pane) => {
            pane.selected = false;
        });
        pane.selected = true;
    }
}

TabsController.$inject = [];

export default TabsController;