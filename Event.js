//It Contains Error Fix that later....

//Import Event Mosdule
var events = require('events');
//Create an event emitter Object
var eventEmitter = new events.EventEmitter();
//create an event handler as follows
var connectHandler = function connected() {
        console.log('Connection Succesull');
        // Fire the data recieve Event
        eventEmitter.emit('data received');
    }
    //Bind the connection event with the handler

eventEmitter.on('connection', connectHandler);

//Bind the data recieve event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received Succesfully');
});
//fire the connection event     
eventEmitter.emit('connection');

console.log("Program Ended..");

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event 
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");