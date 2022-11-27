const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/genMarkdown')

const questions = [
  {
    type: 'input',
    name:'title',
    message:"What's the project title?",
  },
  {
    type: 'input',
    name:'description',
    message:"Describe the project?",
  },
  {
    type: 'input',
    name:'installation',
    message:"How do you install your app?",
  },
  {
    type: 'input',
    name:'usage',
    message:"How do you use your app?",
  },
  {
    type: 'input',
    name:'contribution',
    message:"What contributions were used?",
  },
  {
    type: 'list',
    name:'license',
    choices:['MIT', 'Apache license 2.0', 'Eclipse Public License 2.0', 'ISC', 'Open Software License', 'SIL Open Font License 1.1', 'zLib License', 'GNU General Public License'],
    message:"Which license did you use?",
  },
  {
    type: 'input',
    name:'git',
    message:"What is your GitHub Username?",
  },
  {
    type: 'input',
    name:'email',
    message:"What is your E-mail?",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Your README.md is being generated now!');
    writeToFile('README.md', genMarkdown({ ...inquirerResponses }));
  });
}
init();