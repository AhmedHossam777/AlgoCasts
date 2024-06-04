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

function steps(n) {
  let lineNum = 0;
  for (let i = 0; i <= n; i++) {
    lineNum++;
    for (let j = 1; j <= lineNum; j++) {
      console.log('#' * j);
    }
  }
}

steps(5)
module.exports = steps;
