angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(){
    Links.getLinks($scope.data.links);
    console.log($scope.data.links);
  };
  $scope.getLinks();
});