const fs = require("fs");
module.exports.config = {
	name: "ram ram",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PIYUSH", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("ram ram") ||
     react.includes("RAM RAM") || react.includes("Jay shri sitaram") || react.includes("radhe radhe") ||
react.includes("jay shree ram") ||
react.includes("sitaram")) {
		var msg = {
				body: `【  जय _श्री _राम _____🚩❤️🙏  】`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
