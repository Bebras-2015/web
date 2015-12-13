myApp.factory(
    'statsResFactory', [
        '$resource', function ($resource) {
            return $resource('assets/js/app/data/students/:id/statistics.json', {}, {
                fetch: {
                    method: 'get',
                    isArray: false,
                    cache: true,
                    params: { id : '2'}
                }
            });
        }
    ]
);
