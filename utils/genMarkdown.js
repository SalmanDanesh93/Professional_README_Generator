function renderLBadge(license) {
    if (license !== 'None') {
        return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return '';
}

function renderLLink(license) {
    if (license !== 'None') {
        return `\n [License](#license)\n`;
    }
    return '';
}

function renderLSection(license) {
    if (license !== 'None') {
        return `## License 
        This application is ran under the ${license} license.`;
    }
    return '';
}

function genMarkdown(data) {
    return `# ${data.title}
    ${renderLBadge(data.license)}
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    * [Installation](#installation)

    * [Usage](#usage)
    ${renderLLink(data.license)}

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)

    ## Installation 
    
    ${data.installation}

    ## Usage

    ${data.usage}
    ${renderLSection(data.license)}

    ## Contributing

    ${data.contributing}

    ## Tests

    
    ${data.tests}
    
    ## Questions
    If you face any questions about the application, please contact me via my GitHub at ${data.github} or via email at ${data.email} .

    If you desire to see more work by me please visit [${data.github}](https://github.com/${data.github}/).
    `
}

module.exports = genMarkdown;