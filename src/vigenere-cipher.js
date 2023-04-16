const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    const messageUpperCase = message.toUpperCase()
    const keyUpperCase = key.toUpperCase()
    let result = ''
    let keyIndex = 0

    for (let i = 0; i < messageUpperCase.length; i++) {
      const messageCharCode = messageUpperCase.charCodeAt(i)

      if (messageCharCode >= 65 && messageCharCode <= 90) {
        const keyCharCode = keyUpperCase.charCodeAt(keyIndex % keyUpperCase.length)
        const encryptedCharCode = ((messageCharCode + keyCharCode - 130) % 26) + 65
        result += String.fromCharCode(encryptedCharCode)
        keyIndex++
      } else {
        result += messageUpperCase[i]
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('')
    }

    return result
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    const messageUpperCase = message.toUpperCase()
    const keyUpperCase = key.toUpperCase()
    let result = ''
    let keyIndex = 0

    for (let i = 0; i < messageUpperCase.length; i++) {
      const messageCharCode = messageUpperCase.charCodeAt(i)

      if (messageCharCode >= 65 && messageCharCode <= 90) {
        const keyCharCode = keyUpperCase.charCodeAt(keyIndex % keyUpperCase.length)
        const decryptedCharCode = ((messageCharCode - keyCharCode + 26) % 26) + 65
        result += String.fromCharCode(decryptedCharCode)
        keyIndex++
      } else {
        result += messageUpperCase[i]
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('')
    }

    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
