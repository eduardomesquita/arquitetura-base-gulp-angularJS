(function(){

    'use strict';

    angular
        .module('sandbox-app')
        .controller('cadastrarVendasController', ['$scope', 'comumService', '$filter', cadastrarVendasController]);

    function cadastrarVendasController($scope, comumService, $filter) {

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
        };

        var init = function(){
            vm.vendas = {};
        };

        init();

    }

})();
