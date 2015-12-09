myApp.service('userService', [function () {
    var name;
    this.user = {

        list: [],
        // Set/Get user name
        get name() {
            return name;
        },
        set name(val) {
            name = 'Mr ' + val;
        }

    };
    return this.user;
}]);