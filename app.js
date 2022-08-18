const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');
const cors = require('cors')


// create our express app
const app = express();
app.use(cors());

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./routes/route')
app.use('/', routes)

//start server
app.listen(4000, ()=>{
    console.log("listeniing at port:4000")
}) 