// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let arr = [];

  for (let i = 0; i < n * 2 - 1; i++) {
    arr[i] = ' ';
  }

  let mid = Math.floor(arr.length / 2);

  for (let row = 0; row < n; row++) {
    arr[mid] = '#';
    arr[mid + row] = '#';
    arr[mid - row] = '#';
    console.log(arr.join(''));
  }
}

module.exports = pyramid;
