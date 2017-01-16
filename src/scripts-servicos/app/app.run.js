angular.module('sandbox-app')
    .run(function ($rootScope, $location, $window, $http, $state, ENV, VERSION, localStorageService) {

        $rootScope.ENV = ENV;
        $rootScope.VERSION = VERSION;

        $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
            $rootScope.toState = toState;
            $rootScope.toStateParams = toStateParams;
        });

        $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
            if (toState.data && toState.data.pageTitle) {
                titleKey = toState.data.pageTitle;
            }
            $window.document.title = titleKey;
        });

});
