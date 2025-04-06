/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function func1(time1){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(time1)
        }, time1*1000)
    })
}

function func2(time2){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(time2)
        }, time2*1000)
        
    })
}

function func3(time3){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(time3)
        }, time3*1000)
    })
}

function promiseChaining(t1, t2, t3){
    const startime = Date.now();
    return func1(t1)
        .then(() => func2(t2))
        .then(() => func3(t3))
        .then(() => {
            const endTime = Date.now();
            const timeTaken = endTime - startime;
            return timeTaken;
        })
}
promiseChaining(3,4,5).then((time) => {
    console.log(time, "timektalken in ms")
});

//Each function waits for the previous one to finish.
// 🕓 Slower approach (sequential execution)

