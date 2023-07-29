//using http method
/*var http = require("http");
http.createServer(function(request, response) {
    responce.writeHead(200, { 'Content-type': 'text/plain' });
    responce.colse("Hello World");
}).listen(77);
console.log("Your server is successfully created");*/

//using fs method
/*var fs = require("fs");
fs.readFile('text.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log("Program is Successfully Execured...");*/

//Run the html code in node js environment....
var http = require("http");
var fs = require("fs");

fs.readFile('hello.html', function(err, data) {
    if (err) return console.log(err);

    http.createServer(function(request, response) {
        response.writeHead(200, { 'Content-Type': 'plain/html' });
        response.write(html);
        response.end();
    }).listen(96);
});
console.log("Server is Successfully Created..");