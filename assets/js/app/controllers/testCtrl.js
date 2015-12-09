myApp.controller('testCtrl', [
    '$scope', 'userService', 'userRes', 'lodash',
    function ($scope, userService, userRes, lodash) {

        $scope.userService = userService;

        // Get Users
        userRes.program().$promise.then(
            function (data) {
                userService.list = data;
                userService.name = lodash.first(data).name;
            },
            function (error) {
                console.log(error.status, error.statusText);
            }
        );

    }
]);