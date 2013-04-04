'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngResource','myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'partials/index',
      controller: IndexCtrl
    });
    $routeProvider.when('/addPost', {
      templateUrl: 'partials/addPost',
      controller: AddPostCtrl
    });
    $routeProvider.when('/login', {
        templateUrl: 'partials/login',
        controller: LoginCtrl
    });
    $routeProvider.when('/readPost/:id', {
      templateUrl: 'partials/readPost',
      controller: ReadPostCtrl
    });
    $routeProvider.when('/editPost/:id', {
      templateUrl: 'partials/editPost',
      controller: EditPostCtrl
    });
    $routeProvider.when('/deletePost/:id', {
      templateUrl: 'partials/deletePost',
      controller: DeletePostCtrl
    });
    $routeProvider.otherwise({
      redirectTo: '/'
    });
  }]);