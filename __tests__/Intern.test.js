const Intern = require ("../lib/Intern");

test ("create an intern object", () => {
    const intern = new Intern ("Jane Intern", "4444", "jane@intern.com", "UofO");

    expect(intern.name).toBe("Jane Intern");
    expect(intern.id).toBe("4444");
    expect(intern.email).toBe("jane@intern.com"); 
    expect(intern.school).toBe("UofO"); 
});

test("intern's name", () => {
    const intern = new Intern ("Jane Intern", "4444", "jane@intern.com", "UofO");
    let name = employee.getName ()
    expect(name).toBe ("Jane Intern");
});    
test("intern's ID", () => {
    const intern = new Intern ("Jane Intern", "4444", "jane@intern.com", "UofO");
    let id = employee.getId ()
    expect(id).toBe ("4444");
});    
test("intern's email", () => {
    const intern = new Intern ("Jane Intern", "4444", "jane@intern.com", "UofO");
    let email = employee.getEmail ()
    expect(email).toBe ("jane@intern.com");
});    

test("intern's school", () => {
    const intern = new Intern ("Jane Intern", "4444", "jane@intern.com", "UofO");
    let school = Intern.getSchool ()
    expect(school).toBe ("UofO");
});    
