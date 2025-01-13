const fs = require("fs");
module.exports.config = {
	name: "gn",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "night",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good night")==0 || event.body.indexOf("GOOD NIGHT")==0 || event.body.indexOf("Gud night")==0 || event.body.indexOf("Gn")==0) {
		var msg = {
				body: "🔐✨>💫💦Ꮗ𝐢𝐭𝐡𝐨𝐮𝐭 ɣ𝐨ʋ       𝐦ɣ 𝐥𝐢𝐟ə 𝐢𝐬 𝐢η𝐜𝐨𝐦𝐩𝐥ə𝐭ə                         ☆☆⚡🦋🥀G❍❍d ɳīgHʈ 𝐒Wɘɘʈ Hɘʌʀʈ✨🦋☘️",
				attachment: fs.createReadStream(__dirname + `/cache/night.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }