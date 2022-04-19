const Engineer = require("../lib/engineer.js");

test("engineer object returns correct proprties", () => {
  const engineerObject = {
    name: "john",
    id: 10,
    email: "johnDoe@gmail.com",
    engineerGithub: "johnnyTEST",
    title: "Engineer",
  };

  const engineer = new Engineer(engineerObject);

  expect(engineer.github).toBe("johnnyTEST");
  expect(engineer.getGithub()).toBe("johnnyTEST");
});
