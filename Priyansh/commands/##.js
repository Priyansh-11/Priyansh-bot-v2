module.exports.config = {
 name: "info2",
 version: "1.0.1", 
 hasPermssion: 0,
 credits: "Joshua Sy (modified by Siegfried Sama)", //don't change the credits please
 description: "Admin and Bot info.",
 commandCategory: "...",
	usePrefix: false,
 cooldowns: 1,
 dependencies: 
 {
	"request":"",
	"fs-extra":"",
	"axios":""
 }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
	hours = Math.floor(time / (60 * 60)),
	minutes = Math.floor((time % (60 * 60)) / 60),
	seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =[
"https://i.imgur.com/DDO686J.mp4",
"https://i.imgur.com/WWGiRvB.mp4",
"https://i.imgur.com/20QmmsT.mp4",
"https://i.imgur.com/nN28Eea.mp4",
"https://i.imgur.com/fknQ3Ut.mp4",
"https://i.imgur.com/yXZJ4A9.mp4",
"https://i.imgur.com/aWIyVpN.mp4",
"https://i.imgur.com/aFIwl8X.mp4",
"https://i.imgur.com/SJ60dUB.mp4",
"https://i.imgur.com/ySu69zS.mp4",
"https://i.imgur.com/mAmwCe6.mp4",
"https://i.imgur.com/Sbztqx2.mp4",
"https://i.imgur.com/s2d0BIK.mp4",
"https://i.imgur.com/rWRfAAZ.mp4",
"https://i.imgur.com/dYLBspd.mp4",
"https://i.imgur.com/HCv8Pfs.mp4",
"https://i.imgur.com/jdVLoxo.mp4",
"https://i.imgur.com/hX3Znez.mp4",
"https://i.imgur.com/cispiyh.mp4",
"https://i.imgur.com/ApOSepp.mp4",
"https://i.imgur.com/lFoNnZZ.mp4",
"https://i.imgur.com/qDsEv1Q.mp4",
"https://i.imgur.com/NjWUgW8.mp4",
"https://i.imgur.com/ViP4uvu.mp4",
"https://i.imgur.com/bim2U8C.mp4",
"https://i.imgur.com/YzlGSlm.mp4",
"https://i.imgur.com/HZpxU7h.mp4",
"https://i.imgur.com/exTO3J4.mp4",
"https://i.imgur.com/Xf6HVcA.mp4",
"https://i.imgur.com/9iOci5S.mp4",
"https://i.imgur.com/6w5tnvs.mp4",
"https://i.imgur.com/1L0DMtl.mp4",
"https://i.imgur.com/7wcQ8eW.mp4",
"https://i.imgur.com/3MBTpM8.mp4",
"https://i.imgur.com/8h1Vgum.mp4",
"https://i.imgur.com/CTcsUZk.mp4",
"https://i.imgur.com/e505Ko2.mp4",
"https://i.imgur.com/3umJ6NL.mp4",
		];
var callback = () => api.sendMessage({body:`➢ Admin and Bot Information

⁂ Bot Name: ${global.config.BOTNAME}
✧ Bot Admin: ${global.config.ADMINBOT}
♛ Bot Admin Link: https://www.facebook.com/MR.AARYAN.HERE
❂ Bot Prefix: ${global.config.PREFIX}
✫ Bot Owner: https://www.facebook.com/MR.AARYAN.HERE
➟ UPTIME
✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.
✫ Thanks for using ${global.config.BOTNAME}
`,attachment: fs.createReadStream(__dirname + "owner_video.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "owner_video.mp4")); 
	 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"owner_video.mp4")).on("close",() => callback());
	};
