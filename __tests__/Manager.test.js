const Manager = require ('../lib/Manager');

test ("create an employee object", () => {
    const manager = new Manager ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");

    expect(manager.name).toBe("Micheal Scott");
    expect(manager.id).toBe("1111");
    expect(manager.email).toBe("Michael@Scott.com"); 
    expect(manager.officeNumber).toBe("012-446-6789"); 
});

test("manager's name", () => {
    const manager = new Manager ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
    let name = manager.getName ()
    expect(name).toBe ("Micheal Scott");
});    
test("manager's ID", () => {
    const manager = new Manager ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
    let id = manager.getId ()
    expect(id).toBe ("1111");
});    
test("manager's email", () => {
    const manager = new Manager ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
    let email = manager.getEmail ()
    expect(email).toBe ("Michael@Scott.com");
});    
test("manager's office number", () => {
    const manager = new Manager ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
    let email = manager.getOfficeNumber()
    expect(officeNumber).toBe ("012-446-6789");
});    