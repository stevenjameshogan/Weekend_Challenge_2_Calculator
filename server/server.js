let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const PORT = 3086;
let calcHistoryArray = [];
let totalCalculation;

app.use(bodyParser.urlencoded({extended:true})); // add body parser
app.use(express.static('server/public')); // add access to static file folder

app.get('/total', (req, res) => {
  res.send(calcHistoryArray)
  
})

app.post('/total', (req, res) => { // receive user DOM inputs, call correct op. function
  let newCalc = req.body;
  let val1 = parseInt(newCalc.value1);
  let val2 = parseInt(newCalc.value2);
  switch(newCalc.calcType) {
    case 'add':
      addVals(val1, val2);
    break;
    case 'subtract':
      subtractVals(val1, val2);
    break;
    case 'multiply':
      multiplyVals(val1, val2);
    break;
    case 'divide':
      divideVals(val1, val2);
    break;
  }
  newCalc.total = totalCalculation;
  calcHistoryArray.push(newCalc);
  console.log(calcHistoryArray);
  res.sendStatus(200);
})

function addVals(x, y) {
  totalCalculation = x + y;
}
function subtractVals(x, y) {
  totalCalculation = x - y;
}
function multiplyVals(x, y) {
  totalCalculation = x * y;
}
function divideVals(x, y) {
  totalCalculation = x / y;
}

app.post('/reset', (req, res) => {
  calcHistoryArray = [];
  res.sendStatus(200);
})


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})
