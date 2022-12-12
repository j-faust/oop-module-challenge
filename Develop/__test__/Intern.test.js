const Intern = require('../lib/Intern');

describe("Intern", () => { 
    it("should take name, id, email and school for an intern", () => {
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.name).toEqual(expect.any(String));
        expect(intrn.id).toEqual(expect.any(Number));
        expect(intrn.email).toEqual(expect.any(String));
        expect(intrn.school).toEqual(expect.any(String));
    });

    it("should return a name for the intern", () => {
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getName()).toEqual(expect.any(String));

    });
        it("should return an id for the intern", () => {
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getId()).toEqual(expect.any(Number));

    });
    it("should return an email for the intern", () => {
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getEmail()).toEqual(expect.any(String));

    });
    it("should return the role of the intern", () => {
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getRole()).toEqual(expect.any(String), expect.any(Number), expect.any(String), expect.any(String));
    });
    it("should return the school that the intern is attending", () => {
        const intrn = new Intern('Jason Faust', 48, 'jfaust16@gmail.com', 'UCF');

        expect(intrn.getSchool()).toEqual(expect.any(String));
    });

});