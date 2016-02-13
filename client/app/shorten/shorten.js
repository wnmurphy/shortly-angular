angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {
    url: ''
  };
  $scope.isError = true;
  $scope.validate = function(){
    $scope.isError = !Links.isValidUrl($scope.link.url);
  }
  $scope.addLink = function(){
    Links.addLink($scope.link)
  };
});