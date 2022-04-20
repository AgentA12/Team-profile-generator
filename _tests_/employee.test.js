const Employee = require("../lib/Employee.js");

test("properly saves name, id and email of employee", () => {
  let employeeObject = {
    name: "andrew",
    id: 5,
    email: "andrewhowran@gmail.com",
  };

  const employee = new Employee(employeeObject);

  expect(employee.name).toMatch("andrew");
  expect(employee.id).toEqual(5);
  expect(employee.email).toMatch("andrewhowran@gmail.com");
});

test("object methods return correct data", () => {
  let employeeObject = {
    name: "andrew",
    id: 1,
    email: "andrewhowran@gmail.com",
  };

  const employee = new Employee(employeeObject);

  expect(employee.getName()).toMatch("andrew");
  expect(employee.getId()).toEqual(1);
  expect(employee.getEmail()).toMatch("andrewhowran@gmail.com");
  expect(employee.getRole()).toMatch("Employee");
});
