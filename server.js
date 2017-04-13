'use strict';

const http = require('http');

const hostname = 'localhost';
const port = 5555;

const server = http.createServer((req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(`The server is running : http://${hostname}:${port}`);
});

server.listen(port,hostname, ()=>{
  console.log(`Its time to start running....at http://${hostname}:${port}`);
});
