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
                templateUrl: "views/students.html",
                controller: 'studentsCtrl'
            })
            .when('/student/:id', {
                templateUrl: "views/student.html",
                controller: 'studentCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]
);
