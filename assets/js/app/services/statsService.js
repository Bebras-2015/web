myApp.service('statsService', [function () {
    var grader, school;
    this.stats = {

        grade: 0,
        school: 0,

        data: [],
        // Set Get grader stats
        get grade() {
            return parseFloat(grade.toFixed(0));
        },
        set grade(val) {
            grade = val;
        },

        // Set get school stats
        get school() {
            return parseFloat(school.toFixed(0));
        },
        set school(val) {
            school = val;
        }

    };
    return this.student;
}]);