// class for Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;

    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

};

// exporting class
module.exports = Employee;
