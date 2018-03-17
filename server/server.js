let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const PORT = 3086;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));












app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })
