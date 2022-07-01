function hashtags() {
  let hashtagsPossibilities = [
    "#NFT",
    "#NFTs",
    "#NFTCommunity",
    "#NFTCollection",
    "#NFTCollector",
    "#NFTProject",
    "@opensea",
    "#NFTart",
    "#NFTartist",
    "#pizzaNFT",
    "#PolygonNFT",
    "#TheOvenPizzas",
    "#openseaNFT",
    "#PizzaParty",
    "#pizza",
    "#cheese",
    "#art",
    "$ETH",
    "$MATIC",
    "#PizzaLove",
    "#cryptoart",
    "#digitalart",
    "#NFTfamily",
    "#NFTshill",
    "#opensea",
  ];
  let firstHashtag =
    hashtagsPossibilities[
      Math.floor(Math.random() * hashtagsPossibilities.length)
    ];
  let secondHashtag =
    hashtagsPossibilities[
      Math.floor(Math.random() * hashtagsPossibilities.length)
    ];
  let thirdHashtag =
    hashtagsPossibilities[
      Math.floor(Math.random() * hashtagsPossibilities.length)
    ];

  while (firstHashtag === secondHashtag) {
    secondHashtag =
      hashtagsPossibilities[
        Math.floor(Math.random() * hashtagsPossibilities.length)
      ];
  }
  while (firstHashtag === thirdHashtag || secondHashtag === thirdHashtag) {
    thirdHashtag =
      hashtagsPossibilities[
        Math.floor(Math.random() * hashtagsPossibilities.length)
      ];
  }

  let hashtags = `${firstHashtag} ${secondHashtag} ${thirdHashtag}`;
  return hashtags;
}

module.exports.hashtags = hashtags;
