angular.module('shortly.services', [])

.factory('Links', function ($http) { // Your code here

  var getLinks = function (linkArray) {
      $http({
        method: 'GET',
        url: '/api/links'
      }).then(function successCallback (results) {
        for (var i = 0; i < results.data.length; i++) {
          linkArray.push(results.data[i]);
        }
      }, function errorCallback(err) {
        console.error(err);
      });
  };

  var addLink = function (link) {
    $http({
        method: 'POST',
        url: '/api/links',
        data: link
      }).then(function successCallback (data) {
        console.log('addLink gets server response: ' + data.status);
      }, function errorCallback (err) {
        console.error(err);
      });
  };

  //regex to validate URL:
  var isValidUrl = function (url) {
    console.log('Validating');
    var validUrlTest =  /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return validUrlTest.test( url );
  };

  return {
    getLinks: getLinks,
    addLink: addLink,
    isValidUrl: isValidUrl
  };

})
.factory('Auth', function ($http, $location, $window) {
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
