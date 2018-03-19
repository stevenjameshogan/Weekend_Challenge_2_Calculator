let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let totalCalculation = require('./modules/calculations.js')
const PORT = process.env.PORT || 3086;
let calcHistoryArray = [];

app.use(bodyParser.urlencoded({extended:true})); // add body parser
app.use(express.static('server/public')); // add access to static file folder

app.get('/total', (req, res) => { // sends calcHistoryArray to client
  res.send(calcHistoryArray)
})

app.post('/total', (req, res) => { // receives user DOM inputs, call correct op. function to execute
  let newCalc = req.body; // req.body is our 'calcInputs' object from client
  let val1 = parseInt(newCalc.value1);
  let val2 = parseInt(newCalc.value2);
  newCalc.total = totalCalculation; // adds a new 'total' property & value to our object
  calcHistoryArray.push(newCalc); // adds object/this current calculation to our calcHistoryArray
  res.sendStatus(200); // sends a success code to client that it received the object
})

app.post('/reset', (req, res) => { // receives empty array from client, which clears our calcHistoryArray
  calcHistoryArray = [];
  res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
})
