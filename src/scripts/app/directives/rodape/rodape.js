(function () {
    
    'use strict';

    angular
        .module('sandbox-app')
        .directive('rodape', [diretiva]);

    function diretiva() {
        return {
            restrict: 'EA',
            scope: {
            },
            templateUrl: 'scripts/app/directives/rodape/template/rodape.html',
            link: function ($scope) {

                var vm = $scope;
                

            }
        };
    }   

})();
