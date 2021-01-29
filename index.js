// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your repository"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your repository"
    }, 
    {
        type: "input",
        name: "installationInstructions",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usageInformation",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "contributionGuidlines",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What are the test instructions?"
    }, 
    {
        type: "checkbox",
        name: "license",
        message: "What licenses did you use?", //right now you can select more than one
        choices: ["Apache", "GNU", 'MIT', "BSD-3-clause", "None"]
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
  
     console.log('Creating readme.');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (
        questions
    )
    .then(answers =>{
        writeToFile('README.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
