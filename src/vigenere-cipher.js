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
  direction
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  table = []
  constructor(direction = true) {
     this.direction = direction
   }
  createTable() {

     for (let i = 0; i < this.alphabet.length; i++) {
     let row = this.alphabet.slice(i)
     row += this.alphabet.slice(0,i)
     this.table.push(row)
    }
  }
  encrypt(message,key) {

    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!')
    }
    let answer = ''
    let newKey = ''
    let k = 0
    for (let i = 0; i < message.length; i++) {
       if (k > key.length -1) {
        k = 0
      }
       if (this.alphabet.indexOf(message[i].toUpperCase()) != -1) {
          newKey += key[k++]
       } else { newKey += ' '
     }
    }
    this.createTable()
    for (let i = 0; i < message.length; i++) {
       if (this.alphabet.indexOf(message[i].toUpperCase())!=-1) {
          let column = this.alphabet.indexOf(message[i].toUpperCase())
          let row = this.alphabet.indexOf(newKey[i].toUpperCase())
          answer += this.table[column][row]
       } else {
        answer += message[i]
      }
    }
    if (this.direction) {
       return answer
    } else {
      return answer.split('').reverse().join('')
    }
  }

  decrypt(message,key) {

    if (message == undefined || key == undefined) {
      throw new Error('Incorrect arguments!')
    }
    let answer = ''
    let newKey = ''
    let k = 0
    for (let i = 0; i < message.length; i++) {
       if (k > key.length-1) {
        k = 0
      }
       if (this.alphabet.indexOf(message[i].toUpperCase())!=-1) {
          newKey += key[k++]
       } else {
        newKey += message[i]
      }
    }
    this.createTable()
    for (let i = 0; i < message.length; i++){
       if (this.alphabet.indexOf(newKey[i].toUpperCase()) !=-1 ) {
          let column = this.alphabet.indexOf(newKey[i].toUpperCase())
          let row = this.table[column].indexOf(message[i].toUpperCase())
          answer += this.alphabet[row]
       } else {
        answer += newKey[i]
      }
    }
     if (this.direction) {
       return answer
     } else {
      return answer.split('').reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
