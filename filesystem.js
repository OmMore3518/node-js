//Asynchoronous method or form
/*
var fs = require('fs');
fs.readFile('output.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log("Program is Ended");
*/
//Synchronous method or form
/*
var fs = require('fs');
var data = fs.readFileSync('Output.txt');
console.log(data.toString());
console.log("Program Ended");
*/

//Program to open File..
/*
var fs = require('fs');
console.log("Going to Open File...");
fs.open('text.txt', 'r+', function(err, fd) {
    if (err) return console.log(err);
    console.log("File Open SuccessFully...!!");
});
/*
//fileinfo 
var fs = require('fs');
fs.stat('text.txt', function(err, stat) {
    if (err) return console.error(err);
    console.log(stat);
    console.log("Got file info Successfully..");

    console.log("is file ?" + stat.isFile());
    console.log("is file ?" + stat.isDirectory());

})*/

//Write to the File
var fs = require('fs');

fs.writeFile('text.txt', "We are Writing Something Here...", function(err) {
    if (err) return console.log(err);
    console.log("Writing to the File Succsesful...");

    fs.readFile('text.txt', function(err, data) {
        if (err) return console.log(err);
        console.log("Reading The Edited File...!!");
        console.log("Asynchronous Read:" + data.toString());
        console.log("File Reading Successful");
    });
});