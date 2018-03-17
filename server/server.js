let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const PORT = 3086;
let calcHistoryArray = [];
let totalCalculation;

app.use(bodyParser.urlencoded({extended:true})); // add body parser
app.use(express.static('server/public')); // add access to static file folder

app.get('/total', (req, res) => { // sends calcHistoryArray to client
  res.send(calcHistoryArray)
  
})

app.post('/total', (req, res) => { // receives user DOM inputs, call correct op. function to execute
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
  newCalc.total = totalCalculation; // adds a new 'total' property & value to our object
  calcHistoryArray.push(newCalc); // adds object/this current calculation to our calcHistoryArray
  console.log(calcHistoryArray);
  res.sendStatus(200); // sends a success code to client that it received the object
})

function addVals(x, y) { // adds user inputs
  totalCalculation = x + y;
}
function subtractVals(x, y) { // subtracts user inputs
  totalCalculation = x - y;
}
function multiplyVals(x, y) { // multiplies user inputs
  totalCalculation = x * y;
}
function divideVals(x, y) { // divides user inputs
  totalCalculation = x / y;
}

app.post('/reset', (req, res) => { // receives empty array from client, which clears our calcHistoryArray
  calcHistoryArray = [];
  res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})
