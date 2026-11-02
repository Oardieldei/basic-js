const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
	const s1arr = s1.split('')
	const s2arr = s2.split('')
	const s1obj = {}
	const s2obj = {}

	s1arr.forEach(letter => {
		if (s1obj[letter]) { s1obj[letter]++ }
		else { s1obj[letter] = 1 }
	})

	s2arr.forEach(letter => {
		if (s2obj[letter]) { s2obj[letter]++ }
		else { s2obj[letter] = 1 }
	})

	let result = 0

	Object.keys(s1obj).forEach(key => {
		if (s2obj[key]) result += Math.min(s1obj[key], s2obj[key])
	})

	return result
}

module.exports = {
	getCommonCharacterCount
};
