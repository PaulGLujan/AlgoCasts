// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/**************************************************
 * Sort the strings. Check that they are the same.
 **************************************************/
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

module.exports = anagrams;

// const mapCharCount = (str) => {
//   return str
//     .replace(/[^\w]/g, "")
//     .toLowerCase()
//     .split("")
//     .reduce((map, char) => {
//       if (map[char] > 0) {
//         map[char] += 1;
//       } else {
//         map[char] = 1;
//       }
//       return map;
//     }, {});
// };

/**************************************************
 * Map out each character count. Check if the maps
 * have the same amount of keys. Check that each
 * character has the same count.
 **************************************************/
// const isMapSame = (mapA, mapB) => {
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) {
//     return false;
//   }

//   for (const char in mapA) {
//     if (mapA[char] !== mapB[char]) {
//       return false;
//     }
//   }

//   return true;
// };

// function anagrams(stringA, stringB) {
//   const mapA = mapCharCount(stringA);
//   const mapB = mapCharCount(stringB);
//   return isMapSame(mapA, mapB);
// }
