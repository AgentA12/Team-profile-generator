const Employee = require("./Employee");
// extends Employee

class Manager extends Employee {
  constructor(managerObject) {
    super(managerObject);
    this.officeNumber = managerObject.officeNumber;
    this.title = "Manager";
  }
  getRole() {
    return this.title;
  }
}

module.exports = Manager;
