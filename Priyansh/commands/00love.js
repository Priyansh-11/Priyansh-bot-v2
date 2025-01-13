const fs = require("fs");
module.exports.config = {
	name: "lov",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "love",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Love")==0 || event.body.indexOf("Bot i love")==0 || event.body.indexOf("Bot love")==0 || event.body.indexOf("I love")==0) {
		var msg = {
				body: "💔>✨ɭ❍ⱱɘ ɣ❍u ʈ❍ ɱɘɽīī 𝐣ʌʌŋ✨🦋 🚩🚩🚩 ✨💖🥀",
				attachment: 
fs.createReadStream(__dirname + `/cache/love.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }