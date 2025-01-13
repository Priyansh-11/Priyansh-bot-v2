const fs = require("fs");
module.exports.config = {
  name: "thinking",
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
  if (event.body.indexOf("🤔")==0 || event.body.indexOf("🤨")==0 || event.body.indexOf("Dimag")==0 || event.body.indexOf("Akal")==0) {
    var msg = {
        body: "💐ᴅɪᴍᴀɢ ᴛᴏ ʜᴀɪ ɴᴀʜɪ ᴛᴜᴍʜᴀʀᴇ ᴘᴀꜱꜱ ꜰɪʀ ɪᴛɴᴀ ᴅʜʏᴀɴ ʟᴀɢᴀ ᴋᴀ ʀ ᴋʏᴀ ꜱᴏᴄʜ ʀᴀʜᴇ ʜᴏ 🤔💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
