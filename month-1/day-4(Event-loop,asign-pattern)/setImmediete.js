// setImmediate


// setImmediate is used to execute a script once the current poll phase completes. This makes setImmediate a better choice for executing a script before any I/O events.

// Syntax
// setImmediate(callback, [arg1], [arg2], ...)


// Example
// The following example demonstrates the usage of setImmediate() method.

// Create a new file named setImmediate.js and add the following code:


// setImmediate.js

console.log('start');

setImmediate
(() => {
    console.log('Immediate');
});

setTimeout(() => {
    console.log('set timeout');
}, 1000);



console.log('end');





