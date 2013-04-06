'use strict';

define(['angular','angularResource','controllers','services','filters','directives'], function (angular ) {
    var app = angular.module('myApp',['myApp.services','myApp.filters','myApp.directives']);
    app.
        config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            var prefix = "/partials/";

            $routeProvider.when('/', {
                templateUrl: prefix + 'index',
                controller: IndexCtrl
            });
            $routeProvider.when('/addPost', {
                templateUrl: prefix + 'addPost',
                controller: AddPostCtrl
            });
            $routeProvider.when('/login', {
                templateUrl: prefix + 'login',
                controller: LoginCtrl
            });
            $routeProvider.when('/readPost/:id', {
                templateUrl: prefix + 'readPost',
                controller: ReadPostCtrl
            });
            $routeProvider.when('/editPost/:id', {
                templateUrl: prefix + 'editPost',
                controller: EditPostCtrl
            });
            $routeProvider.when('/deletePost/:id', {
                templateUrl: prefix + 'deletePost',
                controller: DeletePostCtrl
            });
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }]);
});
