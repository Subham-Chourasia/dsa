// * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
//  * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
//  * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
//  */

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

function calculateTime(t1, t2, t3) {
    const startime = Date.now();
    const p1 = func1(t1);
    const p2 = func2(t2);
    const p3 = func3(t3);
    return Promise.all([p1, p2, p3]).then((values) => {
        const endTime = Date.now();
        const timeTaken = endTime - startime;
        return {
            values,
            timeTakenInMs: timeTaken,
          };
    })
}
calculateTime(3,4,5).then((data) => console.log(data));
// Promise.all  waits for all promises to finish, then gives the result in order — regardless of which one finished first.

//Promise.all takes less time than chaining when promises run in parallel.
//All three promises start at the same time.
// So, the slowest one (func3) determines the total time.