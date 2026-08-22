function factorial(num, acc = 1){
    if(num <= 1) return acc;
    return factorial(num -1 , acc*num);
}
console.log(factorial(4));