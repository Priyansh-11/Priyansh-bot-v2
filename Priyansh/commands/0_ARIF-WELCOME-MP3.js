const fs = require("fs");
module.exports.config = {
  name: "welcome",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "PREM BABU", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5,  
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("welcome") ||
     react.includes("Welcome") || react.includes("WELCOME") || react.includes("स्वागत") ||
react.includes("welcome") ||
react.includes("WELCOME")) {
    var msg = {
        body: `𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐇𝐎 𝐆𝐘𝐀 𝐉𝐈 🙂🖐️`,attachment: fs.createReadStream(__dirname + `/noprefix/welcome.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
