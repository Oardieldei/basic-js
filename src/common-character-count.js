const { NotImplementedError } = require('../extensions/index.js');

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
  let arr1 = s1.split('')
  let arr2 = s2.split('')

	function mySort(a, b) {
		if (a < b) return -1
		if (a > b) return 1
		return 0
	}

	arr1.sort(mySort)
	arr2.sort(mySort)

	let maxVal = arr1.length > arr2.length ? arr2.length : arr1.length

	for (let i = 0; i < maxVal; i++) {
		if (arr1[i] !== arr2[i]) {
			arr1[i] < arr2[i] ? arr1.splice(i, 1) : arr2.splice(i, 1)
			i--
		}
	}

	return arr1.length > arr2.length ? arr2.length : arr1.length
}

module.exports = {
  getCommonCharacterCount
};
