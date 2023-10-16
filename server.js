const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const logger = require("morgan");
var favicon = require("serve-favicon");

require("dotenv").config();
require('./config/database')

const PORT = 3400

const app = express();

//bodyParser middleware
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

//cors middleware
app.use(cors())

//morgan middleware
app.use(logger("dev")); 

app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.get('/', (req,res)=>{
  res.status(200).json({name: 'mark'})

} )



app.listen(PORT, () => {
console.log(`app listening on ${PORT}`);
});