'use strict';

/* Directives */

define(['angular'], function (angular) {
    angular.module('myApp.directives', []).
        directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }])
        .directive('dropdown', function () {
            return function (scope, elm, attrs) {
                $(elm).dropdown();
            };
        })
        .directive('phoneValidate', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ctrl) {
                    ctrl.$parsers.unshift(function (viewValue) {
                        var b = !viewValue || /^\d+$/.test(viewValue);
                        ctrl.$setValidity('phoneformat', b);
                        return viewValue;
                    });
                }
            };
        });
});