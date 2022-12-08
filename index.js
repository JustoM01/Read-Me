// TODO: Include packages needed for this application
   const inquirer = require('inquirer')
   const fs = require('fs')
   const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'what is your project name',

},{
    type:'input',
    name: 'description',
    message:'please describe your project',

}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(userInput){
        writeToFile('README.md', generateMarkdown(userInput))
    })
};

// Function call to initialize app
init();
