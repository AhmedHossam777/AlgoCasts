// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase();
//   const sortedString = (str) => cleanString(str).split('').sort().join('');
//
//   const sortedA = sortedString(stringA);
//   const sortedB = sortedString(stringB);
//
//   return sortedA === sortedB;
// }



const anagrams = (stringA, stringB) => {
  let arrA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  let arrB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  
  return arrA === arrB
}

console.log(anagrams('hello', 'llohe'))
module.exports = anagrams;