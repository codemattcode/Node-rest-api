const http = require('http');

const hostname = 'localhost';
const port = 5555;

const server = http.createServer((req,res) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello from the server!\n Its good to be up and running...');
})
