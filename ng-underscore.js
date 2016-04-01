(function(){
    'use strict';

    angular
        .module('ngUnderscore', [])
        .factory('_',ngUnderscore);
        
        ngUnderscore.$inject = ['$window'];
        
        function ngUnderscore($window){
            return $window._;
        }
})();
