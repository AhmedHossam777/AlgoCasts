// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((acc, char) => {
    return char + acc;
  }, '');
}
console.log(reverse('apple'));

module.exports = reverse;

//? first solution
// function reverse(str) {
// 	let arr = str.split('')
// 	let min = 0
// 	let max = arr.length -1

// 	while (min < max) {
// 		let temp = arr[min];
// 		arr[min] = arr[max];
// 		arr[max] = temp;
// 		min ++;
// 		max --;
// 	}
// 	return arr.join('')

// }

// console.log(reverse('apple')); // elppa

//? second solution
// function reverse(str) {
// 	return str.split('').reverse().join('');
// }

// console.log(reverse('apple')); // elppa

//? Third solution
// function reverse(str) {
// 	let reversed = '';
// 	for (const char of str) {
// 		reversed = char + reversed;
// 	}
// 	return reversed;
// }

// console.log(reverse('apple')); // elppa