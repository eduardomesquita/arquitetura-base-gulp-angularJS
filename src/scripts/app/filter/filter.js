(function () {

  'use strict';

  angular.module('sandboxApp').filter('cep', function () {
    return function (input) {
      if (!input) {
        return;
      }
      return input.toString().substr(0, 5) + '-' + input.toString().substr(5, 3);
    };
  });

  angular.module('sandboxApp').filter('cpfcnpj', function () {
    return function (input) {
      if (!input) {
        return;
      } else if (input.toString().length <= 11 && input.toString().length > 3) {
        while (input.toString().length < 11) {
          input = '0' + input
        }
        return input.toString().substr(0, 3) + '.' + input.toString().substr(3, 3) + '.' + input.toString().substr(6, 3) + '-' + input.toString().substr(9, 2);
      }
      else {
        while (input.toString().length < 14) {
          input = '0' + input
        }
        return input.toString().substr(0, 2) + '.' + input.toString().substr(2, 3) + '.' + input.toString().substr(5, 3) + '/' + input.toString().substr(8, 4) + '-' + input.toString().substr(12, 2);
      }
    };
  });

  angular.module('sandboxApp').filter('telefonebr', function () {
    return function (input) {
      if (!input) {
        return "Não Informado";
      }
      if (input.toString().length == 11) {
        return '(' + input.toString().substr(0, 2) + ') ' + input.toString().substr(2, 5) + '-' + input.toString().substr(7, 4);
      } else if (input.toString().length == 10) {
        return '(' + input.toString().substr(0, 2) + ') ' + input.toString().substr(2, 4) + '-' + input.toString().substr(6, 4);
      }
    };
  });

  angular.module('sandboxApp').filter('dataformatada', function () {
    return function (input) {
      if (!input) {
        return;
      }

      var data = new Date(input);
      var dia = data.getDate();
      if (dia.toString().length == 1)
        dia = "0" + dia;
      var mes = data.getMonth() + 1;
      if (mes.toString().length == 1)
        mes = "0" + mes;
      var ano = data.getFullYear();
      return dia + "/" + mes + "/" + ano;
    };
  });

  angular.module('sandboxApp').filter('simNao', function () {
    return function (input) {
      return input ? 'Sim' : 'Não';
    }
  });

})();
