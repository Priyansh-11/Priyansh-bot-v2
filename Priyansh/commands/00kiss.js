const fs = require("fs");
module.exports.config = {
	name: "kis",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "kiss",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😘😘")==0 || event.body.indexOf("💋💋")==0 || event.body.indexOf("kiss")==0 || event.body.indexOf("Kiss")==0) {
		var msg = {
				body: "😘💋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐊𝐈𝐒𝐒💋😘",
				attachment: 
fs.createReadStream(__dirname + `/cache/kiss.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }