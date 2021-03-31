const Employee = require("../lib/Employee");

//describe("test a new employee", () =>{
    test ("create an employee object", () => {
        const employee = new Employee ("Hasta LaVista", "0001", "hasla@vista.com", "000-211-2222");

        expect(employee.name).toBe("Hasta LaVista");
        expect(employee.id).toBe("0001");
        expect (employee.email).toBe("hasla@vista.com"); 
        expect (employee.officeNumber).toBe("000-211-2222"); 
    });

    test("employee's name", () => {
        const employee = new Employee ("Hasta LaVista", "0001", "hasla@vista.com", "000-211-2222");
        let name = employee.getName ()
        expect(name).toBe ("Hasta LaVista");
    });    
    test("employee's ID", () => {
        const employee = new Employee ("Hasta LaVista", "0001", "hasla@vista.com", "000-211-2222");
        let id = employee.getId ()
        expect(id).toBe ("0001");
    });    
    test("employee's email", () => {
        const employee = new Employee ("Hasta LaVista", "0001", "hasla@vista.com", "000-211-2222");
        let email = employee.getEmail ()
        expect(email).toBe ("hasla@vista.com");
    });    
    test("employee's office number", () => {
        const employee = new Employee ("Hasta LaVista", "0001", "hasla@vista.com", "000-211-2222");
        let officeNumber = employee.getOfficeNumber()
        expect(officeNumber).toBe ("000-211-2222");
    });    
// });
