const fs = require("fs");
module.exports.config = {
  name: "angry",
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
  if (event.body.indexOf("😡")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😠")==0 || event.body.indexOf("😤")==0) {
    var msg = {
        body: "💐𝐊𝐲𝐚 𝐘𝐚𝐚𝐫 𝐉𝐚𝐛 𝐃𝐞𝐤𝐡𝐨 𝐓𝐚𝐛 𝐆𝐮𝐬𝐬𝐚 𝐊𝐚𝐫𝐓𝐞 𝐇𝐨 𝐋𝐨 𝐉𝐮𝐢𝐂𝐞 🧃 𝐏𝐢𝐨 𝐃𝐢𝐦𝐚𝐠 𝐓𝐡𝐚𝐧𝐝𝐚 𝐑𝐚𝐇𝐞𝐆𝐚 💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
