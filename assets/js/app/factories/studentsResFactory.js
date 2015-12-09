myApp.factory(
    'studentsRes', [
        '$resource', function ($resource) {
            return $resource('assets/js/app/data/students.json', {}, {
                fetch: {
                    method: 'get',
                    isArray: true,
                    cache: true
                }
            });
        }
    ]
);
