function Car(brand,model,year){
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getDetailes = function(){
    console.log(`This is a ${this.year} ${this.brand} ${this.model}. This is a expensive car`);
}

const car1 = new Car('Toyota','Corolla',2015);
const car2 = new Car('Toyota','Axio',2017);
const car3 = new Car('Toyota','Allion',2018);

// test program
car1.getDetailes();
car2.getDetailes();
car3.getDetailes();


// Compare this snippet from month-1/day-2/test2.js:

function createCounter(){
    let privateCounter = 0;
    function changeBy(val){
        privateCounter += val;

    }
    return {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value: function(){
            return privateCounter;
        }
    }
}

const counter1 = createCounter();

// test program
console.log(counter1.value()); // 0
counter1.increment();
console.log(counter1.value()); // 1
counter1.increment();
console.log(counter1.value()); // 2
counter1.decrement();
console.log(counter1.value()); // 1