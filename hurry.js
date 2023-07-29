var http = require("http");

http.createServer(function (request,responce){
	response.writeHead(200,{'Content-Type':'text/plain'});
	responce.end("Hello Wolrd!!")
	}).listen(8081)
console.log('Server is Running at http://127.0.0.1:8081/')