
const inquirer = require('inquirer');

const fs = require('fs');


inquirer.prompt([
  {
    type: 'input',
    message:"What's the project title?",
    name:'title',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'input',
    message:"Describe the project?",
    name:'description',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'input',
    message:"How do you install your app?",
    name:'installation',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'input',
    message:"How do you use your app?",
    name:'usage',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'input',
    message:"Were there any contributions?",
    name:'contribution',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'list',
    message:"what type of license did you use?",
    name:'license',
    choices:['MIT', 'Apache license 2.0', 'Eclipse Public License 2.0', 'ISC', 'Open Software License', 'SIL Open Font License 1.1', 'zLib License', 'GNU General Public License'],
  validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'input',
    message:"What is your GitHub Username?",
    name:'git',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
  {
    type: 'input',
    message:"What is your E-mail?",
    name:'email',
    validate: (value)=>{if(value){return true} else {return `i need a value to continue`}},
  },
]);


function generateMarkdown(data){

  return `# ${data.title}
# ${data.title}

# Table of Content
-[git](#git)
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[contribution](#contribution)
-[license](#license)
-[email](#email)

    ${data.git}
##git:

    ${data.description}
##description:

    ${data.installation}
##installation:

    ${data.usage}
##usage:

    ${data.contribution}
##contribution:

    ${data.license}
##license:

    ${data.email}
##email:

`
};


// function init () {
//   inquirer.prompt(data)
//   .then((inquirerResponse, data) => {   
//       console.log("Making ReadMe");
//       fs.writeFileSync("README.md", inquirerResponse, data);
//   })
//   .catch((err) => {
//       console.log(err);
//   })
// }

// init();