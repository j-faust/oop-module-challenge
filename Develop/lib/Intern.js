// requiring Employee class
const Employee = require('./Employee');

// creating Intern subclass
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }

};

// exporting class 
module.exports = Intern;