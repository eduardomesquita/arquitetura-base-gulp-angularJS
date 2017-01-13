(function () {

  'use strict';

  angular
        .module('sandboxApp')
        .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'scripts/pages/home/view/home.html',
            controller: 'homeController as home',
            resolve: {
                trans: function (Traducoes) {
                return new Traducoes('scripts/pages/home/language');
                }
            }
        });

  });
})();
