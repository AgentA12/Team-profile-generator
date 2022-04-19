const Employee = require("../lib/employee.js");

test("properly saves name, id and email of employee", () => {
  let employeeObject = {
    name: "andrew",
    id: 5,
    email: "andrewhowran@gmail.com",
  };
  const employee = new Employee(employeeObject);

  expect(employee.name).toBe("andrew");
  expect(employee.id).toBe(5);
  expect(employee.email).toBe("andrewhowran@gmail.com");
});

test("object methods return correct data", () => {
  let employeeObject = {
    name: "andrew",
    id: 5,
    email: "andrewhowran@gmail.com",
  };
  const employee = new Employee(employeeObject);

  expect(employee.getName()).toBe("andrew");
  expect(employee.getId()).toBe(5);
  expect(employee.getEmail()).toBe("andrewhowran@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});
