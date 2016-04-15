import ProgressController from './controllers/progress.controller';
import progressHtml from './templates/progress.html';

const ProgressComponent = {
    bindings: {
        progress: '='
    },
    controller: ProgressController,
    template: progressHtml
};

export {ProgressComponent};

