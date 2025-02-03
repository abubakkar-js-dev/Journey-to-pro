function Student(name,age,department){
    this.name = name;
    this.age = age;
    this.department = department;
}

Student.prototype.greet = function(){
    console.log(`Hello, my name is ${this.name}`);
}


const student1 = new Student('Abu Bakkar',22,'Economics');

console.log(student1);


class Animale{
    constructor(name,department){
        this.name = name;
        this.department = department;
    }

    speak(){
        console.log(`I am ${this.name}. I can speak with make noise`);
    }
}

const cat = new Animale('Cat','Mammal');
const dog = new Animale('Dog','Mammal');
const lion = new Animale('Lion','Mammal');

// test program
cat.speak();
dog.speak();
lion.speak();
console.log(cat);
