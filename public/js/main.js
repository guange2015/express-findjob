/**
 * Created with JetBrains WebStorm.
 * User: xiao
 * Date: 13-4-5
 * Time: 上午1:42
 * To change this template use File | Settings | File Templates.
 */

require.config({
    paths: {
        jquery: '/js/lib/jquery/jquery',
        bootstrap: '/stylesheets/bootstrap/js/bootstrap',
        angular: '/js/lib/angular/angular',
        angularResource: '/js/lib/angular/angular-resource'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angularResource' : {deps:['angular']},
        'bootstrap': {deps:['jquery']}
    },
    priority: [
        "angular"
    ],
    urlArgs: "bust=" +  (new Date()).getTime()
});

require([
    'angular',
    'bootstrap',
    'app'
], function (angular) {
    angular.bootstrap(document, ['myApp']);
});