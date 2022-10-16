const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// function deleteDigit(/* n */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function deleteDigit(n) {
  if (n > 9 && n < 100) {
    return Math.max(String(n)[0], String(n)[1]);
  }

  function getNumber(number) {
    const newNumbers = [];
    const numbersString = String(number);

    for (let i = 0; i < numbersString.length; i++) {
      if (numbersString.slice(i + 1)) {
        newNumbers.push(numbersString.slice(0, i) + numbersString.slice(i + 1));
      }
    }
    return newNumbers;
  }
  return Math.max(...getNumber(n));
}

module.exports = {
  deleteDigit
};
