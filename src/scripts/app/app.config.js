(function () {
    
    'use strict';

    angular.module('sandbox-app')
        
        .config(function ($httpProvider, $locationProvider,  httpRequestInterceptorCacheBusterProvider) {
            $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
            
            //Cache everything except rest api requests
            httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*api.*/, /.*protected.*/], true);
        })

        .config(['$urlMatcherFactoryProvider', function($urlMatcherFactory) {
            $urlMatcherFactory.type('boolean', {
                name : 'boolean',
                decode: function(val) { return val == true ? true : val == "true" ? true : false },
                encode: function(val) { return val ? 1 : 0; },
                equals: function(a, b) { return this.is(a) && a === b; },
                is: function(val) { return [true,false,0,1].indexOf(val) >= 0 },
                pattern: /bool|true|0|1/
            });
        }])

        .config(['$translateProvider', function ($translateProvider) {

            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: '{part}/{lang}.json'
            });

            $translateProvider.preferredLanguage('pt-BR');
            $translateProvider.useSanitizeValueStrategy('escapeParameters');

        }])

        .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeBar = true;
        }])

        .config(function ($mdDateLocaleProvider, moment) {

            $mdDateLocaleProvider.formatDate = function(date) {
            return date ? moment(date).format('DD/MM/YYYY') : '';
            };

            $mdDateLocaleProvider.parseDate = function(dateString) {
            if (dateString == null || dateString.length == 0) {
                return null;
            }

            var m = moment(dateString, 'DD/MM/YYYY', true);
            return m.isValid() ? m.toDate() : '';
            }
        })

})();
