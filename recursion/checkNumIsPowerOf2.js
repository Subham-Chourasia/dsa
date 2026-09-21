function checkNumIsPowerOf2(n){
    if(n === 1 ){
        return true;
    }
    if( n < 1 || n%2 !=0) return false;

    return checkNumIsPowerOf2(n/2);
}
console.log(checkNumIsPowerOf2(4));