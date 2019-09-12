const path = require('path');
const staticPath = path.join(__dirname, './static');
const templatesPath = path.join(__dirname, './static/templates');
const logPath = path.join(__dirname, './logs');

const config = {
  debug: true,
  
  domain: 'localhost',
  port: 8070,
  staticPath: staticPath,
  templatesPath: templatesPath,
}

module.exports = config;