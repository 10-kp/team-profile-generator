const inquirer = require("inquirer");
const fs = require ("fs");
const writeFileAsync = util.promisify(fs.writeFile);

//import modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Empty array
const allEmployees = [];

//To ask user the questions
const promptUser = () => {
    return inquirer.prompt([
    {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: ["Manager", "Engineer", "Intern"], 
    },
    {
    type: "text",
    name: "employee",
    message: "Name of the employee:",
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
]);
};

init();
