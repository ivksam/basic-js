const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let encodedStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < str.length;) {
      if (str[i] === str[k]) {
        count += 1;
        k++;
      } else {
        encodedStr += count > 1 ? `${count}${str[i]}` : str[i];
        i = k;
        count = 0;
      }
    }
    encodedStr += count > 1 ? `${count}${str[i]}` : str[i];
    count = 0;
    break;
  }
  return encodedStr;
}

module.exports = {
  encodeLine
};
