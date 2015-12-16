var myApp = angular.module('myApp', ['ngResource', 'ngLodash', 'ngRoute', 'angular-loading-bar', 'googlechart']);

myApp.config([
    '$routeProvider', '$locationProvider', 'cfpLoadingBarProvider',
    function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {

        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.parentSelector = 'loading';
        cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar" class="progress">' +
            '<div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">' +
            '</div>' +
            '</div>';

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/', {
                templateUrl: "views/home.html",
                controller: 'homeCtrl'
            })
            .when('/results', {
                templateUrl: "views/students.html",
                controller: 'studentsCtrl'
            })
            .when('/student/:id', {
                templateUrl: "views/student.html",
                controller: 'studentCtrl'
            })
            .when('/about', {
                templateUrl: "views/about.html",
                resolve: {
                    required: function ($rootScope) {
                        $rootScope.page = 'about';
                    }
                }
            })
            .when('/nfq', {
                templateUrl: "views/nfq.html",
                resolve: {
                    required: function ($rootScope) {
                        $rootScope.page = 'nfq';
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]
);
