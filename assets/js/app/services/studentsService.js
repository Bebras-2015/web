myApp.service('studentsService', [function () {
    var name, grader, school, score;
    this.student = {

        list: [],
        // Set/Get user name
        get name() {
            return name;
        },
        set name(val) {
            name = '✍ ' + val;
        },

        // Set get grader
        get grader() {
            return grader;
        },
        set grader(val) {
            grader = '★ ' + val;
        },

        // Set get school
        get school() {
            return school;
        },
        set school(val) {
            school = val ? '⛺ ' + val : '---';
        },

        // Set get score
        get score() {
            return score;
        },
        set score(val) {
            score = '★ ' + val;
        }

    };
    return this.student;
}]);