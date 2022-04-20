const Intern = require("../lib/Intern.js");

test("intern object returns correct properties", () => {
  const internObject = {
    name: "andrew",
    id: 5,
    email: "andrewhowran@gmail.com",
    title: "Intern",
    internSchool: "Carlton University",
  };

  const intern = new Intern(internObject);

  expect(intern.school).toMatch("Carlton University");
});

test("intern object methods return correct data", () => {
  const internObject = {
    name: "andrew",
    id: 5,
    email: "andrewhowran@gmail.com",
    title: "Intern",
    internSchool: "Carlton University",
  };

  const intern = new Intern(internObject);

  expect(intern.getSchool()).toMatch("Carlton University");
});
