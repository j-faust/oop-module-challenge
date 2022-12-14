# Module 10 Challenge - OOP

## Table of Contents
[Description](#description)

[Installation](#installation)

[Tests](#tests)

[Coding](#coding)

[Testing](#testing)

[Demo](#demo)

[Contact](#contact)


## Description
The purpose of this project was to create a command line application that will prompt the user with questions regarding their team to help build a HTML file for the Team Profile.  When the user answers the prompts for the team manager, they will then be prompted to add either an Engineer or Intern.  They can then keep adding Engineer's or Intern's and if they are finished they can build their team.  When they select the 'Build Team!' option then an index.html file is built and the team profile can be viewed.

## Installation
Install the following on the command line for this project - 
    * 'npm install'
    * 'npm i inquirer@8.2.4'
    * 'npm i jest'

## Tests
* Tests were written for the Employee.js, Engineer.js, Intern.js and Manager.js files.  
* Tests for each file check that the classes can take in user inputs for the name, id, email and either school, github or office number. 
* In addition each test checks and tests the methods of each class, like getName(), getEmail(), getId(), getRole() and either getSchool(), getOfficeNumber() or getGithub().

## Coding 
This project utilizes Node.js, npm and the npm inuquirer library.  It also uses the npm jest library for the unit testing. In addition the following was used - 

    * Javascript/ES6 and NodeJS were used to help with creating the core application code.  Code is broken down into helper function and files.
    * Classes and subclasses were used for the Employee, Engineer, Intern, and Manager to help with methods and generating needed info for each role.
    * The Jest testing library within npm was used to test each class and method within the classes
    * HTML and bootstrap CDN were used within the genHtml() function to help with the generated HTML file.
    * if statement and switch statment were used within the index.js file to help with going between adding and intern or engineer.  A while loop is also used to keep alternating between intern or engineer until the user chooses to build the team

## Testing
To test this app type 'npm test' in the command line to run tests.

## Demo
[Video Demo](https://drive.google.com/file/d/1Om27IqrV5y7Wb_oxXceuLYosfHWJJcoY/view)

![Demo](./Develop/images/Untitled_%20Dec%2013%2C%202022%2010_17%20PM.gif)

## Contact

You can find me at my [GitHub](https://github.com/j-faust)
