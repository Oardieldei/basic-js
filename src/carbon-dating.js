const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (sampleActivity === +sampleActivity || typeof sampleActivity === 'object') return false
	const actNum = parseFloat(sampleActivity)
	if (!actNum || actNum <= 0 || actNum >= MODERN_ACTIVITY) return false

	const age = Math.ceil((Math.log(MODERN_ACTIVITY / actNum) * HALF_LIFE_PERIOD) / 0.693)
	return age
}

module.exports = {
	dateSample
};
