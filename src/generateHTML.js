const fs = require("fs");

//returna the icon of employee
function getIconAndTitle(employeeTitle) {
  switch (employeeTitle) {
    case "Manager":
      return `<img src="/imgs/manager-icon-32px.ico" alt=" white icon of coffee cup" style="vertical-align:middle"> Manager`;
      break;
    case "Engineer":
      return `<img src="/imgs/engineer-icon-32px.ico" alt="white icon of reading glasses" style="vertical-align:middle"> Engineer`;
      break;
    case "Intern":
      return `<img src="/imgs/student-icon-32px.ico" alt="white icon of grad student" style="vertical-align:middle"> Intern`;
  }
}

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
  // generates each empolyee div
  let markdownArray = [];
  for (i = 0; i < ary.length; i++) {
    let markdownDiv = `
   <div class="item">
   <div class="title">
     <h3>${ary[i].name}</h3>
     <h4>${getIconAndTitle(ary[i].title)}</h4>
   </div>
   <div class="info-list">
     <ul>
       <li>Id:${ary[i].id}</li>
       <li>Email:<a href="https://www.google.com/search?q=gmail&rlz=1C1VDKB_enCA989CA989&oq=gmail&aqs=chrome..69i57j0i67i131i433j0i67j0i67i131i433j0i67i433j0i131i433i512l3j0i433i512.939j0j15&sourceid=chrome&ie=UTF-8">${
         ary[i].email
       }</a></li>
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

//returns the title of employee
function checkTitle(employee) {
  if (employee.title === "Manager") {
    return `OfficeNumber: ${employee.officeNumber}`;
  } else if (employee.title === "Intern") {
    return `School: ${employee.school}`;
  } else
    return `Github: <a href="https://github.com/${employee.github}?tab=repositories" target="_blank">${employee.github}</a>`;
}

function writeToFile(ary) {
  fs.writeFile("./dist/index.html", ary, (error) => {
    if (error) throw error;
  });
}

module.exports = generateHTML;
