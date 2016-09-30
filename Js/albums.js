var app = angular.module('myApp', []);
      app.controller('AlbumController', function($scope) {
        var album = [
          {name: 'Track1', duration: '2:34'},
          {name: 'Track2', duration: '5:24'},
          {name: 'Track3', duration: '6:21'}
        ];
        $scope.album = album;
  })