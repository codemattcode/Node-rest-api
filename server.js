'use strict';

const express = require('express');
const app = express();
const bodyParser = require('bodyParser'); //req.body
const cors = require('cors'); //allow req from external api's/domains :8080

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const hostname = 'localhost';
const port = 5555;



server.listen(port,hostname, ()=>{
  console.log(`Its time to start running....at http://${hostname}:${port}`);
});
