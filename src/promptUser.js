const inquirer = require("inquirer");
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
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add an employee?",
      },
      {
        type: "list",
        name: "employee",
        message: "Choice a employee title",
        choices: ["engineer", "intern"],
        when: ({ confirmAddEmployee }) => {
          if (confirmAddEmployee) {
            return true;
          } else return false;
        },
      },
    ])
    .then((anwsers) => {
      managerOne = new Manager(anwsers);
      console.log(managerOne);
      if (anwsers.employee === "engineer") {
        promptEngineer();
      } else if (anwsers.employee === "intern") {
        promptIntern();
      } else return anwsers;
    })
    .then((engineerInfo, internInfo) => {})
    .catch((error) => {});
}

function promptEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
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
        name: "engineerID",
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
        name: "engineerEmail",
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
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
      },
      {
        type: "list",
        name: "employee",
        message: "Choice a employee title",
        choices: ["engineer", "intern"],
        when: ({ confirmAddEmployee }) => {
          if (confirmAddEmployee) {
            return true;
          } else return false;
        },
      },
    ])
    .then((anwsers) => {
      engineerOne = new Engineer(anwsers);
      console.log(engineerOne);
      if (anwsers.employee === "engineer") {
        promptEngineer();
      } else if (anwsers.employee === "intern") {
        promptIntern();
      } else return anwsers;
    })
    .catch((err) => {});
}

function promptIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
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
        name: "internID",
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
        name: "internEmail",
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
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
      },
      {
        type: "list",
        name: "employee",
        message: "Choice a employee title",
        choices: ["engineer", "intern"],
        when: ({ confirmAddEmployee }) => {
          if (confirmAddEmployee) {
            return true;
          } else return false;
        },
      },
    ])
    .then((anwsers) => {
      internOne = new Intern(anwsers);
      console.log(internOne);
      if (anwsers.employee === "engineer") {
        promptEngineer();
      } else if (anwsers.employee === "intern") {
        promptIntern();
      } else return anwsers;
    })
    .catch((err) => {});
}

module.exports = promptTeamManager;
