// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license || license === 'None') {
        return '';
    } else {
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // a bullet point in table of contents when you click on it in table of contents, takes you to license section
    if (!license || license === 'None') {
        return ``;
    } else {
        return `* [License](#license)`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license || license === 'None') {
        return ``;
    } else {
        return `### License ${renderLicenseBadge(license)}`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //Need to have if statements to accept if there is information in the various areas 
return `
# ${data.title} 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink(data.license)}

### Description
${data.description}

### Installation Instructions
${data.installationInstructions}

### Usage 
${data.usageInformation}

${renderLicenseSection(data.license)}

### Contributing 
${data.contributionGuidlines}

### Test Instructions
${data.testInstructions}
`;
}

module.exports = generateMarkdown;
