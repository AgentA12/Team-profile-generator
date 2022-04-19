const Manager = require("../lib/manager.js");

test("Manager object returns correct properties", () => {
  const managerObject = {
    name: "john",
    id: 10,
    email: "johnDoe@gmail.com",
    officeNumber: 123,
    title: "Manager",
  };

  const manager = new Manager(managerObject);

  expect(manager.officeNumber).toBe(123);
  expect(manager.getRole()).toBe("Manager");
});
