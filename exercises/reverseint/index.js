// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const isNegative = Math.sign(n) === -1;
//   const positiveInt = Math.abs(n);
//   const absNum = Number(positiveInt.toString().split("").reverse().join(""));
//   if (isNegative) {
//     return -absNum;
//   }
//   return absNum;
// }
