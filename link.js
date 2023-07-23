/*var http = require('http');
var dt = require('./new')

http.createServer(function (req,res){
  res.writeHead(200,{'Content-Type': 'Text/html'});
  //res.write("The date and time is currently: " +dt.myDateTime());
  res.end();
  }).listen(80)*/

const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("new.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "Text/html" });
  res.end;
  fileContent;
});
/*server.listen( 80, ()=>{
    console.log("Listening the port 80")
  })*/
