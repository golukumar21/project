var app = angular.module('myApp', []);
      app.controller('studentListController', function studentListController($scope) {
        var students = [
          {name: 'Abhishek', id: '1'},
          {name: 'Golu', id: '1'},
          {name: 'Rishi', id: '1'}
        ];
        $scope.students = students;

        $scope.insertTom = function() {
        	$scope.students.splice(1, 0, {name: 'Tom Thumb', id: '4'});
        }
  })