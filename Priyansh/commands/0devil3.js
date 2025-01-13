const fs = require("fs");
module.exports.config = {
	name: "loveyou2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😍")==0 || event.body.indexOf("😻")==0 || event.body.indexOf("❤️")==0 || event.body.indexOf("🤗")==0) {
		var msg = {
				body: "💐𝐀𝐧𝐤𝐡𝐨 𝐌𝐞 𝐏𝐲𝐚𝐫, 𝐃𝐢𝐥𝐦𝐞 𝐊𝐡𝐮𝐌𝐚𝐫, 𝐏𝐲𝐚𝐫 𝐓𝐨𝐡 𝐍𝐡𝐢 𝐤𝐚𝐫 𝐋𝐢𝐘𝐚 𝐌𝐮𝐉𝐇𝐬𝐞🫂💐",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
