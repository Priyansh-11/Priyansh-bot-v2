const fs = require("fs");
module.exports.config = {
  name: "salam",
    version: "1.0.1",
  hasPermssion: 2,
  credits: "VanHung - Fixed by LTD", 
  description: "hihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Assal")==0 || event.body.indexOf("Asalam")==0 || event.body.indexOf("ASALAM")==0 || event.body.indexOf("ASSALAM")==0) {
    var msg = {
        body: "𝐖𝐚𝐥𝐞𝐤𝐮𝐦 𝐀𝐬𝐬𝐚𝐥𝐚𝐦 🏝️",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }