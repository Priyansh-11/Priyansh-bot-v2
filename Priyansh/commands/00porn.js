module.exports.config = {
  name: "porn",
  version: "3.2",
  hasPermssion: 2,
  credits: "@Hazeyy",
  description: "( 𝙍𝙖𝙣𝙙𝙤𝙢 𝙋𝙤𝙧𝙣 𝙂𝙞𝙛 )",
  commandCategory: "random-gif",
  usages: "( Porn Gif )",
  cooldowns: 2,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  
  var links = [
     "https://i.postimg.cc/7hfbxttJ/39951141.gif",
     "https://i.postimg.cc/T3ySrVFj/21153541.gif",
     "https://i.postimg.cc/pLt8Zx10/27079421.gif",
     "https://i.postimg.cc/cL4fb33v/41176981.gif",
     "https://i.postimg.cc/j2mBFTg5/18596611.gif",
     "https://i.postimg.cc/YChzSgCJ/10608452.gif",
     "https://i.postimg.cc/fRN58kzF/12573981.gif",
     "https://i.postimg.cc/Zq3b47t0/15635492.gif",
     "https://i.postimg.cc/L660SJK1/23034381.gif",
     "https://i.postimg.cc/D0X2xxvq/porn-gif-magazine-nastiest73.gif",
     "https://i.postimg.cc/MHKLTT4X/kiera-winters-cum-facial-fuck-gif-003.gif",
     "https://i.postimg.cc/Z5rxGm7Q/38518836005d1642c60e.gif",
     "https://i.postimg.cc/T1b6VQGB/pussy-penetration-001.gif",
     "https://i.postimg.cc/W13Fv8Tr/EC42C4B.gif",
     "https://i.postimg.cc/Jnw50vzS/CB6A914.gif",
     "https://i.postimg.cc/Gpvs72bS/BFF8AE3.gif",
     "https://i.postimg.cc/cCGWDx4T/DCE353A.gif",
     "https://i.postimg.cc/pX979bWL/878345.gif",
     "https://i.postimg.cc/hvw7f7SM/tetona-001-21.gif",
     "https://i.postimg.cc/02V9dqDR/blowjob-by-mouthfuckgif.gif",
     "https://i.postimg.cc/T2kst279/lesbo-at-sexylesby.gif",
     "https://i.postimg.cc/C5jsTNCk/teen-via-nsfwforsure.gif",
     "https://i.postimg.cc/j2sL240z/pounding-via-porngifjunkie.gif",
     "https://i.postimg.cc/nL4mLz9f/3471133-porn-gif-magazine-nastiest-001-1.gif",
     "https://i.postimg.cc/wvJ9zy1D/autumn-falls-amateurallure-doggystyle-sex.gif",
    // Add more links here for GIFs or videos
  ];
  
  var randomLink = links[Math.floor(Math.random() * links.length)];
  var extension = randomLink.split(".").pop(); // Extract the file extension
  
  var fileName = `1.${extension}`; // Set the file name based on the extension
  var filePath = __dirname + "/cache/" + fileName; // Set the file path
  
  var callback = () => {
    var attachment;
    
    // Check the file extension and create the appropriate attachment
    if (extension === "gif") {
      attachment = fs.createReadStream(filePath);
    } else if (extension === "jpg" || extension === "jpeg" || extension === "png") {
      attachment = { path: filePath };
    } else if (extension === "mp4" || extension === "webm") {
      attachment = fs.createReadStream(filePath);
    }
    
    api.sendMessage({ body: `𝖧𝖾𝗋𝖾'𝗌 𝗒𝗈𝗎𝗋 𝗉𝗈𝗋𝗇 𝗀𝗂𝖿 𝖣𝖺𝖽𝖽𝗒 𝖼𝗁𝗂𝗅𝗅🥴: ${links.length}`, attachment }, event.threadID, () => fs.unlinkSync(filePath));
  };
  
  return request(encodeURI(randomLink))
    .pipe(fs.createWriteStream(filePath))
    .on("close", () => callback());
};
