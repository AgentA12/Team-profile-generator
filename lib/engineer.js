const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(engineerObject) {
    super(engineerObject);
    this.github = engineerObject.engineerGithub;
    this.title = "Engineer";
  }
  getRole() {
    return this.title;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
