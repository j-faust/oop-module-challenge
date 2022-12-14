const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


// Generating employee cards
function mgrCard(mgr) {
    mgrCardStr = `
  <div class="col-sm-3 ">
    <div class="card" shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">${mgr.name}</h5>
        <p class="card-text">Manager</p>
        <p class="card-text">Employee ID: ${mgr.id}</p>
        <p class="card-text">Email: <a href="mailto:${mgr.email}">${mgr.email}</a></p>
        <p class="card-text">Office Number: ${mgr.officeNumber}</p>
      </div>
    </div>
  </div>`

  return mgrCardStr;

};

function egrCard(egr) {
    egrCardStr = `
  <div class="col-sm-3">
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">${egr.name}</h5>
        <p class="card-text">Engineer</p>
        <p class="card-text">Employee ID: ${egr.id}</p>
        <p class="card-text">Email: <a href="mailto:${egr.email}">${egr.email}</a></p>
        <p class="card-text">GitHub: <a href="https://github.com/${egr.github}">https://github.com/${egr.github}</a></p>
      </div>
    </div>
  </div>`

  return egrCardStr;

};

function itrnCard(itrn) {
    itrnCardStr = `
  <div class="col-sm-3">
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <div class="card-body">
        <h5 class="card-title">${itrn.name}</h5>
      <p class="card-text">Intern</p>
      <p class="card-text">Employee ID: ${itrn.id}</p>
      <p class="card-text">Email: <a href="mailto:${itrn.email}">${itrn.email}</a></p>
      <p class="card-text">School: ${itrn.school}</p>
      </div>
    </div>
  </div>`

  return itrnCardStr;

};


// function to generate the HTML file
function genHtml(employeeArr) {
var cardStr = '';

// loop through employee array with forEach loop to pull object for Intern, Manager and Object
employeeArr.forEach((obj) => {
    
    if (obj instanceof Engineer) {
        cardStr += egrCard(obj);
    }
    if (obj instanceof Intern) {
        cardStr += itrnCard(obj);
    }
    if (obj instanceof Manager) {
        cardStr += mgrCard(obj)
    }
});


// setting HTML file text to string 
var htmlStr = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- utilizing bootstrap for page styling -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&family=Mulish:wght@200&display=swap" rel="stylesheet">
        <title>My Team Profile</title>
    </head>
    <body>
        <div class="container-fluid">
          
              <div class="page-header" style="background-color: blue text-align: center color: white">
                  <h1>Team Profile</h1>      
              </div>
              <div class="row">
        
          
        <!-- cardStr variable to load cards to page -->
        
        ${cardStr}
        
              </div>
        </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>    
    </body>
    </html> 
`
// return html string with html file code
return htmlStr;

}

// exporting genHtml file
module.exports = genHtml;