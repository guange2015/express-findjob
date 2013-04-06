'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
define(function(require){
    require('angular-resource');
    var angular = require('angular');
    angular.module('myApp.services', ['ngResource']).
    factory('Post',function($resource){
        return $resource('/api/posts/:id');
    });
});
