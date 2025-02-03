// function hoisting

greetings();

function greetings(){
    console.log('Hello Bangladesh')
}

// variable hoisting

console.log(x);

var x = 60;

// Temporal dead zone

var a = 10;

if(true){
    console.log(a);
    // const a = 20;
    const a = 20;
}