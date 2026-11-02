const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = String(n).split('')
	let ind = numArr.length - 1
	for (let i = 0; i < numArr.length - 1; i++) {
		if (numArr[i] < numArr[i + 1]) {
			ind = i
			break
		}
	}

	numArr.splice(ind, 1)
	return Number(numArr.join(''))
}

module.exports = {
  deleteDigit
};
