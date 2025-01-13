const fs = require("fs");
module.exports.config = {
  name: "sona",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("@Sona Ji")==0 || event.body.indexOf("Sona")==0 || event.body.indexOf("sona")==0 || event.body.indexOf("SONA")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐋𝐎 𝐒𝐎𝐍𝐀 𝐉𝐈 𝐀𝐀 𝐆𝐀𝐈🙈",
        attachment: fs.createReadStream(__dirname + `/cache/sona.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
