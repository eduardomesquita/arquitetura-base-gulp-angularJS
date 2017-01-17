(function () {

  'use strict';

  angular
      .module('sandbox-app')
      .config(function ($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/vendas');

    $stateProvider

      .state('vendas', {
        abstract: true,
        template: '<div ui-view></div>',
        url: '/vendas'
      })

      .state('vendas.home', {
        url: '',
        templateUrl: 'scripts/pages/home/view/home.html',
        controller: 'HomeController as homeCtr',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes();
          }
        }
      })

      .state('vendas.consultar', {
        url: '/consultar',
        templateUrl: 'scripts/pages/vendas/view/consultar-vendas.html',
        controller: 'consultarVendasController as consultar',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes('scripts/pages/vendas/language');
          }
        }
      })

      .state('vendas.cadastrar', {
        url: '/cadastrar',
        templateUrl: 'scripts/pages/vendas/view/cadastrar-vendas.html',
        controller: 'cadastrarVendasController as cadastrar',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes('scripts/pages/vendas/language');
          }
        }
      })


  });

})();
