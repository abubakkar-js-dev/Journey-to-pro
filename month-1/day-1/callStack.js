// call stack in javascript

function funA(a,b){
    return a+b;
}

function funB(a,b){
    return funA(a,b);
}

function funC(a,b){
    return funB(a,b);
}


const result = funC(2,3);
console.log(result);