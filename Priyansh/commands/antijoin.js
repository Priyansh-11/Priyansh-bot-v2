module.exports.config = {
    name: "antijoin",
    version: "1.0.0",
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPermssion: 1,
    description: "Turn off antijoin",
    usages: "antijoin on/off",
    commandCategory: "system",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[ 𝐀𝐍𝐓𝐈 𝐉𝐎𝐈𝐍 ] » 𝗡𝗲𝗲𝗱 𝗴𝗿𝗼𝘂𝗽 𝗮𝗱𝗺𝗶𝗻 𝗽𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻𝘀, 𝗽𝗹𝗲𝗮𝘀𝗲 𝗮𝗱𝗱 𝗮𝗻𝗱 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[ 𝐀𝐍𝐓𝐈 𝐉𝐎𝐈𝐍 ] » 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 ${(data.newMember == true) ? "𝗢𝗻" : "𝗢𝗳𝗳"} 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗔𝗻𝘁𝗶 𝗝𝗼𝗶𝗻 ✅`, event.threadID, event.messageID);
}
