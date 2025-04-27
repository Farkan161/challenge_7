// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install the app?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use the app?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err? console.error(err): console.log('README.md has been generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
      });
}

// Function call to initialize app
init();