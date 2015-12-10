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
                    score = '❶';
                    break;
                case 2:
                    score = '❷';
                    break;
                case 3:
                    score = '❸';
                    break;
                case 4:
                    score = '❹';
                    break;
                case 5:
                    score = '❺';
                    break;
                case 6:
                    score = '❻';
                    break;
                case 7:
                    score = '❼';
                    break;
                case 8:
                    score = '❽';
                    break;
                case 9:
                    score = '❾';
                    break;
                case 10:
                    score = '❿';
                    break;
                default:
                    score = '★ ' + val;
                    break;
            }

        }

    };
    return this.student;
}]);