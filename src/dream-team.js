const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	if (!Array.isArray(members)) return false
	let isCorrect = false
	let result = ''

	members.forEach(item => {
		if (typeof item === "string" && item.trim() !== '') {
			isCorrect = true
			result += item.trim()[0]
		}
	})
	result = result.toUpperCase()
	result = result.split('').sort().join('')

	if (isCorrect) return result
	return isCorrect
}

module.exports = {
	createDreamTeam
};
