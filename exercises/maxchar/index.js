// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = [...str].reduce((charMap, char) => {
    charMap[char] = charMap + 1 || 1;
    return charMap;
  }, {});

  let highestChar = "";
  for (const char in charMap) {
    if (!highestChar) {
      highestChar = char;
    } else if (charMap[highestChar] < charMap[char]) {
      highestChar = char;
    }
  }

  return highestChar;
}

module.exports = maxChar;
