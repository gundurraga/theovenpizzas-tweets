const https = require("https");
const fs = require("fs");

async function download(url) {
  const req = https.get(url, async function (res) {
    let fileName = "OvenPizza.png";

    const fileStream = await fs.createWriteStream(fileName);
    res.pipe(fileStream);

    fileStream.on("error", function (error) {
      console.log("Error writing to the stream.", error);
    });
    fileStream.on("finish", function () {
      fileStream.close();
      console.log(`Successfully downloaded ${fileName}`);
    });
  });
  req.on("error", function (error) {
    console.log("Error downloading the file.", error);
  });
}

module.exports.download = download;
