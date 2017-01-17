(function(){
    
    'use strict';
    
    angular
        .module('sandbox-app')
        .factory('vendasService', [vendasService]);

    function vendasService($scope) {

        var vendas = [];


        var getVendas = function(){
            return vendas;
        };


        return {
            getVendas: getVendas
        };
    }

})()
