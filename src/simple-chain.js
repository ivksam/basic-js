const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

const chainMaker = {
  ch : '',

  getLength() {
    return this.ch.split('~~').length;
  },
  addLink(value) {
    if (this.ch.length) {
      this.ch = this.ch + `~~( ${value} )`;
      return this;
    } else {
      this.ch = this.ch + `( ${value} )`;
      return this;
    }
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position <= 0) || position > this.getLength()) {
      this.ch = '';
      throw new Error("You can't remove incorrect link!");
    }
    this.ch = this.ch.split('~~').filter((item, index) => {
      if (index !== (position - 1)) return item;
    }).join('~~');
    return this;
  },
  reverseChain() {
    this.ch = this.ch.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let finishCh = this.ch;
    this.ch = '';
    return finishCh;
  }
}

module.exports = {
  chainMaker
};
