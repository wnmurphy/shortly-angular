angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };
  $scope.getLinks = function(){
    Links.getLinks($scope.data.links);
  //   // .then(function(){
  //   //   // stuff ?
  //   //   // Provider 'Links' must return a value from $get factory method.
  //   // })
    // .catch(function (error) {
    //     console.error(error);
    //   });
 
  //   // retrieves links  
  //   // load them to view
  };
  $scope.getLinks();
});