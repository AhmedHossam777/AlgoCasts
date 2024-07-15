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

// Solution 1
// const steps = (n) => {
//   let str = [];
//   str.length = n;

//   for (let i = 0; i < str.length; i++) {
//     str[i] = ' ';
//   }

//   for (let i = 0; i < n; i++) {
//     str[i] = '#';
//     console.log(str.join(''));
//   }
// };

// Solution 2
// const steps = (n) => {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// };
//
//

// Solution 3 -> recursion
const steps = (n, row = 0, stair = '') => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);
};

steps(10);

module.exports = steps;
