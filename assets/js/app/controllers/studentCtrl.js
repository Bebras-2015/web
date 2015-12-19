myApp.controller('studentCtrl', [
    '$scope', 'studentsService', 'studentRes', 'lodash', '$routeParams', '$rootScope', 'statsResFactory', 'statsService',
    function ($scope, studentsService, studentRes, lodash, $routeParams, $rootScope, statsResFactory, statsService) {
        $rootScope.page = 'results';
        $scope.student = studentsService;
        $scope.stats = statsService;

        // Get student
        studentRes.fetch({id:$routeParams.id}).$promise.then(
            function (data) {
                // Prepare name
                $scope.student.name = data.full_name;
                $scope.student.school = data.school;
                $scope.student.grade = data.grade;
                $scope.student.score = data.score;

                $scope.student =
                {
                    id: data.id,
                    name: $scope.student.name,
                    school: $scope.student.school,
                    grade: $scope.student.grade,
                    score: $scope.student.score
                };
            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

        // Get student stats
        statsResFactory.fetch({id:$routeParams.id}).$promise.then(
            function (data) {

                // Prepare name
                $scope.stats.stats.grade = data.by_grade;
                $scope.stats.stats.school = data.by_all;

                $scope.stats =
                {
                    school: $scope.stats.stats.grade,
                    grade: $scope.stats.stats.school
                };

                $scope.chartObject = {};
                $scope.chartObject.type = "Gauge";

                $scope.chartObject.options = {
                    width: 400,
                    height: 120,
                    redFrom: 90,
                    redTo: 100,
                    yellowFrom: 75,
                    yellowTo: 90,
                    minorTicks: 5
                };

                $scope.chartObject.data = [
                    ['Label', 'Value'],
                    ['Visų', $scope.stats.school],
                    ['Klasiokų', $scope.stats.grade],
                    ['Kiečiausių', parseFloat(($scope.stats.school + $scope.stats.grade) / 2).toFixed(0)]
                ];

            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

    }
]);