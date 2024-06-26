// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


const capitalize = (str) =>{
  let arr = str.split(' ')
  for ( let i = 0; i < arr.length; i++) {
    let char = arr[i].split('')
    char[0]=char[0].toUpperCase()
    
    arr[i] = char.join('')
  }
  
  return arr.join(' ')
  
}

console.log(capitalize('ahmed hosssam, i am a backend engineer'));
module.exports = capitalize;