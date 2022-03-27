//TODO
//add different content to tweets than quotes

const dotenv = require("dotenv");
const { TwitterApi } = require("twitter-api-v2");

const Hashtag = require("./Hashtag");
const Downloader = require("./Downloader");

const pizzas = require("./opensea_data.json");
const quotes = require("./quotes.json");

dotenv.config({ path: "./config.env" });

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function pizzaTweet() {
  let pizzaNumber = Math.floor(Math.random() * 10000);
  let pizza = pizzas[pizzaNumber];

  let quoteNumber = Math.floor(Math.random() * 1698);
  let quote = quotes[quoteNumber];

  let hashtags = Hashtag.hashtags();

  await Downloader.download(pizza.img_url).catch((err) => {
    console.log(err);
    return;
  });

  await new Promise((resolve, reject) => setTimeout(resolve, 5000));

  mediaId = await client.v1.uploadMedia("./OvenPizza.png").catch((err) => {
    console.log(err);
    return;
  });

  await client.v1
    .tweet(
      '"' +
        quote.content +
        '"\n ― ' +
        quote.author +
        "\n\n" +
        "Oven Pizza #" +
        pizza.id,
      {
        media_ids: mediaId,
      }
    )
    .then((val) => {
      client.v1
        .reply(hashtags + "\n" + pizza.opensea_url, val.id_str)
        .then((val) => client.v2.like(val.user.id_str, val.id_str));
      client.v2.like(val.user.id_str, val.id_str);
      console.log("Twitted successfully.");
    })
    .catch((err) => {
      console.log(err);
      return;
    });
}

let hour = 3600000;

pizzaTweet();

setInterval(() => {
  pizzaTweet();
}, 4 * hour);
