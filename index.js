// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

const generateREADME = ({ projectTitle,github, email, description, installation, usage, credits, license, badges, features, contribute, tests, links }) =>
`# ${projectTitle}


## Contact
- ${github}
- ${email}

## Description

 - ${description}
 

## Installation

- ${installation} 

## Usage

- ${usage}


## Credits

- ${credits} 

## License

- ${license}

## Badges

- ${badges}


## Features

- ${features}


## How to Contribute
- ${contribute}


## Tests

- ${tests} 

## Links 
- ${links}`

// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your projects title?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles.',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please list the license associated with your project.',
        },
        {
            type: 'input',
            name: 'badges',
            message: 'Please list your badges if you have any.',
        },
        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here.',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
        },
        {
            type: 'input',
            name: 'links',
            message: 'Provide links to deployed application if applicable!',
        },
    ])
    // TODO: Create a function to write README file
.then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('read.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully creaded readme.md!')
    );
})




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
