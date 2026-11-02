const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr) {
		let maxDepth = 1
		if (arr instanceof Array) {
			for (const element of arr) {
				if (element instanceof Array) {
					const currentDepth = this.calculateDepth(element) + 1
					if (currentDepth > maxDepth) {
						maxDepth = currentDepth
					}
				}
			}
		}
		return maxDepth
	}
}

module.exports = {
	depthCalculator: new DepthCalculator(),
};
