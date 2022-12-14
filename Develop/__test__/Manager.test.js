// requiring the Manager.js class file
const Manager = require('../lib/Manager');

// testing the Manager class
describe("Manager", () => { 

    // testing that the name, id, email and office number returns 
    it("should take name, id, email and office number for the manager", () => {
        // creating new instance of the Class
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.name).toEqual(expect.any(String));
        expect(mngr.id).toEqual(expect.any(Number));
        expect(mngr.email).toEqual(expect.any(String));
        expect(mngr.officeNumber).toEqual(expect.any(Number));
    });

    // testing that the name returns with the getName() method
    it("should return a name for the manager", () => {
        // creating new instance of the Class
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getName()).toEqual(expect.any(String));

    });

    // testing that the id returns with the getId() method
    it("should return an employee id for the manager", () => {
        // creates new instances of the Class
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getId()).toEqual(expect.any(Number));

    });

    // testing that the email returns with the getEmail() method
    it("should return an email for the manager", () => {
        // creates new instance of the Class
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getEmail()).toEqual(expect.any(String));

    });

    // testing that the role returns with the getRole() method
    it("should return the role of the manager", () => {
        // creates new instance of the Class
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String), expect.any(Number));
    });

    // testing that the office number returns 
    it("should return the office number that the manager works from", () => {
        // creates new instance of the Class
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.officeNumber).toEqual(expect.any(Number));
    });

});