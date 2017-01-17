(function(){

    'use strict';

    angular
        .module('sandbox-app')
        .controller('consultarVendasController', ['$scope', 'vendasService', consultarVendasController]);

    function consultarVendasController($scope, vendasService) {

        var vm = $scope;

        var init = function(){
            vm.vendas = vendasService.getVendas();
        };

        init();

    }

})();
