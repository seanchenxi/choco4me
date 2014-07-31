(function (window, angular, undefined) {
    'use strict';

    /* Directives */
    angular.module('choco4me.directives', [])
        .directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            }
        }])

}(window, window.angular));