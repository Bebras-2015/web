myApp.controller('studentCtrl', [
    '$scope', 'studentsService', 'studentRes', 'lodash', '$routeParams', '$rootScope', 'statsResFactory', 'statsService',
    function ($scope, studentsService, studentRes, lodash, $routeParams, $rootScope, statsResFactory, statsService) {
        $rootScope.page = 'student';
        $scope.student = studentsService;
        $scope.stats = statsService;

        // Get student
        studentRes.fetch({id:$routeParams.id}).$promise.then(
            function (data) {
                // Prepare name
                $scope.student.name = data.full_name;
                $scope.student.school = data.school;
                $scope.student.grader = data.grader;
                $scope.student.score = data.score;

                $scope.student =
                {
                    id: data.id,
                    name: $scope.student.name,
                    school: $scope.student.school,
                    grader: $scope.student.grader,
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

                console.log(data);
                // Prepare name
                $scope.stats.stats.grader = data.by_grader;
                $scope.stats.stats.school = data.by_school;

                $scope.stats =
                {
                    school: $scope.stats.stats.grader,
                    grader: $scope.stats.stats.school
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
                    ['Memory', $scope.stats.school],
                    ['CPU', $scope.stats.grader]
                ];

            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

    }
]);