myApp.factory(
    'studentRes', [
        '$resource', function ($resource) {
            return $resource('http://api-bebras.tadcka.lt/students/:id.json', {}, {
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
