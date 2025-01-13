const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const tinyurl = require('tinyurl');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 

module.exports = {
  config: {
    name: "alldl", 
    version: "1.0.1",
    credits: "RKO BRO",
    cooldowns: 6,
    hasPermission: 0,
    description: "𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝘃𝗶𝗱𝗲𝗼 𝗳𝗿𝗼𝗺 𝘁𝗶𝗸𝘁𝗼𝗸, 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸, 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺, 𝗬𝗼𝘂𝗧𝘂𝗯𝗲, 𝗮𝗻𝗱 𝗺𝗼𝗿𝗲",
    commandCategory: "𝗠𝗘𝗗𝗜𝗔",
    usages: "[video_link]",
    usePrefix: true,
    dependencies: {
      "axios": "",
      "fs-extra": "",
      "path": "",
      "tinyurl": ""
    }
},

  run: async function ({ api, args, event }) {
    const dipto = event.messageReply?.attachments[0]?.url || args[0];

    if (!dipto){
       api.setMessageReaction("❌", event.messageID, (err) => {}, true);
    }
  try {
       api.setMessageReaction("⏳", event.messageID, (err) => {}, true);

    const { data } = await axios.get(`${await baseApiUrl()}/alldl?url=${encodeURIComponent(dipto)}`);
    const ext = path.extname(data.result);
    const filePath = __dirname + `/cache/vid${ext}`;
    const vid = (await axios.get(data.result, { responseType: "arraybuffer" })).data;

    fs.writeFileSync(filePath, Buffer.from(vid, 'utf-8'));
    const url = await tinyurl.shorten(data.result);
     api.setMessageReaction("✅", event.messageID, (err) => {}, true);

    api.sendMessage({ 
      body: `${data.cp}\n✅ | Link: ${url}`,
      attachment: fs.createReadStream(filePath),
    }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
if (dipto.startsWith('https://i.imgur.com')){
const dipto3 = dipto.substring(dipto.lastIndexOf('.'));

  const response = await axios.get(dipto, { responseType: 'arraybuffer' });

const filename = __dirname + `/cache/dipto${dipto3}`;

    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `✅ | Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (error) {
    api.setMessageReaction("❎", event.messageID, (err) => {}, true);
api.sendMessage(error, event.threadID, event.messageID);
  }
  },
}
