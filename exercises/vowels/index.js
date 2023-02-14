// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str, i = 0, count = 0) {
//   const vowelList = ["a", "e", "i", "o", "u"];

//   if (i === str.length) {
//     return count;
//   }

//   if (vowelList.includes(str.toLowerCase()[i])) {
//     return vowels(str, i + 1, count + 1);
//   } else {
//     return vowels(str, i + 1, count);
//   }
// }

// function vowels(str) {
//   const vowelList = ["a", "e", "i", "o", "u"];
//   return str
//     .toLowerCase()
//     .split("")
//     .reduce((count, char) => {
//       if (vowelList.includes(char)) {
//         return count + 1;
//       }
//       return count;
//     }, 0);
// }

// function vowels(str) {
//   let counter = 0;
//   const vowelList = ["a", "e", "i", "o", "u"];

//   for (char of str.toLowerCase()) {
//     if (vowelList.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }
