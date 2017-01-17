(function(){

    'use strict';

    angular
        .module('sandbox-app')
        .controller('cadastrarVendasController', ['$scope', 'comumService', 
                            '$filter', 'vendasService', cadastrarVendasController]);

    function cadastrarVendasController($scope, comumService, $filter, vendasService) {

        var vm = $scope;

        vm.validar = function(form){
            var error = form.$error;

            angular.forEach(error.required, function (field) {
                if(field.$invalid){
                    comumService.exibirMensagemErro($filter('translate')('campos-obrigatorios', {
                        campo: field.$name
                    }));
                }
            });

            return form.$valid;
        };

        vm.salvar = function(){
            comumService.exibirMensagemSucesso($filter('translate')('cadastrado'));
            vm.listaVendas.push(angular.copy(vm.vendas));
            limparVendas();
            console.log(vm.listaVendas);
        };


        var limparVendas = function(){
            vm.vendas = {};
        }

        var init = function(){
            vm.listaVendas = vendasService.getVendas();
            limparVendas();
        };

        init();

    }

})();
