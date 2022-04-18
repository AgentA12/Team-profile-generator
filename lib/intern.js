const Employee = require("./employee");

class Intern extends Employee {
  constructor(internObject) {
    super(internObject);
    this.school = internObject.internSchool;
    this.title = "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
