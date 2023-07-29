var http = require("http");

http.createServer(function(request, response) {
    respose.writeHeader(200, { 'Content-type': 'text/html' });
    response.end("hello Wolrd");
}).listen(75);