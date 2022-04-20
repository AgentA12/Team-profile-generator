const Employee = require("./Employee");

class Intern extends Employee {
  constructor(internObject) {
    super(internObject);
    this.school = internObject.internSchool;
    this.title = "Intern";
  }
  getRole() {
    return this.title;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
