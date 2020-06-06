const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// array of basic questions
const questions = [
    {
        type: "input",
        name: "ghName",
        message: "What is your GitHub Name?"
    },
    {
        type: "input",
        name: "fName",
        message: "Please provide the name for a .md file?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "list",
        name: "lname",
        message: "What is the license for the project?",
        choices: ["MIT", "Apache", "GPLv3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(process.cwd() + fileName, data) 
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers => writeToFile("goodReadme.md", generateMarkdown(answers)))
}

// function call to initialize program
//init();
