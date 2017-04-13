'use strict';

const express = require('express');
const app = express();
const bodyParser = require('bodyParser'); //req.body
const cors = require('cors'); //allow req from external api's :8080

const hostname = 'localhost';
const port = 5555;



server.listen(port,hostname, ()=>{
  console.log(`Its time to start running....at http://${hostname}:${port}`);
});
