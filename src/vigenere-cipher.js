const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabetBig = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const alphabetSmall = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const createNeededSize = function (str, key) {
	if (key.length === 0) return key
	let goodStrArr = str
	if (!(goodStrArr instanceof Array)) {
		const strArr = createArrFromStr(str)
		goodStrArr = strArr.filter(elem => getRightAlphabet(elem))
	}

	if (goodStrArr.length > key.length) {
		key += key
		return createNeededSize(goodStrArr, key)
	}

	key = createArrFromStr(key)
	key.length = goodStrArr.length
	key = key.join('')
	return key
}

const createArrFromStr = function (str) {
	return str.split('')
}

const getRightAlphabet = function (letter) {
	if (alphabetBig.includes(letter)) {
		return alphabetBig
	}

	if (alphabetSmall.includes(letter)) {
		return alphabetSmall
	}

	return false
}

const getNewLetter = function (letter, keyLetter, type = true) {
	if (!getRightAlphabet(letter)) return letter

	const letterIndex = getRightAlphabet(letter).indexOf(letter)
	const keyIndex = getRightAlphabet(keyLetter).indexOf(keyLetter)

	let newIndex = type ? letterIndex + keyIndex : letterIndex - keyIndex
	if (newIndex >= alphabetBig.length) newIndex -= alphabetBig.length
	if (newIndex < 0) newIndex += alphabetBig.length

	return getRightAlphabet(letter)[newIndex]
}

class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect
	}

	encrypt(str, key) {
		if (typeof str !== 'string') throw new Error('Incorrect arguments!')
		if (typeof key !== 'string') throw new Error('Incorrect arguments!')

		const strArr = createArrFromStr(str)
		const newKey = createNeededSize(str, key)
		const keyArr = createArrFromStr(newKey)
		let keyIndex = 0

		const resultArr = strArr.map((elem) => {
			if (getRightAlphabet(elem)) keyIndex++
			return getNewLetter(elem, keyArr[keyIndex - 1], true)
		})

		if (!this.isDirect) resultArr.reverse()
		return resultArr.join('').toUpperCase()
	}

	decrypt(str, key) {
		if (typeof str !== 'string') throw new Error('Incorrect arguments!')
		if (typeof key !== 'string') throw new Error('Incorrect arguments!')

		const strArr = createArrFromStr(str)
		const newKey = createNeededSize(str, key)
		const keyArr = createArrFromStr(newKey)
		let keyIndex = 0

		const resultArr = strArr.map((elem) => {
			if (getRightAlphabet(elem)) keyIndex++
			return getNewLetter(elem, keyArr[keyIndex - 1], false)
		})

		if (!this.isDirect) resultArr.reverse()
		return resultArr.join('').toUpperCase()
	}
}

module.exports = {
	directMachine: new VigenereCipheringMachine(),
	reverseMachine: new VigenereCipheringMachine(false),
	VigenereCipheringMachine,
};
