const vehicale = {
    type: 'General',
    start: function () {
        return `Starting ${this.type} vehicale engine`;
    }

}


const car = Object.create(vehicale);
car.type = 'Car';

console.log(car.start());
console.log(car.__proto__);


function User(name,age){
    this.name = name;
    this.age = age;
}

User.prototype.role = "User";

const user1 = new User('John',30);
const user2 = new User('Smith',40);

console.log( user1.__proto__);
console.log(user2);