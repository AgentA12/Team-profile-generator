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
  expect(intern.title).toMatch("Intern");
  expect(intern.email).toMatch("andrewhowran@gmail.com");
  expect(intern.id).toEqual(5);
  expect(intern.name).toMatch("andrew");
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
