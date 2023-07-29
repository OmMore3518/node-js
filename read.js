// Blocking codde Examle...
/*
var fs = require('fs');
var data = fs.readFileSync('text.txt');

console.log(data.toString())
console.log("Program is Ended..");
*/
//Non-Blocking Code Example

var fs = require('fs');
fs.readFile('text.txt', function(err, data) {
    if (err) return console.log(err);
    console.log(data.toString());
});
console.log("Program is Succesfully Executed..!!!");