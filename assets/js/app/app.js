var myApp = angular.module('myApp', ['ngResource', 'ngLodash', 'ngRoute', 'chart.js']);

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
                templateUrl: "views/students.html",
                controller: 'studentsCtrl'
            })
            .when('/student/:id', {
                templateUrl: "views/student.html",
                controller: 'studentCtrl'
            })
            .when('/about', {
                templateUrl: "views/about.html",
                controller: 'aboutCtrl'
            })
            .when('/nfq', {
                templateUrl: "views/nfq.html",
                controller: 'nfqCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]
);
