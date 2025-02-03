// closures in javascript

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ', outerVariable);
        console.log('Inner Variable: ', innerVariable);
    }
}

const newFunction = outerFunction('Outer Variable');
newFunction('Inner Variable');


// lexical scoping

function something(){
    let name = "Abu Bakar Siddique";
    function sayName(){
        console.log(name);
    }
    sayName();
}

something(); // Abu Bakar Siddique


if(Math.random() > 0.5){
    var name = "Abu Bakar Siddique";
}else{
    var name = "Abu Bakkar";
}

console.log(name); // Abu Bakar Siddique or Abu Bakkar


// closure

function increment(){
    let counter = 0;
    return function(){
        return counter++;
    }
    console.log('Hello',counter);
}

const newCounter = increment();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());