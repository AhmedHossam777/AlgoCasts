// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// const maxChar = (str) => {
// 	const chars = {};
// 	let max = 0;
// 	let maxChar = '';
// 	for (let char of str) {
// 		if (!chars[char]) {
// 			chars[char] = 1;
// 		} else {
// 			chars[char]++;
// 		}
// 	}

// 	for (let charsKey in chars) {
// 		if (max < chars[charsKey]) {
// 			max = chars[charsKey];
// 			maxChar = charsKey;
// 		}
// 	}
// 	return maxChar;

// };

const maxChar = (str) => {
  const strArr = str.split('');
  const charMap = {};
  let max = '';
  let maxChar = '';

  for (let arrElement of strArr) {
    if (!charMap[arrElement]) {
      charMap[arrElement] = 1;
    } else {
      charMap[arrElement] += 1;
    }
  }

  for (const char in charMap) {
    if (max < charMap[char]) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(maxChar('abcccccccd'));

module.exports = maxChar;
