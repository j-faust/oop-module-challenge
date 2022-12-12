const inquirer = require('inquirer');
const fs = require('fs');
const genHtmlFile = require('./genHtml.js');
const Intern = require('../lib/Intern.js');

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Intern's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the Engineer's school?"
    
    }
]




async function addIntern() {
    return await inquirer
    .prompt(internQuestions)
    .then((data) => {
    var intern = new Intern(data.name, data.id, data.email, data.school);
    return intern;
})
    }

module.exports = addIntern; 