const Manager = require('../lib/Manager');

describe("Manager", () => { 
    it("should take name, id, email and office number for the manager", () => {
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.name).toEqual(expect.any(String));
        expect(mngr.id).toEqual(expect.any(Number));
        expect(mngr.email).toEqual(expect.any(String));
        expect(mngr.officeNumber).toEqual(expect.any(Number));
    });

    it("should return a name for the manager", () => {
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getName()).toEqual(expect.any(String));

    });
        it("should return an employee id for the manager", () => {
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getId()).toEqual(expect.any(Number));

    });
    it("should return an email for the manager", () => {
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getEmail()).toEqual(expect.any(String));

    });
    it("should return the role of the manager", () => {
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String), expect.any(Number));
    });
    it("should return the office number that the manager works from", () => {
        const mngr = new Manager('Jason Faust', 48, 'jfaust16@gmail.com', 5);

        expect(mngr.officeNumber).toEqual(expect.any(Number));
    });

});