const { expect } = require("@jest/globals");
const Engineer = require ("../lib/Engineer");

test ("create an engineer object", () => {
    const engineer = new Engineer ("Casey Jones", "0002", "casey@jones.com", "cj-1");

    expect(engineer.name).toBe("Casey Jones");
    expect(engineer.id).toBe("0002");
    expect (engineer.email).toBe("casey@jones.com"); 
    expect (engineer.github).toBe("cj-1"); 
});

test("engineer's github", () => {
    // const engineer = new Engineer ("Casey Jones", "0002", "casey@jones.com", "cj-1");
    //This does not work. Error says Object.is equality?
    expect(github).toBe ("cj-1");
});

test("engineer's role", () => {
    const engineer = new Engineer ("Casey Jones", "0002", "casey@jones.com", "cj-1");
    //Does not work
    // let role = engineer.getRole ()
    // expect(role).toBe ("Engineer");

    expect(engineer.getRole().toEqual(expect.stringContaining('Engineer')));

});
