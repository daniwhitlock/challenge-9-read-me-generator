// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    if (!data.license || data.license === 'None') {
        return '';
    } else if (data.license === 'Apache'){
        return `
        ![image](https://img.shields.io/badge/license-Apache-blue)
        `
    } else if (data.license === 'GNU'){
        return `
        ![image](https://img.shields.io/badge/license-GNU-blue)
        `
    } else if (data.license === 'MIT') {
        return `
        ![image](https://img.shields.io/badge/license-MIT-green)
        `
    } else if(data.license === 'BSD-3-clause') {
        return `
        ![image](https://img.shields.io/badge/license-BSD--3--clause-brightgreen)
        `
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    renderLicenseBadge;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //Need to have if statements to accept if there is information in the various areas 
return `
# ${data.title} 
## Table of Contents

### Description
${data.description}
### Installation Instructions
${data.installationInstructions}
### Usage 
${data.usageInformation}
### License
${renderLicenseBadge(data.license)}

### Contributing 
${data.contributionGuidlines}


### Test Instructions
${data.testInstructions}



`;
}

module.exports = generateMarkdown;
