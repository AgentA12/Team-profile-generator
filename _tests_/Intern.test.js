const Intern = require("../lib/intern.js");

test("intern object returns correct properties", () => {
  const internObject = {
    name: "andrew",
    id: 5,
    email: "andrewhowran@gmail.com",
    title: "Intern",
    internSchool: "Carlton University",
  };

  const intern = new Intern(internObject);

  expect(intern.school).toBe("Carlton University");
  expect(intern.getSchool()).toBe("Carlton University");
});
