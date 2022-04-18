const Employee = require("./employee");

class Engineer extends Employee {
  constructor(engineerObject) {
    super(engineerObject);
    this.github = engineerObject.engineerGithub;
    this.title = "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
