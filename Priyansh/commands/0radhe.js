const fs = require("fs");
module.exports.config = {
	name: "radhe radhe",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ABHISHEK", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Radhe") ||
     react.includes("RADHE RADHE") || react.includes("radhe") || react.includes("Radhe radhe") ||
react.includes("Jay shri krishna") ||
react.includes("Krishna")) {
		var msg = {
				body: ` राधे राधे __❤️🙏 `,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }