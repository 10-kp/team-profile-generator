class Employee{
    constructor(firstName, lastName, id, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `{firstName}.${lastName}@xyzco.com`;
        this.role = Employee;
        this.officeNumber = officeNumber;
    }

    getName(){
        return `${this.firstName} ${this.lastName}`;
    };
    getId(){
        return `${this.id}`
    };
    getEmail () {
        return `${this.email}`
    };
    getRole(){
        return `${this.role}`;
    };
    getOfficeNumber(){
        return `${this.officeNumber}`;
    };

}
module.exports = Employee;
