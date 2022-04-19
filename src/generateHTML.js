const fs = require("fs");

function generateHTML(data) {
  let HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>The Team</title>
  </head>
  <body>
  <div class="head">
  <h1>My Team<h1/>
  </div>
  <div class="container">
  ${generateCard(data)}
  </div>
  </body>
</html>
`;
  writeToFile(HTML);
}

function generateCard(ary) {
  let markdownArray = [];
  for (i = 0; i < ary.length; i++) {
    let markdownDiv = `
   <div class="item">
   <div class="title">
     <h3>${ary[i].name}</h3>
     <h4>${ary[i].title}</h4>
   </div>
   <div class="info-list">
     <ul>
       <li>Id:${ary[i].id}</li>
       <li>Email:${ary[i].email}</li>
       <li>${checkTitle(ary[i])}</li>
     </ul>
   </div>
 </div>
   `;
    markdownArray.push(markdownDiv);
  }

  markdownArray = markdownArray.join("");
  return markdownArray;
}

function checkTitle(employee) {
  if (employee.title === "Manager") {
    return `OfficeNumber: ${employee.officeNumber}`;
  } else if (employee.title === "Intern") {
    return `School: ${employee.school}`;
  } else return `Github: ${employee.github}`;
}

function writeToFile(ary) {
  fs.writeFile("./dist/index.html", ary, (error) => {
    if (error) throw error;
  });
}

module.exports = generateHTML;
