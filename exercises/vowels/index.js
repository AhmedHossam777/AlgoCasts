// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowels = (str) => {
  const matches = str.toLowerCase().match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

module.exports = vowels;

// function vowels(str) {
//   let numberOfVowels = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let arr = str.toLowerCase().split('');
//
//   for (let arrElement of arr) {
//     if (vowels.includes(arrElement)) numberOfVowels++;
//   }
//
//   return numberOfVowels;
// }