// requiring Employee class
const Employee = require('./Employee');

// creating Engineer subclass
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
};

// exporting class
module.exports = Engineer;