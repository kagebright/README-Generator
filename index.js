const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util");

//writing the README file
const writeFileAsync = util.promisify(fs.writefile);

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of the README',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of the README.md?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What is included in the README?',
      name: 'table of contents',
    },
    {
      type: 'input',
      message: 'What is the installation process?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What will the app be used for?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What license is used for this application?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Who will be working on this application with you?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What tests are you running on your application?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is included in the README?',
      name: 'questions',
    },
  ])
  .then((response) =>
    response.confirm === response.input
      ? console.log('Success!')
      : console.log('You forgot your input already?!')
  );
