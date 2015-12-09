myApp.factory(
    'userRes', [
        '$resource', function ($resource) {
            return $resource('app/data/users.json', {}, {
                program: {
                    method: 'get',
                    isArray: true,
                    cache: true
                }
            });
        }
    ]
);
