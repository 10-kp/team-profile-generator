class Employee{
    constructor (name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = Employee;
        this.officeNumber = officeNumber;
    }

    getName(){
        return `${this.name}`;
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
