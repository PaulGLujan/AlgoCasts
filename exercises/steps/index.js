// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1, (stair = ""));
  }

  if (stair.length <= row) {
    return steps(n, row, stair + "#");
  } else {
    return steps(n, row, stair + " ");
  }
}

module.exports = steps;

// function steps(n, curr = 1) {
//   if (curr === n) {
//     console.log("#".repeat(n));
//   } else {
//     console.log("#".repeat(curr) + " ".repeat(n - curr));
//     steps(n, curr + 1);
//   }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     while (row.length < i) {
//       row += "#";
//     }
//     while (row.length < n) {
//       row += " ";
//     }
//     console.log(row);
//   }
// }
