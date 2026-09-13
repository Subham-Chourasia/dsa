let count = 0;
let val = false;

document.getElementById("count-val").innerText = count;
document.getElementById("bool-val").innerText = val;
document.getElementById("increment").addEventListener("click", increment);
document.getElementById("decrement").addEventListener("click", decrement);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("toggle").addEventListener("click", toggle);



function increment(){
    count++;
    updateCount();
}

function decrement(){
    count--;
    updateCount();
}

function reset(){
    count = 0;
    updateCount();
}
function updateCount(){
    document.getElementById("count-val").innerText = count;
}

function toggle(){
    val = !val;
    document.getElementById("bool-val").innerText = val;
}


let intervalID;
let counter = 0;
function intervalTimer(){
    intervalID = setInterval(() => {
        counter++;
        document.getElementById("bool-stopwatch").innerText = counter;
    },1000);
}
document.getElementById("start-Stopwatch").addEventListener('click', () => {
        intervalTimer();
});
document.getElementById("stop-Stopwatch").addEventListener('click', () => {
    clearTheInterval(intervalID);
});

function clearTheInterval(intervalID){
    clearInterval(intervalID);
}



document.getElementById("inpVal").addEventListener('input', (e) => {
    const val = e.target.value;
    document.getElementById("inp-val-out").innerText = val;
})





