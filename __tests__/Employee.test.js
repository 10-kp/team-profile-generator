const Employee = require("../lib/Employee");

    test ("create an employee object", () => {
        const employee = new Employee ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");

        expect(employee.name).toBe("Micheal Scott");
        expect(employee.id).toBe("1111");
        expect (employee.email).toBe("Michael@Scott.com"); 
        expect (employee.officeNumber).toBe("012-446-6789"); 
    });

    test("employee's name", () => {
        const employee = new Employee ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
        let name = employee.getName ()
        expect(name).toBe ("Micheal Scott");
    });    
    test("employee's ID", () => {
        const employee = new Employee ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
        let id = employee.getId ()
        expect(id).toBe ("1111");
    });    
    test("employee's email", () => {
        const employee = new Employee ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
        let email = employee.getEmail ()
        expect(email).toBe ("Michael@Scott.com");
    });    
    test("employee's office number", () => {
        const employee = new Employee ("Micheal Scott", "1111", "Michael@Scott.com", "012-446-6789");
        let officeNumber = employee.getOfficeNumber()
        expect(officeNumber).toBe ("012-446-6789");
    });    
