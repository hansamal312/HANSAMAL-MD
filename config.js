const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'HANSAMAL-MD=4owBCS4a#uA4Fy3Dc5qA_z-5gtjhp2or10SPW0DOjWQOVS7cvdys' : process.env.SESSION_ID,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? '' : process.env.GITHUB_USER_NAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '' : process.env.GITHUB_AUTH_TOKEN,        
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94711262551' : process.env.OWNER_NUMBER
};
