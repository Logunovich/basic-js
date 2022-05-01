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
function repeater(str, options) {
    const strTemp = str
    const adArr = []
    const resultArr = []
    if(options.hasOwnProperty('addition')){
        if(options.hasOwnProperty('additionRepeatTimes')){
            for(let i = 0; i < options.additionRepeatTimes; i++){
              adArr.push(String(options.adArr))
            }
        }else{
          adArr.push(String(options.adArr))
        }
    }
    if(options.hasOwnProperty('additionSeparator')){
      adArr = adArr.join(options.additionSeparator)
    }else{
      adArr = adArr.join('|')
    }
    strTemp += adArr
    if(!options.hasOwnProperty('repeatTimes')){
      resultArr.push(strTemp)
    }else{
      for(let i = 0; i < options.repeatTimes; i++){
        resultArr.push(strTemp)
      }
    }
    
    if(options.hasOwnProperty('separator')){
        return resultArr.join(options.separator)
    }
    return resultArr.join('+')
}

module.exports = {
  repeater
};
