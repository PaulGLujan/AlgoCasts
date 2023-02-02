// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = [...str].reduce((charMap, char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
    return charMap;
  }, {});

  let max = 0;
  let maxChar = "";

  for (const char in charMap) {
    if (charMap[char] > max) {
      maxChar = char;
      max = charMap[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;
