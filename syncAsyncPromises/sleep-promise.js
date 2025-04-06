/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


function xyz(timeInSec){
    return new Promise((resolve, reject) => {
        const startTime = Date.now();
        const endTime = startTime + timeInSec * 1000;
        while(Date.now() <= endTime){
            console.log("...still blocking");
        }
        console.log("outside while loop");

        resolve(` Resolved after ${timeInSec}`);
    })
}

console.log("before method call");
xyz(5).then((data) =>{
    console.log(data);
});
console.log("after method call");
