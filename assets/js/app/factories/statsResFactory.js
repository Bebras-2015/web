myApp.factory(
    'statsResFactory', [
        '$resource', function ($resource) {
            return $resource('http://api-bebras.tadcka.lt/students/:id/statistics.json', {}, {
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
