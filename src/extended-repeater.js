const { NotImplementedError } = require('../lib');

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
    const mainStr = String(str);

    const {
        repeatTimes = 1,
        separator = '+',
        addition,
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options || {};

    function repeatWithSeparator(string, sep, count) {
        if (count <= 0) return "";
        return Array(count).fill(string).join(sep);
    }

    let additionResult = "";
    if (addition !== undefined) {
        const additionStr = String(addition);
        additionResult = repeatWithSeparator(additionStr, additionSeparator, additionRepeatTimes);
    }

    const fullPattern = mainStr + additionResult;

    return repeatWithSeparator(fullPattern, separator, repeatTimes);
}


module.exports = {
	repeater
};
