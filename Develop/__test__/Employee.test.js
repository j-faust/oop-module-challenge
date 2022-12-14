// requiring the Employee class
const Employee = require('../lib/Employee.js')

describe("Employee", () => { 
    // testing that the code returns name, id and email for employee
    it("should take name, id and email for an employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');
    
        expect(emp.name).toEqual(expect.any(String));
        expect(emp.id).toEqual(expect.any(Number));
        expect(emp.email).toEqual(expect.any(String));
    });

    // testing that the name returns with the getName() method
    it("should return a name for the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getName()).toEqual(expect.any(String));

    });

    
    // testing that the id returns with the getId() method
    it("should return an id for the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getId()).toEqual(expect.any(Number));

    });


    // testing that the email returns with the getEmail() method
    it("should return an email for the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getEmail()).toEqual(expect.any(String));

    });

    // testing that the role returns with the getRole() method
    it("should return the role of the employee", () => {
        const emp = new Employee('Jason Faust', 48, 'jfaust16@gmail.com');

        expect(emp.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String));
    });

});