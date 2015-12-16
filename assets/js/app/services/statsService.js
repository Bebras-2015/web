myApp.service('statsService', [function () {
    var grader, school;
    this.stats = {

        grader: 0,
        school: 0,

        data: [],
        // Set Get grader stats
        get grader() {
            return grader;
        },
        set grader(val) {
            grader = val;
        },

        // Set get school stats
        get school() {
            return school;
        },
        set school(val) {
            school = val;
        }

    };
    return this.student;
}]);