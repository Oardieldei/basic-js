const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!")
	}

	const transformedArr = [...arr]
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--double-next':
				if (i < arr.length - 1) {
					transformedArr[i] = transformedArr[i + 1]
				} else {
					transformedArr[i] = null
				}
				break;
			case '--double-prev':
				if (i !== 0) {
					transformedArr[i] = transformedArr[i - 1]
				} else {
					transformedArr[i] = null
				}
				break;
			case '--discard-prev':
				transformedArr[i] = null
				if (i !== 0) transformedArr[i - 1] = null
				break;
			case '--discard-next':
				transformedArr[i] = null
				if (i < arr.length - 1) transformedArr[i + 1] = null
				break;
			default:
				break;
		}
	}

	return transformedArr.filter(item => item !== null)
}

module.exports = {
	transform
};
