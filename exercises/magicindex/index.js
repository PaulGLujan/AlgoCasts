// --- Directions
// Given an ordered array of distinct integers
// find the value where the index matches the
// value at that index.
// --- Examples
// magicIndex([-4, 0, 1, 3, 33, 24])
//  3

function magicIndex(arr) {
  let lower = 0;
  let upper = arr.length - 1;
  let midI = 0;

  while (lower <= upper) {
    midI = Math.floor((upper - lower) / 2) + lower;
    if (arr[midI] === midI) {
      return midI;
    } else if (arr[midI] < midI) {
      lower = midI + 1;
    } else {
      upper = midI - 1;
    }
  }

  return null;
}

module.exports = magicIndex;
