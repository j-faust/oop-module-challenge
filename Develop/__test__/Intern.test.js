// requiring the Inter.js class file
const Intern = require('../lib/Intern');

// testing the Intern class
describe("Intern", () => { 

    // testing that the name, id, email and school returns 
    it("should take name, id, email and school for an intern", () => {
        // creating new instance of the Class
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.name).toEqual(expect.any(String));
        expect(intrn.id).toEqual(expect.any(Number));
        expect(intrn.email).toEqual(expect.any(String));
        expect(intrn.school).toEqual(expect.any(String));
    });


    // testing that the name returns with the getName() method
    it("should return a name for the intern", () => {
        // creating new instance of the Class
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getName()).toEqual(expect.any(String));

    });

    // testing that the id returns with the getId() method
    it("should return an id for the intern", () => {
        // creating new instance of the Class
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getId()).toEqual(expect.any(Number));

    });


    // testing that the email returns with the getEmail() method
    it("should return an email for the intern", () => {
        // creating new instance of the Class
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getEmail()).toEqual(expect.any(String));

    });

    // testing that the role returns with the getRole() method
    it("should return the role of the intern", () => {
        // creating new instance of the Class
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String), expect.any(String));
    });

    // testing that the school returns with the getSchool() method
    it("should return the school that the intern is attending", () => {
        // creating new instance of the Class
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getSchool()).toEqual(expect.any(String));
    });

});