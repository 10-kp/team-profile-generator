//promt user for team members
const inquirer = require("inquirer");

const fs = require ("fs");
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);


//import modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//HTML
const generatePage = require('./src/site-template');
const writeFile = require('./src/site-generate')

//Empty array
let manager = {};
let engineer = {};
let intern = {};
let allEmployees = [manager, engineer, intern];

//Questions for user
const promptUser = () => {
    return inquirer.prompt([
    {
    type: "input",
    name: "manager_name",
    message: "What is the Manager's name?",
    },
    {
    type: "input",
    name: "manager_id",
    message: ({manager_name}) => `What is ${manager_name}'s id?`,
    },

    {
    type: "input",
    name: "manager_email",
    message: ({manager_name}) => `What is ${manager_name}'s email?`,
    },

    {
    type: 'input',
    name: 'officeNumber',
    message: ({manager_name}) => `What is ${manager_name}'s office number?`,
    },

    {
    type: "input",
    name: "engineer_one_name",
    message: "What is the Engineer's name?",
    },
    {
    type: "input",
    name: "engineer_one_id",
    message: ({engineer_one_name}) => `What is ${engineer_one_name}'s id?`,
    },

    {
    type: "input",
    name: "engineer_one_email",
    message: ({engineer_one_name}) => `What is ${engineer_one_name}'s email?`,
    },

    {
    type: 'input',
    name: 'engineer_one_github',
    message: ({engineer_one_name}) => `What is ${engineer_one_name}'s GitHub userame?`,
    },

    {
    type: "input",
    name: "engineer_two_name",
    message: "What is the second Engineer's name?",
    },
    {
    type: "input",
    name: "engineer_two_id",
    message: ({engineer_two_name}) => `What is ${engineer_two_name}'s id?`,
    },

    {
    type: "input",
    name: "engineer_two_email",
    message: ({engineer_two_name}) => `What is ${engineer_two_name}'s email?`,
    },

    {
    type: 'input',
    name: 'engineer_two_github',
    message: ({engineer_two_name}) => `What is ${engineer_two_name}'s GitHub userame?`,
    },

    {   
    type: "input",
    name: "intern_name",
    message: "What is the Intern's name?",
    },
    {
    type: "input",
    name: "intern_id",
    message: ({intern_name}) => `What is ${intern_name}'s id?`,
    },

    {
    type: "input",
    name: "intern_email",
    message: ({intern_name}) => `What is ${intern_name}'s email?`,
    },
    {
    type: 'input',
    name: 'school',
    message: ({intern_name}) => `What is ${intern_name}'s school?`,
    },
]);
};


// const writePage = (htmlContent) => {
//     fs.writeFile('./dist/index.html', htmlContent, err => {
//         if (err) {
//             throw err
//         };
//         console.log('Page created successfully!');
//     });
// };

//HTML
// generateHtml(allEmployees)

console.log(`
Welcome to the Team Profile Generator! Create your team:
`);

// promptUser()
//     .then(data => generatePage(data))
//     // .then(generatedHtml => writePage(generatedHtml))
//     .catch(err => console.log(err));

const init = () => {
    promptUser()
        .then((data) => {
            const template = `
             
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My Team</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha51two-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
            </head>
            <body>
                <section class="hero is-primary is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">My Team</h1>
                        </div>
                    </div>
                </section>
                <main class="m-6">
                    <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                        
            <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                        </div>
                        <div class="media-content">
                            <p class="title is-4">${data.manager_name}</p>
                            <p class="subtitle is-6">Manager</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.manager_id}<br />
                        <span class="has-text-weight-bold">Email:</span><a href="mailto:${data.manager_email}" class="has-text-primary">${data.manager_email}</a><br/>
                        <span class="has-text-weight-bold">Office Number:</span>${data.officeNumber}</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left"></div>
                        <div class="media-content">
                            <p class="title is-4">${data.engineer_one_name}</p>
                            <p class="subtitle is-6">Engineer</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.engineer_one_id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="mailto:${data.engineer_one_email}" class="has-text-primary">${data.engineer_one_email}</a><br />
                        <span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${data.engineer_one_github}" target="_blank" class="has-text-primary">${data.engineer_one_github}</a></p>
                    </div>
                </div>
            </div>
            </div>
            <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left"></div>
                        <div class="media-content">
                            <p class="title is-4">${data.engineer_two_name}</p>
                            <p class="subtitle is-6">Engineer</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span> ${data.engineer_two_id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="mailto:${data.engineer_two_email}" class="has-text-primary">${data.engineer_two_email}</a><br />
                        <span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${data.engineer_two_github}" target="_blank" class="has-text-primary">${data.engineer_two_github}</a></p>
                    </div>
                </div>
            </div>
            </div>
            <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left"></div>
                        <div class="media-content">
                            <p class="title is-4">${data.intern_name}</p>
                            <p class="subtitle is-6">Intern</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.intern_id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="mailto:${data.intern_email}" class="has-text-primary">${data.intern_email}</a><br />
                        <span class="has-text-weight-bold">School:</span> ${data.school}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </main>
            </body>
            </html>`

        writeFileAsync('./dist/index.html', template)
        .then(() => console.log('Successfully createad HTML file.'))
        .catch((err) => console.error(err));
        });
    };

    
init();