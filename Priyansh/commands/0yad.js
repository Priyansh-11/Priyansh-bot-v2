module.exports.config = {
    name: "yad",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Aasif Alam",
    description: "Call Bot No reply",
    commandCategory: "ai",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    


ers: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = ["❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTujhe Yaad Kar Loon Toh Mil Jata Hai Sukoo Mere Ghamon Ka Ilaaj Bhi Kitna Sasta Hai.🖤😇✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTabiyat Apni Ghabrati Hai Sunsaan Raaton Mein,😒 Hum Aise Mein Teri Yaadon Ki Chadar Taan Lete Hain.😶‍🌫️🤗✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nBadi Gustakh Hai Tumhari Yaad Ise Tameez Sikha Do,😏 Dastak Bhi Nahi Deti Aur Dil Mein Utar Jati Hai.🫢✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTeri Yaadon Ko Pasand Hai Meri Aankhon Ki Nami,🥹 Hasna Bhi Chahu Toh Rula Deti Hai Teri Kami.🙃🖤\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nBus Itna Bataa do Humein, Intezaar Karein Aapka ya Badal Jaayein Hum Aapki Tarah…😒🥹✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nHar Ek Pehlu Tera Mere Dil Me Abaad Ho Jaye,❤️ Tujhe Main Iss Kadar Dekhu Mujhe Tu Yaad Ho Jaye.😇🙃✍️\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKaise Badal Loon ye Aadat Main Apni,🤔 Ki Mujhe Tujhe Yaad Karne ki Aadat Ho Gai Hai.🫢\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nItna na Yaad 😇 Aao ki Khud ko Tum🧕Samajh Baithe, Mujhe Ehsas😌Rahne do Meri apni bhi Kahani🤗hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nSarahade 🚧 Tod Kar Aa Jati hai Kisi PaNchii 🐦 ki Tarah, Ye Teri Yaad😒hai jo Bant'ti nhi Kisi Mulkon 🌎  ki Tarah,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTeri🧕hi Yaad me Gujar Jati hai, Jise log rat 🌒 kahate hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nAapki Yaad aai hai Sanse Jara🙋‍♂️Ahista chalo, Dhadkano💓se bhi Ibadat me khalal😏Padta hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nHum Kaise 🤷🏻‍♂️ Yaad nhi Karte Tumhe, Is baat ki Hairani hai, Yahan to har Sans🗣️me Tere Mere Piyar💑ki Meharbani hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nTut Jayegi🧕Teri Zidd ki Aadat us⏰ Waqt, Jab Milegi Khabar📢Tujhko ki Yaad Karne😎 Wala... Ab Yaad ban🤷🏻‍♂️Yaya hai.\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nUtni Bar to Sans🗣️bhi Nhi Lete hum, Ek Din me Jitne Bar Tumhen🤗Yaad karte hai,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nFir tumhari🧕yaad fir tumhari aash Fir tumhari🗣️baten, Aye dil❤lagta hai tadapne ka Bahut shauk hai🤗tumhen, \n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKabhi yaad🤔ate hai kabhi tumhare khawab😴ate hai, Mujhe😎satane ke salike to🧕tumhe Behisab ate hai,😏\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKash Tumhe🧕Kabhi Fursata me Yah🤔khayal aa jaye, Koi Yaad😇Karta hai Tumhe 🤗Zindagi Samajh kar,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nKhuda🤲 Kare is Dil ki🗣️Aawaz me Itna Asar ho Jaye, Jiski😓Yaad me Tadap Rahe hai😎 Hum, Bas use Khabar🙄ho Jaye,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nMulakate💏na Sahi par Thoda📲 Baat hi Kar Lo, Duwao🤲me hi Sahi Thoda☹️ Yaad hi Kar Lo,\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼTeri Mohabbat💑par Mera Haq to❌nhi par, Dil💓 Chahata hai Akhri Sans🗣️tak Intejar Karun,ʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼChhalak Jate hai😥Anshu jab Apki🤔 Yaad Aati Hai, Ye wo Barish🌧hai Jiska koi Mausam nhi Hotaʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼBesabr Aankho👀ki Tadap Aur bhi🤗 Badh Jati hai, Jab Dil❤Tumahre Deedar🧐ki Zidd Karta Haiʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃", "❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\nʼʼFir Apki🧕Yaad fir Apki Aash Fir Apki🗣️Baten, Aye Dil❤Lagta hai Tadapne ka Bahut shauk hai🤗Tumhenʼʼ\n\n❋┈••┈❋┈┈┈••✦●●✦••┈┈┈❋┈┈❋\n\n𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐀 𝐋𝐎𝐓 🥹🙃"]
        u = l[Math.floor(Math.random() * l.length)];
    ["miss", "i miss bot", "Bot I Miss You", "BOT I MISS YOU", "I miss you bot", "Bot miss you", "Bot miss u", "I Miss U Bot", "Miss u bot", "Miss you", "miss u bot", "bot miss u", "Miss"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "------ Call bots ------\n", console.log(modules, e + "|", t, h), a = u, void o.sendMessage(a, n, s)
        }
        var a
    }))
}, module.exports.languages = {
    vi: {
        on: "Turn on",
        off: "Turn off",
        successText: "goibot successful"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};
