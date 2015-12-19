myApp.factory(
    'studentsRes', [
        '$resource', function ($resource) {
            return $resource('http://api-bebras.tadcka.lt/students.json', {}, {
                fetch: {
                    method: 'get',
                    isArray: true,
                    cache: true
                }
            });
        }
    ]
);
