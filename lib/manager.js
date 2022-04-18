const Employee = require("./employee");
// extends Employee

class Manager {
  constructor(managerObject) {
    this.name = managerObject.name;
    this.id = managerObject.id;
    this.email = managerObject.email;
    this.officeNumber = managerObject.officeNumber;
    this.title = "Manager";
  }
}

module.exports = Manager;
