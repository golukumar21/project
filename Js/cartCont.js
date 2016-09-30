var app = angular.module('myApp', []);
    app.controller('cartController', function HelloController($scope) {
        $scope.items = [
                          {title: 'Potato', quantity: 8, price: 2.95},
                          {title: 'Tomato', quantity: 12, price: 5.95},
                          {title: 'Onion', quantity: 8, price: 8.95}];
        $scope.remove = function(index) {
            $scope.items.splice(index, 1);
        }
    })
