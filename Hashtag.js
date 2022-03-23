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
  ];
  let firstHashtag =
    hashtagsPossibilities[
      Math.floor(Math.random() * hashtagsPossibilities.length)
    ];
  let secondHashtag =
    hashtagsPossibilities[
      Math.floor(Math.random() * hashtagsPossibilities.length)
    ];

  while (firstHashtag === secondHashtag) {
    secondHashtag =
      hashtagsPossibilities[
        Math.floor(Math.random() * hashtagsPossibilities.length)
      ];
  }

  let hashtags = `${firstHashtag} ${secondHashtag}`;
  return hashtags;
}

module.exports.hashtags = hashtags;
