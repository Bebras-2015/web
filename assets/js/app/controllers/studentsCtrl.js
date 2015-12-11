myApp.controller('studentsCtrl', [
    '$scope', 'studentsService', 'studentsRes', 'lodash', '$rootScope',
    function ($scope, studentsService, studentsRes, lodash, $rootScope) {

        $rootScope.page = 'home';
        $scope.student = studentsService;
        // Get Users
        studentsRes.fetch().$promise.then(
            function (data) {
                // Clear the list
                $scope.student.list = [];

                angular.forEach(data, function(value, key) {

                    // Prepare name
                    $scope.student.name = value.full_name;
                    $scope.student.school = value.school;
                    $scope.student.grader = value.grader;
                    $scope.student.score = value.score;

                    $scope.student.list.push(
                        {
                            id: value.id,
                            name: $scope.student.name,
                            school: $scope.student.school,
                            grader: $scope.student.grader,
                            score: $scope.student.score
                        }
                    );
                });
            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

    }
]);