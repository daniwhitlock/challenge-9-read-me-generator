// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log(data.license);
    // if (!data.license) {
    //     return '';
    // } else if (data.license === 'Apache'){
    
    //     return `
    //     ## License
    //     `

    //     "Apache", "GNU", 'MIT', "BSD-3-clause", "None"]
        
    // }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
${data.installationIntructions}
${data.installationCommands}
### Usage 
${data.usageInformation}
### Credits




`;
}

module.exports = generateMarkdown;
