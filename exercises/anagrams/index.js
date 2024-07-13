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

//   const sortedA = sortedString(stringA);
//   const sortedB = sortedString(stringB);

//   return sortedA === sortedB;
// }

const anagrams = (strA, strB) => {
  const cleanString = (str) => str.replace(/[^\w]/g, '').toLowerCase();
  const sortedStr = (str) => cleanString(str).split('').sort().join('');

  const sortedA = sortedStr(strA);
  const sortedB = sortedStr(strB);

  return sortedA === sortedB;
};

module.exports = anagrams;
