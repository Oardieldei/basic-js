const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str)
	let result = ''
	let mainRepeat = options.repeatTimes ? options.repeatTimes : 1
	let mainSep = options.separator ? options.separator : '+'
	let addItem = options.addition || options.addition === false || options.addition === null ? String(options.addition) : ''
	let addRepeat = options.additionRepeatTimes ? options.additionRepeatTimes : 1
	let addSep = options.additionSeparator ? options.additionSeparator : '|'
	for (let i = 0; i < mainRepeat; i++) {
		result += str

		for (let k = 0; k < addRepeat; k++) {
			result += addItem

			if (k < addRepeat - 1) {
				result += addSep
			}
		}

		if (i < mainRepeat - 1) {
			result += mainSep
		}
	}

	return result
}
module.exports = {
	repeater
};
