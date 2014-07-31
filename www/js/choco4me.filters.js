(function (window, angular, undefined) {
    'use strict';

    /* Filters */
    angular.module('choco4me.filters', []).
        filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            }
        }]);

}(window, window.angular));