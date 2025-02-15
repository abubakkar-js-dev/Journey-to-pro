// Task-1

// When Run the Javascript entire file or code it's create a Environment that's is called exicution context. There are two type of exicution context. 1. Global exicution context 2. Funtion Exicution Context.

// 1. In This environment first javascript defin all the variable and function with values undefine in Memory. This is called Global Exicution Context.

// 2. Hoisting is the behavior when Javascript move the declearation variable function and classes to the top during the compilation phase.

// 3. Temporal dead zone is area of block where variable cannot accessable before initialitaion.

// example-1

let a = 20;

function Hoisting() {
  b = "I am Hoisted";
  return b;
}
// console.log(c);
var c = 10;
// console.log(Hoisting())

// function hoisting

// sayHello();

function sayHello() {
  console.log("Hey, Hello. How are you.");
}

// example-2

function greet(name) {
  sayName();
  console.log(`Hey ${name}. How is going.`);
  function sayName(name) {
    console.log("My Name is ", name);
  }

  greet();
}

// greet("Bakkar");

// TASK-2

// Lexical Scope: Lexical scope is a area that refer where variable or function is accessable or inaccesable. When we wrote funtion there would be lot of variable and one or more than one nested funtion. The variable would be anything global or function scope variable. The variable that decleared in global scope that can be access from anywhere. but in function where declear a variable that can access only his child function. On the other hand child function's variables can't be access in parent function.

// example-1

let x = 10;

function add() {
  const result = x + 1;
  return result;
}
function add2() {
  const result = x + 1;
  return result;
}

// console.log(add())
// console.log(add())
// console.log(add())
// console.log(add2())
// console.log(add2())
// console.log(add2())

// example-2

function counter() {
  let count = 0;

  function increment() {
    return count++;
  }

  function decrement() {
    return count--;
  }
  function reset() {
    return (count = 0);
  }

  return {
    increment,
    decrement,
    reset,
  };
}

const counter1 = counter();
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.decrement());
// console.log(counter1.decrement());
// console.log(counter1.decrement());
// console.log(counter1.reset());

// TAST-3

// null > Object.Prototype(has commone method like toString(), hasOwnProperty(),etc..) > Animal{eat()} > Dog{bark()} > myDog{name: "Kiddy"}

function Person(name) {
  this.name = name;
  this.alive = true;
}

// prototype

Person.prototype.speak = function () {
  console.log(this.name, "is speaking....");
};

// Inheritance

function Student(name, department) {
  Person.call(this, name); // Call the Person constructor to inherit properties
  this.department = department;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.read = function () {
  console.log(this.name, "can read.");
};

const person1 = new Person("Abu Bakkar");
person1.speak();

const student1 = new Student("Rahim", "Economics");
student1.speak();
console.log(student1.alive); 



// TASK-4

//  Event Loop: Javascript is single-threaded language thats means it can run or execute one task at a time. However, it's handles asyncronous operations efficiently using event loop which manage the execution of microtask and macrotask.


// Microtask: It is high priority and will execute first. Promises(then,catch,finally),Mutation Observer queuemicrotask are inclues in this areas.

// Macrotask: This is lower priority, and it will execute later. setTimeOut,setInterval,setImmediate are inclue in macrotask.


// example-1

console.log('I am first');

setTimeout(() => {
  console.log('I am Second ');  
}, 2000);


console.log('I am third');


const promies = new Promise((resolve,reject)=>{
  const sucess = true;
  setTimeout(() => {
    if(sucess){
      resolve('Promise is resolved');
    }else{
      reject('Promise is rejected');
    }
  }, 3000);
});

// promies.then((result)=>{
//   console.log(result);
// })
// .catch(error=>{
//   console.log(error);
// })
// .finally(()=>{
//   console.log('The promise finished.');
// })

// using async await

async function getResult(){
  try{
    const res = await promies;
    console.log(res);
  }catch(err){
    console.log(err);
  }finally{
    console.log('The promise finished');
  }
}

// getResult();


// example-2
 
async function fetchData(url){
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

let products = [];

const getProducts = async()=>{
  const productsResult = await fetchData('https://fakestoreapi.com/products');
  products = productsResult;
  return products;

}

(async()=>{
  await getProducts();
  console.log(products,'Products');
})()









