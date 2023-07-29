//Reading from String
/*var fs = require("fs");
var data = '';

//create a readable stream
var readerStream = fs.createReadStream('text.txt');
//set the encoding to 'utf-8'
readerStream.setEncoding('UTF8');
//handle Stream Events --> data, end, and error

readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end', function() {
    console.log(data);
});
readerStream.on('error', function(err) {
    console.log(err.stack);
});
console.log("Program Ended...");*/

//Write from stream OR r create Writable Stream
/*(var fs = require('fs');
var data = 'Hello EveryOne This is Om';

writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function() {
    console.log("Program is Executed..");
});
writerStream.on('error', function(err) {
    console.log(err.stack);
});*/

//All in One

/*var fs = require('fs');
var data = '';
readerStream = fs.createReadStream('text.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end', function() {
    console.log(data);
});
readerStream.on('error', function(err) {
    console.log(er.stack);
});
console.log("program is Successfully Executed..!");*/

/*var fs = require('fs');
var data = "I am upgrading Now....And I am going to complete my Second task";

writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();

writerStream.on('finish', function() {
    console.log("Program is Successfully Excecuted..!!");
});
writerStream.on('error', function(err) {
    console.log(err.stack);
});*/

//Piping or copiying data from One file to Another...
var fs = require('fs');

readerStream = fs.createReadStream('text.txt');

writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log("Program is Successfully Executed...");