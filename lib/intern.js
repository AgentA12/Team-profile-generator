class Intern {
  constructor(internObject) {
    this.name = internObject.internName;
    this.email = internObject.internEmail;
    this.id = internObject.internID;
    this.school = internObject.internSchool;
    this.title = "Engineer";
  }
}

module.exports = Intern;
