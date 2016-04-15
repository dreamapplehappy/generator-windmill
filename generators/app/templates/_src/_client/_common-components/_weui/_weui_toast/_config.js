import ToastController from './controllers/toast.controller';
import toastHtml from './templates/toast.html';
import loadingToastHtml from './templates/loading-toast.html';

const ToastComponent = {
    bindings: {
        toastInfo: '<',
        show: '='
    },
    controller: ToastController,
    template: toastHtml
};

const LoadingToastComponent = {
    bindings: {
        loadingToastInfo: '<',
        show: '='
    },
    controller: ToastController,
    template: loadingToastHtml
};

export {ToastComponent, LoadingToastComponent};

