const counter = (function(){
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
})();

// test program
console.log(counter.value()); // 0
counter.increment();
console.log(counter.value()); // 1
counter.increment();
console.log(counter.value()); // 2