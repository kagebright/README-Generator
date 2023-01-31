// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `
  # ${data.title}
  
  ## Table of Contents:
  1.[Description](#description);
  2.[Usage](#usage);
  3.[Contribution](#contribution);
  4.[Installation](#installation);
  5.[Questions](questions);
  6.[License](#license);
  
  ## Description
  ${data.description}

  ## Usage:
${data.usage}
            
## Installation:
${data.installation}
            
## Contributing:
${data.contributing}
    
## Questions:
${data.questions}
Email: ${data.email}
GitHub: ${data.github}

## License:
${data.license}(https://img.shields.io/badge/license-${data.license}-azure)
  `
};
module.exports = generateMarkdown;
