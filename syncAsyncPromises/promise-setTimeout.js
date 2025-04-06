// Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.

function promiseWala(timeInSec){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            // console.log("hello");
            resolve("after n sec promise returned");
        }, timeInSec*1000);
    })
}
console.log("hello");

promiseWala(2).then((val) => {
    console.log(val);
});
console.log("hi");