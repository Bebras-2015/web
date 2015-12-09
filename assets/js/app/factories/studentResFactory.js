myApp.factory(
    'studentRes', [
        '$resource', function ($resource) {
            return $resource('assets/js/app/data/students/:id.json', {}, {
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
