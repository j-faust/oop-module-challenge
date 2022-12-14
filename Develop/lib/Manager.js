// requiring Employee class
const Employee = require('./Employee');

// creating manager subclass
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
};

// exporting class
module.exports = Manager;