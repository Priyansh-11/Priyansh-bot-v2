const fs = require("fs");
module.exports.config = {
	name: "follow",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "follow",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Follow")==0 || event.body.indexOf("follow")==0 || event.body.indexOf("insta")==0 || event.body.indexOf("Insta")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On Instagram Username 👉 @aaryan_maurya_99",
				attachment: 


eam(__dirname + `/noprefix/follow.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🦋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }