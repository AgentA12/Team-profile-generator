class Engineer {
  constructor(engineerObject) {
    this.name = engineerObject.engineerName;
    this.email = engineerObject.engineerEmail;
    this.id = engineerObject.engineerID;
    this.github = engineerObject.engineerGithub;
    this.title = "Engineer";
  }
}

module.exports = Engineer;
