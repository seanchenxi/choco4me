(function(window, angular, undefined) {
    'use strict';

    // Declare app level module which depends on filters, and services
    var requires = [
        'choco4me.filters',
        'choco4me.services',
        'choco4me.directives',
        'ajoslin.mobile-navigate',
        'ngTouch',
        'ngRoute'
    ];

    window.choco4me = angular.module('choco4me', requires)
        .config(function ($compileProvider){
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        })
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
            $routeProvider.when('/notification', {templateUrl: 'partials/notificationView.html'});
            $routeProvider.when('/geolocation', {templateUrl: 'partials/geolocationView.html'});
            $routeProvider.when('/accelerometer', {templateUrl: 'partials/accelerometerView.html'});
            $routeProvider.when('/deviceInfo', {templateUrl: 'partials/deviceInfoView.html'});
            $routeProvider.when('/camera', {templateUrl: 'partials/cameraView.html'});
            $routeProvider.when('/contacts', {templateUrl: 'partials/contactsView.html'});
            $routeProvider.when('/compass', {templateUrl: 'partials/compassView.html'});
            $routeProvider.when('/hackerNews', {templateUrl: 'partials/hackerNewsView.html'});
            $routeProvider.otherwise({redirectTo: '/'});
        }]);

}(window, window.angular));


