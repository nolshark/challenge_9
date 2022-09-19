// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const licenseInfo = require('./utils/license-data.json').licenseInfo;
// TODO: Create an array of questions for user input
const questions = [
    //Inputs for user to fill in with their information
    {
        name: 'title',
        message: 'Enter the title of your README:'
    },
    {
        name: 'description',
        message: 'Enter the description of your README:',
    },
    {
        name: 'installation',
        message: 'Enter installation details:'
    },
    {
        name: 'usage',
        message: 'Enter app usage details:'
    },
    {
        name: 'contributions',
        message: 'Enter contribution details:'
    },
    {
        name: 'tests',
        message: 'Enter information about tests:'
    },
    {
        name: 'githubName',
        message: 'Enter GitHub name:'
    },
    {
        name: 'email',
        message: 'Enter your email:'
    },
    
    //List for license
    {
        type: 'list',
        name: 'licenseType',
        message: 'Choose a lisence:',
        choices: licenseInfo,
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README has been generated in \'README.md\' file');
    });
}

// TODO: Create a function to initialize app
function init(){
    inquirer
        .prompt(questions) // prompt the user with readme questions
        .then(readmeData => generateMarkdown(readmeData))
        .then(markdownData => writeToFile('README.md', markdownData))
}

// Function call to initialize app
init();
