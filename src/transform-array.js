const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
// function transform(/* arr */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  const oldArr = [...arr];
  const newArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < oldArr.length; i++) {
      switch (oldArr[i]) {
        case "--discard-next":
          if (i < oldArr.length) {
            newArr.push(undefined);
            i += 1;
          }
          break;
        case "--discard-prev":
          if (i > 0) {
            newArr.pop();
          }
          break;
        case "--double-next":
          if (i < oldArr.length - 1) {
            newArr.push(oldArr[i + 1]);
          }
          break;
        case "--double-prev":
          if (i > 0) {
            newArr.push(newArr[newArr.length - 1]);
          }
          break;
        default:
          newArr.push(oldArr[i]);
      }
    }
    return newArr.filter((item) => item !== undefined);

  }

}

module.exports = {
  transform
};
