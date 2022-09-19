const licenseData = require('./license-data.json');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseInfoResult){
  if (!licenseInfoResult) return '';
  // construct badge icon image
  const badgeIconUrl = licenseData.badgeTemplate
    .replace('@name', licenseInfoResult.endpoint.replace('-', '_'))
    .replace('@color', licenseInfoResult.badgeColor);
  // returns markdown of license badge
  return `
  [![License: ${licenseInfoResult.name}](${badgeIconUrl})](${renderLicenseLink(licenseInfoResult)})
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseInfoResult){
  if (!licenseInfoResult) return '';
  // construct license source documentation link
  const licenseSourceUrl = licenseData.licenseRoot + licenseInfoResult.endpoint;
  // returns license url
  return licenseSourceUrl;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInfoResult){
  if (!licenseInfoResult) return '';
  // construct license markdown
  const licenseInfo = licenseInfoResult.default
    ? `\n${licenseInfoResult.info}` : `\nThis application is distributed under the [${licenseInfoResult.name}](${renderLicenseLink(licenseInfoResult)}) license.`;
  // returns license section markdown
  return renderLicenseBadge(licenseInfoResult) + licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData){
  // Aquire selected license data
  const licenseInfoResult = licenseData.licenseInfo.find(choiceData => choiceData.name === readmeData.licenseType);
  // Returns mark-down string
  return `
  # ${readmeData.title}
  ## Description
  ${readmeData.description}
  ## License
  ${renderLicenseSection(licenseInfoResult)}
  ## Table of contents
  - [License](#License)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Testing](#Testing)
  - [Contributions](#Contributions)
  ## Usage
  ${readmeData.usage}
  ## Installation
  ${readmeData.installation}
  ## Tests
  ${readmeData.tests}
  ## Contributors
  Contributors: 
  ${readmeData.contributions}
  ## Questions
  Find me on GitHub: <https://github.com/${readmeData.githubName}>
  \nReach me by email: ${readmeData.email}
  `;
}

module.exports = { 
  generateMarkdown
}
