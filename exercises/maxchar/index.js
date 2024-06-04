// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
	const chars = {};
	let max = 0;
	let maxChar = '';
	for (let char of str) {
		if (!chars[char]) {
			chars[char] = 1;
		} else {
			chars[char]++;
		}
	}

	for (let charsKey in chars) {
		if (max < chars[charsKey]) {
			max = chars[charsKey];
			maxChar = charsKey;
		}
	}
	return maxChar;

};

module.exports = maxChar;