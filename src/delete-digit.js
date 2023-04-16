const { NotImplementedError, CONSTANTS } = require('../extensions/index.js');

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
	const arr = n.toString().split('').map(item => +item)
	const arrNew = [...arr]
	let minNum
	let isFind = false
	arrNew.forEach((item, index, array) => {
		if (array[index + 1] && !isFind) {
			if (item < array[index + 1]) {
				minNum = item
				isFind = true
			}
		}
	})
	arr.splice(arr.indexOf(minNum), 1)
		
	return +arr.join('')
}

module.exports = {
  deleteDigit
};
