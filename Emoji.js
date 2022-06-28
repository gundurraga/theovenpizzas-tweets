function emojis() {
  let emojisPossibilities = [
    "🍕",
    "🚀",
    "🤘",
    "👀",
    "😁",
    "🐷",
    "👽",
    "🛸",
    "😼",
    "👻",
    "🤖",
    "😸",
    "😺",
    "🙀",
    "👏",
    "🫰",
    "👌",
    "🫵",
    "🤌",
    "🫂",
    "👑",
    "🐸",
    "🐻",
    "🐒",
    "🌝",
    "🌞",
    "🧀",
    "🍆",
    "🌶️",
    "🍅",
    "🫒",
    "🥦",
    "🧄",
    "🧅",
    "🌽",
    "🍽️",
  ];

  let firstEmoji =
    emojisPossibilities[Math.floor(Math.random() * emojisPossibilities.length)];
  let secondEmoji =
    emojisPossibilities[Math.floor(Math.random() * emojisPossibilities.length)];
  let thirdEmoji =
    emojisPossibilities[Math.floor(Math.random() * emojisPossibilities.length)];

  while (firstEmoji === secondEmoji) {
    secondEmoji =
      emojiPossibilities[
        Math.floor(Math.random() * emojisPossibilities.length)
      ];
  }
  while (firstEmoji === thirdEmoji || secondEmoji === thirdEmoji) {
    thirdEmoji =
      emojisPossibilities[
        Math.floor(Math.random() * emojisPossibilities.length)
      ];
  }

  let emojis = `${firstEmoji} ${secondEmoji} ${thirdEmoji}`;
  return emojis;
}

module.exports.emojis = emojis;
