const Employee = require('../lib/Employee.js')

describe("Employee", () => { 
    it("should take name, id and email for an employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.name).toEqual(expect.any(String));
        expect(emp.id).toEqual(expect.any(Number));
        expect(emp.email).toEqual(expect.any(String));
    });

    it("should return a name for the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getName()).toEqual(expect.any(String));

    });
        it("should return an id for the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getId()).toEqual(expect.any(Number));

    });
    it("should return an email for the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getEmail()).toEqual(expect.any(String));

    });
    it("should return the role of the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String));
    });

});