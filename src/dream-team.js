const { NotImplementedError } = require('../extensions/index.js');

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
	if (!Array.isArray(members) || !members[0]) return false
	let isFail = true
	let nameArr = []
	members.forEach((item) => {
		if (typeof item === 'string') {
			isFail = false
			nameArr.push(item)
		}
	})
	if (isFail) return false

	let firstLettersArr = nameArr.map(item => {
		let i = 0
		while (item[i]) {
			if (item[i] !== ' ') {
				return item[i]
			} else {
				i++
			}
		}
	})

	function mySort(a, b) {
		if (a < b) return -1
		if (a > b) return 1
		return 0
	}

	let bigLetters = firstLettersArr.map(item => item.toUpperCase())

	bigLetters.sort(mySort)

	return bigLetters.join('')
}

module.exports = {
	createDreamTeam
};
