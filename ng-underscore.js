(function(){
    'use strict';

    angular
        .module('ng-underscore', [])
        .factory('_',ngUnderscore);

        function ngUnderscore($window){
            return $window._;
        };
})();
