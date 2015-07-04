# ngUnderscore
A sexy reference to underscore.js for angular.

# Installation
```
bower install --save ngUnderscore
```

# Usage
```js
angular
  .module('boolApp', ['ngUnderscore'])
  .controller('BoolController', function ($scope, _) {
      $scope.sum = _.reduce(
        _.range(10), function(sum, num){ return sum + (num * 3); }, 0
      );
  });
```
