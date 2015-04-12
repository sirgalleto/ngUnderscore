# ngUnderscore
A sexy reference to underscore.js for angular. 

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

## Installation
```
bower install --save ngUnderscore
```
