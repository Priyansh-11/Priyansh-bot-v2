const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot2",
  version: "1.0.4",
  hasPermssion: 0,
  credits: "Mr.Aaryan",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 6,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Aa gye tharki ruko m aapko Dp deta hu Jo Dp chahiye wo likho ☞.girldp/.cpldp/.frnddp/.boydp/.bestiedp☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biryani 🥗 deta hu likho ☞Biryani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Mungfali 🥜 deta hu likho ☞Mungfali☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Milk Cake deta hu likho ☞Milk cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Laddu 🍪 deta hu likho ☞Laddu☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Kurkure 🫓 deta hu likho ☞Kurkure☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cold Drink deta hu likho ☞Cold drink☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chips 🥔 deta hu likho ☞Chips☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Watter 🍶 deta hu likho ☞Pani☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Tofee 🍬 deta hu likho ☞Tofee☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Barfi 🧀 deta hu likho ☞Barfi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Burgur deta hu likho ☞Burger☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cigarette 🚬 peelata hu likho ☞Cigarette☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Hukka 🏺 peelata hu likho ☞Hukka☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Ice Cream 🍨 deta hu likho ☞Ice Cream☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chowmin 🍜 deta hu likho ☞Chowmin☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Aaryan ko bulata hu likho ☞Aaryan☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi maggie hu likho ☞Maggie☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Cake 🎂 deta hu likho ☞Cake☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Jalebi 🥨 deta hu likho ☞Jalebi☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi French fries 🍟 deta hu likho ☞French☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Juice 🧃 peelata hu likho ☞Juice☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Daru 🍻 peelata hu likho ☞Daru☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Chai ☕ peelata hu likho ☞Chai☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Biskit 🥘 deta hu likho ☞Biskut☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Golgappe 😋deta hu likho ☞Golgappe☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pasta 🥐 deta hu likho ☞Pasta☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Rasgulla deta hu likho ☞Rasgulla" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Gulabjamun deta hu likho ☞Gulabjamun☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Nasta deta hu likho ☞Nasta☜" ,"Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Samosa 🔶 deta hu likho ☞Samosa☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pizza 🍕 deta hu likho ☞Pizza☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Momos 🥟 deta hu likho ☞Momos☜" , "Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜","Ha Bolo yhi hu kya hua,Ruko mai abhi Chhole Bhature de rha hu Likho ☞Bhatura☜","Ha Bolo Yhi hu kya hua,Ruko mai Abhi Chicken 🐔 deta hu Likho☞Murga☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Coffee ☕ pilata hu likho ☞Coffee☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Pepsi 🥤  pilata hu likho ☞Pepsi☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Parathe 🥞 Khilata hu likho ☞Parathe☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Popcorn 🍿Khilata hu likho ☞Popcorn☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Dudh 🥛  pilata hu likho ☞Dudh☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Lassi🧋   Pilata hu likho ☞Lassi☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Lolipop 🍭deta hu likho ☞lolipop☜","Ha Bolo Yhi Hu ️Kya huva, Ruko me abhi Rose 🌹 deta hu likho ☞Rose☜",];
var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳")) {
     return api.sendMessage("हिंदुस्तान जिंदाबाद 🇮🇳🇮🇳", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Babu") == 0 || (event.body.indexOf("@DEVIL BOT") == 0 || (event.body.indexOf("mot")) == 0)) {
    var msg = {
      body: `🌴🪻🪴${name}🌲🪷🌿, \n\n
          ${rand} 🍀🌺💦


           * ཫ༄𒁍≛⃝𝐌𝐫 𝐃𝐞𝐯𝐢𝐥🍒`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
