const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
	if (typeof n !== 'string') return false
	if (n.length !== 17) return false
	const arr = n.split('-')
	if (arr.length !== 6) return false
	const goodArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length !== 2) return false
		if (!(goodArr.includes(arr[i][0]) && goodArr.includes(arr[i][1]))) return false
	}

	return true
}

module.exports = {
  isMAC48Address
};
