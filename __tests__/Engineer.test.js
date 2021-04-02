const { expect } = require("@jest/globals");
const Engineer = require ("../lib/Engineer");

test ("create an engineer object", () => {
    const engineer = new Engineer ("Casey Jones", "2222", "casey@jones.com", "cj1");

    expect(engineer.name).toBe("Casey Jones");
    expect(engineer.id).toBe("2222");
    expect(engineer.email).toBe("casey@jones.com"); 
    expect(engineer.github).toBe("cj1"); 
});

test("engineer's name", () => {
    const engineer = new Engineer ("Casey Jones", "2222", "casey@jones.com", "cj1");
    let name = engineer.getName ()
    expect(name).toBe ("Casey Jones");
});    
test("engineer's ID", () => {
    const engineer = new Engineer ("Casey Jones", "2222", "casey@jones.com", "cj1");
    let id = engineer.getId ()
    expect(id).toBe ("2222");
});    
test("engineer's email", () => {
    const engineer = new Engineer ("Casey Jones", "2222", "casey@jones.com", "cj1");
    let email = engineer.getEmail ()
    expect(email).toBe ("casey@jones.com");
});    

test("engineer's role", () => {
    const engineer = new Engineer ("Casey Jones", "2222", "casey@jones.com", "cj1");
    let role = engineer.getRole ()
    expect(role).toBe ("Engineer");
});

test("engineer's github", () => {
    const engineer = new Engineer ("Casey Jones", "2222", "casey@jones.com", "cj1");
    let github = engineer.getGithub()
    expect(github).toBe("Github: cj1");
});