// function factorial(num, acc = 1){
//     if(num <= 1) return acc;
//     return factorial(num -1 , acc*num);
// }
// console.log(factorial(6));

function factorial(num){
    if(num <= 1) return 1;
    return num * factorial(num -1);
}
console.log(factorial(6));

