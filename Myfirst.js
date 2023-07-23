var http = require("http");

const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("new.html");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(80);
