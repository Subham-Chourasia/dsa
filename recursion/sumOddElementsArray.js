function sumOddElementsArray(arr){
    if(arr.length === 0) return 0;
    if(arr[arr.length - 1] % 2 === 0){
        return sumOddElementsArray(arr.slice(0, arr.length - 1));
    } else {
         return arr[arr.length - 1] + sumOddElementsArray(arr.slice(0, arr.length - 1));
    }
}

console.log(sumOddElementsArray([5,3,2,4,7,8,0,1]));