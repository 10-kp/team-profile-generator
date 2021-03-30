const Intern = require ("./Employee");

class Intern extends Employee {
    constructor(firstName, lastName, id, email, school) {
        super (firstName, lastName, id);
        this.school = school;
        this.role = "Intern";
    };

    getSchool(){
        return `School: ${this.school}`
    }
    getRole(){
        return `Intern`
    }
};
module.exports = Intern;
