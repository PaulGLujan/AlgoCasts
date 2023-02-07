// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/**************************************************
 * Put a cursor at the start of the array. Slice a
 * chunk out of the array. Push it into array. Move
 * the cursor forward to the next chunk. Repeat
 * until you've moved through the whole array.
 **************************************************/
function chunk(array, size) {
  const chunksArr = [];

  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunksArr.push(chunk);
    index += size;
  }

  return chunksArr;
}

module.exports = chunk;

/**************************************************
 * Select the last chunk in the main array. If
 * there is not a last chunk in the array or if the
 * last chunk is full add a chunk; push a new chunk
 * into the array with the current character.
 * Otherwise push the current character into the
 * chunk.
 **************************************************/
// function chunk(array, size) {
//   const outputArr = [];

//   for (const num of array) {
//     const lastChunk = outputArr[outputArr.length - 1];
//     if (!lastChunk || lastChunk.length === size) {
//       outputArr.push([num]);
//     } else {
//       lastChunk.push(num);
//     }
//   }

//   return outputArr;
// }
