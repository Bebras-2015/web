myApp.controller('studentCtrl', [
    '$scope', 'studentsService', 'studentRes', 'lodash', '$routeParams', '$rootScope', 'statsResFactory', 'statsService',
    function ($scope, studentsService, studentRes, lodash, $routeParams, $rootScope, statsResFactory, statsService) {
        $rootScope.page = 'home';
        $scope.student = studentsService;
        $scope.stats = statsService;

        $scope.labels = ["Jonas", "Petras", "March", "April", "May", "June", "July"];
        $scope.series = ['Grader', 'School'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };

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
                }
            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

    }
]);