const fs = require("fs");
const inquirer = require('inquirer');
const util = require("util");

//writing the README file
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
      type: 'input',
      message: 'What is the title of the README',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of the README.md?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is included in the table of contents?',
      name: 'table_of_contents',
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
      message: 'What questions do you want to include in the README?',
      name: 'questions',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter email here:'
  },
  {
      type: 'input',
      name: 'github',
      message: 'Enter Github username here:'
  },
  {
      type: 'list',
      choices: [
          "MIT",
          "GPL",
          "APACHE"
      ],
      name: 'license',
      message: 'Please select a license for your project:'
  }
];

//initializing the application
async function promptUser() {
  const responses = await inquirer.prompt(questions);

  const readMe = generateMarkdown(responses);

  await writeFileAsync("README-Professional.md", readMe)
    .then(function() {
      console.log("Successfully wrote to README-Professional.md");
  });
}

promptUser();
