# ngUnderscore
A sexy reference to underscore.js for angular. 

# Installation
```
bower install --save ngUnderscore
```

# Usage
```
angular
  .module('boolApp', ['ngUnderscore'])
  .controller('BoolController', function ($scope, _) {
      $scope.array_.map(
        [1, 2, 3], function(num){ return num * 3; }
      );
  });
```
