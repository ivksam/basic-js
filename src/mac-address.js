const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arr = n.split('-');
  let isMac = true;
  if (arr.length === 6) {
    arr.forEach((num) => {
      if (isMac && num.length === 2) {
        if (num.match(/[\d]{2}|[A-F]{2}|\d[A-F]|[A-F]\d/)) {
          isMac = true;
        } else {
          isMac = false;
        }
      } else {
        isMac = false;
      }
      return isMac;
    });
  } else {
    return false;
  }
  return isMac;
}


module.exports = {
  isMAC48Address
};
