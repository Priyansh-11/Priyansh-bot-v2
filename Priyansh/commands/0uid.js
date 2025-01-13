const fs = require("fs");
module.exports.config = {
  name: "aise",
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
  if(react.includes("🧐𝐱") ||
     react.includes("😯𝐱") || react.includes("🤪") || react.includes("😳𝐳") ||
react.includes("🙀𝐳") ||
react.includes("😱𝐳")) {
    var msg = {
        body: `【  𝐀𝐈𝐒𝐄 𝐌𝐀𝐓 𝐃𝐄𝐊𝐇0 𝐘𝐀𝐑 𝐍𝐀𝐇𝐈 𝗧𝗢 𝐊𝐈𝐒𝐒  𝐊𝐀𝐑 𝐋𝐔𝐍𝐆𝐀______😁😁😝】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
