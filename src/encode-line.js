const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
	const strArr = str.split('')
	let curInd = 0
	const resArr = []

	strArr.forEach((letter, index) => {
		if (!resArr[curInd]) {
			resArr[curInd] = 1
			resArr[curInd + 1] = letter
		} else {
			if (resArr[curInd + 1] == letter) {
				resArr[curInd]++
			} else {
				curInd += 2
				resArr[curInd] = 1
				resArr[curInd + 1] = letter
			}
		}
	})

	const result = resArr.filter(item => item !== 1).join('')
	return result
}

module.exports = {
	encodeLine
};
