const inquirer = require('inquirer');
const fs = require('fs');
const genHtmlFile = require('./genHtml.js');
const Manager = require('../lib/Manager.js');

const mgrQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Manager's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Managers's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Managers's office number?"
    
    }
]




function addMgr() {
    return inquirer
    .prompt(mgrQuestions)
    .then((data) => {
    var mgr = new Manager(data.name, data.id, data.email, data.officeNumber);
    return mgr;
})
    }

module.exports = addMgr; 