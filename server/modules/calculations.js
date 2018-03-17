let addVals = require('./modules/addValues.js')
let subtractVals = require('./modules/subtractValues.js')
let multiplyVals = require('./modules/multiplyValues.js')
let divideVals = require('./modules/divideValues.js')
// let percentVals = require('./modules/percentValues.js')


switch(newCalc.calcType) { // routes to proper operation based on 'calcType'
    case '+':
      addVals(val1, val2);
    break;
    case '-':
      subtractVals(val1, val2);
    break;
    case '*':
      multiplyVals(val1, val2);
    break;
    case '/':
      divideVals(val1, val2);
    break;
  }

  module.exports = totalCalculation;