const Engineer = require('../lib/Engineer');

describe("Engineer", () => { 
    it("should take name, id, email and GitHub for an employee", () => {
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.name).toEqual(expect.any(String));
        expect(egr.id).toEqual(expect.any(Number));
        expect(egr.email).toEqual(expect.any(String));
        expect(egr.github).toEqual(expect.any(String));
    });

    it("should return a name for the employee", () => {
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getName()).toEqual(expect.any(String));

    });
        it("should return an id for the employee", () => {
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getId()).toEqual(expect.any(Number));

    });
    it("should return an email for the employee", () => {
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getEmail()).toEqual(expect.any(String));

    });
    it("should return the role of the employee", () => {
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');

        expect(egr.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String), expect.any(String));
    });
    it("should return the engineer's github", () => {
        const egr = new Engineer('Jason Faust', 48, 'jfaust16@gmail.com', 'https://github.com/j-faust');
        expect(egr.getGithub()).toEqual(expect.any(String));
    });

});