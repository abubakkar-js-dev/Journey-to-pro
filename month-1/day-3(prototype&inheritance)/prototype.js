const person = {
    name: 'John',
    age: 30,
    greet: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
}


const student = Object.create(person);
student.sutdy = function(){
    console.log(`${this.name} is studying`);
};

student.sutdy();
student.greet();

console.log(student.__proto__);



//