module.exports.config = {
    name: "teach",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "sim learning by teach",
    commandCategory: "Sim",
    usages: "",
    cooldowns: 2,
    dependencies: {
        "axios": ""
    }
};
var API_KEY = "";
module.exports.run = ({ api, event, args }) => {
    const { threadID, messageID, senderID } = event;
    return api.sendMessage("[ 𝐒𝐈𝐌 ] - Reply to this message Enter a question for Simmi", threadID, (err, info) => {
        global.client.handleReply.push({
            step: 1,
            name: this.config.name,
            messageID: info.messageID,
            content: {
                id: senderID,
                ask: "",
                ans: ""
            }
        })
    }, messageID);
}
module.exports.handleReply = async({ api, event, Users, handleReply }) => {
    const axios = require("axios");
    const fs = require("fs");
    const moment = require("moment-timezone");
    var timeZ = moment.tz("Asia/Kolkata").format("HH:mm:ss | DD/MM/YYYY");
    const { threadID, messageID, senderID, body } = event;
    let by_name = (await Users.getData(senderID)).name;
    if (handleReply.content.id != senderID) return;
    const input = body.trim();
    const sendC = (msg, step, content) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        api.unsendMessage(handleReply.messageID);
        global.client.handleReply.push({
            step: step,
            name: this.config.name,
            messageID: info.messageID,
            content: content
        })
    }, messageID);
    const send = async(msg) => api.sendMessage(msg, threadID, messageID);

    let content = handleReply.content;
    switch (handleReply.step) {
        case 1:
            content.ask = input;
            sendC("[ 𝐒𝐈𝐌 ] - Reply to this message", 2, content);
            break;

        case 2:
            content.ans = input;
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
            api.unsendMessage(handleReply.messageID);
            let c = content;
            let res = await axios.get(encodeURI(`https://sim-api-by-priyansh.glitch.me/sim?type=teach&ask=${c.ask}&ans=${c.ans}&apikey=PriyanshVip`));
            if (res.data.error) return send(`${res.data.error}`);
            send(`[ 𝐒𝐈𝐌 ] - It's a success, previews:\n\n🤤 Data:\n${c.ask} -> ${c.ans}\n\n⏱ Time: ${timeZ}`);
            break;
        default:
            break;
    }
  }
