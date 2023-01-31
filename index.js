const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

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
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'What is the program usage?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'What is the contribution guidelines?',
      name: 'Contribution',
    },
    {
    type: 'input',
      message: 'What are the test instructions?',
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
      message: 'For question(email):'
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
