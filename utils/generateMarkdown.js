// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `# ${data.title}
  
  ## ${data.description}
  
  ##Table of COntents:
  1.[Installation](#installation);
  2.[Usage](#usage);
  3.[License](license);
  4.[Contribution](contribution);
  5.[Tests](tests);
  6.[Questions](questions);
  
  ## Installation:
${data.installation}
            
## Usage:
${data.usage}
            
## Contributing:
${data.contributing}
            
## Tests:
${data.tests}
    
## Questions:
Email: ${data.email}
\n
GitHub: 
[${data.github}](https://github.com/${data.github})
\n
${data.questions}
## License:
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-azure)

  `
}

module.exports = generateMarkdown;
