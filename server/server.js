let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const PORT = 3086;
let calcHistory = [];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.post('/total', (req, res) => {
  console.log(req.body);
  let newCalc = req.body;
  res.sendStatus(200);
})









app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })
