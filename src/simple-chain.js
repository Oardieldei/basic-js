const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length
	},
	addLink(value = '') {
		this.chain.push(value)
		return this
	},
	removeLink(position) {
		if (!Number.isInteger(position)) {
			this.chain.length = 0
			throw new Error("You can't remove incorrect link!")
		}
		if (position < 1 || position > this.chain.length) {
			this.chain.length = 0
			throw new Error("You can't remove incorrect link!")
		}
		this.chain.splice(position - 1, 1)
		return this
	},
	reverseChain() {
		this.chain.reverse()
		return this
	},
	finishChain() {
		this.chain.forEach((elem, index) => {
			this.chain[index] = `( ${elem} )`
		})

		const result = this.chain.join('~~')
		this.chain.length = 0
		return result
	},
};

module.exports = {
	chainMaker,
};
