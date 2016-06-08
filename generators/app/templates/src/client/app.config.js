
function routing($urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    //$urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

function initGlobal($rootScope) {
    $rootScope.global = {
        config: window.config,
        docTitle: '爱逸族',
        fullPagesStatus: false
    };
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

initGlobal.$inject = ['$rootScope'];


export {
    routing,
    initGlobal
}


