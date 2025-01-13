module.exports.config = {
	name: "red",
	version: "11.9.7",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "redroom vids",
	commandCategory: "Not For Kids",
	usages: "",
	cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://porn.api-johnlester.repl.co", "https://porn-1.api-johnlester.repl.co", "https://porn-2.api-johnlester.repl.co", "https://porn.api-johnlester.repl.co", "https://porn-1.api-johnlester.repl.co", "https://porn-2.api-johnlester.repl.co", "https://porn.api-johnlester.repl.co", "https://porn-1.api-johnlester.repl.co", "https://porn-2.api-johnlester.repl.co"]
  var redroom = red[Math.floor(Math.random() * red.length)]
  axios.get(redroom).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/data/kanna.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/kanna.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/kanna.${ext}`)).on("close", callback);
      })
}
