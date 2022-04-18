class Employee {
  constructor(employeeObject) {
    this.name = employeeObject.name;
    this.id = employeeObject.id;
    this.email = employeeObject.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
