var myApp = angular.module('myApp', ['ngResource', 'ngLodash', 'ngRoute']);

myApp.config([
    '$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: "app/view/testCtr.html",
                controller: 'testCtrl'
            })
            .when('/contact', {
                templateUrl: "app/view/testCtr.html",
                controller: 'testCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]
);
