// requiring Engineer.js class file
const Engineer = require('../lib/Engineer');

// testing Engineer class
describe("Engineer", () => { 

    // testing that Engineer class will return the engineers, name, id, email and GitHub
    it("should take name, id, email and GitHub for an employee", () => {
        // sets instance of the Class
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.name).toEqual(expect.any(String));
        expect(egr.id).toEqual(expect.any(Number));
        expect(egr.email).toEqual(expect.any(String));
        expect(egr.github).toEqual(expect.any(String));
    });


    // testing that the name returns with the getName() method
    it("should return a name for the employee", () => {
        // sets instance of the Class
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getName()).toEqual(expect.any(String));

    });


    // testing that the id returns with the getId() method
    it("should return an id for the employee", () => {
        // sets instance of the Class
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getId()).toEqual(expect.any(Number));

    });


    // testing that the email returns with the getEmail() method
    it("should return an email for the employee", () => {
        // sets instance of the Class
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getEmail()).toEqual(expect.any(String));

    });

    // testing that the role returns with the getRole() method
    it("should return the role of the employee", () => {
        // sets instance of the Class
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String), expect.any(String));
    });


    // testing that the GitHub returns with the getGithub() method
    it("should return the engineer's github", () => {
        // sets instance of the Class
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');
        expect(egr.getGithub()).toEqual(expect.any(String));
    });

});