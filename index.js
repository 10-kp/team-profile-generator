//promt user for team members
const inquirer = require("inquirer");

//write file to html
// const generateHtml = require("./__tests__/dist/index.html");

const fs = require ("fs");
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);


//import modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//HTML

//Empty array
let manager = {};
let engineer = {};
let intern = {};
let allEmployees = [manager, engineer, intern];

//Questions for user
const promptUser = () => {
    return inquirer.prompt([
    {
    type: "text",
    name: "name",
    message: "What is the employee's name?",
    },

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
    name: "id",
    message: ({name}) => `What is ${name}'s id?`,
    },

    {
    type: "text",
    name: "email",
    message: ({name}) => `What is ${name}'s email?`,
    },

    {
    type: 'input',
    name: 'officeNumber',
    message: ({name}) => `What is ${name}'s office number?`,
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
    {
        type: 'input',
        name: 'school',
        message: ({name}) => `What is ${name}'s school?`,
        when: ({ role }) => {
                if (role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
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
Welcome to the Team Profile Generator!
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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
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
                            <p class="title is-4">${data.name}</p>
                            <p class="subtitle is-6">${data.role}</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.id}<br />
                        <span class="has-text-weight-bold">Email:</span><a href="${data.email}" class="has-text-primary">${data.email}</a><br/>
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
                            <p class="title is-4">${data.name}</p>
                            <p class="subtitle is-6">${data.role}</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="${data.email}" class="has-text-primary">${data.email}</a><br />
                        <span class="has-text-weight-bold">GitHub:</span> <a href="${data.github}" target="_blank" class="has-text-primary">${data.github}</a></p>
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
                            <p class="title is-4">${data.name}</p>
                            <p class="subtitle is-6">${data.role}</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span> ${data.id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="${data.email}" class="has-text-primary">${data.email}</a><br />
                        <span class="has-text-weight-bold">GitHub:</span> <a href="${data.github}" target="_blank" class="has-text-primary">${data.github}</a></p>
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
                            <p class="title is-4">${data.name}</p>
                            <p class="subtitle is-6">${data.role}</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="${data.email}" class="has-text-primary">${data.email}</a><br />
                        <span class="has-text-weight-bold">School:</span> ${data.school}</p>
                    </div>
                </div>
            </div>
            </div>
                    </div>
                </main>
            </body>
            </html>`

        writeFileAsync('index.html', template)})
        .then(() => console.log('Successfully createad HTML file.'))
        .catch((err) => console.error(err));
    };
    
init();


// const writePage = (htmlContent) => {
//     fs.writeFile("", htmlContent, err => {
//         if (err) {
//             throw err
//         };
//         console.log('Page created successfully!');
//     });
// };

// function createHTML() {
// 	fs.readFile("./html/main", "utf8", (err, data) => {
// 		const newData = data.replace("{{html}}", html);

// 		fs.writeFile("./output/index.html", newData, "utf8", err => {
// 			if (err) return console.log(err);
// 		});
// 		console.log(".html created");
// 	});
// };