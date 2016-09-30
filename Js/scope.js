(function() {
	'use strict';
	var app = angular.module('myApp', []);
  		app.controller('NavController', function NavController($scope) {
  			$scope.doSomething = doA;
		};
	})
		app.controller('ContentAreaController', function ContentAreaController($scope) {
			$scope.doSomething = doB;
		})
})();