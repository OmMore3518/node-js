var http = require('http');
var fs = require('fs');

//const PORT = 65;

fs.readFile('hello.html', function(err, html) {

    if (err) return console.log(err);

    http.createServer(function(request, response) {
        response.writeHeader(200, { "Content-Type": "plain/html" });
        response.write(html);
        response.end();
    }).listen(8080);
});
console.log("Port is SuccessFully Activated...");