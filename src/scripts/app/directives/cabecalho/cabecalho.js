(function () {
    
    'use strict';

    angular
        .module('sandbox-app')
        .directive('cabecalho', [diretiva]);

    function diretiva() {
        return {
            restrict: 'EA',
            scope: {
            },
            templateUrl: 'scripts/app/directives/cabecalho/template/cabecalho.html',
            link: function ($scope) {

                var vm = $scope;
                

            }
        };
    }   

})();
