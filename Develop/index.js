// requiring helper files and classes
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const fs = require('fs');
const inquirer = require('inquirer'); 
const genHtml = require('./src/genHtml.js');
const engQuestions = require('./src/engrHelper');
const addMgr = require('./src/mgrHelper.js');
const addEngr = require('./src/engrHelper');
const addIntern = require('./src/intrnHelper.js');

// setting employee array to empty
var employeeArr = [];

// begin with team manager questions - set async to wait on fulfilling promise until questions are answered
addMgr().then(async (mgr) => {
employeeArr.push(mgr);

// setting whether question loop to add engineer or inter are done to false
let done = false;

// using while loop to loop through asking user to add engineer or intern or build team until they select build team 
while (done == false) {
    // setting inquirer prompt to wait until finished answering questions for either engineer or intern
     await inquirer 
        .prompt({
            type: 'list',
            name: 'type',
            message: 'Please select to add an Engineer, Intern, or Build Team!',
            choices: ['Engineer', 'Intern', 'Build Team!']
        })
        .then(async (data) => {

    // if statement that will begin switch statement as long as input data type is a string
    if(typeof data.type === 'string') {
    // switch statement to go through and run helper functions for either engineer or intern.  if user selects build team then it will generate HTML    
    switch(data.type) {
        case 'Engineer':
            await addEngr().then((eng) => {
            employeeArr.push(eng);
            });
            break;
        case 'Intern':
            await addIntern().then((intern) => {
            employeeArr.push(intern);
            });
            break;
        case 'Build Team!':
            // setting genHtml function to variable
            var htmlStr = genHtml(employeeArr);   
            // creating HTML file to dist folder
            fs.writeFile("dist/index.html", htmlStr, (err) => 
            err ? console.log(err) : console.log('Thank you, your index.html file has been generated!')
            );
            done = true; 
            break;
        default:
                console.log( "Invalid Response! Please Enter Team Info!");
                break;  
        }
    };


    })
    // catch any errors and display them to console
    .catch((err) => {
        if(err) {
            console.log(err);
        }
    });
    }
});

