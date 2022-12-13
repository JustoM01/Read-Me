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

},{
    
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        default: 'None',
        choices: [
            {
                name: 'MIT',
                value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            }, 
            {
                name: 'Apache 2.0',
                value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            }, 
            {
                name: 'CC0 1.0',
                value: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
            }]
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> {
        if(err){
            return console.log(err)
        }
        console.log('generating read me')
    }
    )

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
