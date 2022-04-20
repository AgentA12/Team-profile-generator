const Manager = require("../lib/Manager.js");

test("Manager object assigns correct properties", () => {
  const managerObject = {
    name: "john",
    id: 10,
    email: "johnDoe@gmail.com",
    officeNumber: 123,
    title: "Manager",
  };

  const manager = new Manager(managerObject);

  expect(manager.name).toMatch("john");
  expect(manager.id).toEqual(10);
  expect(manager.email).toMatch("johnDoe@gmail.com");
  expect(manager.officeNumber).toEqual(123);
  expect(manager.title).toMatch("Manager");
});

test("Manager methods return correct data", () => {
  const managerObject = {
    name: "john",
    id: 10,
    email: "johnDoe@gmail.com",
    officeNumber: 123,
    title: "Manager",
  };

  const manager = new Manager(managerObject);

  expect(manager.getRole()).toMatch("Manager");
});
