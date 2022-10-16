const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
// function getMatrixElementsSum(/* matrix */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i=0;i<matrix[0].length;i++) {
    for (let k=0;k<matrix.length;k++) {
      if (matrix[k][i] > 0) {
        sum += matrix[k][i];
      } else {
        break
      }
    }
  }
  return sum
}

module.exports = {
  getMatrixElementsSum
};
