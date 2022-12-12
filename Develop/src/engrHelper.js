const inquirer = require('inquirer');
const fs = require('fs');
const genHtmlFile = require('./genHtml.js');
const Engineer = require('../lib/Engineer.js');

const engrQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the Engineer's employee id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the Engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the Engineer's github?"
    
    }
];




async function addEngr() {
    return await inquirer
    .prompt(engrQuestions)
    .then((data) => {
    var engineer = new Engineer(data.name, data.id, data.email, data.github);
    return engineer;
})
    };


module.exports = addEngr; 