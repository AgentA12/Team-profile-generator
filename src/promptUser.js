const inquirer = require("inquirer");

function promptTeamManager(userInput) {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Please enter your employee ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter your email.");
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
      console.log(anwsers);
      if (anwsers.employee === "engineer") {
        const engineerInfo = promptEngineer();
      } else if (anwsers.employee === "intern") {
        const interInfo = promptIntern();
      } else return;
    });
}

function promptEngineer() {
  inquirer.prompt([]);
}

function promptIntern() {
  inquirer.prompt([]);
}

module.exports = promptTeamManager;
