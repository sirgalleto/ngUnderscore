(function(){
    'use strict';

    angular
        .module('ngUnderscore', [])
        .factory('_',ngUnderscore);

        function ngUnderscore($window){
            return $window._;
        }
})();
