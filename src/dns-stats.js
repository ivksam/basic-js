const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const obj = {};

  domains.forEach((e) => {
    const inv = e.split('.').reverse();

    while (inv.length > 0) {
      const word = `.${inv.join('.')}`;
      if (Object.keys(obj).includes(word)) {
        obj[word] += 1;
      } else {
        obj[word] = 1;
      }
      inv.pop();
    }
  });

  return obj;
}


module.exports = {
  getDNSStats
};
