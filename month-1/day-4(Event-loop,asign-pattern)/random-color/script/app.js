const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

// generate random color

const randomColor = ()=>{
    let color = "#";
    const hexLetters = "0123456789ABCDEF";
    for(let i=0; i<6; i++){
        color += hexLetters[Math.floor(Math.random()*16)];
    }

    return color;
}

let intervalId;
start.addEventListener('click',()=>{
    intervalId = setInterval(()=>{
        document.body.style.backgroundColor = randomColor();
    },1000)
})

stop.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
})


