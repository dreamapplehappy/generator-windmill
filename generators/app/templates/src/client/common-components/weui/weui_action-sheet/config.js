import ActionSheetController from './controllers/action-sheet.controller';
import actionSheetHtml from './templates/action-sheet.html';

const ActionSheetComponent = {
    bindings: {
        show: '=',
        hideActionSheet: '&',
        showActionSheet: '&'
    },
    controller: ActionSheetController,
    template: actionSheetHtml
};

export {ActionSheetComponent};

