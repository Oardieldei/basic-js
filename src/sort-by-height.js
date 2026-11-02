const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const nums = arr.filter(elem => elem !== -1)
	nums.sort((a,b) => a-b)

	let i = 0
	const result = arr.map(elem => {
		if (elem === -1) {
			return elem
		} else {
			return nums[i++]
		}
	})

	return result
}

module.exports = {
  sortByHeight
};
