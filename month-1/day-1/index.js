// javascript exicution context

// 1. Creation phase

var n = 8;

function double(n){
    const ans = n*2;
    return ans;
}



const result = double(n);
const result2 = double(10);


console.log(result);
console.log(result2);


// execution phase

// n = 8
// result = 16
// result2 = 20

