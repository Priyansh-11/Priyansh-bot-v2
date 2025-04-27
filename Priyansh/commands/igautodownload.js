const { downloadVideo } = require('priyansh-all-dl');
const axios = require("axios");
const fs = require("fs-extra");
const tempy = require('tempy');

module.exports.config = {
    name: "igautodownload",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Priyansh Rajput",
    description: "Downloads Instagram video from HD link provided",
    commandCategory: "utility",
    usages: "[Instagram video URL]",
    cooldowns: 5,
    dependencies: {
        "priyansh-all-dl": "latest",
        "axios": "0.21.1",
        "fs-extra": "10.0.0",
        "tempy": "0.4.0"
    }
};

module.exports.handleEvent = async function({ api, event }) {
            if (event.type === "message" && event.body) {
                if (event.body.startsWith("https://www.instagram.com/share/") || event.body.startsWith("https://www.instagram.com/reel/")) {
            try {

            const videoInfo = await downloadVideo(event.body);
            const hdLink = videoInfo.video;
            const response = await axios.get(hdLink, { responseType: 'stream' });
            const tempFilePath = tempy.file({ extension: 'mp4' });
            const writer = fs.createWriteStream(tempFilePath);
            response.data.pipe(writer);

            writer.on('finish', async () => {
                const attachment = fs.createReadStream(tempFilePath);
                await api.sendMessage({
                    attachment,
                    body: "Here's the video you requested:"
                }, event.threadID, (err) => {
                    if (err) console.error("Error sending message:", err);
                });
                fs.unlinkSync(tempFilePath);

            });

            writer.on('error', (err) => {
                console.error("Error writing file:", err);
                api.sendMessage("An error occurred while processing the video. Please try again later.", event.threadID, event.messageID);
            });
        } catch (error) {
            console.error('Error downloading Instagram video:', error);
            api.sendMessage("An error occurred while downloading the Instagram video. Please try again later.", event.threadID, event.messageID);
        }
    }
}
};

module.exports.run = async function ({ api, event }) {
  return api.sendMessage(
    `This command does not support direct execution.`,
    event.threadID,
    event.messageID,
  );
};
