// temporary dead zone
// let x = 10;

// if(x > 5){
//     let y = 20;
//     console.log(x + y);
// }

// console.log(x + y); // ReferenceError: y is not defined


let a = 3;

if(a === 3){
    let b= 5;
    console.log(a);
}


{
    console.log(foo);
    console.log(bar);
    let bar = 5;
    var foo = 10;
}