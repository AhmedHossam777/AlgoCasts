// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	const strArr = str.toLowerCase().split('')
	let numberOfVowels = 0

	for (let char of strArr) {
		for (let i=0; i < vowels.length; i++) {
			if (char === vowels[i]) {
				numberOfVowels += 1;
			}
		}
	}

	return numberOfVowels;
}

console.log(vowels('Why do you ask?'));

module.exports = vowels;
