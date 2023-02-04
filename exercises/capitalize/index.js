// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**************************************************
 * Loop throught string and capitalize if previous
 * letter is a ' '.
 **************************************************/
function capitalize(str) {
  return [...str].reduce((capitalized, char, i) => {
    if (str[i - 1] === " " || i === 0) {
      capitalized += char.toUpperCase();
    } else {
      capitalized += char;
    }
    return capitalized;
  }, "");
}

module.exports = capitalize;

/**************************************************
 * Split the array into words. Capitalize first
 * letter of word.
 **************************************************/
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// }
