(function(){
    
    'use strict';
    
    angular
        .module('sandbox-app')
        .service('comumService',  ['toaster',  function (toaster) {

        var exibirMensagemErro = function(mensagem){
              toaster.pop({
                type: 'error',
                body: mensagem,
                showCloseButton: true,
                bodyOutputType: 'trustedHtml'
              });
        };

        var exibirMensagemSucesso = function(mensagem){
              toaster.pop({
                type: 'sucess',
                body: mensagem,
                showCloseButton: true,
                bodyOutputType: 'trustedHtml'
              });
        };

        return {
            exibirMensagemErro: exibirMensagemErro,
            exibirMensagemSucesso: exibirMensagemSucesso
        };

    }]);

})();
