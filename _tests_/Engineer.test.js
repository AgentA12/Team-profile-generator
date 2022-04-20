const Engineer = require("../lib/Engineer.js");

test("engineer object returns correct proprties", () => {
  const engineerObject = {
    name: "john",
    id: 3,
    email: "johnDoe@gmail.com",
    engineerGithub: "johnnyTEST",
    title: "Engineer",
  };

  const engineer = new Engineer(engineerObject);

  expect(engineer.name).toMatch("john");
  expect(engineer.id).toEqual(3);
  expect(engineer.email).toMatch("johnDoe@gmail.com");
  expect(engineer.title).toMatch("Engineer");
  expect(engineer.github).toMatch("johnnyTEST");
});

test("engineer object methods return correct data", () => {
  const engineerObject = {
    name: "john",
    id: 10,
    email: "johnDoe@gmail.com",
    engineerGithub: "johnnyTEST",
    title: "Engineer",
  };

  const engineer = new Engineer(engineerObject);

  expect(engineer.getGithub()).toMatch("johnnyTEST");
  expect(engineer.getRole()).toMatch("Engineer");
});
