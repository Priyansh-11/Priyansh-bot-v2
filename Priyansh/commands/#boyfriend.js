const fs = require("fs");
module.exports.config = {
  name: "boyfriend",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "MR.AARYAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("bf") ||
     react.includes("BF") || react.includes("BOYFR") || react.includes("BF") ||
react.includes("boyfr") ||
react.includes("boyfr")) {
    var msg = {
        body: ` ${name}𝐘𝐄 𝐋𝐎 𝐀𝐀𝐏𝐊𝐀 𝐁𝐅 𝐀𝐀 𝐆𝐘𝐀 `,attachment: fs.createReadStream(__dirname + `/cache/Bf.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
