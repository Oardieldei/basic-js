const { NotImplementedError } = require('../extensions/index.js');

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
	let arr = str.split('')
	let result = ''
	let counter = 1

	arr.forEach((item, index, array) => {
		if (array[index + 1]) {
			if (item === array[index + 1]) {
				counter++
			} else {
				if (counter !== 1) result += String(counter)				
				result += item
				counter = 1
			}
		} else {
			if (item === array[index - 1]) {
				if (counter !== 1) result += String(counter)
				result += item
			} else {
				result += item
			}
		}
	})
	return result
}

module.exports = {
	encodeLine
};
