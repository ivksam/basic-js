const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  const objOptions = {
    repeatTimes : 1,
    separator: '+',
    addition: '',
    additionRepeatTimes: 1,
    additionSeparator: '|'
  };

  if(options.addition === false) {
    options.addition = 'false';
  } else if (options.addition === null) {
    options.addition = 'null';
  }

  const newArr = createArray(str,
  options.repeatTimes || objOptions.repeatTimes);
  const newAddArr = createArray(options.addition || objOptions.addition, options.additionRepeatTimes || objOptions.additionRepeatTimes);

  let newAddStr = newAddArr.join(options.additionSeparator || objOptions.additionSeparator);

  function createArray(str, repeatTimes) {
    const arr = [];
    for (let i = 0; i < repeatTimes; i++) {
      arr.push(str);
    }
    return arr;
  }
  return newArr.map(i => i + newAddStr).join(options.separator || objOptions.separator);
}

module.exports = {
  repeater
};
