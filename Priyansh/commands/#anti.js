module.exports.config = {
  name: "anti",
  credits: "SHANKAR SUMAN",
  hasPermission: 1,
  dependencies: {
    "imgbb-uploader": "",
    "axios": "",
    "fs": ""
  },
  description: "Ban something in the group",
  usages: "< nickname/boximage/boxname >",
  commandCategory: "Chat Box"
};

const isBoolean = val => 'boolean' === typeof val;

module.exports.run = async ({
  api, event, args, Threads
}) => {
  try {
    const {
      threadID,
      messageID,
      senderID
    } = event;
    if (!await global.modelAntiSt.findOne({
      where: {
        threadID
      }
    }))
      await global.modelAntiSt.create({
        threadID, data: {}
      });


    try {
      if (senderID == threadID)
        return;
      const data = (await global.modelAntiSt.findOne({
        where: {
          threadID
        }
      })).data;
      if (!data.hasOwnProperty("antist")) {
        data.antist = {};
        await global.modelAntiSt.findOneAndUpdate({
          threadID
        }, {
          data
        });
      }
      if (!data.hasOwnProperty("antist_info")) {
        data.antist_info = {};
        await global.modelAntiSt.findOneAndUpdate({
          threadID
        }, {
          data
        });
      }

      const setting = args[0]?.toLowerCase();
      const _switch = args[1]?.toLowerCase();
      switch (setting) {
        case 'nickname': {
          if (_switch == "on")
            data.antist.nickname = true;
          else if (_switch == "off")
            data.antist.nickname = false;
          else
            data.antist.nickname = !data.antist.nickname;

          if (data.antist.nickname === true) {
            const _info = data.antist_info.nicknames ? data.antist_info : (await api.getThreadInfo(threadID) || {});
            const {
              nicknames
            } = _info;
            if (!nicknames) return api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → An error occurred while executing the command", threadID);
            data.antist_info.nicknames = nicknames;
          } else {
            data.antist_info.nicknames = null;
          }
          break;
        }
        case 'boximage': {
          if (_switch == "on")
            data.antist.boximage = true;
          else if (_switch == "off")
            data.antist.boximage = false;
          else
            data.antist.boximage = !(isBoolean(data.antist.boximage) ? data.antist.boximage : false);

          if (data.antist.boximage == true) {
            const fs = global.nodemodule["fs"];
            const axios = global.nodemodule["axios"];
            const uploadIMG = global.nodemodule["imgbb-uploader"];

            const _info = data.antist_info.imageSrc ? data.antist_info : (await api.getThreadInfo(threadID) || {});
            const {
              imageSrc
            } = _info;
            if (!imageSrc) return api.sendMessage("Your group has no image...", threadID);
            const imageStream = (await axios.get(imageSrc, {
              responseType: 'arraybuffer'
            })).data;
            const pathToImage = __dirname + `/cache/imgbb_antist_${Date.now()}.png`;
            fs.writeFileSync(pathToImage, Buffer.from(imageStream, 'utf-8'));
            const {
              url
            } = await uploadIMG("c4847250684c798013f3c7ee322d8692", pathToImage);

            fs.unlinkSync(pathToImage);

            data.antist_info.imageSrc = url;
          } else {
            data.antist_info.imageSrc = null;
          }

          break;
        }
        case 'boxname': {
          if (_switch == "on")
            data.antist.boxname = true;
          else if (_switch == "off")
            data.antist.boxname = false;
          else
            data.antist.boxname = !(isBoolean(data.antist.boxname) ? data.antist.boxname : false);


          if (data.antist.boxname === true) {
            const _info = data.antist_info.name ? data.antist_info : (await api.getThreadInfo(threadID) || {});
            const {
              name
            } = _info;
            if (!name) return api.sendMessage("The group has no name", threadID);
            data.antist_info.name = name;
          } else {
            data.antist_info.name = null;
          }

          break;
        }
        case "theme": {
          if (_switch == "on")
            data.antist.theme = true;
          else if (_switch == "off")
            data.antist.theme = false;
          else
            data.antist.theme = !(isBoolean(data.antist.theme) ? data.antist.theme : false);

          if (!global.client.antistTheme)
            global.client.antistTheme = {};
          if (data.antist.theme === true)
            return api.sendMessage('Please go to group settings and choose a theme as the default theme', threadID, (err, info) => {
              global.client.antistTheme[threadID] = {
                threadID,
                messageID: info.messageID,
                author: senderID,
                run: async function (themeID, accessibility_label) {
                  delete global.client.antistTheme[threadID];
                  const data = (await global.modelAntiSt.findOne({
                    where: {
                      threadID
                    }
                  })).data;
                  if (!data.hasOwnProperty("antist")) {
                    data.antist = {};
                    await global.modelAntiSt.findOneAndUpdate({
                      threadID
                    }, {
                      data
                    });
                  }
                  if (!data.hasOwnProperty("antist_info")) {
                    data.antist_info = {};
                    await global.modelAntiSt.findOneAndUpdate({
                      threadID
                    }, {
                      data
                    });
                  }

                  data.antist.theme = true;
                  data.antist_info.themeID = themeID;
                  api.sendMessage('Default theme set to: ' + accessibility_label, threadID);
                  await global.modelAntiSt.findOneAndUpdate({
                    threadID
                  }, {
                    data
                  });
                }
              };
            });
          break;
        }
        case "emoji": {
          if (_switch == "on")
            data.antist.emoji = true;
          else if (_switch == "off")
            data.antist.emoji = false;
          else
            data.antist.emoji = !(isBoolean(data.antist.emoji) ? data.antist.emoji : false);


          if (data.antist.emoji === true) {
            const _info = data.antist_info.emoji ? data.antist_info : (await api.getThreadInfo(threadID) || {});
            const {
              emoji
            } = _info;
            data.antist_info.emoji = emoji;
          } else {
            data.antist_info.emoji = null;
          }

          break;
        }

        default:
          return api.sendMessage(`🛠==== [ 𝐌𝐎𝐃𝐄 ] ====🛠\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n• 𝗔𝗻𝘁𝗶 𝗯𝗼𝘅𝗻𝗮𝗺𝗲: 𝗕𝗮𝘁/𝗧𝗮𝗽 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘁𝗵𝗮𝘁 𝗮𝗿𝗲 𝘆𝗼𝘂 𝘁𝘆𝗽𝗶𝗻𝗴 𝗻𝗮𝗺𝗲\n• 𝗔𝗻𝘁𝗶 𝗯𝗼𝘅𝗶𝗺𝗮𝗴𝗲: 𝗕𝗮𝘁/𝗧𝗮𝗽 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘁𝗵𝗮𝘁 𝗮𝗿𝗲 𝘆𝗼𝘂 𝘁𝘆𝗽𝗶𝗻𝗴 𝗮𝗻𝘆 𝗵𝗲𝗹𝗽 𝗻𝗮𝗺𝗲\n• 𝗔𝗻𝘁𝗶 𝗻𝗶𝗰𝗸𝗻𝗮𝗺𝗲: 𝗕𝗮𝘁/𝗧𝗮𝗽 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘁𝗵𝗮𝘁 𝘁𝘆𝗽𝗲 𝗮 𝗯𝗶𝗲𝘁 𝗱𝗮𝗻𝗵 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n• 𝗔𝗻𝘁𝗶 𝗲𝗺𝗼𝗷𝗶: 𝗕𝗮𝘁/𝘁𝗮̆́𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘁𝗵𝗮𝘁 𝘆𝗼𝘂 𝘁𝘆𝗽𝗲𝗱 𝗮𝗻 𝗲𝗺𝗼𝗷𝗶𝘀\n• 𝗔𝗻𝘁𝗶 𝘁𝗵𝗲𝗺𝗲: 𝗕𝗮𝘁/𝘁𝗮̆́𝘁 𝗰𝗼𝗺𝗺𝗮𝗻𝗱 𝘁𝗵𝗮𝘁 𝘆𝗼𝘂 𝘁𝘆𝗽𝗲 𝘁𝗵𝗲𝗺𝗲 𝗯𝗼𝘅`, threadID);
      }

      await global.modelAntiSt.findOneAndUpdate({
        threadID
      }, {
        data
      });
      return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] → Anti mode ${setting}: ${data.antist[setting] ? 'On' : 'Off'}`, threadID);
    } catch (e) {
      console.log(e);
      api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] → An error occurred while executing the command", threadID);
    }
  }
  catch (err) {
    console.log(err)
  }
};
