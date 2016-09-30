var app = angular.module('myApp', []);
  		app.controller('HelloController', function HelloController($scope) {
		$scope.greeting = {text: 'Hello'};
	})