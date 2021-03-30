const inquirer = require("inquirer");
const fs = require ("fs");
const jest = require("jest");

//To ask user the questions
const promptUser = () => {
    return inquirer.prompt([  
    
