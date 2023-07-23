var http = require('http');
var dt = require('./myFirstmodule')

http.createServer(function (req,res){
  res.writeHead(200,{'Content-Type': 'Text/html'});
  res.write("The date and time is currently: " +dt.myDateTime());
  res.end();
  }).listen(80)
  