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
        templateUrl: 'scripts/pages/servicos/view/cadastrarServicos.tmpl.html',
        controller: 'cadastrarServicosController as servicosAddCtrl',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes('scripts/pages/servicos/language');
          }
        }
      })

      .state('vendas.cadastrar', {
        url: '/cadastrar',
        templateUrl: 'scripts/pages/servicos/view/cadastrarServicos.tmpl.html',
        controller: 'cadastrarServicosController as servicosAddCtrl',
        resolve: {
          trans: function (Traducoes) {
            return new Traducoes('scripts/pages/servicos/language');
          }
        }
      })


  });

})();
