const inquirer = require("inquirer");
const fs = require ("fs");
const writeFileAsync = util.promisify(fs.writeFile);

//import modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Empty array
let manager = [];
let engineer = [];
let intern = [];
let allEmployees = {manager, engineer, intern};

//Questions for user
const promptUser = () => {
    return inquirer.prompt([
    {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: () => {
            if (allEmployees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']    
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }, 
    },

    {
    type: "text",
    name: "employee",
    message: ({ role }) => `What is the ${role}'s first name?`,
    },

    {
    type: "text",
    name: "id",
    message: "Provide employee's ID number:",
    },

    {
    type: "text",
    name: "email",
    message: "Provide employee's email:",
    },

    {
    type: 'input',
    name: 'officeNumber',
    message: ({name}) => `What is employee's office number?`,
    when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
    },
    {
    type: 'input',
    name: 'github',
    message: ({name}) => `What is ${name}'s GitHub userame?`,
    when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
    },

]);
};

const writePage = (htmlContent) => {
    fs.writeFile("./dist/index.html", htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Page created successfully!');
    });
};

console.log(`
Welcome to the Team Profile Generator!
`);

promptUser()
    .then(data => generatePage(data))
    .then(generatedHtml => writePage(generatedHtml))
    .catch(err => console.log(err));