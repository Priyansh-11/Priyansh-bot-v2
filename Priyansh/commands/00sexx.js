/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "sexvideo",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Karan jalvanshi",
  description: "Sex video",
  commandCategory: "Hình ảnh",
  usages: "svdo",
  cooldowns: 00,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["LE VIDEO DEKH OR MUTH MAR"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [

  "https://drive.google.com/uc?id=14GzIPZnMTXQp4iz8DF2d5AJsn2vNWKwR",
  "https://drive.google.com/uc?id=11Bn1z1jvt_K-Vtu09ZPKSgUDOIWKoKRX",
  "https://drive.google.com/uc?id=13OUz214ERRQCBxhY3eBB2fVGM0YVCQMQ",
  "https://drive.google.com/uc?id=11CaSdfKqtnAoRuxCZYhXHl2GxhtBbvS1",
  "https://drive.google.com/uc?id=12pNMHGNTI0aDBkK9UmZPbus2UbuRdjff",
  "https://drive.google.com/uc?id=12BkvJA3y08ZfzKwUL0Ak7ux6x5-7ayoa",
  "https://drive.google.com/uc?id=12euL4lhVnT_ZbuyitZFZ0rct9BDhHkek",
  "https://drive.google.com/uc?id=1381W__Tc5iAK82ErOhXk19jr4zuZ-LNh",
  "https://drive.google.com/uc?id=14SQ30sCfCOUVtIezHROZe-g4m3UQ5Ti3",
  "https://drive.google.com/uc?id=13etYEqec3WZRwiETYbasZsv9YMKRgdft",
  "https://drive.google.com/uc?id=12p1KxjgJzEmKITE4X5Ajeboz19ps29RL",
  "https://drive.google.com/uc?id=14SFQxrF-R06zLF7uXs2vdOiAqks-qhMn",
  "https://drive.google.com/uc?id=11ku-yWEOnSTAg3DTr_NFOESMCeqHuE-1",
  "https://drive.google.com/uc?id=11k0wCOQhCpSZortcRSMDb4wEpjplIyae",
  "https://drive.google.com/uc?id=12w2mZiNiVbsUEkhbsrbrvceTHv1xgy5_",
  "https://drive.google.com/uc?id=13Mk5viSejopgAxV_49de8R-sb5NK1t7W",
  "https://drive.google.com/uc?id=14d0XF43FTqz4wNwrgLzZBSYKoURB8yD-",
  "https://drive.google.com/uc?id=14IpRQtiLKhYBgaB_HlrLkwEcHh3g6IB8",
  "https://drive.google.com/uc?id=11RUrBubSTZZGJ4SboGUyZMQa2Y3jlOxa",
  "https://drive.google.com/uc?id=14gx9KTmvlsQM1tJYdy1mAThecTd7JMqb",
  "https://drive.google.com/uc?id=14AqWr3r7eSQwuX5Jh-imKI4m6KesDEOM",
  "https://drive.google.com/uc?id=11iCtYM1NSF4zm1XvaN6XztudxWtvaYkM",
  "https://drive.google.com/uc?id=14o-SQmTsb1O0V5c2g9_UT_0F-7Ju7NSM",
  "https://drive.google.com/uc?id=14C8WPpdGp65rLsIDET9IOMhp3qM1MXSi",
  "https://drive.google.com/uc?id=121zDSzkHYqzLdctjLXs2aj2RU1_sGNrV",
  "https://drive.google.com/uc?id=13hdQGsDjSz561pqZKMAskP_BjR89s2ba",
  "https://drive.google.com/uc?id=11fs6j-vZ5HQtct6iOAjl8hQGtRX5e5iA",
  "https://drive.google.com/uc?id=131VvSlDYgU7KQdwutLg6KC9E3UdpKl7n",
  "https://drive.google.com/uc?id=145_k3Ox0jRVxgoo_QIRZ5JEL9LsmFpbA",
  "https://drive.google.com/uc?id=11Osco5tn0wRrypoA84N0Meqrc-od3HyO",
  "https://drive.google.com/uc?id=12bhERKyljzBGlf5PpyUyVuJ_ytohAmvz",
  "https://drive.google.com/uc?id=13vo7eUGXEjU8zfuBarqa3nK9-R74PM_D",
  "https://drive.google.com/uc?id=12vB7FaAopdHs9P1q0sn_SlqSvPGDF0Dp",
  "https://drive.google.com/uc?id=12dP0uiAo-rKYbzbBpyEly_ubIB7JywxD",
  "https://drive.google.com/uc?id=14eqZnHX62QvWQRyA2tAT_DJgAqjb0O-8",
  "https://drive.google.com/uc?id=1234BxFSJ63FPG5kZyq9I6q8_aCmEbCtP",
  "https://drive.google.com/uc?id=11cE9FNTT1DYKNR8k-8lStJHIYqKSL_t5",
  "https://drive.google.com/uc?id=14dWNctMEBz-xyB6m7QduRUXvW8EzndeE",
  "https://drive.google.com/uc?id=14J6Gm1Nfu5uug-cYptfheohOhg6LPTHJ",
  "https://drive.google.com/uc?id=14WSUH-YqBYvzQWyIo4OfHlMVtKyselmR",
  "https://drive.google.com/uc?id=1464MXeO1BKHBDqHejjqdQnGoypUUejdr",
  "https://drive.google.com/uc?id=12XlCVkDDq2eR6AtXWflgQ4HApTE__ETn",
  "https://drive.google.com/uc?id=13bhDMM4U5-fbBZYpiLZRClIIPWHuiT78",
  "https://drive.google.com/uc?id=12aVOQD8tO7arqkfM1IiTi9SbPFeVJeDw",
  "https://drive.google.com/uc?id=13WtGnaihNvn-py_eHvmU1JWBbBzTvZXp",
  "https://drive.google.com/uc?id=13Q8FIXytcS1GiLdokrzt3U9eW4ayv40N",
  "https://drive.google.com/uc?id=12IQL13XyT-ePeCqFWyTssNO_fBll-YbW",
  "https://drive.google.com/uc?id=12NYgFvKutxRD-S3A0wFSST7U001nKV49",
  "https://drive.google.com/uc?id=14-5WYfbVEHmKdtUAc0vLlUxgNyFS2m0m",
  "https://drive.google.com/uc?id=153AM9vd_NJ2XfPNk7_HhThL_YoTg17D6",
  "https://drive.google.com/uc?id=14-5WYfbVEHmKdtUAc0vLlUxgNyFS2m0m",
  "https://drive.google.com/uc?id=153AM9vd_NJ2XfPNk7_HhThL_YoTg17D6",
  "https://drive.google.com/uc?id=11eJGhHBOCvdP_yPnV5YQr8QsYvzU8fYD",
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
