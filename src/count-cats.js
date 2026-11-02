const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
	let result = 0
	matrix.forEach(elem => {
		elem.forEach(item => {
			if (item === '^^') result++
		})
	})
	return result
}

	module.exports = {
		countCats
	};
