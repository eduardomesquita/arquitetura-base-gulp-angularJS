(function () {

  'use strict';

  angular.module('sandbox-app').config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise("/servicos");

    $stateProvider
      .state('servicos', {
        abstract: true,
        template: '<div ui-view></div>',
        url: '/servicos'
      })

      .state('servicos.home', {
        url: '',
        templateUrl: "scripts-servicos/pages/home/view/home.tmpl.html",
        controller: 'HomeController as homeCtrl',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes();
          }
        }
      })

      .state('servicos.SERVICOS_CADASTRAR_SERVICOS', {
        url: '/cadastrar',
        templateUrl: "scripts-servicos/pages/servicos/view/cadastrarServicos.tmpl.html",
        controller: 'cadastrarServicosController as servicosAddCtrl',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes('scripts-servicos/pages/servicos/language');
          }
        }
      })

  });

})();
