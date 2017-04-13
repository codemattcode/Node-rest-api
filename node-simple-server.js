var http = require('http');

var hostname = '127.0.0.1';
var port = '8080';

var server = http.createServer(function(req,res){
  res.end("Hello from the server");
})

server.listen(port, hostname, function(){
  console.log('Its time to start running...!')
})
