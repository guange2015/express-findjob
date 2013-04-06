'use strict';

define(function(require,exports,module){


    var angular = require('angular');
    require('./controllers');
    require('./directives');
    require('./services');
    require('./filters');

// Declare app level module which depends on filters, and services
    angular.module('myApp', ['myApp.services']).
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
