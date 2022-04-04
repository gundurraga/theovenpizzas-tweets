const axios = require("axios");

async function collectionStats() {
  const url = "https://api.opensea.io/api/v1/collection/theovenpizzas";
  let response = await axios.get(url);
  return response.data.collection.stats;
}

module.exports.collectionStats = collectionStats;
