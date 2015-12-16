myApp.controller('homeCtrl', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {

        $rootScope.page = 'home';

        $scope.$on('$viewContentLoaded', function() {
            $('.ani').each(function(i) {
                var $this = $(this);
                setTimeout(function() {
                    $this.addClass('flipInX').removeClass('hidden');
                }, i * 100);
            });
        });
    }
]);