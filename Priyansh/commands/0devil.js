const fs = require("fs");
module.exports.config = {
  name: "sosad",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😢")==0 || event.body.indexOf("😭")==0 || event.body.indexOf("😔")==0 || event.body.indexOf("🥺")==0) {
    var msg = {
        body: "💐𝐊𝐲𝐚 𝐇𝐮𝐚 𝐁𝐚𝐛𝐲 𝐬𝐚𝐝 𝐌𝐚𝐭 𝐡𝐨 𝐌𝐚𝐢 𝐇𝐮 𝐧𝐚 💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
