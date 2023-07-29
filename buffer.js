//Reading from buffer
/*buf = new Buffer(26);
for (i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString('undefined', 0, 5));*/

//Convert to buffer to json
//var buf = new Buffer('Hello World');
//var json = buf.toJSON(buf);
//console.log(json);

//Creating and reading simple Buffer
//buf = new Buffer(256);
//len = buf.write("Hello Every One...");
//console.log("Buufer consist length:" + len);

//Concatinate Buffer
/*var buf1 = new Buffer('Hello EveryOne ');
var buf2 = new Buffer('This is Om');
var buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString());*/

//comparing two Buffer and print which buffer come first accorfing to their NO_ OF_LATTERS

/*var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var compare = buffer1.compare(buffer2);
if (compare < 0) {
    console.log(buffer1 + " is previous than " + buffer2);
} else if (compare == 0) {
    console.log(buffer1 + "And" + buffer2 + "are equal");
} else {
    console.log(buffer1 + "Comes after" + buffer2);
}*/

//copiying Buffer from one to another
/*var buf1 = new Buffer('Abc');
var buf2 = new Buffer(3);
buf1.copy(buf2);
console.log("buf2 contain.. " + buf2.toString());*/

//Slice a Buffer
//var buffer = new Buffer('Programmig');
//var buf = buffer.slice(0, 7);
//console.log(buf.toString());

//Count a buffer
var buf = new Buffer('Hello Everyone');
console.log(buf.length);