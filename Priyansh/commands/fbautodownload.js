const { downloadVideo } = require("priyansh-all-dl");
const axios = require("axios");
const fs = require("fs-extra");
const tempy = require("tempy");

module.exports.config = {
  name: "fbautodownload",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Priyansh Rajput",
  description: "Downloads Facebook video from HD link provided",
  commandCategory: "utility",
  usages: "[Facebook video URL]",
  cooldowns: 5,
  dependencies: {
    "priyansh-all-dl": "2.0.0",
    axios: "0.21.1",
    "fs-extra": "10.0.0",
    tempy: "0.4.0",
  },
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.type === "message" && event.body) {
    if (
      event.body.startsWith("https://www.facebook.com/share/") ||
      event.body.startsWith("https://www.facebook.com/reel/")
    ) {
      try {
        const videoInfo = await downloadVideo(event.body);

        // Select best available quality
        let hdLink = null;
        if (videoInfo["360p"] && videoInfo["360p"] !== "Not found") {
          hdLink = videoInfo["360p"];
        } else if (videoInfo["720p"] && videoInfo["720p"] !== "Not found") {
          hdLink = videoInfo["720p"];
        }

        if (!hdLink) {
          await api.sendMessage(
            "Sorry, 360p ya 720p quality ka video available nahi hai. 😞",
            event.threadID,
            event.messageID
          );
          return;
        }
        const response = await axios.get(hdLink, { responseType: "stream" });
        const tempFilePath = tempy.file({ extension: "mp4" });
        const writer = fs.createWriteStream(tempFilePath);
        response.data.pipe(writer);

        writer.on("finish", async () => {
          const attachment = fs.createReadStream(tempFilePath);
          await api.sendMessage(
            {
              attachment,
              body: "Here's the video you requested:",
            },
            event.threadID,
            (err) => {
              if (err) console.error("Error sending message:", err);
            }
          );
          fs.unlinkSync(tempFilePath);
        });

        writer.on("error", (err) => {
          console.error("Error writing file:", err);
          api.sendMessage(
            "An error occurred while processing the video. Please try again later.",
            event.threadID,
            event.messageID
          );
        });
      } catch (error) {
        console.error("Error downloading Facebook video:", error);
        api.sendMessage(
          "An error occurred while downloading the Facebook video. Please try again later.",
          event.threadID,
          event.messageID
        );
      }
    }
  }
};

module.exports.run = async function ({ api, event }) {
  return api.sendMessage(
    `This command does not support direct execution.`,
    event.threadID,
    event.messageID
  );
};
