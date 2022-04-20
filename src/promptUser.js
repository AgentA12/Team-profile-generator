const inquirer = require("inquirer");
const generateHTML = require("../src/generateHTML.js");
const Manager = require("../lib/manager.js");
const Engineer = require("../lib/engineer.js");
const Intern = require("../lib/intern.js");

function promptTeamManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the team managers name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter the managers name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their id?",
        validate: (id) => {
          if (id && !isNaN(id)) {
            return true;
          } else {
            console.log("Please enter the managers ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?",
        validate: (officeNumber) => {
          if (officeNumber && !isNaN(officeNumber)) {
            return true;
          } else {
            console.log("Please enter an office office number.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "employee",
        message: "Choice a employee to add",
        choices: ["engineer", "intern"],
      },
    ])
    .then((anwsers) => {
      getTeam(anwsers);
    })
    .catch((error) => {});
}

function getTeam(managerObject) {
  let teamArray = [];
  let manager = new Manager(managerObject);
  teamArray.push(manager);
  if (managerObject.employee === "engineer") {
    promptEngineer().then((resp) => {
      teamArray.push(resp);
      getAnswers(teamArray);
    });
  } else
    promptIntern().then((resp) => {
      teamArray.push(resp);
      getAnswers(teamArray);
    });
}

function getAnswers(ary) {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmEmployee",
        message: "would you like to add another employee?",
      },
      {
        type: "list",
        name: "employee",
        message: "Choice a employee to add",
        choices: ["engineer", "intern"],
        when: ({ confirmEmployee }) => {
          if (confirmEmployee) {
            return true;
          } else return false;
        },
      },
    ])
    .then((resp) => {
      if (resp.confirmEmployee === true) {
        if (resp.employee === "engineer") {
          promptEngineer().then((anwsers) => {
            ary.push(anwsers);
            getAnswers(ary);
          });
        } else if (resp.employee === "intern") {
          promptIntern().then((anwsers) => {
            ary.push(anwsers);
            getAnswers(ary);
          });
        }
      } else {
        generateHTML(ary);
      }
    });
}

function promptEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineers name?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineers ID?",
        validate: (engineerID) => {
          if (engineerID && !isNaN(engineerID)) {
            return true;
          } else {
            console.log("Please enter an id");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineers email?",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            console.log("Pleae enter an email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is their Github user name?",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true;
          } else {
            console.log("Please enter a github username");
            return false;
          }
        },
      },
    ])
    .then((anwsers) => {
      let engineer = new Engineer(anwsers);
      return engineer;
    })
    .catch((err) => {});
}

function promptIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the interns name?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("Please enter a name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the interns ID?",
        validate: (engineerID) => {
          if (engineerID && !isNaN(engineerID)) {
            return true;
          } else {
            console.log("Please enter an id");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the interns email?",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true;
          } else {
            console.log("Pleae enter an email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true;
          } else {
            console.log("Please enter an school");
            return false;
          }
        },
      },
    ])
    .then((anwsers) => {
      let intern = new Intern(anwsers);
      return intern;
    })
    .catch((err) => {});
}

module.exports = promptTeamManager;
