// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return arr.join(' ');
};

console.log(capitalize('ahmed hossam, i am a backend engineer'));
module.exports = capitalize;
