const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/eypz/1725122591660_cw9Qqf_-0.png",
ALIVE_MSG: process.env.ALIVE_MSG || " *NEXO-MD ALIVE🌸*\n\n*Owner:* nexo ser\n\n_Nothing Is Impossible. Motivate Your Own Self🙈_ ",
OWNER_NAME: process.env.OWNER_NAME || "𝑾𝒉𝒊𝒕𝒆 𝒔𝒆𝒓",
BOT_NAME: process.env.BOT_NAME || "NEXO-XD",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
