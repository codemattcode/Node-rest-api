const http = require('http');

const hostname = 'localhost';
const port = 5555;

const server = http.createServer((req,res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello from the server!<br>Its great to be with <b>you</b>');
});

server.listen(port,hostname, ()=>{
  console.log(`Its time to start running....at http://${hostname}:${port}`);
});
