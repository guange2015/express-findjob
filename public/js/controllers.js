'use strict';

               /* Controllers */


function NavBarController($scope,$route, $routeParams, $location) {
    $scope.onTwitterLogin = function()
    {
        // a direct window.location to overcome Angular intercepting your call!
        window.location = "/auth/twitter";
    }

    $scope.onFacebookLogin = function () {

    }
    $scope.getClass = function(path) {
        if($location.path()===path){
            return "active";
        }
        return "";
    }
//  $scope.$route = $route;
//  $scope.$location = $location;
//  $scope.$routeParams = $routeParams;
//
//    console.log('haa');
}

function IndexCtrl($scope, $http, Post) {
  $scope.posts = Post.query();
}

function LoginCtrl($scope,$location)
{
    $scope.onLoginClick = function()
    {
        // a direct window.location to overcome Angular intercepting your call!
        window.location = "/auth/twitter";
    }
}

function AddPostCtrl($scope, $http,Post, $location) {
  $scope.submitPost = function (post) {

    var p = new Post(post);
    p.$save(function(u, putResponseHeaders) {
        console.log(putResponseHeaders);
        $location.path('/');
    });
  }
}

function ReadPostCtrl($scope, $routeParams,Post) {
    console.log("Read post ctrl");
    Post.get({id: $routeParams.id}, function(u, getResponseHeader){
        $scope.post = u.post;
    });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
  $http({method: 'GET', url: '/api/post/' + $routeParams.id}).
    success(function(data, status, headers, config) {
      $scope.title = data.post.title;
      $scope.text = data.post.text;
    });

  $scope.editPost = function () {
    $http.post('/api/editPost', {
      id: $routeParams.id,
      title: $scope.title,
      text: $scope.text
    }).
    success(function(data, status, headers, config) {
      $location.path('/readPost/' + $routeParams.id);
    });
  };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http({method: 'GET', url: '/api/post/' + $routeParams.id}).
    success(function(data, status, headers, config) {
      $scope.post = data.post;
    });

  $scope.deletePost = function () {
    $http.post('/api/deletePost', {
      id: $routeParams.id
    }).
    success(function(data, status, headers, config) {
      $location.path('/');
    });
  };

  $scope.home = function () {
    $location.path('/');
  };
}
