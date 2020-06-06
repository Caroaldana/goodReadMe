// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ghName}
 pending layout of the application
  # ${data.lname}
  https://img.shields.io/badge/license-${data.lname}-red.svg

`;
}

module.exports = generateMarkdown;
