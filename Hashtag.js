function hashtags() {
  let hashtagsPossibilities = [
    "#NFT",
    "#NFTs",
    "#NFTCommunity",
    "#NFTCollection",
    "@opensea",
    "#NFTart",
    "#NFTartist",
    "#NFTpizza",
    "#PolygonNFT",
    "#TheOvenPizzas",
    "#OpenSeaNFT",
    "#PizzaParty",
    "#Pizza",
    "#Cheese",
    "#Art",
    "$ETH",
    "#ToTheMoon",
    "#PizzaLove",
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
