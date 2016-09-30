var app = angular.module('myApp', []);
      app.controller('DeathrayMenuController', function DeathrayMenuController($scope) {
        $scope.menuState = {show: false};

        $scope.toggleMenu = function() {
          $scope.menuState.show = !$scope.menuState.show;
        };
  })