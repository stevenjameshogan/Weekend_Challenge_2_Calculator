let addVals = require('./modules/addValues.js')
let subVals = require('./modules/subtractValues.js')
let multVals = require('./modules/multiplyValues.js')
let divVals = require('./modules/divideValues.js')

let newCalc = req.body; // req.body is our 'calcInputs' object from client
  let val1 = parseInt(newCalc.value1);
  let val2 = parseInt(newCalc.value2);
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