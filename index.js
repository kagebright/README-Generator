const inquirer = require('inquirer');
const util = require("util");

//writing the README file

//const writeFileAsync = util.promisify(fs.writefile);

const generateMarkdown = require("./utils/generateMarkdown")

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
    {
      type: 'input',
      name: 'email',
      message: 'Enter email here:'
  },
  {
      type: 'input',
      name: 'github',
      message: 'Enter Github here:'
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
]);
  //then((response) => {
    //response.confirm === response.answer
  //});
  //catch (error) {
    //console.log(error);

   // }
  //;

//initializing the application
async function init() {
  try {
      const answer = await promptUser();
      console.log(answer);
  
      const readMe = generateMarkdown(answer);
  
      writeFileAsync("README-Professinal.md", readMe).then(function() {
          console.log("successfully wrote to README-Professional.md");
      });
  }
  catch (err) {
      console.log(err);
  }
}

init();