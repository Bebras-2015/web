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
            switch (val) {
                case 1:
                    score = '➊';
                    break;
                case 2:
                    score = '➋';
                    break;
                case 3:
                    score = '➌';
                    break;
                case 4:
                    score = '➍';
                    break;
                case 5:
                    score = '➎';
                    break;
                case 6:
                    score = '➏';
                    break;
                case 7:
                    score = '➐';
                    break;
                case 8:
                    score = '➑';
                    break;
                case 9:
                    score = '➒';
                    break;
                case 10:
                    score = '➓';
                    break;
                default:
                    score = '★ ' + val;
                    break;
            }

        }

    };
    return this.student;
}]);