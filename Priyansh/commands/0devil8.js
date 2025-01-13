const fs = require("fs");
module.exports.config = {
  name: "lough",
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
  if (event.body.indexOf("😁")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😄")==0 || event.body.indexOf("😃")==0) {
    var msg = {
        body: "💐𝐈𝐭𝐧𝐢 𝐇𝐚𝐬𝐡𝐢 𝐊𝐲𝐮 𝐀𝐚 𝐑𝐚𝐡𝐢 𝐇𝐚𝐢 𝐈𝐬𝐬 𝐇𝐚𝐬𝐢 𝐤𝐞 𝐏𝐢𝐜𝐡𝐞 𝐊𝐲𝐚 𝐑𝐚𝐚𝐣 𝐡𝐚𝐢💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😀", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
